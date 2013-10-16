module.exports = [ {
    isApi: true,
    priority: 1000.0003,
    key: "Button",
    style: {
        top: "10dp",
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000"
    }
}, {
    isClass: true,
    priority: 10000.0002,
    key: "container",
    style: {
        backgroundColor: "white",
        layout: "vertical"
    }
}, {
    isId: true,
    priority: 100000.0004,
    key: "moviestable",
    style: {
        top: "50dp",
        bottom: 0,
        backgroundColor: "#FFF"
    }
} ];