const advancedDetermine = require("@hugoalh/advanced-determine");
const undefinish = require("@hugoalh/undefinish");
/**
 * @function regularExpressionConstructor
 * @description Help for constructing regular expression.
 * @param {string} pattern Pattern.
 * @param {(object|string)} [flags={}] Flags.
 * @param {boolean} [flags.boundary=false] Regular expression with boundary support.
 * @param {boolean} [flags.caseInsensitive=false] Regular expression with case insensitive support.
 * @param {boolean} [flags.exactly=false] Regular expression with exactly support.
 * @param {boolean} [flags.global=false] Regular expression with global support.
 * @param {boolean} [flags.indices=false] Regular expression with indices support.
 * @param {boolean} [flags.multipleLine=false] Regular expression with multiple line support.
 * @param {boolean} [flags.sticky=false] Regular expression with sticky support.
 * @returns {RegExp} Pattern's regular expression.
 */
function regularExpressionConstructor(pattern, flags = {}) {
	if (!advancedDetermine.isString(pattern, { empty: false })) {
		throw new TypeError(`Argument \`pattern\` must be type of string (non-empty)!`);
	};
	if (typeof flags === "string") {
		let flagsRaw = flags.split("");
		flags = {};
		for (let flagRaw of flagsRaw) {
			flags[flagRaw] = true;
		};
	};
	if (!advancedDetermine.isPlainObject(flags, { super: true })) {
		throw new TypeError(`Argument \`flags\` must be type of plain object!`);
	};
	flags.boundary = undefinish(flags.boundary, flags.b, false);
	if (typeof flags.boundary !== "boolean") {
		throw new TypeError(`Argument \`flags.boundary\` must be type of boolean!`);
	};
	flags.caseInsensitive = undefinish(flags.caseInsensitive, flags.insensitive, flags.i, false);
	if (typeof flags.caseInsensitive !== "boolean") {
		throw new TypeError(`Argument \`flags.caseInsensitive\` must be type of boolean!`);
	};
	flags.exactly = undefinish(flags.exactly, flags.exact, flags.e, false);
	if (typeof flags.exactly !== "boolean") {
		throw new TypeError(`Argument \`flags.exactly\` must be type of boolean!`);
	};
	flags.global = undefinish(flags.global, flags.g, false);
	if (typeof flags.global !== "boolean") {
		throw new TypeError(`Argument \`flags.global\` must be type of boolean!`);
	};
	flags.indices = undefinish(flags.indices, flags.index, flags.d, false);
	if (typeof flags.indices !== "boolean") {
		throw new TypeError(`Argument \`flags.indices\` must be type of boolean!`);
	};
	flags.multipleLine = undefinish(flags.multipleLine, flags.multiLine, flags.multiline, flags.m, false);
	if (typeof flags.multipleLine !== "boolean") {
		throw new TypeError(`Argument \`flags.multipleLine\` must be type of boolean!`);
	};
	flags.sticky = undefinish(flags.sticky, flags.y, false);
	if (typeof flags.sticky !== "boolean") {
		throw new TypeError(`Argument \`flags.sticky\` must be type of boolean!`);
	};
	if (flags.boundary && flags.exactly) {
		throw new ReferenceError(`Flags "boundary" and "exactly" cannot use together!`);
	};
	let finalFlags = ["u"];
	if (flags.caseInsensitive) {
		finalFlags.push("i");
	};
	if (flags.global) {
		finalFlags.push("g");
	};
	if (flags.indices) {
		finalFlags.push("d");
	};
	if (flags.multipleLine) {
		finalFlags.push("m");
	};
	if (flags.sticky) {
		finalFlags.push("y");
	};
	let finalPattern = pattern;
	if (flags.boundary) {
		finalPattern = `\\b(?:${pattern})\\b`;
	};
	if (flags.exactly) {
		finalPattern = `^(?:${pattern})$`;
	};
	return new RegExp(finalPattern, finalFlags.sort().join(""));
};
module.exports = regularExpressionConstructor;
