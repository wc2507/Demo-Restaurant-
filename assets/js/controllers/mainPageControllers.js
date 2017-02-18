angular.module('app')
    // header text controller
    .run(['$anchorScroll',function($anchorScroll){
        $anchorScroll.yOffset = 50;
    }])
    .controller('mainPageCtr',['$scope','$http','$state','$document',function($scope,$http,$state,$document){
        $scope.makeRes = "makeRes";
        $scope.checkStatus = "checkStatus";
        $scope.anchor1 = "anchor1";
        $scope.restaurantName = "DeMo Restaurant";
        $scope.slogan = "Exquisite Food Experience";
        $scope.changeLocation = function(targetState,targetAnchor){
            $state.go(targetState);
            var someElement = angular.element(document.getElementById(targetAnchor));
            $document.scrollToElement(someElement, 30, 500);
        }
    }])
