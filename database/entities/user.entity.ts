import { Entity, PrimaryKey, Property } from "@mikro-orm/core";
import { randomUUID } from "crypto";

/**
 * User entity that represents a user
 */
@Entity({ tableName: "users" })
export class User {
  /**
  * User's UUID
  */
  @PrimaryKey()
  id: string = randomUUID();

  /**
   * User's username
   */
  @Property()
  username: string

  /**
   * User's age
   */
  @Property()
  age: number 
}
