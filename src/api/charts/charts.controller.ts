import express from 'express';
import { ResponseHandler } from '../../common/response.handler';
import { ChartsControllerDelegate } from './charts.controller.delegate';
import mime from 'mime';

///////////////////////////////////////////////////////////////////////////////////////

export class ChartsController {

    //#region member variables and constructors

    _delegate: ChartsControllerDelegate = null;

    constructor() {
        this._delegate = new ChartsControllerDelegate();
    }

    //#endregion

    createLineChart = async (request: express.Request, response: express.Response): Promise <void> => {
        try {
            const { stream, filename } = await this._delegate.createLineChart(request.body);
            this.setHeaders(request, response, filename);
            stream.pipe(response);
        } catch (error) {
            ResponseHandler.handleError(request, response, error);
        }
    };

    //#region  Privates

    private setHeaders = (
        request: express.Request,
        response: express.Response,
        filename: string) => {

        var disposition = request.query.disposition as string;
        if (!disposition) {
            disposition = 'inline';
        }
        var mimeType = mime.getType(filename);
        response.setHeader('Content-type', mimeType);
        if (disposition === 'inline') {
            response.setHeader('Content-disposition', 'inline');
        }
        else {
            response.setHeader('Content-disposition', 'attachment;filename=' + filename);
        }
    };

    //#endregion

}
