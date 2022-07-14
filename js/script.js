//Productos-objetos

//Monitores
const monitorCurvoStock = new Producto("Monitor Led Curvo 24", 50700, 50, "Monitores");
const monitor144HzStock = new Producto("Monitor led 24 144hz", 65953, 25, "Monitores");

//Perifericos
const tecladoKumaraStock = new Producto("Teclado Kumara k552", 6610, 30, "Perifericos");
const tecladoLogitechStock = new Producto("Teclado Logitech k835", 7391, 22, "Perifericos");

//CPU
const pcGamerStock = new Producto("Pc Gamer", 72516, 17, "PC");
const pcEscritorioStock = new Producto("Pc De Escritorio", 22399, 22, "PC");

//Notebooks
const notebookHpStock = new Producto("Notebook HP G8 14", 89000, 25, "Notebooks");
const notebookAcerStock = new Producto("Notebook Acer Nitro 15.6", 228000, 40, "Notebooks");


const productos = [monitorCurvoStock, monitor144HzStock, tecladoKumaraStock, tecladoLogitechStock, pcGamerStock, pcEscritorioStock, notebookHpStock, notebookAcerStock]
menu()

const carritoNombres = []
const carritoPrecios = []

for(const productos of carrito){
    carritoNombres.push(productos.nombre)
    carritoPrecios.push(productos.precio)
}

let texto = (` - Carrito de compras - \n`)
document.write(`${texto}\n\n`)

carritoNombres.join("-")
carritoPrecios.join("-")

document.write(`Productos comprados: ${carritoNombres}`)
document.write(`Precios: ${carritoPrecios}`)