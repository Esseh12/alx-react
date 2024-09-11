const Immutable = require('immutable');

const getImmutableObject = (object) => {
    return Immutable.fromJS(object);
}

module.exports = getImmutableObject;