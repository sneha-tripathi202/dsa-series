//
//   1
//  121
// 12321
//1234321 two pyramid

let n =4
for(let i=0;i<n;i++){
    for(let j=0;j<n-(i+1);j++){
        process.stdout.write("_")
    }
    for(let j=0;j<i+1;j++){
        process.stdout.write(j+1+"")
    }
    for(let j=0;j<i;j++){
        process.stdout.write(j+1+"")
    }
    for(let j=0;j<n-i;j++){
        process.stdout.write("_")
    }
    console.log();
    
}