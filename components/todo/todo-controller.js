"use strict";
{
    angular.module('app')
        .controller('TodoController', function() {
            const $ctrl = this;
            $ctrl.list = [
                {items: "Walk the dog", complete: true}, 
                {items: "Go to the store", complete: false}, 
                {items: "Get gas", complete: true}, 
                {items: "Wash the Car", complete: true}];
        });
}