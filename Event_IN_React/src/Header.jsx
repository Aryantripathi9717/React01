export default function Header({ cartCount }) {
  return (
    <div>
      <img style={{height:"40px"}} src="https://th.bing.com/th/id/OIP.3Y3Hb78iRFZTaDk9e69CLgHaHa?w=160&h=180&c=7&r=0&o=7&dpr=1.4&pid=1.7&rm=3" alt="" />
      <h2>React Demo App</h2>
      <p>Cart Item Count: {cartCount}</p>
    </div>
  );
}