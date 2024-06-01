import "./styles.css";
import { animalServerData } from "./data";
import AnimalCard from "../../components/AnimalCard/AnimalCard";
import { v4 } from "uuid";

function Lesson_05() {
  const animalCards = animalServerData.map((animalCard) => {
    return(
        <div>
            <h1>Animal Card-Madascar</h1>
            <AnimalCard animalData={animalCard}/>

        
        
        <AnimalCard key={v4()}  animalData={animalCard} />
        </div>)

        
  });

  return (
    // option 1

    <div className="lesson_05_container">
      {/* <AnimalCard animalData={animalServerData[0]}/>
<AnimalCard animalData={animalServerData[1]}/>
<AnimalCard animalData={animalServerData[2]}/> */}
      {animalCards}
    </div>
  );
}
export default Lesson_05;
