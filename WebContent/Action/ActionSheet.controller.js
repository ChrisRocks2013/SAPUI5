sap.ui.controller("Action.ActionSheet", {

	handleopen : function(oEvent) {
		var oButton = oEvent.getSource();

		// create action sheet only one
		if (!this._actionSheet) {
			this._actionSheet = sap.ui.xmlfragment(
					"Action.ActionSheet", this);
			this.getView().addDependent(this._actionSheet);
		}

		this._actionSheet.openBy(oButton);
	},
	
	handleReject : function(oEvent) {
		
		alert("Reject Clicked");
	}

});