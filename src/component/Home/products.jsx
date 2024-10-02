import { NavLink } from "react-router-dom";
import ProducData from "./productDate";
import './product.css';
export default function Products(){
    return(
        <>
        <div className="container p-5">
          <div className="row">
          {
          ProducData.map((item)=>(
            <div className="col-md-6 mb-5 col-lg-4" key={item.id}>
                 <div className="card shadow _hover" style={{width:'width: 18rem'}}>
                  <img src={item.img} style={{height:'200px'}} className="card-img-top" alt="..."/>
                  <div className="card-body">
                   <h5 className="card-title text-success d-flex flex-between">{item.Name} <p className="ml-5">⭐⭐⭐⭐⭐</p></h5>
                     <p className="card-text">{item.description}</p>
                   <NavLink to={'/'} className="btn btn-secondary">Add to Cart</NavLink>
                  </div>
             </div>
            </div>
          ))
        }
            
          </div>
        </div>
        
       
        
        </>
    );
}