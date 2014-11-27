angular.module('preventDoubleClick', [])

    .config([function () {

    }])

    .run(['$rootScope', '$http', 'ngPodium', function ($rootScope, $http, ngPodium) {

    }])


    .directive('preventDouble', ['$rootScope', function($rootScope) {
        return {
            restrict: 'A',
            scope: {
                loadingText: "@",
                id: '@preventDouble'
            },
            link: function ($scope, ele) {
                var defaultSaveText = ele.html();

                ele.bind('click', function(){
                    $scope.disable();
                });
                ele.bind('keypress', function(ev){
                    if (ev.charCode == 13 || ev.charCode == 32 ){
                        $scope.disable();
                    }
                 });

                $rootScope.$on('preventDoubleClick', function(event, arg){
                    if (arg.action == 'enable'){
                        $scope.enable(arg.id);
                    }
                });

                $scope.enable = function(id){
                    if (typeof id =='undefined' || $scope.id == id) {
                        ele.attr('disabled', 'disabled');
                        if ($scope.loadingText != "undefined") ele.html($scope.loadingText);
                    }
                };
                $scope.disable = function(){
                    ele.removeAttr('disabled');
                    ele.html(defaultSaveText);
                }
            }
        };
    }])

    .service('preventDoubleClick', ['$rootScope', function ($rootScope) {

        return {
            enable : function(id){
                $rootScope.$broadcast('preventDoubleClick', {
                    action:'enable',
                    id:id
                });
            }
        }

    }]);
