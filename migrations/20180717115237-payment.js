'use strict';

var dbm;
var type;
var seed;

/**
  * We receive the dbmigrate dependency from dbmigrate initially.
  * This enables us to not have to rely on NODE_PATH.
  */
exports.setup = function(options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

exports.up = function(db, callback) {
  db.createTable('payment', {

    uid: {
      type: 'int',
      primaryKey: true,
      autoIncrement: true,
      length: 45,
      notNull: true,
      unique: true,
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

    amount: {
      type: 'int',
      length: 45,
    },

    currency: {
      type: 'string',
      length: 45,
    },

    date: {
      type: 'string',
      length: 45,
    },

    charge_id: {
      type: 'string',
      length: 45,
      notNull: true,

    },

    receipt_email: {
      type: 'string',
      length: 45,
      notNull: true,

    },
  }, callback);
};

exports.down = function(db) {
  return null;
};

exports._meta = {
  "version": 1
};
