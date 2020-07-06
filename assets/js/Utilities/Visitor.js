/**
 * Indicates whether the visitor's OS is macOS
 * @type {boolean}
 * @static
 */
Visitor.usesMacOs = (navigator.userAgent.match(/Macintosh/) !== null);

export default function Visitor() {
    const self = this;
}
