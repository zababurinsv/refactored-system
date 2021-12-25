const StyledString = require('./StyledString.js');
const StyledStringPlain = require('./StyledStringPlain.js');
const stringToFormatArray = require('./stringToFormatArray.js');

function patchConsoleMethod (methodName) {
	let method = console[methodName];
	console[methodName] = (...args) => {
		let formattedArgs = [],
			hasLoggedRawItem = false;

		for (let arg of args) {
			if (arg instanceof StyledString || arg instanceof StyledStringPlain) {
				if (hasLoggedRawItem) {
					throw new Error('Styled strings must be the first log argument');
				}
				formattedArgs = formattedArgs.concat(stringToFormatArray(arg.toString()));
			} else {
				hasLoggedRawItem = true;
				formattedArgs = formattedArgs.concat(arg);
			}
		}

		return formattedArgs.length ? method(...formattedArgs) : args;
	};
}

module.exports = function patchConsoleLog () {
	[
		'log',
		'group',
		'groupCollapsed',
		'groupEnd',
		'warn',
		'info'
	].forEach(patchConsoleMethod);
};