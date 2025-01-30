import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());

app.get('/', (req: Request, res: Response) => {
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
