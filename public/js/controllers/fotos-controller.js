angular.module('alurapic').controller('FotosController', function($scope, $http) {

	$scope.fotos = [];
	$scope.filtro = '';
	$scope.message = '';

	$http.get('v1/fotos')
	.success(function(fotos) {
		$scope.fotos = fotos;
	})
	.error(function(error) {
		console.log(error);
	});


	$scope.remover = function(foto) {
		$http.delete('v1/fotos/' + foto._id)
		.success(function() {
			var indice = $scope.fotos.indexOf(foto);
			$scope.fotos.splice(indice, 1);
			$scope.message = 'Foto ' + foto.titulo + ' removida com sucesso!';
		})
		.error(function(error) {
			$scope.message = 'Não foi possível remover a foto ' + foto.titulo;
		});
	};

});