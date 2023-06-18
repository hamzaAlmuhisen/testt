import { Button, Rate } from "antd";
import DetailsCard from "./detailsCard";
import { MdPlayArrow } from "react-icons/md";
import { useEffect, useState } from "react";
import data from "../../app/data.json";

function AnimeDetails() {
  const [anime, setAnime] = useState<any>();

  useEffect(() => {
    const Id = localStorage.getItem("id");
    data.forEach((element) => {
      if (element.Id == Id) setAnime(element);
    });
  }, []);

  return (
    <div style={{ marginTop: -100 }}>
      <img style={{ width: "100%" }} src={anime?.backImage} />
      <div className="details-container">
        <h1>{anime?.Name}</h1>
        <div>
          <h2>{anime?.category}</h2>
          <Rate defaultValue={5} />
        </div>
        <p>
        {anime?.desc}
        </p>
        <Button style={{ fontSize: 30 }}>
          <MdPlayArrow style={{ fontSize: 40 }} />
          Play
        </Button>
      </div>
      <h1
        style={{
          textAlign: "start",
          marginTop: 80,
          marginLeft: 80,
          fontSize: 50,
        }}
      >
        More Like This
      </h1>
      <div className="list-card">
 {data.map((elm)=>(
         <DetailsCard pic={elm.image} />
 ))}

      </div>
    </div>
  );
}
export default AnimeDetails;
