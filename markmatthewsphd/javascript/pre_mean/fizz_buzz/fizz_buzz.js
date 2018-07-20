function fizzbuzz(n) {
    for (var i = 1; i <= n; i++) {

        if (i % 15 === 0)
            // i = 'FizzBuzz';
            console.log('FizzBuzz');

        else if (i % 3 === 0)
            // i = 'Fizz';
            console.log('Fizz');


        else if (i % 5 === 0)
            // i = 'Buzz';
            console.log('Buzz');

        else
            console.log(i);


    }

}

fizzbuzz(15);
fizzbuzz(35);