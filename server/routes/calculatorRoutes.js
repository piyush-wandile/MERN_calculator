const express = require('express');
const router = express.Router();

router.post("/calculate", (req, res) => {
    const { num1, num2, operation, operator } = req.body;
    const selectedOperation = operation ?? operator;
    let result;

    if (typeof num1 !== "number" || typeof num2 !== "number" || Number.isNaN(num1) || Number.isNaN(num2)) {
        return res.status(400).json({ error: "num1 and num2 must be valid numbers" });
    }

    switch (selectedOperation) {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/":
            result = num2 !== 0 ? num1 / num2 : "Error: Division by zero";
            break;
        default:
            return res.status(400).json({ error: "Invalid operation" });
    }
    res.json({ result });
});

module.exports = router;
