import { Request } from "express";

const HOSTS: { [key: string]: string | undefined } = {
  admin: process.env.AUTH_SERVICE_URL,
  doctors: process.env.AUTH_SERVICE_URL,
  login: process.env.AUTH_SERVICE_URL,
  "password-reset": process.env.AUTH_SERVICE_URL,
  patients: process.env.AUTH_SERVICE_URL,
  drugs: process.env.DRUGS_SERVICE_URL,
  halthcareplan: process.env.HEALTHCARE_SERVICE_URL,
};

export const getHost = (req: Request): string => {
  const path = req.baseUrl.trimStart();
  return HOSTS[path.replace("/", "")] || "";
};

export const getUrlComplement = (req: Request): string => {
  const parts = req.url.split("?");
  const baseUrl = req.baseUrl;
  const queryString = parts[1];
  const updatedPath = parts[0];
  return baseUrl + updatedPath + (queryString ? "?" + queryString : "");
};
