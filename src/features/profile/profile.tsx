import { Col, Row } from "antd";
import AnimeCard from "../allAnime/card";
import { useEffect, useState } from "react";
function Profile() {
  const [name, setName] = useState<any>();

  useEffect(() => {
    const name = localStorage.getItem("userName");
    if (name != "undefined") {
      setName(name);
    } else {
      setName("Guest101");
    }
  }, []);

  return (
    <div className="profile">
      <Row gutter={5} justify="center" align="middle">
        <Col xl={11} xxl={11}>
          <h2>Welcom {name}</h2>
          <h2>massegr for youth of futuer</h2>
        </Col>
        <Col xl={11} xxl={5}>
          <video width={500} controls>
            <source src="messege.mp4" type="video/mp4" />
          </video>
        </Col>
      </Row>
      <Row style={{ margin: 36 }}>
        <Col xl={22}>
          <h1> My favorte anime</h1>
          <Row></Row>
        </Col>
      </Row>

      <Row style={{ margin: 36 }}>
        <Col xl={22}>
          <h1> My favorte movie</h1>
          <Row></Row>
        </Col>
      </Row>
    </div>
  );
}
export default Profile;
