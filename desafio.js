document.addEventListener("DOMContentLoaded", function(event) { 

   document.querySelector(".algoritmo1").addEventListener("click", function (event) {
        document.querySelector(".input").classList.add('d-none');

        for (let i = 1; i < 100; i++) {
            if(i % 3 == 0){
                var print = "Co";
            }else if(i % 5 == 0){
                var print = "Blue";
            }else{
                var print = i;
            }
            var div = document.createElement('div');
            div.classList.add('col-12');
            div.classList.add('text-center');
            div.classList.add('saida1');

            div.innerHTML = "<p>"+print+"</p>"
            document.body.appendChild(div);
        }
    });

    document.querySelector(".algoritmo2").addEventListener("click", function (event) {
        document.querySelectorAll(".saida1").forEach(element => {
            element.remove();
        });
        document.querySelector(".input").classList.remove('d-none');
    });

    document.querySelector(".formatar").addEventListener("click", function (event) {
        var palavra = document.querySelector(".palavra").value
        var palavra_formatada = ""
        maiuscula = false;
        minuscula = false;

        for (i=0; i < palavra.length; i++) {
            var letra = palavra.charAt(i);
    
            if(maiuscula == true){
                letra = letra.toLowerCase()
            }else if(minuscula == true){
                letra = letra.toUpperCase()
            }

            if (letra == letra.toUpperCase()) {
                maiuscula = true;
                minuscula = false;
            }else if(letra == letra.toLowerCase()){
                maiuscula = false;
                minuscula = true;
            }

          
          
            palavra_formatada = palavra_formatada + letra
        }
        window.alert(palavra_formatada)
    });

  

})