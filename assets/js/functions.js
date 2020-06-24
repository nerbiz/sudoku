/**
 * Add code from a trait to an object
 * @param {Object} instance
 * @param {function} traitConstructor
 * @return {void}
 */
export function trait(instance, traitConstructor) {
    // Create a new instance of the trait
    const traitInstance = new traitConstructor();
    // A property or method of the trait
    let thing;

    // Set the properties/methods in the calling object
    for (thing in traitInstance) {
        instance[thing] = traitInstance[thing];
    }
}
