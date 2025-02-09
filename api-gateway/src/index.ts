import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
import express, { Request, Response } from "express";
import httpProxy from "express-http-proxy";
import { getHost, getUrlComplement } from "./helpers";
import logger from "./logger";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors({ origin: '*' }));

app.get("/", (req: Request, res: Response) => {
  res.send("MedManager API Gateway");
});

app.use(
  "/*",
  httpProxy(getHost, {
    proxyReqPathResolver: (req) => {
      logger.info(
        `Proxying request to ${getHost(req)}${getUrlComplement(req)}`,
      );
      return getUrlComplement(req);
    },
  }),
);
app.listen(PORT, () => {
  logger.info(`API Gateway is running on port ${PORT}`);
});
