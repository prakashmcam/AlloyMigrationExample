exports.definition = {
    config: {
        adapter: {
            type: "sql",
            collection_name: "user_accounts",
            db_file: "/sampledb.sqlite",
            db_name: "sampledb",
            idAttribute: "user_id",
            remoteBackup: false
        }
    },
    extendModel: function(Model) {
        _.extend(Model.prototype, {});
        return Model;
    },
    extendCollection: function(Collection) {
        _.extend(Collection.prototype, {});
        return Collection;
    }
};

var Alloy = require("alloy"), _ = require("alloy/underscore")._, model, collection;

model = Alloy.M("user_accounts", exports.definition, []);

collection = Alloy.C("user_accounts", exports.definition, model);

exports.Model = model;

exports.Collection = collection;