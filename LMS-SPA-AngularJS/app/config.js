﻿angular.module('libraryApp').config(function ($provider) {
    $provider.decorator("$exceptionHandler", ["$delegate", function ($delegate) {

        return function (exception, cause) {
            $delegate(exception, cause);
            alert(exception.message);
        };
    }]);

});