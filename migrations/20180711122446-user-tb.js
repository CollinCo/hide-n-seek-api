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
    db.createTable('user', {
        uid: {
            type: 'int',
            primaryKey: true,
            autoIncrement: true,
            notNull: true,
            length: 45,
            unique: true,
        },
        firstname: {
            type: 'string',
            length: 45,

        },
        lastname: {
            type: 'string',
            length: 45,

        },
        email: {
            type: 'string',
            length: 45,
            notNull: true,
        },
        username: {
            type: 'string',
            length: 45,
            notNull: true,
        },
        password: {
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

    }, callback);
};

exports.down = function(db, callback) {
    db.dropTable('user', callback)
};

exports._meta = {
    "version": 1
};
