sap.ui.define(["ui5erslive/lib/library", "ui5erslive/lib/Example"], function (library, Example) {
	"use strict";

	// refer to library types
	const ExampleColor = library.ExampleColor;

	// create a new instance of the Example control and
	// place it into the DOM element with the id "content"
	new Example({
		text: "Example",
		color: ExampleColor.Highlight,
		press: function (event) {
			alert(event.getSource());
		}
	}).placeAt("content");
});
