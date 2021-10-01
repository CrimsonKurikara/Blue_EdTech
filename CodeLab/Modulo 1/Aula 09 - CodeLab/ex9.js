var fibonacci = [0,1];

for(let i = fibonacci.length; i<10; i++)
{
    fibonacci[i] = fibonacci[i-1] + fibonacci[i-2];
    console.log(i + " = " + (i-1) + " + " + (i-2));
}
console.log();
console.log(fibonacci);