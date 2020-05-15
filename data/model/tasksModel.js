const db = require('../dbConfig');

module.exports ={
    findAll,
    findById,
    add,
    remove,
    update
}

function findAll(){
    return db('tasks');
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