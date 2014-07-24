window.R3MobileApp = window.R3MobileApp || {};

$(function() {
    // Uncomment the line below to disable platform-specific look and feel and to use the Generic theme for all devices


    //Object.keys(localStorage)
    //  .forEach(function (key) {          
    //          localStorage.removeItem(key);
    //      }
    //  });
      //localStorage.clear();
    //DevExpress.devices.current({ platform: "generic" });

    R3MobileApp.app = new DevExpress.framework.html.HtmlApplication({
        namespace: R3MobileApp,
        layoutSet: DevExpress.framework.html.layoutSets[R3MobileApp.config.layoutSet],
        navigation: R3MobileApp.config.navigation,
        disableViewCache: true
    });
    R3MobileApp.app.router.register(":view/:id", { view: "home", id: undefined });

    R3MobileApp.app.navigate();
});
