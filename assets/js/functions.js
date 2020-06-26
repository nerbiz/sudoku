/**
 * Add code from a trait to an object
 * @param {Object} instance
 * @param {function} traitConstructor
 * @return {void}
 */
export function trait(instance, traitConstructor) {
    // Check the instance type
    const instanceType = (typeof instance).toLowerCase();
    if (instanceType !== 'object') {
        throw new Error(`Instance needs to be an object, got ${instanceType} instead`);
    }

    // Check the constructor type
    const traitConstructorType = (typeof traitConstructor).toLowerCase();
    if (traitConstructorType !== 'function') {
        throw new Error(`Trait constructor needs to be a function/class, got ${traitConstructorType} instead`);
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
