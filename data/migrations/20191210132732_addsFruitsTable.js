
exports.up = function(knex) {
    return  knex.schema.createTable('fruits',fruits =>{
        fruits.increments();
        fruits.string('name',128)
            .notNullable()
            .unique()
        
        fruits.float("avgWeightOz")
        fruits.boolean('delicious').defaultTo(true)    
        fruits.timestamps();
      })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("fruits")
};
