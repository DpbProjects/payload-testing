import * as migration_20240914_110040_init from './20240914_110040_init';
import * as migration_20240914_155017_add_movies from './20240914_155017_add_movies';
import * as migration_20240914_155121_add_movies from './20240914_155121_add_movies';
import * as migration_20240914_161931_drop_documents from './20240914_161931_drop_documents';
import * as migration_20240922_132624_test_migration from './20240922_132624_test_migration';

export const migrations = [
  {
    up: migration_20240914_110040_init.up,
    down: migration_20240914_110040_init.down,
    name: '20240914_110040_init',
  },
  {
    up: migration_20240914_155017_add_movies.up,
    down: migration_20240914_155017_add_movies.down,
    name: '20240914_155017_add_movies',
  },
  {
    up: migration_20240914_155121_add_movies.up,
    down: migration_20240914_155121_add_movies.down,
    name: '20240914_155121_add_movies',
  },
  {
    up: migration_20240914_161931_drop_documents.up,
    down: migration_20240914_161931_drop_documents.down,
    name: '20240914_161931_drop_documents',
  },
  {
    up: migration_20240922_132624_test_migration.up,
    down: migration_20240922_132624_test_migration.down,
    name: '20240922_132624_test_migration'
  },
];
