import { useState, createContext } from "react";

export const CarritoContext = createContext({
    carritoCompra: [],
    total: 0,
    cantTotal: 0
});

export const CarritoProvider = ({children}) => {
    const [carritoCompra, setCarritoCompra] = useState([]);
    const [total, setTotal] = useState(0);
    const [cantTotal, setCantTotal] = useState(0);


    const agregarProd = (item, cantidad) => {

        const productoPresente = carritoCompra.find(prod => prod.item.id === item.id);

        if(!productoPresente) {
            setCarritoCompra(prev => [...prev, {item, cantidad}]);
            setCantTotal(prev => prev + cantidad);
            setTotal(prev => prev + (item.precio * cantidad));
        } else {
            const carritoActualizado = carritoCompra.map(prod => {
                if(prod.item.id === item.id) {
                    return {...prod, cantidad: prod.cantidad + cantidad};
                } else {
                    return prod;
                }
            });
            setCarritoCompra(carritoActualizado);
            setCantTotal(prev => prev + cantidad);
            setTotal(prev => prev + (item.precio * cantidad));
        }
    }


    const eliminarProd = (id) => {
        const productoEliminado = carritoCompra.find(prod => prod.item.id === id);
        const carritoActualizado = carritoCompra.filter(prod => prod.item.id !== id);
        setCarritoCompra(carritoActualizado);
        setCantTotal(prev => prev - productoEliminado.cantidad);
        setTotal(prev => prev - (productoEliminado.item.precio * productoEliminado.cantidad));
    }

    const vaciarCarritoCompra = () => {
        setCarritoCompra([]);
        setCantTotal(0);
        setTotal(0);
    }

    return (
        <CarritoContext.Provider value={{ carritoCompra, agregarProd, eliminarProd, vaciarCarritoCompra, total, cantTotal }}>
            {children}
        </CarritoContext.Provider>
    )
}