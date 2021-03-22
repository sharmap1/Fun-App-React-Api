import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Col } from "react-bootstrap";

const FunGiphy = () => {
  const [giphy, setGiphy] = useState("");
  const [fetching, setFetching] = useState("false");
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        `https://api.giphy.com/v1/gifs/trending?api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9`
      );
      console.log(result);
      let randomIndex = Math.floor(Math.random() * 100);

      //   setGiphy(`${result.data.data[10].images.fixed_height.url}`);
      setGiphy(`${result.data.data[randomIndex].images.fixed_height.url}`);
    };
    fetchData();
  }, [fetching]);

  const handleClick = (e) => {
    e.preventDefault();
    setFetching(!fetching);
  };
  return (
    <>
      <Col md="12">
        <Card.Body className="pic-card">
          <Card.Img
            className="card-img"
            variant="top"
            // src="https://images-na.ssl-images-amazon.com/images/I/61x07Ihm7aL._AC_.jpg"
            src={giphy}
          />
          <Card.Header as="h5">My Giphy</Card.Header>
          <p>Giphy Images to refresh your day</p>
          <button
            // onClick={() => setFetching(!fetching)}
            onClick={handleClick}
            className="btn btn-info"
          >
            next
          </button>
        </Card.Body>
      </Col>
    </>
  );
};
export default FunGiphy;
