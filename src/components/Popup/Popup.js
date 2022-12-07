import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import Alert from '@mui/material/Alert';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import style from "./profile.module.css";


function BootstrapDialogTitle(props) {
  const { onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default function Popup(props) {

  const { children, openPopup, setOpenPopup } = props;

  const margin = { marginTop: 20, marginLeft: 20, marginBottom: 10 }

  const handleClose = () => {
    setOpenPopup(false);
  };

  // const handleCloseSucess = () => {
  //   setOpenPopup(false);
  // };

  const changePopupToLogin = () => {
    setOpenPopup(false);

    props.changePopup("login");

  };

  const changePopupToRegister = () => {
    setOpenPopup(false);

    props.changePopup("register");

  };

  return (
    <div>
      {props.tipo === "registerSucessful" ? 
         <Dialog open={openPopup}>
          <Alert onClose={handleClose}>O registo foi efetuado com sucesso!</Alert>
         </Dialog>
        :
        <Dialog open={openPopup} onClose={handleClose}>
          <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose} />
          {props.tipo === "perfil" ?
            <DialogContent className={style.backgroundPopup}>
              {children}
            </DialogContent> :
            // props.tipo === "registerSucessful" ?
            //   //   <DialogContent className={style.backgroundSucess}>
            //   //     {children}
            //   //   </DialogContent> 
            //   <Alert >This is a success alert — check it out!</Alert>
            //   :
             <DialogContent>
                {children}
              </DialogContent>}
          {props.tipo === "login" &&
            <div>
              <Typography style={margin}> Ainda não tem conta ?
                <Button variant="text" onClick={changePopupToRegister}>Registar</Button>
              </Typography>
            </div>
          }
          {props.tipo === "register" &&
            <div>
              <Typography style={margin}> Já tem conta ?
                <Button variant="text" onClick={changePopupToLogin}>Entrar</Button>
              </Typography>
            </div>
          }
        </Dialog>
      }
    </div>
  );
}
