var qs = require('querystring');
var oauth2 = require('oauth').OAuth2;

var Client = function(oauth_config) {
	this.client_id = oauth_config.client_id;
	this.client_secret = oauth_config.secret;
	this.serverToken = oauth_config.serverToken;

	this.oauth2 = new oauth2({
		site: 'https://login.uber.com/oauth/authorize',
		client_id: this.client_id,
		client_secret: this.client_secret,

	})
}