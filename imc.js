
function calcular() {
    let img = document.getElementById("img");
    var kg = parseInt(document.getElementById("kg").value);
    var altura = parseInt(document.getElementById("altura").value);
    var altura1 = altura / 100;
    var imc = (kg / (altura1 * altura1));
    

    document.getElementById("imc").value =  imc.toFixed(2);


    const a = document.querySelector("input[name='opcao']:checked").value;
    if (a == "1") 
    {
        document.getElementById("tp").innerHTML ;
        if (imc < 18.5)
        {   
            
            document.getElementById("c").innerHTML = "Baixo peso";
            img.src = "imagens/ab1.png";
        }
        else if(imc > 18.5 && imc <=  24.9)
        {
            document.getElementById("c").innerHTML = "Peso normal";
            img.src = "imagens/pn2.png";
        }
        else if(imc > 24.9 && imc <= 29.9)
        {
            document.getElementById("c").innerHTML = "Excesso de peso";
            img.src = "imagens/s3.png";
        }
        else if(imc > 29.9 && imc <= 34.9)
        {
            document.getElementById("c").innerHTML = "Obesidade de classe I";
            img.src = "imagens/o4.png";
        }
        else if(imc > 34.9 && imc <= 40)
        {
            document.getElementById("c").innerHTML = "Obesidade de classe II";
            img.src = "imagens/o5.png";
        }
        else if(imc > 40)
        {
            document.getElementById("c").innerHTML = "Obesidade de classe III";
            img.src = "imagens/o6.png";
        }
    }

    else 
    if (a == "2"){
        document.getElementById("tp").innerHTML = "";
        if (imc < 22){
            document.getElementById("c").innerHTML = "Baixo peso";
            img.src = "imagens/ab1.png";
        }
        else if(imc > 22 && imc <= 27)
        {
            document.getElementById("c").innerHTML = "Adequado/Eutrófrico";
            img.src = "imagens/pn2.png";
        }
        else if(imc > 27)
        {
            document.getElementById("c").innerHTML = "Sobrepeso";
            img.src = "imagens/s3.png";

        }
    }
}




