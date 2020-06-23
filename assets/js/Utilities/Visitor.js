/**
 * See if the visitor's OS is macOS
 * @return {boolean}
 * @static
 */
Visitor.usesMacOs = () => (navigator.userAgent.match(/Macintosh/) !== null);

export default function Visitor() {
    const self = this;
}
