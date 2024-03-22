import React from 'react';
import { Dialog, DialogTitle, DialogContent, Grid, Card, CardMedia, CardContent, Typography, Button } from '@mui/material';
import { contacts } from './contactData';
function ContactPopup({ open, onClose }) {
  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
      <DialogTitle sx={{ fontSize: '3rem', fontFamily: "'Richsten', sans-serif" }}>Contact Us</DialogTitle>
      <DialogContent dividers>
        <Grid container spacing={2}>
          {contacts.map((contact, index) => (
            <Grid item xs={12} key={index}>
              <Card sx={{ display: 'flex', alignItems: 'center' }}>
                <CardMedia
                  component="img"
                  sx={{ width: 400, height: 400 }}
                  image={contact.imageUrl}
                  alt={contact.name}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div" sx={{ fontSize: '4rem', fontFamily: "'Richsten', sans-serif" }}>
                    {contact.name}
                  </Typography>
                  <Typography variant="subtitle1" color="text.secondary" sx={{ fontSize: '3rem', fontFamily: "'Richsten', sans-serif" }}>
                    {contact.title} {/* Display the title here */}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ fontSize: '2rem', fontFamily: "'Richsten', sans-serif" }}>
                    Email: {contact.email}<br />
                    Phone: {contact.phone}<br />
                    Address: {contact.address}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </DialogContent>
      <Button onClick={onClose} color="primary" sx={{ margin: 2, fontSize: '2rem', fontFamily: "'Richardo Flacky', sans-serif" }}>
        Close
      </Button>
    </Dialog>
  );
}
export default ContactPopup;
