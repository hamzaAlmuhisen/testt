import { HeartOutlined,HeartFilled } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function AnimeCard( props:{fav:boolean;pic:string;details:string;name:string,id:string;}) {
    const navigate = useNavigate();
    const [fav, setFav] = useState(props.fav);

    function toDetails() {
      navigate(`/details`);
      localStorage.setItem("id",`${props.id}`)
      };

  return (
    <div className="card">
      <img style={{ width: 280 }} src={props.pic} />
      <div className="info">
        <h1 style={{textAlign:"start"}}>{props.name}</h1>
        <p>{props.details}</p>
        <a onClick={()=>{ toDetails();}} className="btn">
          Show Details
        </a>
        <button onClick={()=>{setFav(!fav)}}  className="btn-favorite">
          <i className="fa-regular fa-heart">
            {
             fav?   <HeartFilled />:  <HeartOutlined />
         
            }
          
          </i>
        </button>
      </div>
    </div>
  );
}
export default AnimeCard;
