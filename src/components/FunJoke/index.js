import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import { Typography, CardHeader, Avatar, IconButton } from "@material-ui/core";
import { blue } from "@material-ui/core/colors";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 200,
  },
  avatar: {
    backgroundColor: blue[500],
  },
});

const FunJoke = () => {
  const classes = useStyles();

  const [joke, setJoke] = useState("");

  useEffect(() => {
    fetchJoke();
  }, []);

  const fetchJoke = () => {
    axios
      .get("https://icanhazdadjoke.com/", {
        headers: { Accept: "application/json" },
      })
      .then((res) => setJoke(res.data))
      .catch((err) => console.log(err));
  };

  // const [joke, setJoke] = useState("");
  // const [fetching, setFetching] = useState("false");
  // useEffect(() => {
  //   // setFetching(true);
  //   const fetchData = async () => {
  //     const result = await axios(
  //       "https://us-central1-dadsofunny.cloudfunctions.net/DadJokes/random/type/general"
  //     );
  //     setJoke(`${result.data[0].setup} ${result.data[0].punchline}`);
  //   };
  //   fetchData();
  // }, [fetching]);

  return (
    // <>
    //   <Col md="12">
    //     <Card.Body className="joke-card">
    //       <Card.Img
    //         className="card-img"
    //         variant="top"
    //         src="https://pheebzeatz.files.wordpress.com/2015/06/mr-bean.jpg"
    //       />
    //       <Card.Header as="h5">My Jokes</Card.Header>
    //       <p style={{ margin: "20px" }}>{joke.joke}</p>
    //       <button onClick={fetchJoke} className="btn btn-info">
    //         next
    //       </button>
    //       {/* <p className="btn btn-primary text-white" onClick={fetchJoke}></p> */}
    //     </Card.Body>
    //   </Col>
    // </>
    <>
      <Card className={classes.root}>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" className={classes.avatar}>
              J
            </Avatar>
          }
          action={<IconButton aria-label="settings"></IconButton>}
          title="Jokes"
          // subheader="September 14, 2016"s
        />
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image="https://pheebzeatz.files.wordpress.com/2015/06/mr-bean.jpg"
            title="Contemplative joke"
          />
          <CardContent>
            <Typography variant="body" color="textSecondary" component="p">
              {joke.joke}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="medium" color="primary" onClick={fetchJoke}>
            next
          </Button>
        </CardActions>
      </Card>
    </>
  );
};
export default FunJoke;
