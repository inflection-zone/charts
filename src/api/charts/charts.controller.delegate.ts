import { ChartGenerator } from './chart.generator';
import { ApiError } from '../../common/api.error';
import { ChartsValidator as validator } from './charts.validator';
import { TimeHelper } from '../../common/time.helper';
import fs from "fs";

///////////////////////////////////////////////////////////////////////////////////////

export class ChartsControllerDelegate {

    createLineChart = async (requestBody: any) => {
        const { data, options } = await validator.validateRequest_LineChart(requestBody);
        const filename = 'line_chart_' + TimeHelper.timestamp(new Date()) + '.png';
        const location = await ChartGenerator.createLineChart(data, options, filename);
        if (location === null) {
            throw new ApiError('Unable to create chart!', 400);
        }
        const stream = fs.createReadStream(location);
        return { stream, filename };
    };

}
