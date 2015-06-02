var angapp = angular.module('blog', [ 'ngAnimate', 'ngMessages', 'ui.router', 'ngSanitize', 'ngTouch',
                                      'ngAria', 'ngMaterial', 'controllers', 'directives', 'services', 'filters'])
.config(function($stateProvider, $urlRouterProvider, $httpProvider, $compileProvider, $mdThemingProvider) {
	// $compileProvider.debugInfoEnabled(false);
	// $httpProvider.useApplyAsync(true);
	// $httpProvider.interceptors.push('APIInterceptor');
	//$locationProvider.html5Mode(true);
	
	var customBlueMap = $mdThemingProvider.extendPalette('light-blue', {
	    'contrastDefaultColor': 'light',
	    'contrastDarkColors': ['50'],
	    '50': 'ffffff'
	  });
	
	$mdThemingProvider.definePalette('customBlue', customBlueMap);
	$mdThemingProvider.theme('default')
	    .primaryPalette('customBlue', {
	      'default': '900',
	      'hue-1': '50'
	    })
	    .accentPalette('pink');
	$mdThemingProvider.theme('input', 'default')
	        .primaryPalette('grey');
	
	  // $mdThemingProvider.theme('default')
	  //     .primaryPalette('brown')
	  //     .accentPalette('red');
$httpProvider.defaults.useXDomain = true;
	delete $httpProvider.defaults.headers.common['X-Requested-With'];
	
	$stateProvider
	.state('home', {
		url: '/',
		templateUrl: 'views/list.html',
        controller: function(){}
	});
	$urlRouterProvider.otherwise('/');
})

.run(function($state, $rootScope) {
	
	$rootScope.state = $state;
	$rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams){});

	$rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){
		$rootScope.state = toState;
	});

	$rootScope.$on('$stateChangeError', function(event, toState, toParams, fromState, fromParams, error){});

	$rootScope.$on('$stateNotFound', function(event, unfoundState, fromState, fromParams){});

})
.factory('APIInterceptor', function($q, $rootScope) {
	var activeRequests = 0;  
	return {
		'request' : function(config) {
			return config || $q.when(config);
		},

		'requestError' : function(rejection) {
			return $q.reject(rejection);
		},

		'response' : function(response) {
			$rootScope.$broadcast(response.data.cause);
			return response || $q.when(response);
		},

		'responseError' : function(rejection) {
			return $q.reject(rejection);
		}
	};
});
