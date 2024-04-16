const fs = require("fs");
const figuras1 = JSON.parse(fs.readFileSync(`./datos/figuras1.json`, "utf-8"))   
const figuras2 = JSON.parse(fs.readFileSync(`./datos/figuras2.json`, "utf-8"))   
const figuras3 = JSON.parse(fs.readFileSync(`./datos/figuras3.json`, "utf-8"))   

const importar = function (marca) {
    const todos = [...figuras1, ...figuras2, ...figuras3]
    const listaMarca = todos.filter((juguete) => juguete.marca.toLowerCase() === marca.toLowerCase())  
    return listaMarca           
}

module.exports = importar