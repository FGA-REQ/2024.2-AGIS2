"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUrlComplement = exports.getHost = void 0;
const HOSTS = {
    "admin": process.env.AUTH_SERVICE_URL,
    "doctors": process.env.AUTH_SERVICE_URL,
    "login": process.env.AUTH_SERVICE_URL,
    "password-reset": process.env.AUTH_SERVICE_URL,
    "patients": process.env.AUTH_SERVICE_URL,
    "drugs": process.env.DRUGS_SERVICE_URL,
    "halthcareplan": process.env.HEALTHCARE_SERVICE_URL,
};
const getHost = (req) => {
    const path = req.baseUrl.trimStart();
    return HOSTS[path.replace("/", "")] || "";
};
exports.getHost = getHost;
const getUrlComplement = (req) => {
    const parts = req.url.split('?');
    const baseUrl = req.baseUrl;
    const queryString = parts[1];
    const updatedPath = parts[0];
    return baseUrl + updatedPath + (queryString ? '?' + queryString : '');
};
exports.getUrlComplement = getUrlComplement;
