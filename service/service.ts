import express from "express";

import { getRawData } from "./getRawData.js";
import bodyParser from "body-parser";
import cors from "cors"

/**
 * Class that represents a customer service. Takes port as constructor parameter
 */
class ServiceCustomer {
    private app: express.Express
    constructor(private port: number) {
        this.app = express()
    }

    /**
     * Prepares service for launching
     * @returns this
     */
    setup() {
        this.app.use(bodyParser.json())

        this.app.use(cors())

        this.app.get("/raw", getRawData)

        return this
    }

    /**
     * Starts the customer service. Prints URL to terminal
     */
    start() {
        this.app.listen(this.port, () => console.log(`Customer service running at http://localhost:${this.port}`))
    }
}

export default ServiceCustomer