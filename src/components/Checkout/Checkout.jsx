import { useState, useContext } from 'react';
import { CarritoContext } from '../../context/CarritoContext'
import { db } from '../../services/config'
import { collection, addDoc, updateDoc, doc, getDoc } from 'firebase/firestore'
import './Checkout.css'

const Checkout = () => {
    const {carritoCompra, vaciarCarritoCompra, total} = useContext(CarritoContext);
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [telefono, setTelefono] = useState("");
    const [email, setEmail] = useState("");
    const [emailVerificacion, setEmailVerificacion] = useState("");
    const [error, setError] = useState("");
    const [ordenId, setOrdenId] = useState("");

    const handleForm = (event) => {
        event.preventDefault();


        if(!nombre || !apellido || !telefono || !email || !emailVerificacion) {
            setError("Es necesario completar todos los campos"); 
            return;
        }

        
        if(email !== emailVerificacion) {
            setError("¡Verificación incorrecta! Los correos electrónicos no coinciden");
            return;
        }


        const orden = {
            items: carritoCompra.map(producto => ({
                id: producto.item.id,
                nombre: producto.item.nombre,
                cantidad: producto.cantidad
            })),
            total: carritoCompra.reduce((total, producto)=> total + producto.item.precio * producto.cantidad, 0),
            nombre,
            apellido, 
            telefono,
            email,
            fecha: new Date(),
        };

        Promise.all(
            orden.items.map(async (productoOrden) => {
                const productoRef = doc(db, "inventario", productoOrden.id);
                const productoDoc = await getDoc(productoRef);
                const stockActual = productoDoc.data().stock;
                await updateDoc(productoRef, {
                    stock: stockActual - productoOrden.cantidad,
                }); 
            })
        )

            .then(() => {
                addDoc(collection(db, "ordenes"), orden)
                    .then((docRef) => {
                        setOrdenId(docRef.id);
                        vaciarCarritoCompra();
                    })
                    .catch((error) => {
                        console.error("Error al crear la orden", error);
                        setError("La orden no pudo ser creada debido a que se produjo un error, por favor vuelva a intentarlo");
                    })
            })
            .catch((error) => {
                console.error("Error al actualizar el stock", error);
                setError("Se presento un error al actualizar el stock de los productos, vuelva a intentarlo");
            })
    }

    return (
        <div>
            <h2>Checkout</h2>
            <form onSubmit={ handleForm } className="formulario">
                {carritoCompra.map(producto => (
                    <div key={producto.item.id}>
                        <p>
                            {producto.item.nombre} x {producto.cantidad}
                        </p>
                        <p> Precio $: {producto.item.precio} </p>
                        <hr />
                    </div>
                ))}
                <p>Total Compra: {total} </p>
                <hr />
    
                    <div className="form-group">
                        <label htmlFor=""> Nombre </label>
                        <input type="text" value={nombre} onChange={(e)=>setNombre(e.target.value)}/>
                    </div>
                    
                    <div className="form-group">
                        <label htmlFor=""> Apellido </label>
                        <input type="text" value={apellido} onChange={(e)=>setApellido(e.target.value)}/>
                    </div>
    
                    <div className="form-group">
                        <label htmlFor=""> Telefono </label>
                        <input type="text" value={telefono} onChange={(e)=>setTelefono(e.target.value)}/>
                    </div>
    
                    <div className="form-group">
                        <label htmlFor=""> Email </label>
                        <input type="email" value={email} onChange={(e)=> setEmail(e.target.value)} />
                    </div>
    
                    <div className="form-group">
                        <label htmlFor=""> Email Verificación </label>
                        <input type="email" value={emailVerificacion} onChange={(e)=> setEmailVerificacion(e.target.value)} />
                    </div>
    
                    {error && <p style={{color:"red"}}> {error} </p>}
                    <button className='miBoton' type="submit"> Finalizar Compra </button>
            </form>
            {
                ordenId && (
                    <strong className='ordenId'>¡Gracias por comprar en Identy Beauty! Tu número de Orden es {ordenId} </strong>
                )
            }
        </div>
    )
}

export default Checkout