module.exports = function (config) {
	"use strict";

	require("./karma-ci.conf")(config);
	config.set({
		reporters: ["progress", "coverage"],
		preprocessors: {
			"src/**/*.js": ["coverage"],
			"test/**/*.js": ["coverage"]
		},
		proxies: {
			'/resources/ui5erslive/lib/': '/base/src/',
			'/test-resources/ui5erslive/lib/': '/base/test/',
		},
		coverageReporter: {
			dir: "coverage",
			reporters: [
				{ type: "html", subdir: "report-html" },
				{ type: "cobertura", subdir: ".", file: "cobertura.txt" },
				{ type: "lcovonly", subdir: ".", file: "report-lcovonly.txt" },
				{ type: "text-summary" }
			]
		}
	});
};
