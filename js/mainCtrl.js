angular.module('friendsList')
	.controller('mainCtrl', function ($scope) {
		$scope.friends = ['Ty', 'Izzy', 'Lessis'];
		$scope.newFriend = '';
		$scope.addFriend = function(name){
			$scope.friends.push(name);
			$scope.newFriend = '';
		};
	});