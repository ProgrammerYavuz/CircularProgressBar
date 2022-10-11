let numberone   = document.getElementById('numberone');
let numbertwo   = document.getElementById('numbertwo');
let numberthree = document.getElementById('numberthree');
let counterone  = 0;
let countertwo  = 0;
let counterthree  = 0;

setInterval(()=>{
    if(counterone == 95){
        clearInterval();
    }else{
        counterone += 1;
        numberone.innerHTML = counterone + "%";
    }

    if(countertwo == 73){
        clearInterval();
    }else{
        countertwo += 1;
        numbertwo.innerHTML = countertwo + "%";
    }

    if(counterthree == 67){
        clearInterval();
    }else{
        counterthree += 1;
        numberthree.innerHTML = counterthree + "%";
    }
}, 30);


