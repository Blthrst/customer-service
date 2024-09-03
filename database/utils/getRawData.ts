import orm from "../database.js";
import { User } from "../entities/user.entity.js";

/**
 * Gets raw data from table
 * @param page page number (zero-based)
 * @returns raw data from table
 */
export async function getRawData(page: number) {
  const [data, _] = await orm.em.findAndCount(User, {username: "A"}, { limit: 25, offset: page * 25 })

  return data;
}
