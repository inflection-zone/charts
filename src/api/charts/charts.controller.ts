import express from 'express';
import { ResponseHandler } from '../../common/response.handler';
import { ChartsControllerDelegate } from './charts.controller.delegate';

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
            const record = await this._delegate.createLineChart(request.body);
            const message = 'Line chart created successfully!';
            ResponseHandler.success(request, response, message, 201, record);
        } catch (error) {
            ResponseHandler.handleError(request, response, error);
        }
    }

}
