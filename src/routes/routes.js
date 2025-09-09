const express = require('express');
const routes = express.Router();
const Authentication = require('../middlewares/Authentication');
const Dashboard = require('../controllers/Reports/Dashboard');
// const PlansController = require('../controllers/PlansController');
// const TransactionsController = require('../controllers/TransactionsController');

routes.use(express.urlencoded({ extended: true }));
routes.use(express.json());

routes.post(
    '/auth/login',
    Authentication.handleLogin
);

routes.get(
    '/auth/me',
    Dashboard.getMe
);

routes.get(
    '/plans',
    Dashboard.listPlans
);

routes.get(
    '/kpi/summary',
    Dashboard.getKpiSummary
);

routes.get(
    '/top-savers',
    Dashboard.getTopSavers
);

routes.get(
    '/charts/monthly-trend',
    Dashboard.getMonthlyTrend
);

routes.post(
    '/plans',
    // PlansController.createPlan
);

routes.get(
    '/plans/:id',
    // PlansController.getPlan
);

routes.put(
    '/plans/:id',
    // PlansController.updatePlan
);

routes.delete(
    '/plans/:id',
    // PlansController.deletePlan
);

/*** TRANSACTIONS ***/
routes.post(
    '/plans/:id/deposit',
    // TransactionsController.createDeposit
);

routes.post(
    '/plans/:id/withdraw',
    // TransactionsController.createWithdrawal
);

routes.get(
    '/plans/:id/transactions',
    // TransactionsController.listTransactions
);

routes.get(
    '/transactions/recent',
    Dashboard.listRecentTransactions
);

routes.post(
    '/transactions/:id/reverse',
    // TransactionsController.reverseTransaction
);

routes.get(
    '/transactions/:id/receipt',
    // TransactionsController.downloadReceipt
);

routes.get(
    '/transactions/export',
    // TransactionsController.exportAll
);

routes.post(
    '/transactions/export',
    // TransactionsController.exportSelected
);


module.exports = routes;
