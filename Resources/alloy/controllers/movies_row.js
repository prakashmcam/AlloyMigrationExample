function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "movies_row";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    var $model = arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.movies_row = Ti.UI.createTableViewRow({
        height: "60dp",
        backgroundColor: "#fff",
        id: "movies_row"
    });
    $.__views.movies_row && $.addTopLevelView($.__views.movies_row);
    $.__views.title = Ti.UI.createLabel({
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        top: "7dp",
        left: "7dp",
        font: {
            fontSize: "15dp",
            fontWeight: "bold"
        },
        id: "title",
        text: "undefined" != typeof $model.__transform["title"] ? $model.__transform["title"] : $model.get("title")
    });
    $.__views.movies_row.add($.__views.title);
    $.__views.subtitle = Ti.UI.createLabel({
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        bottom: "7dp",
        left: "14dp",
        font: {
            fontSize: "16dp",
            fonWeight: "normal"
        },
        id: "subtitle",
        text: "undefined" != typeof $model.__transform["subtitle"] ? $model.__transform["subtitle"] : $model.get("subtitle")
    });
    $.__views.movies_row.add($.__views.subtitle);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;