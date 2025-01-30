import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();
app.use(cors());

const app = express();
const PORT = process.env.PORT || 8000;

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
