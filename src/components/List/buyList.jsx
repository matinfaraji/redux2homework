import "./buyList.css";
export default function Card() {
  return (
    <div className="card">
      <div className="card-image">
        <img src="path-to-your-plant-image.jpg" alt="Boncellensis Secullant" />
        <button className="buy-button">خرید</button>
      </div>
      <div className="card-content">
        <h2>Plants</h2>
        <p>Boncellensis Secullant</p>
        <div className="card-price">$34.00</div>
      </div>
    </div>
  );
}
