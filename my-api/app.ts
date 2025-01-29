import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
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
