let input = [2, 3, 5, 3, 9];
let total = 0;

function sumAll(sum) {
    for (i = 0; i < sum.length; i++) {
        total += sum[i];
    }
    console.log(total)
}

sumAll(input);