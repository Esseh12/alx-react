const Immutable = require('immutable');

const getImmutableObject = (object) => {
    return Immutable.fromJS(object);
}

export default getImmutableObject;