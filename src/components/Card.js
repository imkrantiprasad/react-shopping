function Card({ shoppingItem }) {
  const { title, description, price } = shoppingItem;
  return (
    <div className="card">
      <p>{title}</p>
      <p>{description}</p>
      <p>Price: {price}</p>
    </div>
  );
}

export default Card;
