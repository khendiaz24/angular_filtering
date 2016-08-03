
// Controller w/o factory
// myApps.controller('dataListing', function($scope){
// 	$scope.names = [
// 		{'itemid':1, name:'Images 1', created:'test 1', updated:'test 1', author:'test 1', site:'test 1', language:'test 1', region:'test 1', page:'test 1', actions:'test 1'},
// 		{'itemid':1, name:'Images 2', created:'test 2', updated:'test 2', author:'test 2', site:'test 2', language:'test 2', region:'test 2', page:'test 2', actions:'test 2'},
// 		{'itemid':2, name:'Video 3', created:'test 3', updated:'test 3', author:'test 3', site:'test 3', language:'test 3', region:'test 3', page:'test 3', actions:'test 3'},
// 		{'itemid':2, name:'Video 4', created:'test 4', updated:'test 4', author:'test 4', site:'test 4', language:'test 4', region:'test 4', page:'test 4', actions:'test 4'},
// 		{'itemid':3, name:'Audio 5', created:'test 5', updated:'test 5', author:'test 5', site:'test 5', language:'test 5', region:'test 5', page:'test 5', actions:'test 5'},
// 		{'itemid':3, name:'Audio 6', created:'test 6', updated:'test 6', author:'test 6', site:'test 6', language:'test 6', region:'test 6', page:'test 6', actions:'test 6'},
// 	];
//
// 	$scope.filterList = [
// 		{id:1,fName:'Images'},
// 		{id:2,fName:'Video'},
// 		{id:3,fName:'Audio'},
// 	];
// });

/** TABLE LIST FILTER ***/

myApps.controller('dataListing', ['$scope','myData','myFilters',
	function($scope, myData, myFilters){
		$scope.dataName = myData;
		$scope.myfiltersData = myFilters;
		$scope.orderByMe = function(x){
			$scope.myOrderBy = x
		}
	}
])

myApps.factory('myData', function(){
	var myData = {};
	myData.dataList = [
		{'itemid':1, name:'Images 1', created:'test 1', updated:'test 1', author:'test 1', site:'test 1', language:'test 1', region:'test 1', page:'test 1', actions:'test 1'},
		{'itemid':1, name:'Images 2', created:'test 2', updated:'test 2', author:'test 2', site:'test 2', language:'test 2', region:'test 2', page:'test 2', actions:'test 2'},
		{'itemid':2, name:'Video 3', created:'test 3', updated:'test 3', author:'test 3', site:'test 3', language:'test 3', region:'test 3', page:'test 3', actions:'test 3'},
		{'itemid':2, name:'Video 4', created:'test 4', updated:'test 4', author:'test 4', site:'test 4', language:'test 4', region:'test 4', page:'test 4', actions:'test 4'},
		{'itemid':3, name:'Audio 5', created:'test 5', updated:'test 5', author:'test 5', site:'test 5', language:'test 5', region:'test 5', page:'test 5', actions:'test 5'},
		{'itemid':3, name:'Audio 6', created:'test 6', updated:'test 6', author:'test 6', site:'test 6', language:'test 6', region:'test 6', page:'test 6', actions:'test 6'},
	];
	return myData;
});

myApps.factory('myFilters', function(){
	var myFilters = {};
	myFilters.filterList = [
		{id:1,fName:'Images'},
		{id:2,fName:'Video'},
		{id:3,fName:'Audio'},
	];
	return myFilters;
});


/************  MODULE ***************/

myApps.controller('stControl', function($scope){
	$scope.controlName = {
		firstName: 'John',
		lastName: 'Doe',
		getFullName: function() {
			return this.firstName + " " + this.lastName;
		}
	}
});

/*******************************/

myApps.controller('stCtrl', function($scope){
	$scope.firstName = 'John';
	$scope.lastName = 'Doe';
	$scope.getFullName = function(){
		return $scope.firstName + " " + $scope.lastName;
	};
});

/************** Partial Data *****************/

myApps.controller('partitialData', function($scope, $http) {
		$http({
			method:'GET',
			url:'http://localhost/khen/Training/filter-directive/partialContent.html'
		}).then(function(response) {
			$scope.partialMade = response.data;
    }, function(response) {
			$scope.partialMade = "Something went wrong";
		});
});

/******** Data List *********/

myApps.controller('listData', function($scope) {
	$scope.testList = [
		{name:'Name1', age:'15'},
		{name:'Name2', age:'17'},
		{name:'Name3', age:'14'},
		{name:'Name4', age:'18'},
		{name:'Name5', age:'30'},
		{name:'Name6', age:'21'},
		{name:'Name7', age:'22'},
		{name:'Name8', age:'25'},
		{name:'Name9', age:'16'},
		{name:'Name10', age:'25'}
	];
	$scope.quantity = 5;
	$scope.orderProp = 'age';
});
