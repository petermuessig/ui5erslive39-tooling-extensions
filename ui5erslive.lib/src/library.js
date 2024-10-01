/*!
 * ${copyright}
 */

/**
 * Initialization Code and shared classes of library ui5erslive.lib.
 */
sap.ui.define([
	"sap/base/util/ObjectPath",
	"sap/ui/core/library"
], function (ObjectPath) {
	"use strict";

	// delegate further initialization of this library to the Core
	// Hint: sap.ui.getCore() must still be used to support preload with sync bootstrap!
	sap.ui.getCore().initLibrary({
		name: "ui5erslive.lib",
		version: "${version}",
		dependencies: [ // keep in sync with the ui5.yaml and .library files
			"sap.ui.core"
		],
		types: [
			"ui5erslive.lib.ExampleColor"
		],
		interfaces: [],
		controls: [
			"ui5erslive.lib.Example"
		],
		elements: [],
		noLibraryCSS: false // if no CSS is provided, you can disable the library.css load here
	});

	/**
	 * Some description about <code>ui5erslive.lib</code>
	 *
	 * @namespace
	 * @alias ui5erslive.lib
	 * @author Peter Muessig
	 * @version ${version}
	 * @public
	 */
	const thisLib = ObjectPath.get("ui5erslive.lib");

	/**
	 * Semantic Colors of the <code>ui5erslive.lib.Example</code>.
	 *
	 * @enum {string}
	 * @public
	 */
	thisLib.ExampleColor = {

		/**
		 * Default color (brand color)
		 * @public
		 */
		Default : "Default",

		/**
		 * Highlight color
		 * @public
		 */
		Highlight : "Highlight"

	};

	return thisLib;

});
