const prompt = require("prompt-sync")();

let count = 1;

while(count < 6)
{
    console.log(count);
    count++
    if (count ===3)
    {
        continue
    }
}