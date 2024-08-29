import { Options, PostgreSqlDriver } from '@mikro-orm/postgresql';
import { TsMorphMetadataProvider } from '@mikro-orm/reflection';
import { Migrator } from '@mikro-orm/migrations';
import path from 'path';

import { User } from './entities/user.entity.js';

const config: Options = {
  allowGlobalContext: true,
  driver: PostgreSqlDriver,
  dbName: process.env.MIKRO_ORM_CSTMR_DB,
  user: process.env.MIKRO_ORM_CSTMR_USER,
  host: process.env.MIKRO_ORM_CSTMR_HOST,
  port: Number(process.env.MIKRO_ORM_CSTMR_PORT),
  password: process.env.MIKRO_ORM_CSTMR_PWD,
  entities: [User],
  metadataProvider: TsMorphMetadataProvider,
  extensions: [Migrator],
  migrations: {
    path: path.join(process.cwd(), "dist", "database", "migrations"),
    pathTs: path.join(process.cwd(), "database", "migrations")
  }
};

export default config;