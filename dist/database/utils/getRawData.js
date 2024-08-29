import orm from "../database.js";
import { User } from "../entities/user.entity.js";
export async function getRawData(page) {
    const [data, _] = await orm.em.findAndCount(User, { username: "A" }, { limit: 25, offset: page * 25 });
    return data;
}
//# sourceMappingURL=getRawData.js.map