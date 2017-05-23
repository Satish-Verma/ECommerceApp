import * as express from "express";

export const indexRouter = express.Router();

indexRouter.get('/', (req, res) => {
    res.json({ message: 'ecommerce app service running.'});
});