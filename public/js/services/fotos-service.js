angular.module('fotosService', ['ngResource'])
.factory('fotosResource', function($resource) {

	return $resource('v1/fotos/:fotoId', null, {
		update: {
			method: 'PUT'
		}
	})

})
.factory("cadastroDeFotos", function(fotosResource, $q, $rootScope) {

	var service = {};

	service.cadastrar = function(foto) {

		return $q(function(resolve, reject) {

			if(foto._id) {

				fotosResource.update({fotoId: foto._id}, foto, function() {

					resolve({

						mensagem: 'Foto ' + foto.titulo + ' atualizada com sucesso',
						inclusao: false

					});

				}, function(erro) {

					console.log(erro);

					reject({

						mensagem: 'Não foi possível atualizar a foto ' + foto.titulo

					});

				});

			} else {

				fotosResource.save(foto, function() {

					resolve({

						mensagem: 'Foto ' + foto.titulo + ' incluída com sucesso',
						inclusao: true

					});

				}, function(erro) {

					console.log(erro);

					reject({

						mensagem: 'Não foi possível incluir a foto ' + foto.titulo

					});

				});

			}

			$rootScope.$broadcast('fotoCadastrada');

		});

	};

	return service;

});;