const sql = require("msnodesqlv8");

const connectionString =
  "server=.;Database=diagnostico_db;Trusted_Connection=Yes;Driver={SQL Server Native Client 11.0}";
const query = "SELECT * FROM usuarios_tb";

sql.query(connectionString, query, (err, rows) => {
  console.log("conexion correcta");
  console.log(rows);
});
// npm init -y
// npm i msnodesqlv8 --save
// node conexion.js
