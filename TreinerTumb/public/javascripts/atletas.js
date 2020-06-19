window.onload = function() {
    loadAtletas();
}

async function loadAtletas() {
    
    
  let insertAtleta = document.getElementById("Atletas");
  
    
    try {
        let atletas = await $.ajax({
            url: "/api/atletas",
            method: "get",
            datatype: "json",
        })

        let html = "";
        
        for (let atl of atletas) {

            html += "<button onclick='showAtleta("+atl.atl_id+")'>" + atl.pes_nome +"</button><br>";
            
           
        } insertAtleta.innerHTML = html + "<button onclick='addAtleta()'>"+ '+Adicionar'+"</button>" ;  
    
    } catch (err) {
        console.log(err);
        insertAtleta.innerHTML = "<h1> Indisponível </h1>";
    }
}

function showAtleta(atl_id) {
    sessionStorage.setItem("atl_id",atl_id);
    window.location = "atleta.html";
}


function main_page() {
    window.location = "index.html";
}

function addAtleta() {
    window.location = "addAtleta.html";
}


