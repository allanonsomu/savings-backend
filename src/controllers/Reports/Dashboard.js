// controllers/Reports/Dashboard.js
module.exports = {
    async getMe(req, res) {
        try {
            const data = {
                id: "u1",
                name: "Allan Onsomu",
                email: "allanonsomu@gmail.com"
            };
            res.json(data);
        } catch (err) {
            console.error(err);
            res.status(500).json({ error: 'Failed to fetch user info' });
        }
    },

    async getKpiSummary(req, res) {
        try {
            const data = {
                totalSaved: 125000,
                activePlans: 4,
                maturedPlans: 2,
                mtdDeposits: 35000,
                mtdWithdrawals: 10000,
                avgDeposit: 8750,
                usersCount: 128,
                pendingWithdrawals: 3
            };
            res.json(data);
        } catch (err) {
            res.status(500).json({ error: 'Failed to fetch KPI summary' });
        }
    },

    async listPlans(req, res) {
        try {
            const data = [
                {
                    id: "p1",
                    title: "School Fees 2025",
                    targetAmount: 80000,
                    saved: 45000,
                    balance: 35000,
                    progress: (45000 / 80000) * 100,
                    childName: "Brian",
                    status: "active"
                },
                {
                    id: "p2",
                    title: "New Car",
                    targetAmount: 1200000,
                    saved: 250000,
                    balance: 950000,
                    progress: (250000 / 1200000) * 100,
                    childName: null,
                    status: "active"
                },
                {
                    id: "p3",
                    title: "Vacation Dubai",
                    targetAmount: 300000,
                    saved: 300000,
                    balance: 0,
                    progress: 100,
                    childName: null,
                    status: "matured"
                },
                {
                    id: "p4",
                    title: "Emergency Fund",
                    targetAmount: 200000,
                    saved: 50000,
                    balance: 150000,
                    progress: (50000 / 200000) * 100,
                    childName: null,
                    status: "active"
                }
            ];
            res.json(data);
        } catch (err) {
            res.status(500).json({ error: 'Failed to fetch plans' });
        }
    },

    async listRecentTransactions(req, res) {
        try {
            const data = [
                {
                    id: "t1",
                    ref: "TXN1001",
                    user: "Allan Onsomu",
                    plan: "School Fees 2025",
                    type: "deposit",
                    amount: 10000,
                    status: "success",
                    createdAt: Date.now() - 86400000,
                    note: "STK push success"
                },
                {
                    id: "t2",
                    ref: "TXN1002",
                    user: "Allan Onsomu",
                    plan: "New Car",
                    type: "deposit",
                    amount: 15000,
                    status: "success",
                    createdAt: Date.now() - 3600000 * 3,
                    note: "STK push success"
                },
                {
                    id: "t3",
                    ref: "TXN1003",
                    user: "Jane Doe",
                    plan: "Vacation Dubai",
                    type: "withdrawal",
                    amount: 5000,
                    status: "success",
                    createdAt: Date.now() - 3600000 * 24 * 2,
                    note: "Mpesa disbursement"
                },
                {
                    id: "t4",
                    ref: "TXN1004",
                    user: "Allan Onsomu",
                    plan: "Emergency Fund",
                    type: "failed",
                    amount: 7000,
                    status: "failed",
                    createdAt: Date.now() - 3600000 * 5,
                    note: "STK timeout"
                }
            ];
            res.json(data);
        } catch (err) {
            res.status(500).json({ error: 'Failed to fetch recent transactions' });
        }
    },

    async getTopSavers(req, res) {
        try {
            const data = [
                { userName: "Allan Onsomu", totalSaved: 45000, plansCount: 2 },
                { userName: "Jane Doe", totalSaved: 300000, plansCount: 3 },
                { userName: "Peter Kariuki", totalSaved: 220000, plansCount: 1 }
            ];
            res.json(data);
        } catch (err) {
            console.error(err);
            res.status(500).json({ error: 'Failed to fetch top savers' });
        }
    },

    async getMonthlyTrend(req, res) {
        try {
            const data = {
                months: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
                deposits: [20000, 25000, 30000, 28000, 35000, 40000],
                withdrawals: [5000, 7000, 6000, 10000, 8000, 12000],
                cumulativeSavings: [15000, 33000, 57000, 75000, 102000, 130000],
                planTypes: ["Education", "Vacation", "Emergency", "Assets"],
                planCounts: [2, 1, 3, 2]
            };
            res.json(data);
        } catch (err) {
            res.status(500).json({ error: 'Failed to fetch monthly trend' });
        }
    }
};
