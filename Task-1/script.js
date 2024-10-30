let cars=[];
btn.onclick=function(){
    let el1=document.getElementById("el1").value
    let el2=document.getElementById("el2").value
    let el3=document.getElementById("el3").value
    let el4=document.getElementById("el4").value
    let el5=document.getElementById("el5").value
    cars.push(el1,el2,el3,el4,el5);
    const count={};
    cars.forEach(i=>{
        if(!count[i]){
            count[i]=1;
        } else {
            count[i]++;
        }
    });
    console.log(cars)
    console.log(cars.map(el=>{
        return el
    }))
    document.getElementById("outpt").innerHTML=JSON.stringify(count)
}
