"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const express_1 = __importDefault(require("express"));
const express_http_proxy_1 = __importDefault(require("express-http-proxy"));
const helpers_1 = require("./helpers");
const logger_1 = __importDefault(require("./logger"));
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.get("/", (req, res) => {
    res.send("MedManager API Gateway");
});
app.use('/*', (0, express_http_proxy_1.default)(helpers_1.getHost, {
    proxyReqPathResolver: (req) => {
        logger_1.default.info(`Proxying request to ${(0, helpers_1.getHost)(req)}${(0, helpers_1.getUrlComplement)(req)}`);
        return (0, helpers_1.getUrlComplement)(req);
    }
}));
app.listen(PORT, () => {
    logger_1.default.info(`API Gateway is running on port ${PORT}`);
});
