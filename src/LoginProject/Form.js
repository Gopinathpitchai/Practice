import React from 'react';
import { Box, Card, CardContent, TextField, Typography, Button, Container } from '@mui/material';


const FromProject = () => {
  return (
    <Container maxWidth="sm" sx={{ display: 'flex', justifyContent: 'center', borderRadius: '20px', alignItems: 'center', height: '100vh',}}>
      <Card sx={{borderRadius:'px', }}>
        <CardContent>
        <Typography variant="h5" component="div" gutterBottom>
           SIS-LOGIN
          </Typography>
          <form noValidate autoComplete="off">
            <Box display="flex" flexDirection="column" gap={6} sx={{
              width:'500px',
              borderRadius:'50px',
              margin:'50px auto ',
              padding:'100px',
              height:'500px',
              boxShadow:'0 8px 8px rgba(0, 0, 0, 0.2)',
              
            }
            }>
              <TextField 
                label="Reg-no"
                variant="outlined"
                fullWidth
                required
                InputProps={{ style: { borderRadius: '30px' } }}
              />
              <TextField
                label="Password"
                type="password"
                variant="outlined"
                fullWidth
                required
                InputProps={{style:{borderRadius:'30px'}}}
              />
              <Button variant="contained" color="primary" size="medium" sx={{borderRadius:'20px', height:'50px',width:'200px',padding:'10px',}}>
                Login
              </Button>
            </Box>
          </form>
        </CardContent>
      </Card>
          
    </Container>
  );
};

export default FromProject;
