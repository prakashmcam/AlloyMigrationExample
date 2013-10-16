var movies = Alloy.Collections.movies;
function doClick(e) {
	var user_accounts = Alloy.createCollection('user_accounts'); 
	var usernameValue = $.username.value;
	user_accounts.fetch({query: { statement: 'SELECT * from user_accounts where user_name = ?', params: [usernameValue] }}); // Grab data from persistent storage 
    if(user_accounts.length > 0)
    	alert('user_accounts = '+JSON.stringify(user_accounts));
    else
    	alert("User account not found");
	
	
	 // Grab data from persistent storage 
    //alert('movies = '+JSON.stringify(movies));
}
movies.fetch();
$.index.open();
