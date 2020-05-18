import "reflect-metadata";
import express from "express";
import { createCombinedHandler } from "cds-routing-handlers";
import cds from "@sap/cds";

export class Server {
    public static async run() {
        const app = express();

        const hdl = createCombinedHandler({
            handler: [__dirname + "/entities/**/*.js", __dirname + "/functions/**/*.js"],
        });

        await cds.connect("db");
        await cds
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

Server.run();
