import * as React from 'react';

import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import InfoIcon from '@mui/icons-material/Info';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';

export default class ResourceCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      snackbarFavOpen : false,
      snackbarNoLinkOpen : false,
      dialogOpen : false,
    }
  }

  snackbarHandleClose(){
  }
  render(){

    let image = this.props.itemData.image
    console.log( image)

    if(image.includes("no value")){
      image = "scholver.jpg";
    }

    return (

      <Card
        sx={{
        width: 350,
        height: 480,
        display: 'flex',
        flexDirection: 'column' }}
      >

        <Snackbar anchorOrigin={{vertical: "top",horizontal: "center"}} open={this.state.snackbarFavOpen} autoHideDuration={2000} onClose={()=>{
          this.setState({snackbarFavOpen: false})
          }}>
          <Alert severity="success" sx={{ width: '100%' }}>
            Added to favorites.
          </Alert>
        </Snackbar>

        <Snackbar anchorOrigin={{vertical: "top",horizontal: "center"}}  open={this.state.snackbarNoLinkOpen} autoHideDuration={2000} onClose={()=>{
          this.setState({snackbarNoLinkOpen: false})
          }}>
          <Alert severity="warning" sx={{ width: '100%' }}>
            No default link is set.
          </Alert>
        </Snackbar>

        <Dialog
          maxWidth="sm"
          fullWidth
          open={this.state.dialogOpen}
          onClose={()=>{
            this.setState({dialogOpen: false})
          }}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {this.props.itemData.title}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
            {this.props.itemData.description}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            {this.props.itemData.actions.map((actionItem, i) => (
              <Button key={actionItem.title}
                onClick={
                  ()=>{
                    window.open(actionItem.url)
                  }
                }
                size="small">{(i===0 ? "► " : "")}{actionItem.title}</Button>
            ))}
            <Button color="secondary" onClick={()=>{
              this.setState({dialogOpen: false});
            }}>Close</Button>
          </DialogActions>

        </Dialog>

        <CardActionArea onClick={
          (e)=>{
            if(this.props.itemData.actions.length > 0){
              window.open(this.props.itemData.actions[0].url)
            }
            else{
              this.setState({snackbarNoLinkOpen: true})
            }
          }
          }>
        <CardMedia
          component="img"
          sx={{
            maxHeight: 200
          }}
          image={"/images/" + image}
          alt={"img: " + this.props.itemData.title}
        />
          <CardContent sx={{ height:220 }}>
            <Typography gutterBottom variant="h5" component="h2">
              {this.props.itemData.title}

              <Tooltip title="Add to favorites on home page">
              <IconButton aria-label="add to favorites" onClick={(e)=>{
                e.stopPropagation();
                this.setState({snackbarFavOpen: true})
              }}>
                <FavoriteIcon />
              </IconButton>
              </Tooltip>

              <Tooltip title="show more information">
              <IconButton aria-label="show more information" onClick={(e)=>{
                e.stopPropagation();
                this.setState({dialogOpen: true})
              }}>
                <InfoIcon />
              </IconButton>
              </Tooltip>

            </Typography>
          <Typography>
            <div style={{height: 150, textOverflow: "ellipsis", overflow: 'hidden'}}>
            {this.props.itemData.description}
            </div>
          </Typography>
        </CardContent>
        </CardActionArea>
        <CardActions>
          {this.props.itemData.actions.map((actionItem, i) => (
            <Button key={actionItem.title}
              onClick={
                ()=>{
                  window.open(actionItem.url)
                }
              }
              size="small">{(i===0 ? "► " : "")}{actionItem.title}</Button>
          ))}
        </CardActions>
      </Card>
    );
  }
}
