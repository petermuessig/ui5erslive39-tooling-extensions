/*!
 * ${copyright}
 */

// Provides control ui5erslive.lib.Example.
sap.ui.define(["./library", "sap/ui/core/Control", "./ExampleRenderer"], function (library, Control, ExampleRenderer) {
	"use strict";

	// refer to library types
	const ExampleColor = library.ExampleColor;

	/**
	 * Constructor for a new <code>ui5erslive.lib.Example</code> control.
	 *
	 * @param {string} [sId] id for the new control, generated automatically if no id is given
	 * @param {object} [mSettings] initial settings for the new control
	 *
	 * @class
	 * Some class description goes here.
	 * @extends sap.ui.core.Control
	 *
	 * @author Peter Muessig
	 * @version ${version}
	 *
	 * @constructor
	 * @public
	 * @alias ui5erslive.lib.Example
	 */
	const Example = Control.extend(
		"ui5erslive.lib.Example",
		/** @lends ui5erslive.lib.Example.prototype */ {
			metadata: {
				library: "ui5erslive.lib",
				properties: {
					/**
					 * The text to display.
					 */
					text: {
						type: "string",
						group: "Data",
						defaultValue: null
					},
					/**
					 * The color to use (default to "Default" color).
					 */
					color: {
						type: "ui5erslive.lib.ExampleColor",
						group: "Appearance",
						defaultValue: ExampleColor.Default
					}
				},
				events: {
					/**
					 * Event is fired when the user clicks the control.
					 */
					press: {}
				}
			},
			renderer: ExampleRenderer,
			onclick: function () {
				this.firePress();
			}
		}
	);
	return Example;
});
