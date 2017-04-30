"use strict";

const User = require('../../src/model/user');
const db = require('../../src/config/db');

describe('user test', () => {
    let knex;

    before((done) => {
        knex = db.knex;
        knex.migrate.latest()
            .then(() => {
                done();
            })
            .catch((err) => {
                done();
            });
    });

    beforeEach(() => {
        knex('users').del();
        return knex.seed.run();
    });

    it('user should be able to login', (done) => {
        User.login('gigo@gigio.com', 'password')
            .then(() => {
                done();
            }).catch(done);
    });

    it('should return NotFoundError for a non existent user', (done) => {
        User.where('email', 'not@found.com')
            .fetch({require: true})
            .catch(User.NotFoundError, (e) => {
                done();
            })
    });
});