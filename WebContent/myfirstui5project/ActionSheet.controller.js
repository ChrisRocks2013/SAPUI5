sap.ui.controller("myfirstui5project.ActionSheet", {

	handleopen : function(oEvent) {
		var oButton = oEvent.getSource();

		// create action sheet only one
		if (!this._actionSheet) {
			this._actionSheet = sap.ui.xmlfragment(
					"myfirstui5project.ActionSheet", this);
			this.getView().addDependent(this._actionSheet);
		}

		this._actionSheet.openBy(oButton);
	}

});