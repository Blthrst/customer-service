import express from "express"

import { getRawData as getData  } from "../database/utils/getRawData.js"

export async function getRawData(req: express.Request, res: express.Response): Promise<void> {
    try {
        const {page} = req.query
        res.json(await getData(Number(page))).status(200)
    } catch(e) {
        res.status(500)
    }
}