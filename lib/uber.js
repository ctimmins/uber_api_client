var qs = require('querystring');
var oauth2 = require('oauth').OAuth2;

var Client = function(oauth_config) {
	this.client_id = oauth_config.client_id;
	this.client_secret = oauth_config.secret;
	this.serverToken = oauth_config.serverToken;

	this.oauth2 = new oauth2({
		client_id: this.client_id,
		client_secret: this.client_secret,
		site: 'https://login.uber.com/oauth/authorize'
	});

	return this;
};

Client.prototype.getAuthorizationUri = function(scope, state, redirect_uri) {
	var authURI = this.oauth.authCode.authorizeURL({
		redirect_uri: redirect_uri,
		scope: scope.scope,
		state: state
	});

	return authURI;
}

var createClient = function(oauth_config) {
	var uberClient = new Client(oauth_config);
	

	return uberClient;
}