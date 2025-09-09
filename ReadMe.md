# Nissmart Savings Module – Backend

A simple backend prototype for the **Savings Module**.  
Handles **plans, mock deposits, balances, transactions, and KPIs**.

---

## 🚀 Environment Variables

Create a `.env` file in the project root (⚠️ **never commit secrets**):

```dotenv
FRONTEND_URL=http://localhost:5173
DB_DATABASE=savings
DB_DIALECT=mysql
DB_HOST=localhost
DB_USERNAME=root
DB_PASSWORD=
JWT_SECRET=your_jwt_secret_here
ENVIRONMENT=production
PORT=8000
```

---

## ⚡ Quick Start / Deployment

1. **Install dependencies**

   ```bash
   npm install
   ```

2. **Start the server**

   ```bash
   npm start
   ```

   The server will run on the port specified in `.env` (default: **8000**).

---

## 📡 API Endpoints

| Method | Endpoint             | Description                 |
| ------ | -------------------- | --------------------------- |
| POST   | `/auth/login`        | Mock login                  |
| GET    | `/plans`             | List user plans             |
| POST   | `/plans`             | Create plan                 |
| GET    | `/plans/:id`         | Plan details + transactions |
| POST   | `/plans/:id/deposit` | Mock deposit                |
| GET    | `/kpi/summary`       | Dashboard KPIs              |

---

## 📝 Notes

- Replace the **mock STK push** with real **M-Pesa integration** for production.
- Ensure `.env` variables are properly set (database + JWT secrets).

---
