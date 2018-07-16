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

    db.createTable('game_table', {
        uid: {
            type: 'int',
            primaryKey: true,
            autoIncrement: true,
            length: 45,
            notNull: true,
            unique: true,
        },
        radius: {
            type: 'int',
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

exports.down = function (db, callback) {
    db.dropTable('game_table', callback)
};

exports._meta = {
    "version": 1
};
