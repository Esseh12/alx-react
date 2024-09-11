const Immutable = require('immutable');

const getImmutableObject = (object) => {
    return Immutable.fromJS(object);
}

const object = {
     fear: true,
     smell: -1033575916.9145899,
     wall: false,
     thing: -914767132
}

console.log(getImmutableObject(object));
module.exports = getImmutableObject;