import AnimeCard from "./card";
import data from "../../app/data.json";
function AllAnime(props: { type: string}){

  return (
    <>
      <h1 className="head-text">{props.type}</h1>
      <div className="list-card g-20">
        {data.map((elm)=>(     
      <AnimeCard key={elm.Id} fav={elm.fav} pic={elm.image} details={elm.desc} name={elm.Name} id={elm.Id}  />
        ))}
      </div>
  
    </>
  );
}
export default AllAnime;
