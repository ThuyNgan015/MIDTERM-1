export default function Cart({cart}) {
    return (
      <div class="cards-view">
      <div class="cards-grid">
        <div key={cart.id} class="card">
          <h4>{cart.title}</h4>
          <small>{cart.title}</small>
          <img src={cart.image}/>
        </div>
      </div>
    </div>
    );
  }
