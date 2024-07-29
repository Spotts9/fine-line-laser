import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import TextField from "@mui/material/TextField";
import { Phone, Mail } from "@mui/icons-material";
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

// import { useTheme } from '@mui/system';

// Image
import davidImage from "../assets/images/DaveContact.jpg";
import dennisImage from "../assets/images/DennisContact.jpg";

//Emails
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';


const staffContactInfo = [
  {
    avatar: <Avatar alt="David Valead" src={davidImage} />,
    name: 'David Valead',
    occupation: 'Owner',
    mobile: '602-620-5166',
    office: '623-248-7575',
    email: 'david@finelinelasercutting.com',
  },
  {
    avatar: <Avatar alt="Dennis Reynolds" src={dennisImage} />,
    name: 'Dennis Reynolds',
    occupation: 'Estimating & Sales',
    mobile: '',
    office: '623-248-7575',
    email: 'dr@finelinelasercutting.com',
  },
];

// const whiteLogos = [
//   'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/6560628e8573c43893fe0ace_Sydney-white.svg',
//   'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/655f4d520d0517ae8e8ddf13_Bern-white.svg',
//   'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/655f46794c159024c1af6d44_Montreal-white.svg',
//   'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/61f12e891fa22f89efd7477a_TerraLight.svg',
//   'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/6560a09d1f6337b1dfed14ab_colorado-white.svg',
//   'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/655f5caa77bf7d69fb78792e_Ankara-white.svg',
// ];

// const darkLogos = [
//   'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/6560628889c3bdf1129952dc_Sydney-black.svg',
//   'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/655f4d4d8b829a89976a419c_Bern-black.svg',
//   'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/655f467502f091ccb929529d_Montreal-black.svg',
//   'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/61f12e911fa22f2203d7514c_TerraDark.svg',
//   'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/6560a0990f3717787fd49245_colorado-black.svg',
//   'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/655f5ca4e548b0deb1041c33_Ankara-black.svg',
// ];

// const logoStyle = {
//   width: '64px',
//   opacity: 0.3,
// };

