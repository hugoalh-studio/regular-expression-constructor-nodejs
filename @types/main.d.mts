export default regularExpressionConstructor;
/**
 * @function regularExpressionConstructor
 * @description Help for constructing regular expression.
 * @param {string} pattern Pattern.
 * @param {(object|string)} [flags={}] Flags.
 * @param {boolean} [flags.boundary=false] Regular expression with boundary support.
 * @param {boolean} [flags.caseInsensitive=false] Regular expression with case insensitive support.
 * @param {boolean} [flags.exactly=false] Regular expression with exactly support.
 * @param {boolean} [flags.global=false] Regular expression with global support.
 * @param {boolean} [flags.multipleLine=false] Regular expression with multiple line support.
 * @param {boolean} [flags.sticky=false] Regular expression with sticky support.
 * @returns {RegExp} Pattern's regular expression.
 */
declare function regularExpressionConstructor(pattern: string, flags?: (object | string)): RegExp;
//# sourceMappingURL=main.d.mts.map