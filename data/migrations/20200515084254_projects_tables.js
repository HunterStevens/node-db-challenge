
exports.up = function(knex) {
  return knex.schema.createTable('projects', proj =>{
        proj.increments();
        proj.string('name').unique().notNullable();
        proj.string('description');
        proj.boolean('complete').notNullable().defaultTo(false);

  })
  .createTable('resources', res =>{
      res.increments();
      res.string('name').unique().notNullable();
      res.string('description');
})
.createTable('tasks', task =>{
      task.increments();
      task.string('description').unique().notNullable();
      task.boolean('complete').notNullable().defaultTo(false);
      task.string('notes');
      task.integer('project_id').unsigned().notNullable()
      .references('projects.id')
      .onUpdate('cascade').onDelete('CASCADE');
})
.createTable('projects_resources', projRes =>{
      projRes.increments();
      projRes.integer('project_id').unsigned().notNullable()
      .references('projects.id')
      .onUpdate('cascade').onDelete('CASCADE');
      projRes.integer('resource_id').unsigned().notNullable()
      .references('resources.id')
      .onUpdate('cascade').onDelete('CASCADE');
})
};

exports.down = function(knex) {
  
};
