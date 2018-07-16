'use strict';

var dbm;
var type;
var seed;

/**
  * We receive the dbmigrate dependency from dbmigrate initially.
  * This enables us to not have to rely on NODE_PATH.
  */
exports.setup = function (options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

exports.up = function (db, callback) {

  db.addForeignKey('game_user_map', 'game_table', 'gameid_fk',
    {
      'gameid': 'uid'
    },
    {
      onDelete: 'RESTRICT',
      onUpdate: 'RESTRICT'
    }, callback);


  db.addForeignKey('game_user_map', 'user_table', 'userid_fk',
    {
      'userid': 'user_id'
    },
    {
      onDelete: 'RESTRICT',
      onUpdate: 'RESTRICT'
    }, callback);

};

exports.down = function (db, callback) {
  db.removeForeignKey('game_user_map', 'user_table', 'uid_fk', callback);

  db.removeForeignKey('game_user_map', 'game_table', 'gameid_fk', callback);

};

exports._meta = {
  "version": 1
};
