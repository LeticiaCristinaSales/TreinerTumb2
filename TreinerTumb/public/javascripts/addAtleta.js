
async function add() {
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
            url:"/api/atletas",
            method:"post",
            data: JSON.stringify(data),
            contentType: "application/json",
            dataType:"json"
        });
        res.innerHTML = "Inserted product with id: "+ result.insertId;
    } catch(err) {
        console.log(err);
        if (err.responseJSON) {
            res.innerHTML = err.responseJSON.msg;
        } else {
            res.innerHTML = "Was not able to add atleta";
        }
    } 

    
}

function main_page() {
    window.location = "index.html";
}