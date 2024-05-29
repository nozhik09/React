import "./styles.css";
function ProfileCard() {
  const image =
    "https://www.interfax.ru/ftproot/photos/photostory/2021/06/11/week4_1100.jpg";

  const name = "Владислав Ноженко";
  const occupation = "Программист";
  const hobbies = ["Путешествия", " Дайвинг"];

  return (
    <div>
      <h1 className="nameClass">{name}</h1>
      <img className="imgClass" src={image} alt={name} />
      <p className="occypation">Род деятельности: {occupation}</p>
      <p className="hobbies"> Хобби: {hobbies}</p>
    </div>
  );
}
export default ProfileCard;
