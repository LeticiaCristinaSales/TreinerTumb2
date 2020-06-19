window.onload = async function() {
    let atl_id = sessionStorage.getItem("atl_id");

    let atleta = await $.ajax({
        url: "/api/atletas/"+atl_id,
        method: "get",
        dataType: "json"
    });
    console.log(atleta);
       

    document.getElementById("nome").innerHTML = "<h2>"+atleta.pes_nome+"</h2>";
          
    //var date= Date.parse(atleta.pes_dtnasc);
    document.getElementById("Atleta").innerHTML = "<section><img src='images/icone atleta.png' width='30%'/></section><table><th>Data de Nascimento</th><th>Sexo</th><th>Telefone</th><th>Morada</th><th>Altura (m) </th><th>Peso (kg)</th></tr>"+
    "<tr><td>"+atleta.pes_dtnasc.substring(0, 10)+"</td>"+
    "<td>"+ atleta.pes_sexo+"</td>" +
    "<td>"+ atleta.pes_tele +"</td>" +
    "<td>"+ atleta.pes_mora +"</td>"+
    "<td>"+ atleta.atl_altura +"</td>" +
    "<td>"+ atleta.atl_peso +"</td></tr></table></section>"+
    "<div><input type='button' value='Editar' id='Editar' onclick='Edit()'><input type='button' value='Deletar' id='Deletar' onclick='deletar("+atleta.atl_pes_id+")'></div><h2 id='result'></h2>";
}



function main_page() {
    window.location = "index.html";
}


function Edit() {
    window.location = "editAtleta.html";
}

async function deletar(atl_id){
    let res = document.getElementById("result")
    try {
        let result = await $.ajax({
            url:"/api/atletas/"+atl_id,
            method:"delete",
            dataType:"json"
            
        });
        res.innerHTML = "Deletado com sucesso";
    } catch(err) {
        console.log(err);
        if (err.responseJSON) {
            res.innerHTML = err.responseJSON.msg;
        } else {
            res.innerHTML = "Was not able to delete atleta";
        }
    } 

}