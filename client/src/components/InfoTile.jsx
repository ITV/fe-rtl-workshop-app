const InfoTile = (props) => {
  const { name, image_link, latin_name, animal_type, active_time, habitat } =
    props;

  return (
    <>
      <h2>{name}</h2>
      <div className="response-info-panels">
        <img className="response-item-image" alt={name} src={image_link} />
        <div className="response-info-panel-right">
          <ul className="animal-info">
            <li>Latin Name: {latin_name}</li>
            <li>Animal Type: {animal_type}</li>
            <li>Active Time: {active_time}</li>
            <li>Habitat: {habitat}</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default InfoTile;
