function Controller() {
    function __alloyId6() {
        __alloyId6.opts || {};
        var models = __alloyId5.models;
        var len = models.length;
        var rows = [];
        for (var i = 0; len > i; i++) {
            var __alloyId3 = models[i];
            __alloyId3.__transform = {};
            var __alloyId4 = Alloy.createController("movies_row", {
                $model: __alloyId3
            });
            rows.push(__alloyId4.getViewEx({
                recurse: true
            }));
        }
        $.__views.moviestable.setData(rows);
    }
    function doClick() {
        var user_accounts = Alloy.createCollection("user_accounts");
        var usernameValue = $.username.value;
        user_accounts.fetch({
            query: {
                statement: "SELECT * from user_accounts where user_name = ?",
                params: [ usernameValue ]
            }
        });
        user_accounts.length > 0 ? alert("user_accounts = " + JSON.stringify(user_accounts)) : alert("User account not found");
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.index = Ti.UI.createWindow({
        backgroundColor: "white",
        layout: "vertical",
        id: "index"
    });
    $.__views.index && $.addTopLevelView($.__views.index);
    $.__views.username = Ti.UI.createTextField({
        id: "username",
        width: "200dp",
        hintText: "User name"
    });
    $.__views.index.add($.__views.username);
    $.__views.clickMeBtn = Ti.UI.createButton({
        top: "10dp",
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        title: "Click Me",
        id: "clickMeBtn"
    });
    $.__views.index.add($.__views.clickMeBtn);
    doClick ? $.__views.clickMeBtn.addEventListener("click", doClick) : __defers["$.__views.clickMeBtn!click!doClick"] = true;
    $.__views.moviestable = Ti.UI.createTableView({
        top: "50dp",
        bottom: 0,
        backgroundColor: "#FFF",
        id: "moviestable"
    });
    $.__views.index.add($.__views.moviestable);
    var __alloyId5 = Alloy.Collections["movies"] || movies;
    __alloyId5.on("fetch destroy change add remove reset", __alloyId6);
    exports.destroy = function() {
        __alloyId5.off("fetch destroy change add remove reset", __alloyId6);
    };
    _.extend($, $.__views);
    var movies = Alloy.Collections.movies;
    movies.fetch();
    $.index.open();
    __defers["$.__views.clickMeBtn!click!doClick"] && $.__views.clickMeBtn.addEventListener("click", doClick);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;