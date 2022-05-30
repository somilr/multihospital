import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import  Dialog  from './Dialog';
function Medication(props) {
    return (
        <Box>
        <Container>
        <center>    
             <h1>Medicine</h1>
        </center>
        </Container>
        <Dialog />
    </Box>
    );
}

export default Medication;