// Define the AngularJS module and controller
angular.module('sortingApp', [])
  .controller('SortingController', function($scope) {
      
    // Initial array for sorting
    $scope.array = [];
    $scope.sortedArray = [];

    // Function to handle the input array and sort it
    $scope.sortArray = function() {
        if ($scope.inputArray) {
            // Convert input string to an array of numbers
            $scope.array = $scope.inputArray.split(',').map(function(num) {
                return parseInt(num.trim(), 10);
            });

            // Perform bubble sort
            $scope.sortedArray = bubbleSort($scope.array);
        }
    };

    // Bubble Sort Algorithm
    function bubbleSort(arr) {
        let len = arr.length;
        for (let i = 0; i < len - 1; i++) {
            for (let j = 0; j < len - i - 1; j++) {
                if (arr[j] > arr[j + 1]) {
                    // Swap elements
                    let temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                }
            }
        }
        return arr;
    }
  });
