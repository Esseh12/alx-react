const Immutable = require('immutable');

const getImmutableObject = (object) => {
    return Immutable.Map(object);
}

export default getImmutableObject;
