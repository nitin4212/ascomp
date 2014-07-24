R3MobileApp.OrderEntry = function (params) {

    var viewModel = {
        CustomerSelected: ko.observable(""),
        listDataSource: ko.observable(""),
        selectedItems: ko.observable(""),
        CustRef: ko.observable(""),        
        dataSourceCustomer: ko.observable(""),
        selectedID: ko.observable(0),
        getColor: function (itemID) {
            return this.selectedID() == itemID ? 'Gray' : 'White';
        },
        itemClicked: function (itemID) {
            this.selectedID(itemID);
            //if(localStorage.setItem("Customer", CustomerSelected);            
        }       
        //Below code is for implementing the button click
        //        buttonClick: function (e, itemData) {
        //            alert('Click for Id=' + itemData.ItemName.toString() + ', Name=' + itemData.Name);
        //        }
        
    };
    //FillDataSource(viewModel);
    FillItem(viewModel);
    return viewModel;
};


processValueChange = function () {

    CustomerSelected = $("#lCustomer").dxLookup('option', 'value');
    localStorage.setItem("Customer",CustomerSelected );

};

function FillItem(Model) {
    localStorage.setItem("R3DocId","00000011");
    var Customer = localStorage.getItem("Customer");
    var DocType = localStorage.getItem("DocType");
    $.ajax({
        url: R3MobileApp.config.ServiceUrl + "GetItems",
        data: { "UnitId": "00000001", "DocId": "00000011", "DocType": DocType, "PartyId": Customer, "ReckonerUserId": "sa" },
        success: function (data) {
            var val = JSON.parse(data);
            Model.listDataSource(val);
        },
        dataType: "json"
    });
}



AddToCart = function () {
    //localStorage.removeItem('Cart');
    var Arr = this.selectedItems();
    var keys = Object.keys(Arr).length;    
    var len = Arr.length;
    var CartData = [];
    for (var i = 0; i < len; i++) {
        var item = {
            'ProductCode': Arr[i]["ProductCode"],
            'Qty': Arr[i]["Qty"],
            'UOM': Arr[i]["UOM"]
        }
        CartData.push(item);
    }
    localStorage.setItem("R3Cart", JSON.stringify(CartData));
//    for (var key in Arr) {
//        if (Arr.hasOwnProperty(key)) {
//            CartData[key].ProductCode = NetPriceItems[key].ProductCode;
//            CartData[key].Qty = NetPriceItems[key].Qty;
//            CartData[key].UOM = NetPriceItems[key].UOM;            
//        }
//    }
//    localStorage.setItem("R3Cart", JSON.stringify(CartData));
    DevExpress.ui.notify(keys + " items had been added to cart.", "info", 500);
}

/*   Unused function now
SaveOrder = function () {
    var Arr = this.selectedItems();    
    var val = {
        //customer: this.CustomerSelected(),
        unitid: '0000001',
        ordType : 'SI',
        entrydate: Date(),
        CustReference: this.CustRef(),
        OrdSeq: '1',
        orddate: Date(),
        status: '3',
        authcurr: '3'
    };
    var Header = JSON.stringify(val);

    var arrayItems = JSON.stringify(Arr);
    //var customer = CustomerSelected;
    $.ajax({
        url: R3MobileApp.config.ServiceUrl + "SaveOrder",
        data: { "OrderDetails": arrayItems, "HeaderVariables": Header },
        success: function (data) {
            DevExpress.ui.notify(data, "info", 200);            

        },
        dataType: "json"
    });
    R3MobileApp.app.navigate('OrderBrowser');  
}


function FillDataSource(Model) {
    $.ajax({
        url: R3MobileApp.config.ServiceUrl + "GetCustomer",
        data: { "val": "sa" },
        success: function (data) {
            var val = JSON.parse(data);
            Model.dataSourceCustomer(val);
        },
        dataType: "json"
    });
    
}   */