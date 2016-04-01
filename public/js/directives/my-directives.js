angular.module('myDirectives', [])
.directive('panelBootstrap', function() {
	var ddo = {};

	ddo.restrict = 'AE';
	ddo.scope = {
		titulo: '@'
	};

	ddo.transclude = true;

	ddo.templateUrl = 'js/directives/panel.html';

	return ddo;
})
.directive('foto', function() {
	var ddo = {};

	ddo.restrict = 'E';
	ddo.scope = {
		url: '@',
		titulo: '@'
	};

	ddo.templateUrl = 'js/directives/foto.html';

	return ddo;
})
.directive('meuFocus', function() {

	var ddo = {};

	ddo.restrict = 'A';
	//ddo.scope = {
	//	focado: '='
	//}

	ddo.link = function(scope, element) {

		//scope.$watch('focado', function() {
			//if (scope.focado) {
			//	element[0].focus();
			//	scope.focado = false;
			//}
		//});

		scope.$on('fotoCadastrada', function() {

			element[0].focus();

		});

	}

	return ddo;
});
