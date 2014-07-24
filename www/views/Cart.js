
window.OrderTotalPrice = 0;
window.Model;
R3MobileApp.Cart = function (params) {
    var viewModel = {
        //  Put the binding properties here
        //CartData:ko.observable(),
        ProductName: ko.observable(),
        Qty: ko.observable(),
        Price: ko.observable(),
        TotalPrice : ko.observable(),
        DsCart: ko.observable("")
    };    
    CardData(viewModel);
    return viewModel;
};

SaveOrder = function () {

    //var customer = CustomerSelected;
    var CompleteCartData = (localStorage.getItem("R3Cart"));
    var UnitId = localStorage.getItem("R3UnitId");
    var DocID = localStorage.getItem("R3DocId");
    var DocType = localStorage.getItem("R3DocType");
    var CustomerCd = localStorage.getItem("R3Customer");
    var ReckonerUserId = localStorage.getItem("R3UserId");
    //var ItemCd=localStorage.getItem("R3UnitId");
    /* Regex for Qty  ^\d+(\.\d{1,2})?$*/
    var dt = new Date();
    var dd = dt.getDate(); //yields day
    var MM = dt.getMonth(); //yields month
    var month = +MM + 1;
    var yyyy = dt.getFullYear(); //yields year
    var HH = dt.getHours(); //yields hours 
    var mm = dt.getMinutes(); //yields minutes
    var ss = dt.getSeconds(); //yields seconds
    var docdate = dd + "/" + month + "/" + yyyy + " " + HH + ':' + mm + ':' + ss;

    $.ajax({
        url: R3MobileApp.config.ServiceUrl + "SaveNewDocument",
        data: { "UnitId": UnitId, "DocId": DocID, "DocType": DocType, "CustCode": CustomerCd, "ExecutiveCode": "00000001", "CustPO": "TestCustPO ", "DocDate": docdate, "ReckonerUserId": ReckonerUserId, "ItemCodes": CompleteCartData },
        success: function (data) {
            if (data === "") { }
            else {
                DevExpress.ui.notify("Order saved successfully " + data + ".", "info", 3500);
                localStorage.removeItem("R3Cart");
            }
        },
        dataType: "json"
    });
}

QtyValueChanged = function (e) {
    var ValueToDeduct = +e.previousValue * +this.NetPrice;
    var ValueToAdd = +e.value * +this.NetPrice;
    var OrderTotal = +window.OrderTotalPrice;
    var Custcode = localStorage.getItem("R3Customer");
    var ItemCodeQtyChanged = this.ItemCode;

    $.ajax({
        url: R3MobileApp.config.ServiceUrl + "GetCurrencyDecimalPosition",
        data: { "CustCd": Custcode },
        success: function (data) {
            var currpos = JSON.parse(data);
            var CurrDecimalPosition = currpos[0].CurrDecPos;
            OrderTotal = parseFloat(OrderTotal) - parseFloat(ValueToDeduct);
            OrderTotal = OrderTotal.toFixed(CurrDecimalPosition);
            OrderTotal = parseFloat(OrderTotal) + parseFloat(ValueToAdd);
            window.OrderTotalPrice = OrderTotal;
            document.getElementById("lEstimatedTotal").innerHTML = OrderTotal.toFixed(CurrDecimalPosition);
            var CompleteCartData = JSON.parse(localStorage.getItem("R3Cart"));
            for (var key in CompleteCartData) {
                if (CompleteCartData.hasOwnProperty(key) && CompleteCartData[key].ProductCode === ItemCodeQtyChanged) {
                    CompleteCartData[key].Qty = e.value;
                }
            }
            localStorage.setItem("R3Cart", JSON.stringify(CompleteCartData));
        },
        dataType: "json"
    });
    //ValidateQty(e.value,3);
};

function ValidateQty(ValueToValidate, CurrencyDecPos) {
    var regexp1 = new RegExp("\\d*\\.?\\d{0," + CurrencyDecPos + "}");
    //var regexp1 = new RegExp("[^0-9]");    
    if (regexp1.test(ValueToValidate)) {
        alert("Only numbers are allowed");
        return false;
    }
}



function CardData(Model){
    var CompleteCartData =(localStorage.getItem("R3Cart"));
    
    var UnitId=localStorage.getItem("R3UnitId");
    var DocID=localStorage.getItem("R3DocId");
    var DocType=localStorage.getItem("R3DocType");
    var CustomerCd=localStorage.getItem("R3Customer");
    var ReckonerUserId=localStorage.getItem("R3UserId");
    //var ItemCd=localStorage.getItem("R3UnitId");
    var dt=new Date();
    var dd = dt.getDate(); //yields day
    var MM = dt.getMonth(); //yields month
    var month = +MM + 1;
    var yyyy = dt.getFullYear(); //yields year
    var HH = dt.getHours(); //yields hours 
    var mm = dt.getMinutes(); //yields minutes
    var ss = dt.getSeconds(); //yields seconds
    var docdate = dd + "/" + month + "/" + yyyy + " " + HH + ':' + mm + ':' + ss;

    $.ajax({
        url: R3MobileApp.config.ServiceUrl + "GetNetPrice",
        data: { "UnitId": UnitId, "DocId": DocID, "DocType": DocType, "CustCode": CustomerCd, "DocDate": docdate, "ReckonerUserId": ReckonerUserId, "ItemCodes": CompleteCartData },
        success: function (data) {
            var NetPriceItems = JSON.parse(data);
            Model.DsCart(NetPriceItems);
            var OrderTotal = 0;
            for (var key in NetPriceItems) {
                if (NetPriceItems.hasOwnProperty(key)) {
                    OrderTotal = OrderTotal + +NetPriceItems[key].NetAmount
                }
            }
            Model.TotalPrice(OrderTotal);
            window.OrderTotalPrice = OrderTotal;
            localStorage.setItem("R3OrderTotal", OrderTotal);
        },
        dataType: "json"
    });
    
//    var CarData = JSON.parse(CompleteCartData);
//    Model.DsCart(CarData);
//    for (var key in CarData) {
//       if (CarData.hasOwnProperty(key)) {
//          alert(CarData[key].ItemName);
//          alert(CarData[key].Qty);
//       }
//    }  
}