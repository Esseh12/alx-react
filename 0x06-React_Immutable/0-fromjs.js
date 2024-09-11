import { fromJS } from "./node_modules/immutable/dist/immutable";

const getImmutableObject = (object) => {
    return fromJS(object);
}

const object = {
     fear: true,
     smell: -1033575916.9145899,
     wall: false,
     thing: -914767132
}

console.log(getImmutableObject(object));
module.exports = getImmutableObject;
