exports.definition = {
	config: {

		adapter: {
			type: "sql",
			collection_name: "user_accounts",
			db_file: "/sampledb.sqlite",
			db_name: "sampledb",
			idAttribute: "user_id",
			remoteBackup:false
		}
	},
	extendModel: function(Model) {
		_.extend(Model.prototype, {
			// extended functions and properties go here
		});

		return Model;
	},
	extendCollection: function(Collection) {
		_.extend(Collection.prototype, {
			// extended functions and properties go here
		});

		return Collection;
	}
};