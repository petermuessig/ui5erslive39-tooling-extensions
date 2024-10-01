sap.ui.define(["./BaseController", "sap/m/MessageBox"], function (BaseController, MessageBox) {
	"use strict";

	return BaseController.extend("ui5erslive.app.controller.Main", {
		onInit: function () {
			// do not use async functions in onInit
			// ==> https://ui5.sap.com/#/topic/0cb44d7a147640a0890cefa5fd7c7f8e
			fetch("/docs/doc.md").then(async (response) => {
				const doc = await response.text();
				this.getView().byId("mdViewer").setContent(doc);
			});
		},
		sayHello: function () {
			MessageBox.show("Hello World!");
		}
	});
});
