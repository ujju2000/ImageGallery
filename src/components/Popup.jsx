
import React , {useContext} from 'react'
import { UserContext } from '../context/Context';
import { Dialog,DialogTitle } from '@mui/material';
export default function Popup() {
    const {open, setOpen} = useContext(UserContext);
    const handleClose = () => {   
        setOpen(false);
    }
  return (
   <Dialog open= {open} onClick = {handleClose} onClose = {handleClose} >
        <DialogTitle>hi</DialogTitle>
   </Dialog>
  )
}
