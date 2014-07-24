R3MobileApp.Customer = function (params) {
    var CustomerSelected = ko.observable("");
    CustomerSelected.subscribe(function (newval) {
        R3MobileApp.data.Customer(newval);
    })
    var viewModel = {
        CustomerSelected: ko.observable(""),
        lookupCustfullScreen: ko.observable(true),
        currentValue: ko.observable("none"),
        dataSourceCustomer: ko.observable(""),
        minibrwDs: ko.observable(""),
        OrdNo: ko.observable(""),
        Val: ko.observable(""),
        DocStatus: ko.observable("")      
/*    This function is for showing the lookup on the menu click */
//        viewShown: function (e) {
//            $('#lCustomer').dxLookup('instance').open();

//        }
    };
    FillCustomerDropDown(viewModel);
    return viewModel;
};


processValueChange = function (e) {

    var cust = e.selectedItem.Name;
    CustomerSelected = $("#lCustomer").dxLookup('option', 'value');
    localStorage.setItem("R3Customer", CustomerSelected);
    localStorage.setItem("R3CustomerName", cust);
    //FillMiniBrowser();
    //SetCustomerName();

}


function FillCustomerDropDown(Model) {
    $.ajax({
        url: R3MobileApp.config.ServiceUrl + "GetCustomer",
        data: { "ProfileId": "1", "CompId": "00000001", "DocId": "00000011", "EntityId": "00000033", "ReckonerUserId": "sa" },
        success: function (data) {
            var val = JSON.parse(data);
            for (var key in val) {
                if (val.hasOwnProperty(key)) {
                    localStorage.setItem("R3DocType", val[key].DocType);
                    localStorage.setItem("R3UnitId", val[key].UnitId);
                    break;
                }
            }
            Model.dataSourceCustomer(val);
        },
        dataType: "json"
    });
    //CustomerSelected =localStorage.getItem("R3Customer");
   
    //$('#lCustomer').dxLookup('instance').open();     

}


function FillMiniBrowser() {
    var dat;
    $.ajax({
        url: R3MobileApp.config.ServiceUrl + "GetBrowser",
        data: { "val": "sa" },
        success: function (data) {
            var val = JSON.parse(data);
            this.minibrwDs(val);
        },
        dataType: "json"
    });
    return dat;
};

NewOrderClick = function () {
    R3MobileApp.app.navigate('OrderEntry');    
}
BrowserClick = function () {
    R3MobileApp.app.navigate('OrderBrowser');
}


/* Unused Functions Now


SetCustomerName = function () {
    var Cust = localStorage.getItem("Customer");
    $.ajax({
        url: R3MobileApp.config.ServiceUrl + "GetCustomerName",
        data: { "val": Cust },
        success: function (data) {
            var json = JSON.parse(data);
            for (var key in json) {
                if (json.hasOwnProperty(key)) {
                    localStorage.setItem("CustomerName", json[key].Name);
                    //alert(json[key].Name);                    
                }
            }

        },
        dataType: "json"
    });
}


processValueChangeDocType = function () {

    DocTypeSelected = $("#lDocType").dxLookup('option', 'value');
    localStorage.setItem("DocType", DocTypeSelected);

};

function FillDocTypeDropDown(Model) {
    $.ajax({
        url: R3MobileApp.config.ServiceUrl + "GetDocType",
        data: { "val": "sa" },
        success: function (data) {
            var val = JSON.parse(data);
            Model.dataSourceCustomer(val);
        },
        dataType: "json"
    });

}

*/