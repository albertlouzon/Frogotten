import React from 'react'
import { ListItem } from '@material-ui/core'
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import axios from 'axios'
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
const Todo = ({ onClick, completed, text, onDelete, image}) => {
  console.log('the image: ', image)
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);

  };

  // const getImage = () => {
  //   axios.get(`http://aws.random.cat/meow`)
  //   .then(res => {
  //     console.log('IMAGE ', res)
  //     if(res && res['data']) {
  //       randomCatImage = res['data']['file']
  //     }
  //   })
  // }

  const handleClose = () => {
    setOpen(false);
  };
  return (
<div>
<ListItem className='row todo'       onClick={handleClickOpen}
 style={{      display: 'flex',
  justifyContent: 'space-between'}}>
      <div
    style={{
      textDecoration: completed ? 'line-through' : 'none',
    }}
  >         <ListItemText primary={text} secondary={completed ? "" : "In progress"} />
  
  </div>
  <Checkbox
        checked={completed}
        onChange={onClick}
        value="checkedB"
        color="primary"
 
      />
     <button style={{cursor: 'pointer'}} onClick={onDelete}>X</button>
  </ListItem>

<Dialog
open={open}
TransitionComponent={Transition}
keepMounted
onClose={handleClose}
aria-labelledby="alert-dialog-slide-title"
aria-describedby="alert-dialog-slide-description"
>
<DialogTitle id="alert-dialog-slide-title">{text}</DialogTitle>
<DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            {completed ?  'The frog already ate this todo' : 'In progress...'}
          </DialogContentText>
          <img src={image()}></img>
        </DialogContent>
<DialogActions>
  <Button onClick={handleClose} color="primary">
    Cool
  </Button>
</DialogActions>
</Dialog>
</div>
  
)}


export default Todo

