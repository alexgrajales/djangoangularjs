
(function () {
    'use strict';
    angular.module('scrumboard.demo')
        .directive('ScrumboardCard', CardDirective);

    function CardDirective() {
        return {
            templateUrl: '/static/scrumboard/card.html'
        };
    }       
})();