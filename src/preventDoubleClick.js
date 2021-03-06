angular.module('preventDoubleClick', [])


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
                        ele.removeAttr('disabled');
                        ele.html(defaultSaveText);
                    }
                };
                $scope.disable = function(){
                    ele.attr('disabled', 'disabled');
                    if ($scope.loadingText != "undefined") ele.html($scope.loadingText);
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
