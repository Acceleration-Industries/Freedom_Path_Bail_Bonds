import React from 'react';
import { Dialog, DialogTitle, DialogContent, Grid, Card, CardMedia, CardContent, Typography, Button } from '@mui/material';
import { attorneys } from './attorneysData';

function AttorneysPopup({ open, onClose }) {
  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
      <DialogTitle sx={{ fontSize: '3rem', fontFamily: "'Richsten', sans-serif" }}>Attorneys</DialogTitle>
      <DialogContent dividers>
        <Grid container spacing={2}>
          {attorneys.map((attorney, index) => (
            <Grid item xs={12} key={index}>
              <Card sx={{ display: 'flex', alignItems: 'center' }}>
                <CardMedia
                  component="img"
                  sx={{ width: 250, height: 300 }}
                  image={attorney.imageUrl}
                  alt={attorney.name}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div" sx={{ fontSize: '2.5rem', fontFamily: "'Richsten', sans-serif" }}>
                    {attorney.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ fontSize: '1.8rem', fontFamily: "'Richsten', sans-serif" }}>
                    {/* Email: {attorney.email}<br /> */}
                    Phone: {attorney.phone}<br />
                    Website: <a href={attorney.website} target="_blank" rel="noopener noreferrer" style={{ fontSize: '2rem', fontFamily: "'Richardo Flacky', sans-serif" }}>{attorney.website}</a><br />
                    Address: {attorney.address}
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

export default AttorneysPopup;
