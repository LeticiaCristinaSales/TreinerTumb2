window.onload = function(){
    loadProvas();
}

async function loadProvas() {
    let insertProvas = document.getElementById("provas");
    try{
        let provas = await $.ajax({
            url:"/api/provas",
            method: "get",
            datatype: "json",
        })

        let html="";
        for(let nome_prova of provas){

            html+= "<section>"+ nome_prova.prov_nome+"</section>";
        }insertProvas.innerHTML=html;

    }catch (err) {
        console.log(err);
        insertProvas.innerHTML="<h1> Indisponível </h1>";
}
}

function main_page(){
    window.location = "index.html";
}