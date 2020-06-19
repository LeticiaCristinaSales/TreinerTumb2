var menu1 = "Atletas";
var menu2 = "Provas";
var menu3 = "+Adicionar";
window.onload = function () {
    document.getElementById("atl").innerHTML = "<h3>" + menu1 + "</h3>";
    document.getElementById("prov").innerHTML = "<h3>" + menu2 + "</h3>";
    document.getElementById("add").innerHTML = "<h3>" + menu3 + "</h3>";
    
   
}

function mostrar_atletas() {
    window.location = "atletas.html";
    }
    
function mostrar_provas() {
        window.location = "prova.html";
        }

function mostrar_ini() {
            window.location = "iniciados.html";
            }

 






