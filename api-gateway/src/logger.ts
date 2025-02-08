import bunyan from "bunyan";

const logger = bunyan.createLogger({ name: "medmanager-api-gateway" });

export default logger;
