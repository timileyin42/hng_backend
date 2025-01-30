"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 5000;
app.get('/', (req, res) => {
    const response = {
        email: process.env.EMAIL,
        current_datetime: new Date().toISOString(),
        github_url: process.env.GITHUB_URL
    };
    res.status(200).json(response);
});
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
