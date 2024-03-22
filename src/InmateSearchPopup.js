import React, { useState } from 'react';
import inmateMugshot from './photos/inmate-details-mugshot.png';
import {
  Dialog,
  DialogContent,
  DialogTitle,
  TextField,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  DialogActions,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActionArea
} from '@mui/material';
import axios from 'axios';
const counties = [
  { code: 'ca-acso', name: 'Alameda County Sheriff\'s Office' },
  { code: 'ca-fcso', name: 'Fresno County Sheriff\'s Office' },
  { code: 'ca-kcso', name: 'Kern Co Sheriff\'s Dept' },
  { code: 'ca-king', name: 'Kings County Sheriff\'s Office' },
  { code: 'ca-lcso', name: 'Los Angeles County Sheriff\'s Department' },
  { code: 'ca-mend', name: 'Mendocino County Sheriff\'s Office' },
  { code: 'ca-mcso', name: 'Monterey Co Sheriff\'s Office' },
  { code: 'ca-ocsd', name: 'Orange County Sheriff\'s Department' },
  { code: 'ca-rcsd', name: 'Riverside County Sheriff\'s Department' },
  { code: 'ca-sber', name: 'San Bernardino County Sheriff\'s Office' },
  { code: 'ca-sdsd', name: 'San Diego County Sheriff\'s Department' },
  { code: 'ca-sfso', name: 'San Francisco County Sheriff\'s Office' },
  { code: 'ca-sjsd', name: 'San Joaquin Co Sheriff\'s Dept' },
  { code: 'ca-slso', name: 'Solano County Sheriff\'s Office' },
  { code: 'ca-snso', name: 'Sonoma County Sheriff\'s Office' },
  { code: 'ca-scsd', name: 'Stanislaus County Sheriff\'s Department' },
  { code: 'ca-tcso', name: 'Tulare County Sheriff\'s Office' },
  { code: 'ca-vcso', name: 'Ventura County Sheriff\'s Office' },
];
function InmateSearchPopup({ open, onClose }) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [county, setCounty] = useState('');
  const [results, setResults] = useState([]);
  const [selectedInmate, setSelectedInmate] = useState(null);
  const handleSearch = async () => {
    const options = {
      method: 'GET',
      url: 'https://jailbase-jailbase.p.rapidapi.com/search/',
      params: { source_id: county, first_name: firstName, last_name: lastName },
      headers: {
        'X-RapidAPI-Key': '125644b4a7msh1c9180e43eb92dap122a7bjsn30f7f65746b1',
        'X-RapidAPI-Host': 'jailbase-jailbase.p.rapidapi.com'
      }
    };
    try {
      const response = await axios.request(options);
      setResults(response.data.records);
      setSelectedInmate(null);
    } catch (error) {
      console.error(error);
    }
  };
  const showInmateDetails = (inmate) => {
    setSelectedInmate(inmate);
  };
  const renderInmateDetailsView = () => (
    selectedInmate && (
      <DialogContent dividers>
        <Typography gutterBottom variant="h5" component="div" sx={{ fontFamily: "'Richardo Flacky', sans-serif", fontSize: '1.5rem' }}>
          {selectedInmate.name}
        </Typography>
        <Typography variant="body2" color="textSecondary" sx={{ fontFamily: "'Richardo Flacky', sans-serif", fontSize: '1.5rem' }}>
          Book Date: {selectedInmate.book_date_formatted}
        </Typography>
        {selectedInmate.details.map((detail, index) => (
          <Typography key={index} variant="body2" color="textSecondary" sx={{ fontFamily: "'Richardo Flacky', sans-serif", fontSize: '1.5rem' }}>
            {detail[0]}: {detail[1]}
          </Typography>
        ))}
        <Button
          onClick={() => setSelectedInmate(null)}
          color="primary"
          sx={{
            fontFamily: "'Richardo Flacky', sans-serif",
            fontSize: '1.5rem',
          }}
        >
          Back to Search Results
        </Button>

      </DialogContent>
    )
  );
  return (
    <Dialog open={open} onClose={() => { onClose(); setSelectedInmate(null); }} maxWidth="md" fullWidth>
      <DialogTitle sx={{ fontFamily: "'Richardo Flacky', sans-serif", fontSize: '2rem' }}>
        {selectedInmate ? 'Inmate Details' : 'Inmate Search'}
      </DialogTitle>
      {!selectedInmate ? (
        <>
          <DialogContent>
            <FormControl fullWidth margin="normal">
              <TextField
                label="First Name"
                value={firstName}
                onChange={e => setFirstName(e.target.value)}
                sx={{ fontFamily: "'Richardo Flacky', sans-serif" }}
                InputProps={{
                  style: { fontSize: '1.5rem', fontFamily: "'Richardo Flacky', sans-serif" },
                }}
                InputLabelProps={{
                  style: { fontSize: '1.5rem', fontFamily: "'Richardo Flacky', sans-serif" },
                }}
              />
              <TextField
                label="Last Name"
                value={lastName}
                onChange={e => setLastName(e.target.value)}
                sx={{ fontFamily: "'Richardo Flacky', sans-serif" }}
                InputProps={{
                  style: { fontSize: '1.5rem', fontFamily: "'Richardo Flacky', sans-serif" },
                }}
                InputLabelProps={{
                  style: { fontSize: '1.5rem', fontFamily: "'Richardo Flacky', sans-serif" },
                }}
              />
            </FormControl>
            <FormControl fullWidth margin="normal">
              <InputLabel
                sx={{
                  fontFamily: "'Richardo Flacky', sans-serif",
                  fontSize: '1.5rem'
                }}
              >
                Choose County
              </InputLabel>
              <Select
                value={county}
                label="Choose County"
                onChange={e => setCounty(e.target.value)}
                sx={{
                  fontFamily: "'Richardo Flacky', sans-serif",
                  '.MuiOutlinedInput-input': {
                    fontSize: '1.5rem',
                    fontFamily: "'Richardo Flacky', sans-serif"
                  },
                  '.MuiSvgIcon-root': {
                    fontSize: '1.5rem',
                  }
                }}
              >
                {counties.map((county) => (
                  <MenuItem
                    key={county.code}
                    value={county.code}
                    sx={{
                      fontFamily: "'Richardo Flacky', sans-serif",
                      fontSize: '1.5rem'
                    }}
                  >
                    {county.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

          </DialogContent>
          <DialogActions>
            <Button onClick={handleSearch} sx={{ fontFamily: "'Richardo Flacky', sans-serif", fontSize: '1.5rem' }}>Search</Button>
            <Button onClick={() => { onClose(); setSelectedInmate(null); }} sx={{ fontFamily: "'Richardo Flacky', sans-serif", fontSize: '1.5rem' }}>Close</Button>
          </DialogActions>
        </>
      ) : renderInmateDetailsView()}
      {!selectedInmate && (
        <DialogContent dividers>
          <Grid container spacing={2}>
            {results.map((result) => (
              <Grid item xs={12} sm={6} md={4} key={result.id}>
                <CardActionArea onClick={() => showInmateDetails(result)}>
                  <Card>
                    <CardMedia
                      component="img"
                      height="300"
                      image={inmateMugshot}
                      alt="Mugshot"
                      sx={{ fontFamily: "'Richardo Flacky', sans-serif", fontSize: '1.5rem', textAlign: 'center' }}
                    />

                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div" sx={{ fontFamily: "'Richardo Flacky', sans-serif", fontSize: '1.5rem' }}>
                        {result.name}
                      </Typography>
                    </CardContent>
                  </Card>
                </CardActionArea>
              </Grid>
            ))}
          </Grid>
        </DialogContent>
      )}
    </Dialog>
  );
}
export default InmateSearchPopup;
