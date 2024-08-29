import { Migration } from "@mikro-orm/migrations";
export class Migration20240827055704 extends Migration {
    async up() {
        this.addSql('create table "users" ("id" varchar(255) not null, "username" varchar(255) not null, "age" int not null, constraint "users_pkey" primary key ("id"));');
    }
}
//# sourceMappingURL=Migration20240827055704.js.map