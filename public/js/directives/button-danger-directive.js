angular.module('buttonDangerDirective', [])
.directive('buttonDanger', function() {

	var ddo = {};

	ddo.restrict = 'E';
	ddo.scope = {
		titulo: '@',
		acao: '&'
	};

	ddo.template = '<button ng-click="acao(foto)" class="btn btn-danger btn-block">{{titulo}}</button>';

	return ddo;
});
