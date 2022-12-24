import express from 'express';
import { ChartsController } from './charts.controller';

///////////////////////////////////////////////////////////////////////////////////

export const register = (app: express.Application): void => {

    const router = express.Router();
    const controller = new ChartsController();

    const lineChart = () => {
        router.post('/line-chart', controller.createLineChart);
    };

    router.post('/multi-line-chart', controller.createMultiLineChart);
    router.post('/bar-chart', controller.createBarChart);
    router.post('/group-bar-chart', controller.createGroupBarChart);
    router.post('/stacked-bar-chart', controller.createStackedBarChart);
    router.post('/donut-chart', controller.createDonutChart);
    router.post('/pie-chart', controller.createPieChart);
    router.post('/bubble-chart', controller.createBubbleChart);
    router.post('/calendar-chart', controller.createCalendarChart);
    router.post('/circled-number-chart', controller.createCircledNumberChart);
    router.post('/circular-progress-chart', controller.createCircularProgressChart);
    router.post('/linear-progress-chart', controller.createLinearProgressChart);
    app.use('/api/v1/charts', router);

};
