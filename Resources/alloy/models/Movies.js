exports.definition = {
    config: {
        columns: {
            id: "INTEGER PRIMARY KEY AUTOINCREMENT",
            title: "TEXT",
            subtitle: "TEXT",
            image: "TEXT"
        },
        adapter: {
            type: "sql",
            collection_name: "movies",
            idAttribute: "id"
        }
    }
};

var Alloy = require("alloy"), _ = require("alloy/underscore")._, model, collection;

model = Alloy.M("movies", exports.definition, [ function(migration) {
    migration.name = "movies";
    migration.id = "20130812093432";
    migration.up = function(migrator) {
        migrator.createTable({
            columns: {
                id: "INTEGER PRIMARY KEY AUTOINCREMENT",
                title: "TEXT",
                subtitle: "TEXT",
                image: "TEXT"
            }
        });
    };
    migration.down = function(migrator) {
        migrator.dropTable("movies");
    };
}, function(migration) {
    migration.name = "movies";
    migration.id = "201308120941308";
    var products = [];
    for (var i = 0; 500 > i; i++) 0 === i % 7 ? products.push({
        title: "This is the title",
        subtitle: "This is the slightly more verbose subtitle",
        image: i % 2 ? "/appc.png" : "/alloy.png"
    }) : i % 2 ? products.push({
        title: "This is the title with subtitle",
        subtitle: "This is the slightly more verbose subtitle"
    }) : products.push({
        title: "This is the lonely title"
    });
    migration.up = function(migrator) {
        for (var i = 0; products.length > i; i++) migrator.insertRow(products[i]);
    };
    migration.down = function(migrator) {
        for (var i = 0; products.length > i; i++) migrator.deleteRow(products[i]);
    };
} ]);

collection = Alloy.C("movies", exports.definition, model);

exports.Model = model;

exports.Collection = collection;