import React from 'react'

function ShoppingCart({setCart,cart}) {
 
const removeProduct =(index)=>()=>
  setCart((cart) => cart.filter((_, i) => i !== index));
  const total=(cart.reduce((total,{price}) => total + parseInt(price) , 0 ))
 
  return (
<div className='ShoppingArea'> 
  <div className='cart-length'>
    <h1 className='length'>{cart.length}</h1>
  </div>
  <button type="button" className='Shopping-btn btn btn-dark' data-bs-toggle="modal"data-bs-target="#exampleModal">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className='bi bi-cart3' viewBox="0 0 16 16">
      <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
    </svg>
  </button>
<div className='modal fade' id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">Shopping Cart</h1>
        <button type="button" className=" btn-close bg-light" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        {cart.map((obj,index)=>(
        <div key={index} className='row mt-5'>
            <div className='cart-detail'>
          <div className='col-12 col-sm-2 col-md-2 '>
            <img className="cart-img" src={obj.img} alt='{obj.title}'/>
            </div>
            <div className='col-12 col-sm-8 col-md-8'>
            <p >{obj.title}</p>
            </div>
            <div  className='price col-12 col-sm-1 col-md-1'>
            <p>${obj.price}</p>
            </div>
            <div className='col-12 col-sm-1 col-md-1'>
            <button onClick={removeProduct(index)} className='removeProduct'><p>x</p></button>
            </div>
            </div>
          </div> 
        ))}
      </div>
      <hr/>
      <div className="modal-footer">
       <h1 >Total</h1>
       <span className='total'>${total}</span>
      
      </div>
    </div>
  </div>
</div>
</div>
  )
}

export default ShoppingCart