export default function ContactUs() {

const [open, setOpen] = React.useState(false);

const handleClose = () => {
  setOpen(false);
};

  // const theme = useTheme();
  // const logos = theme.palette.mode === 'light' ? darkLogos : whiteLogos;

  const handleGetInTouch = async (event) => {
    event.preventDefault();
    const formData={
      fName: "",
      lName: "",
      contactPhone: "",
      contactEmail: "",
      message: "",
      file:null,
      attachedFile:null,
    }
    formData.fName = event.target.contactFName.value;
    formData.lName = event.target.contactLName.value;
    formData.contactPhone = event.target.contactPhone.value;
    formData.contactEmail = event.target.contactEmail.value;
    formData.message = event.target.contactMessage.value;
    formData.contactName = event.target.contactFName.value + " " + event.target.contactLName.value;
    formData.file = event.target.file.files[0];

    var fileData = new FormData();
    fileData.append('file', formData.file);

    try {
      await emailjs.send(
        'service_sh15p7m',
        'template_nx4zrxx',
        formData,
        {
          publicKey:'hKCGqpTY9ulUhzsrJ',
        },
      );
      // console.log('SUCCESS!');
      setOpen(true);
      event.target.reset();
    } catch (err) {
      if (err instanceof EmailJSResponseStatus) {
        console.log('EMAILJS FAILED...', err);
        return;
      }
    
      console.log('ERROR', err);
    }

}
  return (
    // <Container
    //   id="contact"
    //   sx={{
    //     pt: { xs: 4, sm: 8 },
    //     pb: { xs: 8, sm: 16 },
    //     position: 'relative',
    //     display: 'flex',
    //     flexDirection: 'column',
    //     alignItems: 'center',
    //     gap: { xs: 3, sm: 6 },
    //   }}
    // >
    <Container
    id="contact"
    sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      pt: { xs: 10, sm: 12 },
      pb: { xs: 8, sm: 12 },
    }}
  >
      {/* <Box
        sx={{
          width: { sm: '100%', md: '80%' },
          textAlign: { sm: 'left', md: 'center' },
          mt: { xs: 8, sm: 10 },
          alignSelf: 'center',
          height: { xs: 400, sm: 700 },
          backgroundImage: `url(${require('../assets/contactus.png')})`,
          backgroundSize: 'cover',
          borderRadius: '10px',
          outline: '1px solid',
          outlineColor:
            theme.palette.mode === 'light'
              ? alpha('#BFCCD9', 0.5)
              : alpha('#9CCCFC', 0.1),
          boxShadow:
            theme.palette.mode === 'light'
              ? `0 0 12px 8px ${alpha('#9CCCFC', 0.2)}`
              : `0 0 24px 12px ${alpha('#033363', 0.2)}`,
        }}
      >
      </Box> */}
      <Typography
        component="h2"
        variant="h4"
        color="text.primary"
        sx={{
          width: { sm: '100%', md: '60%' },
          textAlign: { sm: 'left', md: 'center' },
        }}
      >
        Contact Us
      </Typography>
      <Grid container spacing={2}
              sx={{
                width: { sm: '100%', md: '80%' },
                textAlign: { sm: 'left', md: 'center' },
                // mt: { xs: 8, sm: 10 },
                alignSelf: 'center',
              }}>
        {staffContactInfo.map((contactInfo, index) => (
          <Grid item xs={12} sm={6} md={6} key={index} sx={{ display: 'flex' }}>
            <Card
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                flexGrow: 1,
                p: 1,
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  pr: 2,
                }}
              >
                <CardHeader
                  avatar={contactInfo.avatar}
                  title={contactInfo.name}
                  subheader={contactInfo.occupation}
                />
                <CardActions disableSpacing>
                  <IconButton href="tel: 623-248-7575" aria-label="call Dennis">
                    <Phone />
                  </IconButton>
                  <IconButton href="mailto:dr@finelinelasercutting.com" aria-label="email Dennis">
                    <Mail />
                  </IconButton>
                </CardActions>
              </Box>
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  <div>{contactInfo.office}</div>
                  <div>{contactInfo.mobile}</div>
                  <div>{contactInfo.email}</div>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      {/* <Card> */}
            <Box
                // sx={{
                //   '& > :not(style)': { m: 2 },
                // }}
                sx={{
                  width: { sm: '100%', md: '80%' },
                  textAlign: { sm: 'left', md: 'center' },
                  // mt: { xs: 8, sm: 10 },
                  alignSelf: 'center',
                }}
                noValidate
                autoComplete="off"
            >
            <Card>
            <form onSubmit={handleGetInTouch}>
            <CardContent sx={{ flexGrow: 1, justifyContent: 'center' }}>
              <Typography gutterBottom variant="h5" component="h2">
                Tell Us About Your Project
              </Typography>

              <Grid paddingTop={3} container spacing={1} direction="row" justifyContent="center">
                <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                  <TextField id="contactFName" label="First Name" variant="outlined" fullWidth />
                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                  <TextField id="contactLName" label="Last Name" variant="outlined" fullWidth />
                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                  <TextField id="contactPhone" label="Phone Number" variant="outlined" fullWidth />
                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                  <TextField id="contactEmail" label="Email" variant="outlined" fullWidth />
                </Grid>
                <Grid item xs={12}>
                  <TextField id="contactMessage" label="Tell Us About Your Project" fullWidth multiline rows={4} />
                </Grid>
                <Grid item xs={12}>
                  <InputLabel>Upload File</InputLabel>
                  <Input type="file" id="file" fullWidth />
                </Grid>
              </Grid>
            </CardContent>
            <CardActions
              sx={{ pt: 4, justifyContent: "center" }}
              border={1}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button type="submit" color="primary" variant="contained">Get In Touch</Button>
            </CardActions>
            </form>
          </Card>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">Message Sent Successfully!</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              We will reach out as soon as we are able. Thank you for your interest.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Close
            </Button>
          </DialogActions>
        </Dialog>
      </Box>
    </Container>
  );
}
