const {Schema, model} = require('mongoose');

const personSchema = new Schema({  
    name:{ type: String, required: true},
    lastName:{ type: String, required: true},
    age:{ type: Number, required: true}
});

personSchema.methods.sayHi = function(){
    return `${this.name} says hi!`;
}
personSchema.virtual('names').get(function(){
    return `${this.name} ${this.lastName}`;
})

const Person = model('Person', personSchema);

module.exports = Person;