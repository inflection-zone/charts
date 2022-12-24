import express from 'express';
import { ResponseHandler } from '../../common/response.handler';
import { ChartsControllerDelegate } from './charts.controller.delegate';
// import mime from 'mime';

///////////////////////////////////////////////////////////////////////////////////////

export class ChartsController {

    //#region member variables and constructors

    _delegate: ChartsControllerDelegate = null;

    constructor() {
        this._delegate = new ChartsControllerDelegate();
    }

    //#endregion

    createLineChart = async (request: express.Request, response: express.Response): Promise<void> => {
        try {
            const { stream, filename } = await this._delegate.createLineChart(request.body);
            this.setHeaders(request, response, filename);
            stream.pipe(response);
        } catch (error) {
            ResponseHandler.handleError(request, response, error);
        }
    };

    createMultiLineChart = async (request: express.Request, response: express.Response): Promise<void> => {
        try {
            const { stream, filename } = await this._delegate.createMultiLineChart(request.body);
            this.setHeaders(request, response, filename);
            stream.pipe(response);
        } catch (error) {
            ResponseHandler.handleError(request, response, error);
        }
    };

    createBarChart = async (request: express.Request, response: express.Response): Promise<void> => {
        try {
            const { stream, filename } = await this._delegate.createBarChart(request.body);
            this.setHeaders(request, response, filename);
            stream.pipe(response);
        } catch (error) {
            ResponseHandler.handleError(request, response, error);
        }
    };

    createGroupBarChart = async (request: express.Request, response: express.Response): Promise<void> => {
        try {
            const { stream, filename } = await this._delegate.createGroupBarChart(request.body);
            this.setHeaders(request, response, filename);
            stream.pipe(response);
        } catch (error) {
            ResponseHandler.handleError(request, response, error);
        }
    };

    createStackedBarChart = async (request: express.Request, response: express.Response): Promise<void> => {
        try {
            const { stream, filename } = await this._delegate.createStackedBarChart(request.body);
            this.setHeaders(request, response, filename);
            stream.pipe(response);
        } catch (error) {
            ResponseHandler.handleError(request, response, error);
        }
    };

    createDonutChart = async (request: express.Request, response: express.Response): Promise<void> => {
        try {
            const { stream, filename } = await this._delegate.createDonutChart(request.body);
            this.setHeaders(request, response, filename);
            stream.pipe(response);
        } catch (error) {
            ResponseHandler.handleError(request, response, error);
        }
    };

    createPieChart = async (request: express.Request, response: express.Response): Promise<void> => {
        try {
            const { stream, filename } = await this._delegate.createPieChart(request.body);
            this.setHeaders(request, response, filename);
            stream.pipe(response);
        } catch (error) {
            ResponseHandler.handleError(request, response, error);
        }
    };

    createBubbleChart = async (request: express.Request, response: express.Response): Promise<void> => {
        try {
            const { stream, filename } = await this._delegate.createBubbleChart(request.body);
            this.setHeaders(request, response, filename);
            stream.pipe(response);
        } catch (error) {
            ResponseHandler.handleError(request, response, error);
        }
    };

    createCalendarChart = async (request: express.Request, response: express.Response): Promise<void> => {
        try {
            const { stream, filename } = await this._delegate.createCalendarChart(request.body);
            this.setHeaders(request, response, filename);
            stream.pipe(response);
        } catch (error) {
            ResponseHandler.handleError(request, response, error);
        }
    };

    createCircledNumberChart = async (request: express.Request, response: express.Response): Promise<void> => {
        try {
            const { stream, filename } = await this._delegate.createCircledNumberChart(request.body);
            this.setHeaders(request, response, filename);
            stream.pipe(response);
        } catch (error) {
            ResponseHandler.handleError(request, response, error);
        }
    };

    createCircularProgressChart = async (request: express.Request, response: express.Response): Promise<void> => {
        try {
            const { stream, filename } = await this._delegate.createCircularProgressChart(request.body);
            this.setHeaders(request, response, filename);
            stream.pipe(response);
        } catch (error) {
            ResponseHandler.handleError(request, response, error);
        }
    };

    createLinearProgressChart = async (request: express.Request, response: express.Response): Promise<void> => {
        try {
            const { stream, filename } = await this._delegate.createLinearProgressChart(request.body);
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
        var mimeType = "image/png";
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
