import React from 'react'
import "../../styles/confirmorder.scss"
const ConfirmOrder = () => {
  return (
    <section className='confirmOrder'>
        <main>
            <h1>Mode of Payment for Iphone 13</h1>
            <form action="">
            <div>
                <label>Cash On Delivery</label>
                <input type="radio" name="payment" />
            </div>

            <div>
                <label>Online</label>
                <input type="radio" name="payment" />
            </div>

            <button type="submit">Place Order</button>

            </form>
        </main>
    </section>
  )
}

export default ConfirmOrder