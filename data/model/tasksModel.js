const db = require('../dbConfig');

module.exports ={

}

function findAll(){
    return db('tasks');
}

function findById(id){
    return db('tasks').where({id});
}

function add(){

}

function remove(id){

}
function update(id){
    
}