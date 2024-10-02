import redpurse from '../../images/purse_1.jpg';
import whiteShose from '../../images/shoes_3.jpg';
import lightPinkPurse from '../../images/purse_2.jpg'
export default function Cart(){
  const CartData=[
    {
      id:1,
      img:redpurse,
      name:'Red Purse',
      amount:3,
      prise:534,
    },
    {
      id:2,
      name:'White Shoes',
      img:whiteShose,
      amount:1,
      prise:234,
    },
    {
      id:3,
      name:'Pink Purse',
      img:lightPinkPurse,
      amount:2,
      prise:234,
    },
  ];
    return(
        <div className="container py-5 px-2 p-md-5 mt-5" style={{overflow:'hidden'}}>
         <div className="row">
          <div className="col-lg-8  mb-3 mb-lg-auto">
            <div className="d-flex justify-content-between px-3 mb-4 ">
              <h3>Shopping cart</h3>
              <h4>3 items</h4>
            </div>
            <ul style={{listStyleType:'none',margin:'0',padding:'0'}}>

              {
                CartData.map((item)=>(
                  <li key={item.id} className="d-flex justify-content-between mb-3 shadow align-items-center border px-md-3 py-1 rounded">
                  <img src={item.img} style={{width:'70px',height:'70px',borderRadius:'10px'}} alt="" />
                  <p>{item.name}</p>
                   <div className="mx-2">
                    <button className="btn btn-danger btn-sm" >-</button>
                    <span className="px-2 mx-2 py-1 rounded border">{item.amount}</span>
                    <button className="btn btn-success btn-sm">+</button>
                   </div>
                   <p>{item.prise}$</p>
                   <p style={{cursor:'pointer'}}>❌</p>
                </li>
                ))
              }
            </ul>
          </div>
          <div className="col-lg-4 bg-secondary  bg-opacity-10 pb-3 shadow">
            <h3 className="p-2 pb-3 text-info" style={{borderBottom:'2px solid black'}}>Summary</h3>
            <div className="d-flex justify-content-between align-items-center mb-2">
              <h5>3 items </h5>
              <h6>1002$</h6>
            </div>
            <h5 className="text-success">Shipping</h5>
            <select name="" id="" className="mt-2 p-2 rounded ">
              <option value="">standard delevery 5:00</option>
              <option value="">standard delevery 5:00</option>
              <option value="">standard delevery 5:00</option>
            </select>
            <div className="mt-3">
              <label htmlFor=""><b className="text-success">Give Code</b> </label><br />
              <input type="text" className="rounded"/>
            </div>
            <div className="d-flex justify-content-between align-items-center mt-3">
              <h5>total price </h5>
              <h6>1007$</h6>
            </div>
            <button className="btn btn-info mb-2 mt-3 w-100 text-white">Check out</button>
          </div>
         </div>
        </div>
    );
}