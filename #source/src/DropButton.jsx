import * as React from 'react';
import Box from '@mui/material/Box';

import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import FormHelperText from '@mui/material/FormHelperText';

export default function DropButton(props) {
  const [open, setOpen] = React.useState(false);
  const [age, setAge] = React.useState('Google');


  const handleChange = (event) => {
    setAge(event.target.value);
    props.onSelect(event.target.value);
  };
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason !== 'backdropClick') {
      setOpen(false);
    }
  };

  

  return (
    <div>
      <FormHelperText>Kde jste se o nás dozvěděl/a?</FormHelperText>
          <Box component="form" sx={{ display: 'flex', flexWrap: 'wrap',     }}>
            
            <FormControl sx={{ m: 1, minWidth: 200 }}>
              <InputLabel id="demo-dialog-select-label"  sx={{color: 'black'}} ></InputLabel>
              <Select
                labelId="demo-dialog-select-label"
                id="demo-dialog-select"
                value={age}
                onChange={handleChange}
                input={<OutlinedInput label="" />}
                sx={{
                  color: "green",
                  '.MuiOutlinedInput-notchedOutline': {
                    borderColor: '#487454',
                  },
                  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#487454',
                  },
                  '&:hover .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#487454',
                  },
                  '.MuiSvgIcon-root ': {
                    fill: "black !important",
                  }
                }}
              >
                 <MenuItem value="Vyber jednu z uvedených možností">
                  <em>Žádná z možností</em>
                </MenuItem>
                <MenuItem value="Instagram">Instagram</MenuItem>
                <MenuItem value="Facebook">Facebook</MenuItem>
                <MenuItem value="Google">Google</MenuItem>
                <MenuItem value="Youtube">Youtube</MenuItem>
                <MenuItem value="Rádio">Rádio</MenuItem>
                <MenuItem value="Pracovní portály">Pracovní portály</MenuItem>
                <MenuItem value="Doporučení">Doporučení</MenuItem>
              </Select>
            </FormControl>
          </Box>
      
 
         
    
    </div>
  );
}
