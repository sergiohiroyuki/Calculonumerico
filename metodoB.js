
function metodoB(event){
    var e = document.getElementById("e").value;
    var v1 = parseFloat(document.getElementById("v1").value);
    var v2 = parseFloat(document.getElementById("v2").value);
    var media = 0;
    var vetor = [];
    var resp = 0;
    var vetor_f = [];

    for(z = 0; z<=10; z++){
        vetor.push(parseInt(document.getElementById("num" + z).value));
    }

    media = ((v1) + (v2))/ 2;
    var cont = 0;
    console.log(media); 

    while(e <= media){
        for(p = 0;p<=10;p++){
            resp = resp + (vetor[p] * (media ** p));
        }
        
        if(resp > 0){
            v2 = media;
            media = (v1 + v2)/2;
            vetor_f[cont] = `[${v1}, ${v2}]`;
        }
        else{
            v1 = media;
            media = (v1 + v2)/2;
            vetor_f[cont] = `[${v1}, ${v2}]`;
        }
        console.log(vetor_f[cont]); 
        
        resp = 0;
        cont = cont++;
    }

    
    event.preventDefault();
    const resp2 = document.querySelector(".resp2");
    resp2.textContent = vetor_f;
}

const form2 = document.getElementById("form2");
form2.addEventListener("submit", metodoB);