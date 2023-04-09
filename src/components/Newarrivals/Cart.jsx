import Ndata from "./Ndata"

const Cart = () => {
  return (
    <>
      <section className='content grid product'>
        {Ndata.map((val, i) => (
          <div className="box" key={i}>
            <div className="img">
              <img src={val.cover} alt="" />
            </div>
            <h1>{val.name}</h1>
            <span>{val.price}</span>
          </div>
        ))}
      </section>
    </>
  )
}

export default Cart