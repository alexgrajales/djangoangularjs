
(function () {
    'use strict';
    angular.module('scrumboard.demo', [])
        .controller('ScrumboardController', ['$scope', ScrumboardController]);

    function ScrumboardController($scope) {
        $scope.add = function (list, title) {
            var card = {
                title: title
            };
            list.cards.push(card);

        }

        $scope.data = [
            {
                name: 'django demo',
                cards:
                [
                    {
                        title: 'create models'
                    },
                    {
                        title: 'create views'
                    },
                    {
                        title: 'migrate database'
                    },
                ]
            },
            {
                name: 'angular dema',
                cards:
                [
                    {
                        title: 'write HTML'
                    },
                    {
                        title: 'write JavaScript'
                    },
                    {
                        title: 'write css'
                    },
                ]
            },
        ];
    }
}());