export { $ };

/**
 * Fast getter of HTML input element through the selector.
 * @param query String of HTML selector from HTML input element
 * @returns Selection of HTML input element
 *
 * @example
 * // returns HTMLInputElement "#ID"
 * $("#ID")
 */
function $(query: string): HTMLInputElement | null {
    return document.querySelector(query);
}
