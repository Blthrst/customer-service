import express from "express"

import { getRawData as getData  } from "../database/utils/getRawData.js"

/**
 * Controller that handles requests for getting raw data
 * @param req Express request object
 * @param res Express response object
 */
export async function getRawData(req: express.Request, res: express.Response): Promise<void> {
    try {
        const {page} = req.query
        res.json(await getData(Number(page))).status(200)
    } catch(e) {
        res.status(500)
    }
}