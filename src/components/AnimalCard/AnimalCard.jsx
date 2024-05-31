import "./styles.css";

function AnimalCard({ animalData, animalName, children }) {
  return (
    <div className="animal_card_wrapper">
      <h2> {animalName} </h2>
      <p> {animalData.species} </p>
      <p> {animalData.role} </p>
      <img src={animalData.image} />
      {children}
    </div>
  );
}
export default AnimalCard;
