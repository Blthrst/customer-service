import express from "express";

import { getRawData } from "./getRawData.js";
import bodyParser from "body-parser";

class ServiceCustomer {
    private app: express.Express
    constructor(private port: number) {
        this.app = express()
    }

    setup() {
        this.app.use(bodyParser.json())

        this.app.get("/raw", getRawData)

        return this
    }

    start() {
        this.app.listen(this.port, () => console.log(`Customer service running at http://localhost:${this.port}`))
    }
}

export default ServiceCustomer