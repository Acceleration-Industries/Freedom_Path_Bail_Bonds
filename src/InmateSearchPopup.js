import React, { useState } from 'react';
<<<<<<< HEAD
import inmateMugshot from './images/inmate-details-mugshot.png';
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
                'X-RapidAPI-Key': '',
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
                <Button onClick={() => setSelectedInmate(null)} color="primary">
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
                                            height="140"
                                            image={result.mugshot || inmateMugshot}
                                            alt="Mugshot unavailable"
                                            sx={{ fontFamily: "'Richardo Flacky', sans-serif", fontSize: '1.5rem' }}
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
=======
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
        'X-RapidAPI-Key': '',
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
        <Typography gutterBottom variant="h5" component="div">
          {selectedInmate.name}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          Book Date: {selectedInmate.book_date_formatted}
        </Typography>
        {/* Dynamically render additional inmate details here */}
        {selectedInmate.details.map((detail, index) => (
          <Typography key={index} variant="body2" color="textSecondary">
            {detail[0]}: {detail[1]}
          </Typography>
        ))}
        <Button onClick={() => setSelectedInmate(null)} color="primary">
          Back to Search Results
        </Button>
      </DialogContent>
    )
  );

  return (
    <Dialog open={open} onClose={() => { onClose(); setSelectedInmate(null); }} maxWidth="md" fullWidth>
      <DialogTitle>{selectedInmate ? 'Inmate Details' : 'Inmate Search'}</DialogTitle>
      {!selectedInmate ? (
        <>
          <DialogContent>
            <FormControl fullWidth margin="normal">
              <TextField label="First Name" value={firstName} onChange={e => setFirstName(e.target.value)} />
            </FormControl>
            <FormControl fullWidth margin="normal">
              <TextField label="Last Name" value={lastName} onChange={e => setLastName(e.target.value)} />
            </FormControl>
            <FormControl fullWidth margin="normal">
              <InputLabel>Choose County</InputLabel>
              <Select value={county} label="Choose County" onChange={e => setCounty(e.target.value)}>
                {counties.map((county) => (
                  <MenuItem key={county.code} value={county.code}>{county.name}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleSearch}>Search</Button>
            <Button onClick={() => { onClose(); setSelectedInmate(null); }}>Close</Button>
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
                      height="140"
                      image={result.mugshot || "/path/to/default/image.jpg"} // Placeholder for a default image if mugshot is unavailable
                      alt="Mugshot unavailable"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {result.name}
                      </Typography>
                      {/* Optionally, list some quick info here if desired */}
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
>>>>>>> 9a2b2eaa0a8e500f6a70afb8a16c5f0cdf9d5871
