const express = require('express');
const router = express.Router();

router.post("/calculate", (req, res) => {
    const { num1, num2, operation } = req.body;
    let result;

    switch (operation) {   
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