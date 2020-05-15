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

function add(){

}

function remove(id){

}
function update(id){
    
}