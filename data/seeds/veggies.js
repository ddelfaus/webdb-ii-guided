
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('veggies')
    .del()
    //truncate() deletes the id del does not
    .then(function () {
      // Inserts seed entries
      return knex('veggies').insert([
        { name:  "broccoli", like_it: 1 },
        { name:  "sprouts", like_it: 0},
        { name:  "cabbage"}
      ]);
    });
};
