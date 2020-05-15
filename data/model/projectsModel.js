const db = require('../dbConfig');

module.exports ={
    findAll,
    findById,
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

function remove(id){

}
function update(id){

}