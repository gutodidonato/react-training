let Card = (props) => {
  return (
    <div className="term" key={props.key}>
      <dt>
        <span className="emoji" role="img" aria-label={props.img}>
          {props.emoji}
        </span>
        <span>{props.name}</span>
      </dt>
      <dd>{props.text}</dd>
    </div>
  );
};
export default Card;
