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

  db.createTable('user', {
    uid: {
      type: 'int',
      primaryKey: true,
      autoIncrement: true,
      notNull: true,
      length: 45,
      unique: true,
    },

    username: {
      type: 'string',
      notNull: true,
      length: 45,
    },

    firstname: {
      type: 'string',
      length: 45,
      notNull: true,
    },
    lastname: {
      type: 'string',
      length: 45,
      notNull: true,
    },

    confirmpassword: {
      type: 'string',
      length: 45,
      notNull: true,
    },
    email: {
      type: 'string',
      length: 45,
      notNull: true,
    },
    password: {
      type: 'string',
      length: 45,
      notNull: true,
    },
    phone: {
      type: 'string',
      length: 45,
      notNull: true,
    },
  }, callback);
};

exports.down = function (db, callback) {
  db.droptable('user', callback)
};

exports._meta = {
  "version": 1
};

