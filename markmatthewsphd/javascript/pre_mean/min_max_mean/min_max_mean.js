function minMaxAvg(arr) {
    var max = arr[0];
    var min = arr[0];
    var sum = arr[0];
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
        if (arr[i] < min) {
            min = arr[i];
        }
        sum = sum + arr[i];
        avg = sum / arr.length;
    }
    console.log('The minimum is ' + min + ', the maximum is ' + max + ', the sum is ' + sum + ', and the arithmetic mean is ' + avg);
    return [max, min, sum, avg];
}

var array = [4, 5, 6, 6.25, 7, 8, 10.92, 9, 8, 22, 22.17, -5.5];

minMaxAvg(array);