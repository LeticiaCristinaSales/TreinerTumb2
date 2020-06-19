var pool = require("./connection");

module.exports.getAll = async function () {
    try {
        let sql = "SELECT * FROM pessoa, atleta WHERE atl_pes_id=pes_id ORDER BY pes_nome ASC";
        let atletas = await pool.query(sql);
        return {
            status: 200,
            data: atletas
        };
    } catch (err) {
        console.log(err);
        return {
            status: 500,
            data: err
        };
    }
}

module.exports.getOne = async function (atl_id) {
    try {
        let sql = "SELECT * FROM pessoa, atleta WHERE atl_pes_id=pes_id AND atl_id = ? ORDER BY pes_nome ASC";
        let atletas = await pool.query(sql, [atl_id]);
        let atleta = atletas[0]; // its only one

        /*sql = "SELECT pes_nome, pes_dtnasc, pes_mora, pes_tele, atl_altura, atl_peso FROM pessoa, atleta WHERE pes_id=atl_pes_id AND atl_id = ? ORDER BY pes_nome ASC ";
        let info = await pool.query(sql, [atl_id]);

        atleta.info = info;*/

        return { status: 200, data: atleta };
    } catch (err) {
        console.log(err);
        return { status: 500, data: err };
    }
}


module.exports.saveAtleta = async function (atl) {


    try {
        let sql = "INSERT INTO pessoa " +
            "(pes_nome,pes_dtnasc,pes_sexo,pes_tele,pes_mora) " +
            "VALUES (?,?,?,?,?)";
        let result = await pool.query(sql, [atl.pes_nome,
        atl.pes_dtnasc, atl.pes_sexo, atl.pes_tele, atl.pes_mora]);
        sql = "INSERT INTO atleta " +
            "(atl_peso, atl_altura, atl_pes_id) " +
            "VALUES (?,?,?)";
        result = await pool.query(sql, [atl.atl_peso,
        atl.atl_altura, result.insertId]);
        return { status: 200, data: result };
    } catch (err) {
        console.log(err);
        if (err.errno == 1452) // FK error
            return { status: 400, data: { msg: "Type not found" } };
        else return { status: 500, data: err };
    }
}


module.exports.editAtleta = async function (id, atl) {
    // checks for all fields and ignores other fields
    // if (typeof prod != "object" || failProductPrice(prod)) 
    //   return { status: 400, data: {msg: "Malformed request"}};
    try {
        let sql = "UPDATE pessoa SET pes_nome=?,pes_dtnasc=?,pes_sexo=?,pes_tele=?,pes_mora=?" +
            "WHERE pes_id = ?";
        let result = await pool.query(sql, [atl.pes_nome,
        atl.pes_dtnasc, atl.pes_sexo, atl.pes_tele, atl.pes_mora, id]);

        sql= "UPDATE atleta SET atl_peso=?, atl_altura=?, atl_pes_id=? WHERE atl_id=?"
        result = await pool.query(sql,[atl_atl_peso, atl_atl_altura, atl_atl_pes_id])
        return { status: 200, data: result };
    } catch (err) {
        console.log(err);
        return { status: 500, data: err };
    }
}

module.exports.deleteAtleta = async function (id) {
    try {
        let sql = "DELETE FROM atleta where atl_pes_id = ?";
        let atletas = await pool.query(sql, id);
        let atleta = atletas[0]; 

        sql = "DELETE FROM pessoa where pes_id = ?";
        atletas = await pool.query(sql, id);
        atleta = atletas[0]
        
        return { status: 200, data: atleta };
    } catch (err) {
        console.log(err);
        return { status: 500, data: err };
    }
}