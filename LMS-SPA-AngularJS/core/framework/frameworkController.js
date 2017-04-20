angular.module("framework").controller("frameworkController",
    ["$scope",
        function ($scope) {

            $scope.$on('menu-item-selected-event', function (evt, data) {
                $scope.routeString = data.route;
            });
        }
    ]);