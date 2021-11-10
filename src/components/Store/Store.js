import {Data} from "../../Data"
import Card from "./Cards/Cards"

function Store (){
    return(
    <>
<div className="row row-cols-1 row-cols-md-3 g-4">
    { Data.map(product => <Card
                id={product.id}
                nombre={product.nombre} 
                valor={product.valor}
                tipo={product.tipo}
                stock={product.stock} /> )
    }
</div>
    </>
    )
} ;
export default Store