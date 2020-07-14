/**
 * Indicates whether the visitor's OS is macOS
 * @type {boolean}
 * @static
 */
Visitor.usesMacOs = (navigator.userAgent.toLowerCase().match(/macintosh/) !== null);

export default function Visitor() {
    const self = this;
}
