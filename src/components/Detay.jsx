import * as React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import Typography from "@mui/material/Typography";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
      padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
      padding: theme.spacing(1),
    },
  }));

function Detay({proje_adi,proje_uzun_aciklama,github_linki}) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <a href={github_linki}>  <Button variant="outlined" >
        Github Linki
      </Button></a>

      <Button variant="outlined" onClick={handleClickOpen}>
        Proje Detayı
      </Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
         {proje_adi}
        </DialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>
              {proje_uzun_aciklama}
          </Typography>

        </DialogContent>
      </BootstrapDialog>
    </React.Fragment>
  );
}

export default Detay;
