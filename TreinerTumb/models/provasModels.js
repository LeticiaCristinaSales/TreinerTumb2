var pool = require("./connection");

module.exports.getAll = async function () {
    try {
        let sql = "SELECT * FROM prova";
        let provas = await pool.query(sql);
        return {
            status: 200,
            data: provas
        };
    } catch (err) {
        console.log(err);
        return {
            status: 500,
            data: err
        };
    }
}