//Post
var atl_id = sessionStorage.getItem("atl_pes_id");





async function salvar() {
    let res = document.getElementById("result");
    let data = {
        pes_nome: document.getElementById("nome").value,
        pes_dtnasc: document.getElementById("datanasc").value,
        pes_sexo: document.getElementById("sexo").value,
        pes_tele: document.getElementById("telefone").value,
        pes_mora: document.getElementById("morada").value,
        atl_peso:document.getElementById("peso").value,
        atl_altura:document.getElementById("altura").value,
        
    }
    console.log(data);
    try {
        let result = await $.ajax({
            url:"/api/atletas/" +atl_id,
            method:"put",
            data: JSON.stringify(data),
            contentType: "application/json",
            dataType:"json"
        });
        res.innerHTML = "Alteração salva com sucesso";
    } catch(err) {
        console.log(err);
        if (err.responseJSON) {
            res.innerHTML = err.responseJSON.msg;
        } else {
            res.innerHTML = "Was not able to save atleta";
        }
    } 

    
}
//getONe





function main_page() {
    window.location = "index.html";
}