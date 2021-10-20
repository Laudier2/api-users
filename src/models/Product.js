const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const schema = new Schema({
    name:{
        type: String,
        require: true, 
        index:true, 
        unique:true,
        sparse:true
    },
    sobrenome:{
        type: String,
        require: true, 
        index:true, 
        unique:true,
        sparse:true
    },
    email:{
        type: String, 
        require: true, 
        index:true, 
        unique:true,
        sparse:true
    },
    phone: {
        type: String,
        required: true
    },
    cep:{
        type: String,
        required: true
    },
    endereco1:{
        type: String,
        required: true
    },
    endereco2: {
        type: String,
        required: true
    },
    nacimento:{
        type: String,
        required: true
    },
    cpf:{
        type: String,
        required: true
    },
    rendaMes:{
        type: String,
        required: true
    },
    
})

module.exports = mongoose.model("Product", schema)