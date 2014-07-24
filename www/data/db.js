/// <reference path="../js/jquery-1.11.1.min.js" />
/// <reference path="../js/knockout-3.1.0.js" />
/// <reference path="../js/dx.all.js" />

(function() {
    "use strict";

    R3MobileApp.db = {
        "sampleData": new DevExpress.data.DataSource({
            /// Implementation of load operation. Accepts a bag of "load options" (object) which are: sort, filter, group, select, skip, take. 
            /// Must return array or promise(array).
            load: function(loadOptions) {
                return $.ajax("/data/sampleData.json");
            },
            /// User implementation of loading single item by key. Accepts key value.
            /// Must return object or promise(object).
            byKey: function(key) {
                throw new Error("Not implemented");
            },
            /// User implementation of insertion. Accepts bag of data values. 
            /// Return value is not required. If present must be key value or promise of key value.
            insert: function(values) {
                throw new Error("Not implemented");
            },
            /// User implementation of update. Accepts key and bag of data values (object key, object values). 
            /// If returns promise, then considered async, otherwise return value is ignored.
            update: function(key, values) {
                throw new Error("Not implemented");
            },
            /// User implementation of remove. Accepts key value.
            /// If returns promise, then considered async, otherwise return value is ignored.
            remove: function(key) {
                throw new Error("Not implemented");
            },
            /// User implementation of total count evaluation. Accepts arguments same as load. 
            /// Must return Number or promise(Number)
            totalCount: function(options) {
                throw new Error("Not implemented");
            }
        })
    };
})();