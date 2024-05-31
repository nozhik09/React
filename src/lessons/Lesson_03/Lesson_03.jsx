import Button from "../../components/Button/OldButton";
import "./styles.css";
import AnimalCard from "../../components/AnimalCard/AnimalCard";
import { lionData, zebraData, normalizeData } from "./data";

function Lesson_03() {
  return (
    <div className="lesson_03_container">
      <AnimalCard
        animalData={lionData}
        animalName={normalizeData(lionData.name)}
      >
        <p>{lionData.skills[0]}</p>
        <p>{lionData.skills[1]}</p>
      </AnimalCard>

      <AnimalCard
        animalData={zebraData}
        animalName={normalizeData(zebraData.name)}
      >
        <p>Zebra</p>
      </AnimalCard>

      <Button />
      <Button name="Delete" isPrimary={false} />
    </div>
  );
}
export default Lesson_03;
