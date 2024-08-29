import { Entity, PrimaryKey, Property } from "@mikro-orm/core";
import { randomUUID } from "crypto";

@Entity({ tableName: "users" })
export class User {
  @PrimaryKey()
  id: string = randomUUID();

  @Property()
  username!: string

  @Property()
  age!: number 
}
