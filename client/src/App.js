import React, { useState } from 'react';
import {
  ChakraProvider,
  extendTheme,
} from '@chakra-ui/react';
import { Routes, Route } from 'react-router-dom';
import Home from './views/Home'
import Signup from './views/Signup'
import apiService from './services/api';
import { useNavigate } from 'react-router-dom';


const colors = {
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
  },
};
const theme = extendTheme({ colors });

function App() {
  let [errors, setErrors] = useState('')

  const navigate = useNavigate()

  const testProp = ({email, password}) => {
    apiService.signup({email, password})
    .then(response => {
      if(response.errorMessage) {
        setErrors(response.errorMessage)
      } else {
        setErrors('')
        console.log(response)
        navigate('/')
      }
    })
    .catch(err => {
      console.log(err)
    })
  }

  return (
      <ChakraProvider theme={theme}>
        <Routes>
          <Route path="/" element={ < Home /> } />
          <Route path="/home" element={ < Home /> } />
          <Route path="/signup" element={ < Signup testProp={testProp} errors={errors} /> } />
        </Routes>
      </ChakraProvider>
  );
}

export default App;
