const intl = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "EUR",
});

export default function Cart({ cart, checkout }) {
  let total = 0;
  for (let i = 0; i < cart.length; i++) {
    const current = cart[i];
    total += current.pizza.sizes[current.size];
  }

  return (
    <div className="cart">
      <h2>Cart</h2>
      <ul>
        {cart.map((item, index) => (
          <li key={index}>
            <span className="size">{item.size}</span> – &nbsp;
            <span className="type">{item.pizza.name}</span> – &nbsp;
            <span>{item.price}</span>
          </li>
        ))}
      </ul>
      <p>
        Total: <span className="price">{intl.format(total)}</span>
      </p>
      <button onClick={checkout}>Checkout</button>
    </div>
  );
}
