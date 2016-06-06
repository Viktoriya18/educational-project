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
			        	templateUrl: 'partials/2_years/second.html',
			        	controller: 'SecondController',
			        	controllerAs: 'vm'
			        })
			        .state('second.language', {
			        	url: '/language',
			        	templateUrl: 'partials/2_years/second-language.html',
			        	controller: 'SecondController',
			        	controllerAs: 'vm'
			        })
			        .state('second.vision', {
			        	url: '/vision',
			        	templateUrl: 'partials/2_years/second-vision.html',
			        	controller: 'SecondController',
			        	controllerAs: 'vm'
			        })
			        .state('second.hearing', {
			        	url: '/hearing',
			        	templateUrl: 'partials/2_years/second-hearing.html',
			        	controller: 'SecondController',
			        	controllerAs: 'vm'
			        })
			        .state('second.motility', {
			        	url: '/motility',
			        	templateUrl: 'partials/2_years/second-motility.html',
			        	controller: 'SecondMotilityController',
			        	controllerAs: 'vm'
			        })
			        .state('third', {
			        	url: '/third',
			        	templateUrl: 'partials/3_years/third.html',
			        	controller: 'SecondController',
			        	controllerAs: 'vm'
			        })
			        .state('third.language', {
			        	url: '/language',
			        	templateUrl: 'partials/3_years/third-language.html',
			        	controller: 'SecondController',
			        	controllerAs: 'vm'
			        })
			        .state('third.vision', {
			        	url: '/vision',
			        	templateUrl: 'partials/3_years/third-vision.html',
			        	controller: 'SecondController',
			        	controllerAs: 'vm'
			        })
			        .state('third.hearing', {
			        	url: '/hearing',
			        	templateUrl: 'partials/3_years/third-hearing.html',
			        	controller: 'SecondController',
			        	controllerAs: 'vm'
			        })
			        .state('third.motility', {
			        	url: '/motility',
			        	templateUrl: 'partials/3_years/third-motility.html',
			        	controller: 'SecondMotilityController',
			        	controllerAs: 'vm'
			        })
			        

	        });
	})();
