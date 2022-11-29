import express from 'express';
import { ChartsController } from './charts.controller';

///////////////////////////////////////////////////////////////////////////////////

export const register = (app: express.Application): void => {

    const router = express.Router();
    const controller = new ChartsController();

    router.post('/', controller.createLineChart);

    app.use('/api/v1/charts/line-chart', router);
};
