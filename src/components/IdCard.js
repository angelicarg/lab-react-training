function IdCard(props) {
  return (
    <div>
      <div className="Iteracao1">
        <img src="{props.picture}" alt="Foto pessoal" />
        <p>{props.lastName}</p>
        <p>{props.firtName}</p>
        <p>{props.gender}</p>
        <p>{props.height}</p>
        <p>{props.birth}</p>
      </div>
    </div>
  );
}

export default IdCard;
