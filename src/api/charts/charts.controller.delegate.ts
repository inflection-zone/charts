import { ChartGenerator } from './chart.generator';
import { ApiError } from '../../common/api.error';
import { ChartsValidator as validator } from './charts.validator';
import { TimeHelper } from '../../common/time.helper';
import fs from "fs";
import { loadavg } from 'os';

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

    //tejas
    createMultiLineChart = async (requestBody: any) => {
        const { data, options } = await validator.validateRequest_multiLineChart(requestBody);
        const filename = 'multi_line_chart' + TimeHelper.timestamp(new Date()) + '.png';
        const location = await ChartGenerator.createMultiLineChart(data, options, filename);
        if (location == null) {
            throw new ApiError('Unable to create multi line chart!', 400);
        }
        const stream = fs.createReadStream(location);
        return { stream, filename };
    }

    createBarChart = async (requestBody: any) => {
        const { data, options } = await validator.validateRequest_BarChart(requestBody);
        const filename = 'bar_chart' + TimeHelper.timestamp(new Date()) + '.png';
        const location = await ChartGenerator.createBarChart(data, options, filename);
        if (location == null) {
            throw new ApiError('Unable to create bar chart!', 400);
        }
        const stream = fs.createReadStream(location);
        return { stream, filename };
    }

    createGroupBarChart = async (requestBody: any) => {
        const { data, options } = await validator.validateRequest_GroupBarChart(requestBody);
        const filename = 'group_bar_chart' + TimeHelper.timestamp(new Date()) + '.png';
        const location = await ChartGenerator.createGroupBarChart(data, options, filename);
        if (location == null) {
            throw new ApiError('Unable to create grouped bar chart!', 400);
        }
        const stream = fs.createReadStream(location);
        return { stream, filename };
    }

    createStackedBarChart = async (requestBody: any) => {
        const { data, options } = await validator.validateRequest_StackedBarChart(requestBody);
        const filename = 'stacked_bar_chart' + TimeHelper.timestamp(new Date()) + '.png';
        const location = await ChartGenerator.createStackedBarChart(data, options, filename);
        if (location == null) {
            throw new ApiError('Unable to create stacked bar chart!', 400);
        }
        const stream = fs.createReadStream(location);
        return { stream, filename };
    }

    createDonutChart = async (requestBody: any) => {
        const { data, options } = await validator.validateRequest_DonutChart(requestBody);
        const filename = 'donut_chart' + TimeHelper.timestamp(new Date()) + '.png';
        const location = await ChartGenerator.createDonutChart(data, options, filename);
        if (location == null) {
            throw new ApiError('Unable to create donut chart!', 400);
        }
        const stream = fs.createReadStream(location);
        return { stream, filename };
    }

    createPieChart = async (requestBody: any) => {
        const { data, options } = await validator.validateRequest_PieChart(requestBody);
        const filename = 'pie_chart' + TimeHelper.timestamp(new Date()) + '.png';
        const location = await ChartGenerator.createPieChart(data, options, filename);
        if (location == null) {
            throw new ApiError('Unable to create pie chart!', 400);
        }
        const stream = fs.createReadStream(location);
        return { stream, filename };
    }

    
    createBubbleChart = async (requestBody: any) => {
        const { data, options } = await validator.validateRequest_BubbleChart(requestBody);
        const filename = 'bubble_chart' + TimeHelper.timestamp(new Date()) + '.png';
        const location = await ChartGenerator.createBubbleChart(data, options, filename);
        if (location == null) {
            throw new ApiError('Unable to create bubble chart!', 400);
        }
        const stream = fs.createReadStream(location);
        return { stream, filename };
    }

    createCalendarChart = async (requestBody: any) => {
        const { data, options } = await validator.validateRequest_CalendarChart(requestBody);
        const filename = 'calendar_chart' + TimeHelper.timestamp(new Date()) + '.png';
        const location = await ChartGenerator.createCalendarChart(data, options, filename);
        if (location == null) {
            throw new ApiError('Unable to calendar pie chart!', 400);
        }
        const stream = fs.createReadStream(location);
        return { stream, filename };
    }

    createCircledNumberChart = async (requestBody: any) => {
        const { data, options } = await validator.validateRequest_CircledNumberChart(requestBody);
        const filename = 'circled_numbered_chart' + TimeHelper.timestamp(new Date()) + '.png';
        const location = await ChartGenerator.createCircledNumberChart(data, options, filename);
        if (location == null) {
            throw new ApiError('Unable to circled numbered chart!', 400);
        }
        const stream = fs.createReadStream(location);
        return { stream, filename };
    }

    createCircularProgressChart = async (requestBody: any) => {
        const { data, options } = await validator.validateRequest_CircularProgressChart(requestBody);
        const filename = 'circular_progress_chart' + TimeHelper.timestamp(new Date()) + '.png';
        const location = await ChartGenerator.createCircularProgressChart(data, options, filename);
        if (location == null) {
            throw new ApiError('Unable to circular progress chart!', 400);
        }
        const stream = fs.createReadStream(location);
        return { stream, filename };
    }

    createLinearProgressChart = async (requestBody: any) => {
        const { data, options } = await validator.validateRequest_LinearProgressChart(requestBody);
        const filename = 'linear_progress_chart' + TimeHelper.timestamp(new Date()) + '.png';
        const location = await ChartGenerator.createLinearProgressChart(data, options, filename);
        if (location == null) {
            throw new ApiError('Unable to linear progress chart!', 400);
        }
        const stream = fs.createReadStream(location);
        return { stream, filename };
    }




}
