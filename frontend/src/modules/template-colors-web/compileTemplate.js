const StyledStringPlain = require('./StyledStringPlain.js');
const isEmpty = require('../isEmpty/isEmpty.js');


class StyledString {
	constructor (templateArgs) {
		this.styles = [];
		this.templateArgs = templateArgs;
	}

	toString () {
		return compileTemplate(this.styles, ...this.templateArgs);
	}

	rgb (r, g, b) {
		this.styles.push(`rgb(${r},${g},${b})`);
		return this;
	}

	rgbBG (r, g, b) {
		this.styles.push(`rgbBG(${r},${g},${b})`);
		return this;
	}

	style (style) {
		this.styles.push(`style('${style}')`);
		return this;
	}
}

const RGB_REGEXP = /(rgb(?:BG)?)\((\s*\d+\s*)\,(\s*\d+\s*)\,(\s*\d+\s*)\)/,
	  STYLE_REGEXP = /(style)\(['"](.+?)['"]\)/;

let styles = [],
	definedStyles = {},
	COLORS_REGEXP = compileColorsRegExp();

function compileColorsRegExp () {
	return new RegExp(`^\\.((?:\\.?(?:${styles.length ? styles.join('|') + '|' : ''}style\\(['"].+?['"]\\)|rgb(?:BG)?\\(\\s*\\d+\\s*,\\s*\\d+\\s*,\\s*\\d+\\s*\\)))+)`);
}

function runStyleOnString (string, style) {
	let rgbMatch = style.match(RGB_REGEXP),
		styleMatch = style.match(STYLE_REGEXP);

	if (rgbMatch && !definedStyles[style]) {
		let type = rgbMatch[1],
			r = rgbMatch[2],
			g = rgbMatch[3],
			b = rgbMatch[4];

		if (type === 'rgb') {
			return string.rgb(r,g,b);
		} else if (type === 'rgbBG') {
			return string.rgbBG(r,g,b);
		}
	} else if (styleMatch) {
		return string.style(styleMatch[2]);
	} else if (definedStyles[style]) {
		definedStyles[style].forEach(style => {
			string = runStyleOnString(string, style);
		});
		return string;
	} else if (string[style] instanceof StyledStringPlain) {
		return string[style].toString();
	} else if (typeof string[style] === 'function') {
		return string[style]();
	} else {
		return string[style];
	}
}

function compileTemplate (defaultStyles, strings, ...replacements) {
	let string = '';

	strings.forEach((item, index, strings) => {
		let after = replacements.shift(),
			next = strings[index + 1];

		after = typeof after === 'undefined' ? '' : String(after);
		// strip style commands
		item = String(item).replace(COLORS_REGEXP, '');

		if (!typeof next != undefined) {
			let colorsMatch = String(next).match(COLORS_REGEXP);

			if (colorsMatch && after) {
				// apply styles
				colorsMatch[1].split('.').forEach(style => (after = runStyleOnString(after, style)));
			}

			// apply default styles to item
			defaultStyles.forEach(style => (item = runStyleOnString(item, style)));

			// apply default styles to after
			if (after) {
				//console.log(after(), 'AFTER');
				defaultStyles.forEach(style => (after = runStyleOnString(after, style)));
			}

			// concatenate new segment
			string += item + after;
		}
	});

	return string;
}

compileTemplate.define = (name, stylesToDefine) => {
	if (typeof stylesToDefine === 'string') {
		stylesToDefine = [stylesToDefine];
	}

	styles.push(name);
	definedStyles[name] = stylesToDefine;
	COLORS_REGEXP = compileColorsRegExp();

	if(isEmpty(StyledString.prototype[name])) {
		StyledString.prototype[name] = {}
	}
	if(isEmpty(String.prototype[name])) {
		String.prototype[name] = {}
	}
	if(isEmpty(StyledStringPlain.prototype[name])) {
		StyledStringPlain.prototype[name] = {}
	}
	StyledString.prototype[name] =  {
		get: function () {
			this.styles = this.styles.concat(stylesToDefine);
			return this;
		}
	}
	String.prototype[name] ={
		get: function () {
			return new StyledString([[this]])[name];
		}
	}
	StyledStringPlain.prototype[name] = {
		enumerable: true,
		configurable: true,
		get: function () {
			return new StyledString([[this]])[name];
		}
	}

};

module.exports = compileTemplate;