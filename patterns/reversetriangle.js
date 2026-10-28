//1
//21
//321
//4321


let n=4
for(i=0;i<=n;i++){
    for(j=i+1;j>0;j--)
   { process.stdout.write(j+" ")}
    console.log(); 
}
//1
//21
//321
//4321
let num=1
for(i=0;i<=n;i++){
    for(j=i+1;j>0;j--)
   { process.stdout.write(num+" ")
    num++;
   }
    console.log(); 
}

//1111
// 222
//  33
//   4

for(i=0;i< n;i++){
    for(j=0;j<i;j++)
    {process.stdout.write(" ")}
    for(k=0;k<n-i;k++){
        process.stdout.write(i+1+"")
    }

    console.log();
    
}


//AAAA
// BBB
//  CC
//   D

let ascii=65
for(i=0;i< n;i++){
    for(j=0;j<i;j++)
    {process.stdout.write(" ")}
    for(k=0;k<n-i;k++){
      let char=String.fromCharCode(ascii)
       process.stdout.write(char)
    }
        ascii++;
    console.log(); 
}