
export default function Nav() {
  return (
    <div className='nav container'>
      <img src="../public/images/Restaurant.png" alt="logo" className="logo"/>
      <div className='nav'>
      <a href="/" className='link' >Home</a>
      <a href="/menu" className='link' >Menu</a>
      
      </div>
      <div>
      <button className="order-btn">Order Now 614-222-3245</button>
    </div>
    </div>
  )
}
