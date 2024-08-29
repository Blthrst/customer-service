import { getRawData as getData } from "../database/utils/getRawData.js";
export async function getRawData(req, res) {
    try {
        const { page } = req.query;
        res.json(await getData(Number(page))).status(200);
    }
    catch (e) {
        res.status(500);
    }
}
//# sourceMappingURL=getRawData.js.map