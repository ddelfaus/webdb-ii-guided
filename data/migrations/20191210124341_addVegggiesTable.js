
exports.up = function(knex) {
  return  knex.schema.createTable('veggies',tbl =>{
        tbl.increments('id');
        tbl.string('name',255)
            .notNullable()
            .unique()
            .index();
        tbl.boolean('like_it').defaultTo(false)    
        tbl.timestamps();
      })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("veggies")
  
};
