var angapp = angular.module('controllers', []);

/**
* @ngdoc Controller
* @name AppController
* @requires $scope
* @requires $mdDialog
* @requires $mdSidenav
* @requires $q
*/
angapp.controller('AppController', function($scope, $mdDialog, $mdSidenav, $mdBottomSheet, $q) {

	/**
     * Toggles side menu based on Device's on-click or on-touch event
     * @memberof AppController
     * @function toggleList
     */
	$scope.toggleList = function() {
      var pending = $mdBottomSheet.hide() || $q.when(true);

      pending.then(function(){
        $mdSidenav('right').toggle();
      });
    };

	$scope.showListBottomSheet = function(event) {
	    $mdBottomSheet.show({
	      template: '<md-bottom-sheet class="md-grid"><md-subheader class="md-primary">Share</md-subheader><md-divider></md-divider><md-button ng-repeat="item in items" class="md-grid-item-content" ng-class="item.class" target="_blank" ng-href="{{item.url}}" style="padding: 10px;" aria-label="{{item.name}}"><i class="fa fa-4x" ng-class="item.icon"></i></md-button></md-bottom-sheet>',
	      controller: function($scope, $mdBottomSheet){
			  $scope.items = [
		            { name: 'Share on Twitter', icon: 'fa-twitter', class: 'md-primary md-hue-2', url: 'https://twitter.com/maxy_ermayank'},
		            // { name: 'Share on Google+', icon: 'fa-google-plus', class: 'md-warn md-hue-2', url: 'https://plus.google.com/u/0/115205217580713327517/posts/p/pub'},
		            // { name: 'Share on Facebook', icon: 'fa-facebook', class: 'md-primary', url: 'https://www.facebook.com/maxy.ermayank'},
		            { name: 'Share on Linkedin', icon: 'fa-linkedin', class: 'md-primary', url: 'https://www.linkedin.com/in/mayank-patel-b9141210'},
		            { name: 'Github', icon: 'fa-github-alt', class: 'md-default', url: 'https://github.com/maxyermayank'},
		            { name: 'Codepen', icon: 'fa-codepen', class: 'md-default', url: 'http://codepen.io/maxyermayank/'},
		            { name: 'Plunker', icon: 'fa-arrow-circle-down', class: 'md-default', url: 'http://plnkr.co/users/maxyermayank'}
		          ];
			  $scope.listItemClick = function($index) {
			    var clickedItem = $scope.items[$index];
			    $mdBottomSheet.hide(clickedItem);
			  };
		  },
	      targetEvent: event
	    }).then(function(clickedItem) {
	      //$scope.alert = clickedItem.name + ' clicked!';
	    });
	 };

	 $scope.skills = ['ActiveMQ', 'Ajax', 'AngularJS', 'Ant', 'Apache JMeter', 'App Dynamics',
	 									'Artifactory', 'C', 'C++', 'CSS3', 'CVS', 'Docker', 'ETL', 'Eclipse',
										'Edit Plus', 'Flex', 'Flex Builder', 'Github', 'Gradle', 'Grunt', 'Gulp',
										'HTML5', 'Hibernate', 'Intellij Idea', 'Ionic Framework', 'J2EE', 'JMS',
										'JMX', 'JQuery', 'JSF', 'JSON', 'JScape MFT Server', 'JUnit', 'Jasmine',
										'Java', 'Jenkins', 'Macromedia Dream Weaver', 'Maven', 'Microsoft Office',
										'Microsoft Project', 'Mongo', 'NGinx', 'Net Beans', 'Oracle Jdeveloper',
										'Play Framework', 'Protractor', 'Putty', 'REST', 'Robo Mongo', 'SBT',
										'SQL Manager', 'SVN', 'SauceLab', 'Spring', 'Spring Web Flow', 'Sublime',
										'Sun Java Wireless Toolkit', 'Sun Office', 'Swagger', 'Terracotta',
										'Ultra Edit', 'VMware Fusion', 'Visual Basics', 'Web Sphere', 'WinCVS',
										'WinSCP', 'XML', 'Xcode'];
});
