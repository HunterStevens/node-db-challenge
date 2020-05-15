const db = require('../dbConfig');

module.exports ={
    findAll,
    findById,
    findTasksById,
    add,
    remove,
    update
}

function findAll(){
    return db('projects');
}

function findById(id){
    return db('projects').where({id});
}

function add(newItem){
    return db('projects').insert(newItem)
    .then(([newId]) =>{
        return findById(newId);
    });
}

function findTasksById(){
    return db('tasks as t')
    .join('projects as p', 't.project_id','=','p.id')
    .select('t.id','p.name as project_name', 'p.description as project_description', 't.description', 't.notes', 't.completed');
}

function remove(id){

}
function update(id){

}