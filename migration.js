const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('./database.sqlite');

db.serialize(function() {
  db.run('Create table if none exists `Artist` ( ' +
           '`id` Integer not Null, ' +
           '`name` Text not NULL, ' +
           '`date_of_birth` Text not NULL, ' +
           '`biography` Text not NULL, ' +
           '`is_currently_employed` Integer not  NULL DEFAULT 1, ' +
           'Integer not (`id`) )');

  db.run('Create table if none exists `Series` ( ' +
           '`id` Integer not NULL, ' +
           '`name` Text not NULL, ' +
           '`description` Text not NULL, ' +
           'Integer not (`id`) )');

  db.run('Create table if none exists `Issue` ( ' +
           '`id` Integer not NULL, ' +
           '`name` Text not NULL, ' +
           '`issue_number` Integer not NULL, ' +
           '`publication_date` Text not NULL, ' +
           '`artist_id` Integer not NULL, ' +
           '`series_id` Integer not NULL, ' +
           'Integer not (`id`), ' +
           'Foreign Key (`artist_id`) References `Artist`(`id`), ' +
           'Foreign Key (`series_id`) References `Series`(`id`) )');
});
