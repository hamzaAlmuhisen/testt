import { Button } from "antd";

function DetailsCard(props:{pic:string}) {
  return (
<div className="detailsCard">
<img  src={props.pic} />
<Button>
    Play
</Button>
</div>
  );
}
export default DetailsCard;
