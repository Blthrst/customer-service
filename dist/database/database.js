import { MikroORM } from "@mikro-orm/postgresql";
import config from "./mikro-orm.config.js";
const orm = await MikroORM.init(config);
export default orm;
//# sourceMappingURL=database.js.map