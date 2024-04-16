const moduloColeccionables = require("./collectibles");

const hotToys = moduloColeccionables("Hot Toys");
const bandai = moduloColeccionables("Bandai");
const starWars = moduloColeccionables("Star Wars");

const unifiedCollectibles = [...hotToys, ...bandai, ...starWars]

const collectibles = {
    figuras : unifiedCollectibles,

    listFigures : function (array = this.figuras) {
        array.forEach(({marca, nombre, precio, stock}) => {
            console.log(`
            --------------------------------------------
            Marca : ${marca}
            Nombre : ${nombre}
            Precio : $${precio}
            Stock : ${stock}
            --------------------------------------------    
            `);
        })        
    },

    figuresByBrand : function (marca) {
        const listarMarca = this.figuras.filter((juguete) => juguete.marca.toLowerCase() === marca.toLowerCase())
        
        const listar = collectibles.listFigures(listarMarca)
        return listar
    }
}

collectibles.listFigures()
collectibles.figuresByBrand("bandai");
module.exports = collectibles