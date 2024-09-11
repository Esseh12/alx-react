const Immutable = require('immutable');

const getImmutableObject = (object) => {
    return Immutable.fromJS(object);
}

module.exports = getImmutableObject;

getImmutableObject({
    fear: true,
    smell: -1033575916.9145899,
    wall: false,
    thing: -914767132
});