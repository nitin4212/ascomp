R3MobileApp.Ledger = function (params) {

    var viewModel = {
        CustRef:ko.observable()
    };
    notification(viewModel);
    return viewModel;
};


function notification(Model) {
    Model.CustRef(localStorage.getItem("Customer"));
}