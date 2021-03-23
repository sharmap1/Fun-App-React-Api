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
import { orange } from "@material-ui/core/colors";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 200,
  },
  avatar: {
    backgroundColor: orange[500],
  },
});
const FunGiphy = () => {
  const classes = useStyles();

  const [giphy, setGiphy] = useState("");
  const [fetching, setFetching] = useState("false");
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        `https://api.giphy.com/v1/gifs/trending?api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9`
      );
      //   console.log(result);
      let randomIndex = Math.floor(Math.random() * 50);

      // setGiphy(`${result.data.data[randomIndex].images.fixed_height.url}`);
      let results = result.data.data[randomIndex];
      let allResults = results.images.fixed_height.url;
      setGiphy(allResults);

      //   console.log(`${result.data.data}`);
      //   setGiphy(`${result.data.data}`);
    };
    fetchData();
  }, [fetching]);

  // const handleClick = (e) => {
  //   e.preventDefault();
  //   setFetching(!fetching);
  // };
  return (
    // <>
    //   <Col md="12">
    //     <Card.Body className="pic-card">
    //       <Card.Img
    //         className="card-img"
    //         variant="top"
    //         // src="https://images-na.ssl-images-amazon.com/images/I/61x07Ihm7aL._AC_.jpg"
    //         src={giphy}
    //       />
    //       <Card.Header as="h5">My Giphy</Card.Header>
    //       <p>Giphy Images to refresh your day</p>
    //       <button
    //         // onClick={() => setFetching(!fetching)}
    //         onClick={handleClick}
    //         className="btn btn-info"
    //       >
    //         next
    //       </button>
    //     </Card.Body>
    //   </Col>
    // </>
    <>
      <Card className={classes.root}>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" className={classes.avatar}>
              G
            </Avatar>
          }
          action={<IconButton aria-label="settings"></IconButton>}
          title="Giphy"
          // subheader="September 14, 2016"s
        />
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={giphy}
            title="Contemplative joke"
          />
          <CardContent>
            <Typography variant="body" color="textSecondary" component="p">
              Giphy Images to refresh your day
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button
            size="medium"
            color="primary"
            onClick={() => setFetching(!fetching)}
          >
            next
          </Button>
        </CardActions>
      </Card>
    </>
  );
};
export default FunGiphy;
