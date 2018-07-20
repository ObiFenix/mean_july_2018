function bracesValid(string) {
    var l = string.length;
    for (var i = 0; i <= l; i++) {
        var a = 0,
            b = 0,
            c = 0;
        if (string.includes('('))
            a = a + 1;
        if (string.includes(')'))
            a = a - 1;
        console.log(a);
        if (string.includes('['))
            b = b + 1;
        if (string.includes(']'))
            b = b - 1;
        console.log(a);
    }

    if (a !== 0 || b !== 0 || c !== 0)
        console.log('False');
    else (console.log('True'))


}

bracesValid('[()]');