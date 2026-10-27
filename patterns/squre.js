
//squre paterns n=4

let n=4;
for(i=1;i<=n;i++){
    for(j=1;j<=n;j++){
 process.stdout.write("*"+ " "+"") //its only print string not number
 }
console.log();    
}

//caracter squre printing


for(i=0;i<n;i++)
{   
    for (let j = 0; j<n; j++) {
        let  ch= String.fromCharCode(65+j)
        process.stdout.write(ch+" ");
    }
    console.log();
    
}

//pattern 123
//        456
//        789

let num=1
let a=4;
for(i=0;i<a;i++)
{     
    for (let j=0; j<a; j++) {
        process.stdout.write(num+" ");
        num++;
    }
    console.log();
    
}
//same pattern char version

let ascii=65
for(i=0;i<a;i++)
{     
    for (let j=0; j<a; j++) {
        let char= String.fromCharCode(ascii)
        process.stdout.write(char+" ");
        ascii++;
    }
    console.log();
    
}
