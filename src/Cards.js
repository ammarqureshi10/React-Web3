import React from "react";

import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  makeStyles,
  Paper,
  Typography
} from "@material-ui/core";
import DataLoading from "./DataLoading";


const useStyles = makeStyles((theme) => ({
  root: {
    justifyContent: "center",
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(1),
      width: theme.spacing(40),
      height: theme.spacing(35)
    }
  }
}));

export default function SimplePaper({
  totalDifficulty,
  totalTransactions,
  blockNo,
  blockMiner
}) {
  const classes = useStyles();

  return (
    <div className={classes.root} style={{}}>
      <Paper variant="outlined">
        <Card className={classes.root}>
          <CardActionArea>
          {/*  <CardMedia
          className={classes.media}
          image="src\images\0_1mxneoYpQDTrYfVW.gif"
          title="Contemplative Reptile"
        />  */}
            <CardContent>
              <Typography gutterBottom variant="h4" component="h2">
                Block Number
              </Typography>
              <Typography
                variant="body2"
                color="textSecondary"
                component="p"
              >
                {blockNo ? blockNo : <DataLoading />}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Paper>
      <Paper variant="outlined">
        <Card className={classes.root}>
          <CardActionArea>
            {/* <CardMedia
          className={classes.media}
          image="/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        /> */}
            <CardContent>
              <Typography gutterBottom variant="h4" component="h2">
                Total Transactions
              </Typography>
              <Typography
                style={{ fontSize: "large" }}
                variant="body2"
                color="textSecondary"
                component="p"
              >
                {totalTransactions ? totalTransactions : <DataLoading />}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Paper>
      <Paper variant="outlined">
        <Card className={classes.root}>
          <CardActionArea>
            {/* <CardMedia
          className={classes.media}
          image="/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        /> */}
            <CardContent>
              <Typography gutterBottom variant="h4" component="h2">
                Miner Address
              </Typography>
              <Typography
                style={{ fontSize: "large" }}
                variant="body2"
                color="textSecondary"
                component="p"
              >
                {blockMiner ? (
                  blockMiner
                    .substring(0, 7)
                    .concat("...", blockMiner.substring(37, 42))
                ) : (
                  <DataLoading />
                )}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Paper>
      <Paper variant="outlined">
        <Card className={classes.root}>
          <CardActionArea>
            {/* <CardMedia
          className={classes.media}
          image="/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        /> */}
            <CardContent>
              <Typography gutterBottom variant="h4" component="h2">
                Total Difficulty
              </Typography>
              <Typography
                style={{ fontSize: "large" }}
                variant="body2"
                color="textSecondary"
                component="p"
              >
                {totalDifficulty ? totalDifficulty : <DataLoading />}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Paper>
    </div>
  );
}
