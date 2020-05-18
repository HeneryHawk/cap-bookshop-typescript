"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
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
            .serve("./srv/gen/")
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL3NlcnZlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSw0QkFBMEI7QUFDMUIsc0RBQThCO0FBQzlCLCtEQUE2RDtBQUM3RCxtREFBMkI7QUFFM0IsTUFBYSxNQUFNO0lBQ1IsTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHO1FBQ25CLE1BQU0sR0FBRyxHQUFHLGlCQUFPLEVBQUUsQ0FBQztRQUV0QixNQUFNLEdBQUcsR0FBRyw0Q0FBcUIsQ0FBQztZQUM5QixPQUFPLEVBQUUsQ0FBQyxTQUFTLEdBQUcsbUJBQW1CLEVBQUUsU0FBUyxHQUFHLG9CQUFvQixDQUFDO1NBQy9FLENBQUMsQ0FBQztRQUVILE1BQU0sYUFBRyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN4QixNQUFNLGFBQUc7YUFDSixLQUFLLENBQUMsWUFBWSxDQUFDO2FBQ25CLEVBQUUsQ0FBQyxPQUFPLENBQUM7YUFDWCxFQUFFLENBQUMsR0FBRyxDQUFDO2FBQ1AsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBRWYsa0JBQWtCO1FBQ2xCLE1BQU0sSUFBSSxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQztRQUN0QyxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxLQUFLLElBQUksRUFBRTtZQUN4QixPQUFPLENBQUMsSUFBSSxDQUFDLHdCQUF3QixJQUFJLEVBQUUsQ0FBQyxDQUFDO1FBQ2pELENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztDQUNKO0FBckJELHdCQXFCQztBQUVELE1BQU0sQ0FBQyxHQUFHLEVBQUUsQ0FBQyJ9