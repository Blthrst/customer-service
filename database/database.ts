import { MikroORM } from "@mikro-orm/postgresql";
import config from "./mikro-orm.config.js";
//import { User } from "./entities/user.entity.js";

const orm = await MikroORM.init(config)

// for (let i = 0; i < 100; i++) {
//     const user = orm.em.create(User, {
//         username: "A",
//         age: i
//     })

//     await orm.em.insert(User, user)
// }

export default orm