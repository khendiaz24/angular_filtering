
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
