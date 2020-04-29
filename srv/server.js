"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const express_1 = __importDefault(require("express"));
const cds_routing_handlers_1 = require("cds-routing-handlers");
const cds_1 = __importDefault(require("@sap/cds"));
class Server {
    static async run() {
        const app = express_1.default();
        const hdl = cds_routing_handlers_1.createCombinedHandler({
            handler: [__dirname + "/entities/**/*.js", __dirname + "/functions/**/*.js"],
        });
        await cds_1.default.connect("db");
        await cds_1.default
            .serve(__dirname + "/gen/csn.json")
            .at("odata")
            .in(app)
            .with(hdl);
        // Run the server.
        const port = process.env.PORT || 3001;
        app.listen(port, async () => {
            console.info(`Server is listing at ${port}`);
        });
    }
}
exports.Server = Server;
Server.run();
