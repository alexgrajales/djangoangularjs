
(function () {
    'use strict';
    angular.module('scrumboard.demo', [])
        .controller('ScrumboardController', ['$scope', '$http', ScrumboardController]);

    function ScrumboardController($scope, $http) {
        $scope.add = function (list, title) {
            var card = {
                list: list.id,
                title: title
            };
            $http.post('/scrumboard/cards/', card)
                .then(function (response) {
                    list.cards.push(response.data);
                },
                function () {
                    alert('could not create card')
                }
                );


        }

        $scope.data = [];
        $http.get('/scrumboard/lists/').then(function (response) {
            $scope.data = response.data;
        });
        // $scope.data = [
        //     {
        //         name: 'django demo',
        //         cards:
        //         [
        //             {
        //                 title: 'create models'
        //             },
        //             {
        //                 title: 'create views'
        //             },
        //             {
        //                 title: 'migrate database'
        //             },
        //         ]
        //     },
        //     {
        //         name: 'angular dema',
        //         cards:
        //         [
        //             {
        //                 title: 'write HTML'
        //             },
        //             {
        //                 title: 'write JavaScript'
        //             },
        //             {
        //                 title: 'write css'
        //             },
        //         ]
        //     },
        // ];
    }
}());