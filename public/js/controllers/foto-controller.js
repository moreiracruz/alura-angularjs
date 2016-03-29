angular.module('alurapic').controller('FotoController', function($scope, $http, $routeParams) {

	$scope.foto = {};
	$scope.message = '';

	if ($routeParams.fotoId) {
		$http.get('v1/fotos/' + $routeParams.fotoId)
		.success(function(foto) {
			$scope.foto = foto;
		})
		.error(function(error) {
			$scope.message = 'Foto foi possível obter a foto!';
			console.log(error);
		})
	};

	$scope.submeter = function() {
		
		if ($scope.formulario.$valid) {

			if ($scope.foto._id) {

				$http.put('v1/fotos/' + $scope.foto._id, $scope.foto)
				.success(function() {
					$scope.foto = {};
					$scope.message = 'A foto ' + $scope.foto.titulo + ' foi alterada com sucesso';
				})
				.error(function(error) {
					$scope.message = 'Foto não pode ser alterada';
					console.log(error);
				})

			} else {

				$http.post('v1/fotos', $scope.foto)
				.success(function() {
					$scope.foto = {};
					$scope.message = 'Foto cadastrada com sucesso';
				})
				.error(function(error) {
					$scope.message = 'Foto não pode ser cadastrada';
					console.log(error);
				});


			};


		}

	};

});