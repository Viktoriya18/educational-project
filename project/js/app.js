(function() {
	    "use strict"
	    angular
	        .module('myApp', ['ui.router', 'slick', 'as.sortable'])
	        .config(
	            function($stateProvider, $urlRouterProvider) {
	            	$urlRouterProvider.otherwise('/home');
	                $stateProvider
	                .state('home', {
			            url: '/home',
			            templateUrl: 'partials/home.html',
			            controller: 'HomeController',
	                    controllerAs: 'vm'
			        })
			        .state('about', {
			            url: '/about',
			            templateUrl: 'partials/about.html',
			            controller: 'AboutController',
	                    controllerAs: 'vm'
			        })
			        .state('second', {
			        	url: '/second',
			        	templateUrl: 'partials/second.html',
			        	controller: 'SecondController',
			        	controllerAs: 'vm'
			        })
			        .state('second.language', {
			        	url: '/language',
			        	templateUrl: 'partials/second-language.html',
			        	controller: 'SecondController',
			        	controllerAs: 'vm'
			        })
			        .state('second.vision', {
			        	url: '/vision',
			        	templateUrl: 'partials/second-vision.html',
			        	controller: 'SecondController',
			        	controllerAs: 'vm'
			        })
			        .state('second.hearing', {
			        	url: '/hearing',
			        	templateUrl: 'partials/second-hearing.html',
			        	controller: 'SecondController',
			        	controllerAs: 'vm'
			        })
			        .state('second.motility', {
			        	url: '/motility',
			        	templateUrl: 'partials/second-motility.html',
			        	controller: 'SecondMotilityController',
			        	controllerAs: 'vm'
			        })

	        });
	})();
