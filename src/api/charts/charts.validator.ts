import * as joi from 'joi';
import { ErrorHandler } from '../../common/error.handler';

///////////////////////////////////////////////////////////////////////////////////////////////

export class ChartsValidator {

    static validateRequest_LineChart = async (requestBody: any) => {
        try {
            const schema = joi.object({
                Data    : joi.object().optional(),
                Options : joi.object().optional(),
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
