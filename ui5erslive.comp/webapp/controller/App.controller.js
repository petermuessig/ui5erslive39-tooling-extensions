sap.ui.define(["./BaseController"], function (BaseController) {
	"use strict";

	return BaseController.extend("ui5erslive.comp.controller.App", {
		onInit: function () {
			// apply content density mode to root view
			this.getView().addStyleClass(this.getOwnerComponent().getContentDensityClass());
		}
	});
});
