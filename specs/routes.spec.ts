import * as chai from 'chai';
import * as chaiHttp from 'chai-http';
import { register } from '../src/api/charts/charts.routes';
const app = register;
chai.use(chaiHttp);
const expect = chai.expect;


describe('GET /line-chart', () => {
    it('should return a 200 status code and a line chart', async () => {
        const res = await chai.request(app).get('/route');
        expect(res).to.have.status(200);
        expect(res.body).to.have.property('html');
    });
});
