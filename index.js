function funct_de_x(event){
    
    var resp_f = 0;
    var vetor = [];
    var a, b;
    var vetor_y = [];
    var vetor_r = [];

    for(z = 0; z<=10; z++){
        vetor.push(parseInt(document.getElementById("num" + z).value));
    }


    for(i = -1000; i <= 1000; i++){
        for(p = 0;p<=10;p++){
            resp_f = resp_f + (vetor[p] * (i ** p));
        } 

        if(resp_f < 0){
            vetor_y.push(0); 
        }else{
            vetor_y.push(1);
        } 
        resp_f=0;
    }

    for(t=1;t<=2001;t++){
        
       if((vetor_y[t -1] != vetor_y[t]) && vetor_y[t] != undefined){
            a = (t-1) - 1000;
            b = t - 1000;
            vetor_r[t] = `[${a}, ${b}]`;
        } 
    console.log(vetor_y[t] + " indice " + t); 
    }

    event.preventDefault();
    const resp = document.querySelector(".resp");
    resp.textContent = vetor_r;
}



const form = document.getElementById("form")
form.addEventListener("submit", funct_de_x)