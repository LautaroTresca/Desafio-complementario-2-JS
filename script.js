alert("Stock de ropa")

class Producto {
    constructor(id, producto, color, talle, precio){
        this.producto = prompt("Ingrese la prenda")
        this.color = prompt("Ingrese el color de la prenda")
        this.talle = prompt("Ingrese el talle")
        this.precio = parseInt(prompt("Ingrese el precio de la prenda"))
    } 
}
    

const producto1 = new Producto()
const producto2 = new Producto()
const producto3 = new Producto()
const producto4 = new Producto()

const productos = [producto1, producto2, producto3, producto4]

console.log(productos)

let preguntar,preguntarCuantasVeces,preguntar2,productoEliminar,indice

    preguntar = prompt("¿Desea agregar mas producto?")
    
    while(preguntar == ""){
        
        preguntar = prompt("¿Desea agregar mas producto?")
    }
    
    
        if(preguntar == "si"){

            console.log(productos);

            preguntarCuantasVeces = parseInt(prompt("Especifique en numeros cuantas prendas va a agregar"))

            for(i = 1; i <= preguntarCuantasVeces; i++){
                productos.push(new Producto)
                
                console.log(productos)
            }
            
        }else if(preguntar == "no"){
            

             preguntar2 = prompt("¿Desea eliminar un producto?")

             while(preguntar2 == ""){

                preguntar2 = prompt("¿Desea eliminar un producto?")

             }

            
                if(preguntar2 == "no"){
                    alert("Gracias por usar mi herramienta")
                    console.log(productos)

                }else if(preguntar2 == "si"){
                     productoEliminar = prompt("Ingrese el indice del producto que quiere eliminar")

                        while(productoEliminar == ""){

                            productoEliminar = prompt("Ingrese el indice del producto que quiere eliminar")

                        }

                     indice = productoEliminar
                    
                     
                    if((indice != -1) && (indice < productos.length)) {
                        productos.splice(indice,1)
                        console.log(productos)
                        alert("Listo!. Gracias por usar mi herramienta")

                        
                        
                    }else if((indice >= -1) && (indice > productos.length)){
                        alert("Producto no encontrado")
                        console.log(productos) 

                        productoEliminar = prompt("Ingrese un indice valido")
                        indice = productoEliminar

                        if((indice != -1) && (indice < productos.length)) {
                            productos.splice(indice,1)
                            console.log(productos)
                            alert("Listo!. Gracias por usar mi herramienta")

                    }
                }
            }
        }
        