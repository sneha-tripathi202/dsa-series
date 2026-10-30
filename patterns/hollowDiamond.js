//---*---
//--*-*--
//-*---*-
//*-----*



let n=7;
for(let i=0;i<n;i++)
{
    for(let j=0;j<n-(i+1);j++)
    {process.stdout.write("-")}
    for(let j=0;j<1;j++)
    {process.stdout.write("*")}
    if(i!=0){
         for(let j=0;j<2*i-1;j++){
        process.stdout.write("-")
     }
     for(let j=0;j<1;j++)
    {process.stdout.write("*")}
    }
    
     for(let j=0;j<n-(i+1);j++)
    {process.stdout.write("-")}
     console.log();  
}
for(let i=0;i<n-1;i++){
    for(j=0;j<i+1;j++){
        process.stdout.write("-")
    }
    for(let j=0;j<1;j++)
    {process.stdout.write("*")}
    if(i!=n-2){
         for(let j=0;j<2*(n-2-i)-1;j++){
        process.stdout.write("-")
     }
     for(let j=0;j<1;j++)
    {process.stdout.write("*")}

}
 for(j=0;j<i+1;j++){
        process.stdout.write("-")
    }
    console.log();
    
}