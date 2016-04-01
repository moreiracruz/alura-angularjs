angular.module('alurapic').controller('FotoController', function($scope, $routeParams, fotosResource, cadastroDeFotos) {

	$scope.foto = {};
	$scope.message = '';

	if ($routeParams.fotoId) {

		fotosResource.get({fotoId : $routeParams.fotoId}, function(foto) {
			$scope.foto = foto;
		}, function(error) {
			$scope.message = 'Foto foi possível obter a foto!';
			console.log(error);
		})

	};

	$scope.submeter = function() {

		if ($scope.formulario.$valid) {

			cadastroDeFotos.cadastrar($scope.foto)

			.then(function(dados) {

				$scope.message = dados.mensagem;

				if (dados.inclusao) {
					$scope.foto = {};
				}

				//$scope.focado = true;

			})
			.catch(function(erro) {

				$scope.message = erro.mensagem;

			});

		}

	};

});