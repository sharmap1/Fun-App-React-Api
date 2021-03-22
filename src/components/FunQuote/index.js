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
import { red } from "@material-ui/core/colors";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 200,
  },
  avatar: {
    backgroundColor: red[500],
  },
});

const FunQuote = () => {
  const classes = useStyles();
  const [quote, setQuote] = useState("");
  const [fetching, setFetching] = useState("false");

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("https://api.kanye.rest?format=text");
      setQuote(`${result.data}`);
    };

    fetchData();
  }, [fetching]);

  return (
    // <React.Fragment>
    //   <Col md="12">
    //     <Card.Body className="quote-card">
    //       <Card.Img
    //         className="card-img"
    //         variant="top"
    //         src="https://images-na.ssl-images-amazon.com/images/I/61x07Ihm7aL._AC_.jpg"
    //       />
    //       <Card.Header as="h5">My Quotes</Card.Header>

    //       <p style={{ margin: "20px" }}>{quote}</p>
    //       {/* </Card.Header> */}
    //       <button
    //         onClick={() => setFetching(!fetching)}
    //         className="btn btn-info"
    //       >
    //         next
    //       </button>
    //     </Card.Body>
    //   </Col>
    // </React.Fragment>
    <>
      <Card className={classes.root}>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" className={classes.avatar}>
              Q
            </Avatar>
          }
          action={<IconButton aria-label="settings"></IconButton>}
          title="Quotes"
          // subheader="September 14, 2016"s
        />
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image="https://images-na.ssl-images-amazon.com/images/I/61x07Ihm7aL._AC_.jpg"
            title="Contemplative Dog"
          />
          <CardContent>
            <Typography variant="body" color="textSecondary" component="p">
              {quote}
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
export default FunQuote;
