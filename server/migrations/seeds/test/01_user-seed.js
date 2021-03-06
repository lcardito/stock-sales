exports.seed = (knex, Promise) => {
    return Promise.join(
        // Deletes ALL existing entries
        knex('users').del(),

        // Inserts seed entries
        knex('users').insert({id: 0, username: 'luigi', email: 'gigo@gigio.com', password: '$2a$10$nyqhHgxfXY1WQoegNzsTNeHnvFguzn1gOQIMnVb62Wmg74QwywloC', created_at: '2017-06-30' }),
        knex('users').insert({id: 1, username: 'andrea', email: 'andrea@andy.com', password: '$2a$10$p6/AyS9.kyOKcbtDO7rY5eDS7A.lsCi/YyIZKkv.GV80qaR83SNlC', created_at: '2017-06-30' })
    )
};