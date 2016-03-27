angular.module('alurapic').controller('FotosController', function($scope, $http) {

	$scope.fotos = [];
	$scope.filtro = '';

	$http.get('v1/fotos')
	.success(function(fotos) {
		$scope.fotos = fotos;
	})
	.error(function(error) {
		console.log(error);
	});


	/*
	var promise = $http.get('v1/fotos');

	promise.then(function(callback) {
		$scope.fotos = callback.data;
	}).catch(function(error) {
		console.log(error);
	});

	*/

});