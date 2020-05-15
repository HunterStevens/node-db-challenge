const db = require('../dbConfig');

module.exports ={
    findAll,
    findById,
    add,
    remove,
    update
}

function findAll(){
    return db('resources');
}

function findById(id){
    return db('resources').where({id});
}

function add(newItem){
    return db('resources').insert(newItem)
    .then(([newId]) =>{
        return findById(newId);
    });
}

function remove(id){

}
function update(id){
    
}