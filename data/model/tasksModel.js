const db = require('../dbConfig');

module.exports ={
    findAll,
    findById,
    add,
    remove,
    update
}

function findAll(){
    return db.select('t.id','p.name as project_name', 'p.description as project_description', 't.description', 't.notes', 't.complete')
    .from('tasks as t')
    .join('projects as p', 't.project_id','=','p.id');
}

function findById(id){
    return db('tasks').where({id});
}

function add(newItem){
    return db('tasks').insert(newItem)
    .then(([newId]) =>{
        return findById(newId);
    });
}

function remove(id){

}
function update(id){
    
}