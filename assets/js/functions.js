/**
 * Add code from a trait to an object
 * @param {Object} instance
 * @param {function} traitConstructor
 * @return {void}
 */
export function trait(instance, traitConstructor) {
    // Check the instance type
    if ((typeof instance).toLowerCase() !== 'object') {
        throw new Error(`Instance needs to be an object, got ${typeof instance} instead`);
    }

    // Check the constructor type
    if ((typeof traitConstructor).toLowerCase() !== 'function') {
        throw new Error(`Trait constructor needs to be a function/class, got ${typeof traitConstructor} instead`);
    }

    // Create a new instance of the trait
    const traitInstance = new traitConstructor();
    // A property or method of the trait
    let thing;

    // Set the properties/methods in the calling object
    for (thing in traitInstance) {
        instance[thing] = traitInstance[thing];
    }
}
