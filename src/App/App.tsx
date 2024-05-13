import React from 'react';
import './App.css';
import SiteContext from './SiteContext';
import InputFileUpload from '../FileUploadButton';
import { createTheme, ThemeProvider } from '@mui/material';
import {GlobalTheme} from '../styles/theme' 

const App: React.FC = () => {
  return (
    <ThemeProvider theme={GlobalTheme}>
      <SiteContext>
        <InputFileUpload />
      </SiteContext>
    </ThemeProvider>
  );
}

export default App;
