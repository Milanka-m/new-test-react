import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import { IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

interface IPopupProps {
    open?: boolean
    onClose: () => void
    children?: any
  }

const Popup: React.FC<IPopupProps> = ({ 
    open, 
    onClose, 
    children,
}) => {

  return (
    <div>
        {open 
        ? (
            <Dialog
                scroll='body'
                open={open}
            >
               {onClose ? (
                  <IconButton
                    aria-label="close"
                    onClick={onClose}
                    sx={{
                      position: 'absolute',
                      right: 8,
                      top: 8,
                    }}
                  >
                    <CloseIcon />
                  </IconButton>
                ) : null}
                {children}
            </Dialog>
          )
        : (
            <></>
          )}
      
    </div>
  );
}

export default Popup;