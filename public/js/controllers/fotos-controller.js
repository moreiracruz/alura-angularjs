angular.module('alurapic').controller('FotosController', function($scope, fotosResource) {

	$scope.fotos = [];
	$scope.filtro = '';
	$scope.message = '';

	fotosResource.query(function(fotos){
		$scope.fotos = fotos;
	}, function(error) {
		console.log(error);
	});

	$scope.remover = function(foto) {

		fotosResource.delete({fotoId : foto._id}, function() {
			var indice = $scope.fotos.indexOf(foto);
			$scope.fotos.splice(indice, 1);
			$scope.message = 'Foto ' + foto.titulo + ' removida com sucesso!';
		}, function(error) {
			$scope.message = 'Não foi possível remover a foto ' + foto.titulo;
		});

	};

});