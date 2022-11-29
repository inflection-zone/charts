import { ChartGenerator } from './chart.generator';
import { ErrorHandler } from '../../common/error.handler';
import { Helper } from '../../common/helper';
import { ApiError } from '../../common/api.error';
import { ChartsValidator as validator } from './charts.validator';
import { TimeHelper } from '../../common/time.helper';

///////////////////////////////////////////////////////////////////////////////////////

export class ChartsControllerDelegate {

    createLineChart = async (requestBody: any) => {

        const {data, chartOptions} = await validator.validateCreateLineChartRequest(requestBody);
        const filename = 'line_chart_' + TimeHelper.timestamp(new Date()) + '.png';
        const location = await ChartGenerator.createLineChart(data, chartOptions, filename);
        if (location === null) {
            throw new ApiError('Unable to create chart!', 400);
        }
        return location;
    }

}
