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
});


            
                
                    
                
                
                    
                
            
