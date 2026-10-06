function Cards(props) {
  return (
    <div className="Card">
      <img src={props.image} alt={props.name} />

      <h2 className="text">{props.name}</h2>
      <h3 className="text2">{props.price}</h3>
      <p className="text3">{props.ram}</p>
    </div>
  );
}

export default Cards;