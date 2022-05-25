/* Magic Mirror Config Sample
 *
 * By Michael Teeuw https://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information on how you can configure this file
 * See https://github.com/MichMich/MagicMirror#configuration
 *
 */

var config = {
	address: "localhost", 	// Address to listen on, can be:
							// - "localhost", "127.0.0.1", "::1" to listen on loopback interface
							// - another specific IPv4/6 to listen on a specific interface
							// - "0.0.0.0", "::" to listen on any interface
							// Default, when address config is left out or empty, is "localhost"
	port: 8080,
	basePath: "/", 	// The URL path where MagicMirror is hosted. If you are using a Reverse proxy
					// you must set the sub path here. basePath must end with a /
	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"], 	// Set [] to allow all IP addresses
															// or add a specific IPv4 of 192.168.1.5 :
															// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
															// or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
															// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	useHttps: false, 		// Support HTTPS or not, default "false" will use HTTP
	httpsPrivateKey: "", 	// HTTPS private key path, only require when useHttps is true
	httpsCertificate: "", 	// HTTPS Certificate path, only require when useHttps is true

	language: "es",
	locale: "es-ES",
	logLevel: ["INFO", "LOG", "WARN", "ERROR"], // Add "DEBUG" for even more logging
	timeFormat: 24,
	units: "metric",
	// serverOnly:  true/false/"local" ,
	// local for armv6l processors, default
	//   starts serveronly and then starts chrome browser
	// false, default for all NON-armv6l devices
	// true, force serveronly mode, because you want to.. no UI on this device

	modules: [
		{
			module: "alert",
		},
		{
			module: "updatenotification",
			position: "top_bar"
		},
		{
			module: "clock",
			position: "top_left"
		},
		{
			module: 'MMM-Snow',
			position: 'fullscreen_above',
			config: { // See 'Configuration options' for more information.
				flakeCount: 100,
				theme: "winter"			
			}
		},
		{
			module: "calendar",
			header: "Festivos en España",
			position: "top_left",
			config: {
				calendars: [
					{
						symbol: "calendar-check",
						url: "webcal://calendar.google.com/calendar/ical/es.spain%23holiday%40group.v.calendar.google.com/public/basic.ics"					}
				]
			}
		},
		{
			module: "compliments",
			position: "lower_third"
		},
		{
			module: "weather",
			position: "top_right",
			config: {
				weatherProvider: "openweathermap",
				type: "current",
				location: "Rivas-Vaciamadrid",
				locationID: "3107112", //ID from http://bulk.openweathermap.org/sample/city.list.json.gz; unzip the gz file and find your city
				apiKey: "4a1486ccfe14e8e2d247cdfeebd63737"
			}
		},
		{
			module: "weather",
			position: "top_right",
			header: "Predicción",
			config: {
				weatherProvider: "openweathermap",
				type: "forecast",
				location: "Rivas-Vaciamadrid",
				locationID: "3107112", //ID from http://bulk.openweathermap.org/sample/city.list.json.gz; unzip the gz file and find your city
				apiKey: "4a1486ccfe14e8e2d247cdfeebd63737"
			}
		},
		{
			module: "newsfeed",
			position: "bottom_bar",
			config: {
				feeds: [
					{
						title: "Diario de Rivas",
						url: "https://www.diarioderivas.es/feed/"
					}
				],
				showSourceTitle: true,
				showPublishDate: true,
				broadcastNewsFeeds: true,
				broadcastNewsUpdates: true
			}
		},
		
		{
		  module: "MMM-NowPlayingOnSpotify",
		  position: "top_left",

		  config: {
		    clientID: "3efa99351f944794b08d00a84a73cc55",
		    clientSecret: "a710ee9066e34007a2bac4b09562b4a2",
		    accessToken: "BQB0s1zfmdqBCgg9iOJf41zfzTKJQq9lOvcn5GZBzxc-oflfsVCfgOVJjxoxdbYsnnV2o562DKzsTW0dkZVZEu9v9J0pBg6uXiZFzVqfyQfdnIFVBNy6MDUoYLXn5PeJSTYkROIunModni87SL8et_Ne8tIKhaaKXlZ7rIOCoQ",
		    refreshToken: "AQCl3yxjCt74WiXqpCYjjivsgKQ2aBbfP9FKbFK1CfposDa51tlDPWmhJNe7y3Uq3w2jVjfMJI_l8EqEbEQzjDkMqLXN2-2prXpcGOxjCzYV4Cg1yeSiL7R5EZVqcxmCft0"
		  }
		},
		
		{
		    module: 'MMM-Remote-Control',
		    config: {
		      apiKey: 'jordanboy2007'
		    },
		},
		{
			module: 'MMM-Sounds',
			config: {
				startupSound:   'wobble.wav',
				quietTimeStart: '23:00',      // 11pm
				quietTimeEnd:   '07:00'       // 7am
			}
		},
		

		
				

	]
};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}
