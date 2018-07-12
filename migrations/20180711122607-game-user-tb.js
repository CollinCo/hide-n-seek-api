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
  db.createTable('game_user_map', {

    uid: {
      type: 'int',
      primaryKey: true,
      autoIncrement: true,
      length: 45,
      notNull: true,
      unique: true,
    },
    userid: {
      type: 'int',
      // foreignKey: true,
      length: 45,
      notNull: true,
      unique: true,

    },
    gameid: {
      type: 'int',
      // foreignKey: true,
      length: 45,
      notNull: true,
      unique: true,

    },
    userstatus: {
      type: 'string',
      length: 45,
      notNull: true,

    },
    lng: {
      type: 'int',
      length: 45,

    },
    lat: {
      type: 'int',
      length: 45,

    },
    role: {
      type: 'string',
      length: 45,
      notNull: true,
    },
    timer: {
      type: 'string',
      length: 45,
      notNull: true,
    },
  }, callback);
};

exports.down = function (db, callback) {
  db.dropTable('game_user_map', callback)
};

exports._meta = {
  "version": 1
};
