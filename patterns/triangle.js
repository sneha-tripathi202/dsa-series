//p1 
// *
// **
// ***
// ****

let n=6
for(i=0;i<n;i++){
    for(j=0;j<=i;j++)
   { process.stdout.write("*"+" ")}
    console.log();
    
}


//  1
//  22
//  333
//  4444


for(i=0;i<n;i++){
    for(j=0;j<=i;j++)
   { process.stdout.write(i+1+" ")}
    console.log();
    
}

//  A
//  BB
//  CCC
//  DDDD

let ascii=65;
let char=String.fromCharCode(ascii)

for(i=0;i<n;i++){
    for(j=0;j<=i;j++)
   { 
    let char=String.fromCharCode(ascii)
    process.stdout.write(char+" ")
      
    }
    console.log(); 
    ascii++   
}

//1
//12
//123
//1234

for(i=0;i<n;i++){
    for(j=0;j<=i;j++)
   { process.stdout.write(j+1+" ")}
    console.log();
}
