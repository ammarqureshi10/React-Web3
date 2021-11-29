import React from "react";

import {
  Card,
  CardActionArea,
  CardContent,
  /* CardMedia, */
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
      width: theme.spacing(35),
      height: theme.spacing(35)
    }
  }
}));

export default function Cards({
  totalDifficulty,
  totalTransactions,
  blockNo,
  blockMiner,
  isPause
}) {
  const classes = useStyles();

  return (
    <div className={classes.root} style={{}}>
      <Paper variant="outlined">
        <Card className={classes.root} style={{background: "blanchedalmond"}}>
          <CardActionArea>
          {/*   <CardMedia
          className={classes.media}
          image="D:\react-web3\client\src\images\Mining.gif"
          title="Contemplative Reptile"
        /> */} 
            <CardContent>
              <Typography gutterBottom variant="h4" component="h2">
                Block Number
              </Typography>
              <Typography style={{ fontSize: "large" }}
                variant="body2"
                color="textSecondary"
                component="p"
              >
               {/*  {blockNo ? blockNo : <DataLoading />} */}
               {blockNo ? isPause === false ? blockNo : null : <DataLoading/>}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Paper>
      <Paper variant="outlined">
        <Card className={classes.root}  style={{background: "blanchedalmond"}} >
          <CardActionArea>
            {/* <CardMedia
          className={classes.media}
          image="/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        /> */}
            <CardContent>
              <Typography gutterBottom variant="h4" component="h2" >
                Total Transactions
              </Typography>
              <Typography
                style={{ fontSize: "large" }}
                variant="body2"
                color="textSecondary"
                component="p"
              >
                {totalTransactions ? isPause === false ? totalTransactions : null : <DataLoading/>}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Paper>
      <Paper variant="outlined">
        <Card className={classes.root} style={{background: "blanchedalmond"}}>
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
                {blockMiner ? isPause === false ? (blockMiner.substring(0, 7).concat("...", blockMiner.substring(37, 42))) : null : <DataLoading />}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Paper>
      <Paper variant="outlined">
        <Card className={classes.root} style={{background: "blanchedalmond"}}>
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
                {totalDifficulty ? isPause === false ?  totalDifficulty : null : <DataLoading />}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Paper>
    </div>
  );
}
