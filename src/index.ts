// src/index.ts
import app from "./app/app";
import logger from "./app/utils/logger";


export default async function handler(req: any, res: any) {
    try {
        return app(req, res);
    } catch (err: any) {
        logger.error("❌ Serverless handler error", err);
        res.status(500).json({ message: "Internal Server Error" });
    }
}
