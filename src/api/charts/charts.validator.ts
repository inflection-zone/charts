import * as joi from 'joi';
import { ErrorHandler } from '../../common/error.handler';

///////////////////////////////////////////////////////////////////////////////////////////////

export class ChartsValidator {

    static validateRequest_LineChart = async (requestBody: any) => {
        try {
            const schema = joi.object({
                Data: joi.array().required(),
                Options: joi.object().optional(),
            });
            await schema.validateAsync(requestBody);
            const data = requestBody.Data;
            const options = requestBody.Options;
            return { data, options };
        } catch (error) {
            ErrorHandler.handleValidationError(error);
        }
    };

    //tejas
    static validateRequest_multiLineChart = async (requestBody: any) => {
        try {
            const schema = joi.object({
                Data: joi.array().required(),
                Options: joi.object().optional(),
            });
            await schema.validateAsync(requestBody);
            const data = requestBody.Data;
            const options = requestBody.Options;
            return { data, options };
        } catch (error) {
            ErrorHandler.handleValidationError(error);
        }
    };

    static validateRequest_BarChart = async (requestBody: any) => {
        try {
            const schema = joi.object({
                Data: joi.array().required(),
                Options: joi.object().optional(),
            });
            await schema.validateAsync(requestBody);
            const data = requestBody.Data;
            const options = requestBody.Options;
            return { data, options };
        } catch (error) {
            ErrorHandler.handleValidationError(error);
        }
    };

    static validateRequest_GroupBarChart = async (requestBody: any) => {
        try {
            const schema = joi.object({
                Data: joi.array().required(),
                Options: joi.object().optional(),
            });
            await schema.validateAsync(requestBody);
            const data = requestBody.Data;
            const options = requestBody.Options;
            return { data, options };
        } catch (error) {
            ErrorHandler.handleValidationError(error);
        }
    };

    static validateRequest_StackedBarChart = async (requestBody: any) => {
        try {
            const schema = joi.object({
                Data: joi.array().required(),
                Options: joi.object().optional(),
            });
            await schema.validateAsync(requestBody);
            const data = requestBody.Data;
            const options = requestBody.Options;
            return { data, options };
        } catch (error) {
            ErrorHandler.handleValidationError(error);
        }
    };

    static validateRequest_DonutChart = async (requestBody: any) => {
        try {
            const schema = joi.object({
                Data: joi.array().required(),
                Options: joi.object().optional(),
            });
            await schema.validateAsync(requestBody);
            const data = requestBody.Data;
            const options = requestBody.Options;
            return { data, options };
        } catch (error) {
            ErrorHandler.handleValidationError(error);
        }
    };

    static validateRequest_PieChart = async (requestBody: any) => {
        try {
            const schema = joi.object({
                Data: joi.array().required(),
                Options: joi.object().optional(),
            });
            await schema.validateAsync(requestBody);
            const data = requestBody.Data;
            const options = requestBody.Options;
            return { data, options };
        } catch (error) {
            ErrorHandler.handleValidationError(error);
        }
    };

    static validateRequest_BubbleChart = async (requestBody: any) => {
        try {
            const schema = joi.object({
                Data: joi.array().required(),
                Options: joi.object().optional(),
            });
            await schema.validateAsync(requestBody);
            const data = requestBody.Data;
            const options = requestBody.Options;
            return { data, options };
        } catch (error) {
            ErrorHandler.handleValidationError(error);
        }
    };

    static validateRequest_CalendarChart = async (requestBody: any) => {
        try {
            const schema = joi.object({
                Data: joi.array().required(),
                Options: joi.object().optional(),
            });
            await schema.validateAsync(requestBody);
            const data = requestBody.Data;
            const options = requestBody.Options;
            return { data, options };
        } catch (error) {
            ErrorHandler.handleValidationError(error);
        }
    };

    static validateRequest_CircledNumberChart = async (requestBody: any) => {
        try {
            const schema = joi.object({
                Data: joi.array().required(),
                Options: joi.object().optional(),
            });
            await schema.validateAsync(requestBody);
            const data = requestBody.Data;
            const options = requestBody.Options;
            return { data, options };
        } catch (error) {
            ErrorHandler.handleValidationError(error);
        }
    };
    static validateRequest_CircularProgressChart = async (requestBody: any) => {
        try {
            const schema = joi.object({
                Data: joi.array().required(),
                Options: joi.object().optional(),
            });
            await schema.validateAsync(requestBody);
            const data = requestBody.Data;
            const options = requestBody.Options;
            return { data, options };
        } catch (error) {
            ErrorHandler.handleValidationError(error);
        }
    };
    static validateRequest_LinearProgressChart = async (requestBody: any) => {
        try {
            const schema = joi.object({
                Data: joi.array().required(),
                Options: joi.object().optional(),
            });
            await schema.validateAsync(requestBody);
            const data = requestBody.Data;
            const options = requestBody.Options;
            return { data, options };
        } catch (error) {
            ErrorHandler.handleValidationError(error);
        }
    };



}
