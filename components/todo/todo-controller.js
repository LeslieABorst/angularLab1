"use strict";
{
    angular.module('app')
        .controller('TodoController', function() {
            const $ctrl = this;
            $ctrl.list = [
                {items: "Walk the dog", complete: true}, 
                {items: "Go to the store", complete: true}, 
                {items: "Get gas", complete: true}, 
                {items: "Wash the Car", complete: true}];

            $ctrl.addTask = function() {
                    $ctrl.list.push({items: $ctrl.newTask, complete: true});
                    $ctrl.newtask = "";
                };

            $ctrl.removeTask = function(index) {
                $ctrl.list.splice(index, 1);
            };

            $ctrl.completeTask = function(todo) {
                todo.complete = false;
            }

            $ctrl.undoTask = function(todo) {
                todo.complete = true;
            }
        });
}