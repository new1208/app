import React from 'react';
import {Link} from 'react-router-dom';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';


export default function LabTabs() {
    const [value, setValue] = React.useState('1');
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

  return (
        <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="product" value="1" component={Link} to='/product' />
            <Tab label="employee" value="2" component={Link} to='/employee'/>
            <Tab label="Hello" value="3" component={Link} to='/new'/>
          </TabList>
        </Box>
        </TabContext>
    </Box>

  )
}