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
// import "../../App.css";

const useStyles = makeStyles({
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
      const api_key = process.env.REACT_APP_GIPHY_KEY;
      const result = await axios(
        `https://api.giphy.com/v1/gifs/trending?api_key=${api_key}`
      );
      //   console.log(result);
      let randomIndex = Math.floor(Math.random() * 50);

      let results = result.data.data[randomIndex];
      let allResults = results.images.fixed_height.url;
      setGiphy(allResults);

      //   console.log(`${result.data.data}`);
      //   setGiphy(`${result.data.data}`);
    };
    fetchData();
  }, [fetching]);

  return (
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
            <Typography variant="body" component="p">
              Giphy Images to refresh your day
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="medium" onClick={() => setFetching(!fetching)}>
            next
          </Button>
        </CardActions>
      </Card>
    </>
  );
};
export default FunGiphy;
