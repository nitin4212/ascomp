//R3MobileApp.OrderBrowser = function (params) {
//    var array;
//    var viewModel = {

//        viewShown: function () {


//        }
//    };
//    ServiceCall();    
//    return viewModel;
//};


//function ServiceCall() {
//    var dat;
//    $.ajax({
//        url: R3MobileApp.config.ServiceUrl + "GetBrowser",
//        data: { "val": "sa" },
//        success: function (data) {
//            var val = JSON.parse(data);
//            BrowserData(val);
//        },
//        dataType: "json"
//    });
//    return dat;
//};

//function BrowserData(books) {
//    $("#gridContainer").dxDataGrid({
//        dataSource: books,
//        columns: [
//            { dataField: 'DocDate', width: 120 },
//			{ dataField: 'Order', width: 120 },
//            { dataField: 'Val', width: 100, allowGrouping: false },
//        ],
//        columnChooser: { enabled: true },
//        allowColumnResizing: true,
//        sorting: { mode: 'multiple' },
//        allowColumnReordering: true,
//        groupPanel: { visible: true },
//        pager: { visible: true },
//        paging: { pageSize: 15 },
//        filterRow: { visible: true },
//        searchPanel: { visible: true },
//        selection: { mode: 'none' }
//    });
//}



R3MobileApp.OrderBrowser = function (params) {
    var array;
    var viewModel = {
        Customer: ko.observable(""),
        listDataSource: ko.observable(""),                   
        DocDate: Globalize.format( new Date(), "dd/MMM" )
    };
    ServiceCall(viewModel);
    return viewModel;
};


function ServiceCall(Model) {
    var dat;
    $.ajax({
        url: R3MobileApp.config.ServiceUrl + "GetBrowser",
        data: { "val": "sa" },
        success: function (data) {
            var val = JSON.parse(data);
            Model.listDataSource(val);
        },
        dataType: "json"
    });
    return dat;
};


