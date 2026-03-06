const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Calculator API running...");
});

const PORT = process.env.PORT || 5000;

const calculatorRoutes = require("./routes/calculatorRoutes");
app.use("/api", calculatorRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});