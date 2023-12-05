import express from 'express';
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();
const app = express();

app.use(cors());
const port = 9898;

app.use(express.json());


app.listen(port, () => {
    console.log("Server listening on port "+ port);
});

app.get("/", (req, res) => {
    res.status(200).json({ 
        message: "Server working fine!",
    })
})

app.get("/process-emi", (req, res) => {
    const loanDetails = [
        {name: "Loan 1", amount: 1000, interest: 10, duration: 12, status: "pending"},
        {name: "Loan 2", amount: 2000, interest: 20, duration: 24, status: "pending"},
        {name: "Loan 3", amount: 3000, interest: 30, duration: 36, status: "pending"},
        {name: "Loan 4", amount: 4000, interest: 40, duration: 48, status: "pending"},
        {name: "Loan 5", amount: 5000, interest: 50, duration: 60, status: "pending"}
    ];
    if(req.query.status){
        const status = req.query.status;
        const filteredLoanDetails = loanDetails.filter((loan) => {
            return loan.status === status;
        });
        res.status(200).json({
            message: "Loans loaded successfully!",
            loans: filteredLoanDetails,
        });
    }
});