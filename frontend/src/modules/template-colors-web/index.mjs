import StyledString from './StyledString.mjs'
import patchConsoleLog from './patchConsoleLog.mjs'
import compileTemplate from './compileTemplate.mjs'

patchConsoleLog();

function colors (...args) {
	return new StyledString(args);
}
colors.define = compileTemplate.define;

let rgbs = {
	black: [0, 0, 0],
	red: [237, 80, 65],
	green: [102, 172, 92],
	yellow: [225, 178, 60],
	blue: [73, 148, 201],
	magenta: [127, 23, 53],
	cyan: [78, 181, 230],
	white: [255, 255, 255],
	gray: [124, 124, 124],
	grey: [124, 124, 124]
};

Object.keys(rgbs).forEach(key => {
	let rgb = rgbs[key];
	colors.define(`${key}BG`, `rgbBG(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`);
	colors.define(`${key}`, `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`);
});

colors.define('underline', 'style("text-decoration: underline")');
colors.define('bold', 'style("font-weight: bold")');
colors.define('italic', 'style("font-style: italic")');
colors.define('strikethrough', 'style("text-decoration: line-through")');
colors.define('dim', 'style("opacity: 0.75")');
colors.define('hidden', 'style("opacity: 0.00")');
colors.define('html', 'style("opacity: 0.00")');

colors.define('defaultPathToFile', 'style("color:rgb(25,119,241)")');
colors.define('defaultId', 'style("color:rgb(39,94,7)")');

colors.define('workerPathToFile', 'style("color:rgb(144,69,169)")');
colors.define('workerId', 'style("color:rgb(39,94,7)")');

colors.define('blockchainPathToFile', 'style("color:rgb(255,0,30)")');
colors.define('blockchainId', 'style("color:rgb(39,94,7)")');

colors.define('orbitDbPathToFile', 'style("color:rgb(197,82,52)")');
colors.define('orbitDbId', 'style("color:rgb(39,94,7)")');

colors.define('servicePathToFile', 'style("color:rgb(208,112,29)")');
colors.define('serviceId', 'style("color:rgb(39,94,7)")');

export default colors;

let color = {
	default: {
		pathToFile: {
			color:"rgb(197,82,52)",
			test: 'rgb(39,94,7)'
		},
		id: {
			color:"rgb(208,112,29)",
			background: 'rgbBG(255,255,255)',
			test: 'rgb(236,188,231)'
		}
	},
	worker: {
		pathToFile: {
			color:"rgb(25,119,241)",
			background: 'rgbBG(184,203,184)',
			test: 'rgb(184,203,184)'
		},
		id: {
			color:"rgb(63,146,63)",
			background: 'rgbBG(255,255,255)',
			test: 'rgb(255,255,255)'
		}
	},
	blockchain: {
		pathToFile: {
			color:"rgb(144,69,169)",
			background: 'rgbBG(232,228,245)',
			test: 'rgb(232,228,245)'
		},
		id: {
			color:"rgb(63,146,63)",
			background: 'rgbBG(255,255,255)',
			test: 'rgb(255,255,255)'
		}
	},
	orbitDb: {
		pathToFile: {
			color:"rgb(144,69,169)",
			background: 'rgbBG(107,164,250)'
		},
		id: {
			color:"rgb(61,141,4)",
			background: 'rgbBG(215,194,255)'
		}
	},
	service: {
		pathToFile: {
			color:"rgb(144,69,169)",
			background: 'rgbBG(107,164,250)'
		},
		id: {
			color:"rgb(63,82,146)",
			background: 'rgbBG(215,194,255)'
		}
	},
}
