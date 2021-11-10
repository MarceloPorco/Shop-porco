
import "./Card.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemCount from "../ItemCount/ItemCount";


function Card ({nombre, valor, id, tipo, stock}){
   
    return(
    <>
 <div className="col" id={id}>
    <div className="card">
      <img src="https://images.app.goo.gl/YRZ59ZLazZTrjw2e8" className="card-img-top" alt="..."/>
      <div className="card-body text-center">
            <h5 className="card-title">{nombre}</h5>
            <p className="card-text">{tipo}</p>
            <p className="btn btn-danger">${valor}</p>
      </div>  
      <ItemCount stock={stock} initial={nombre,valor,id}/>        
    </div>
  </div>
    </>
    )
} ;
export default Card