import * as React from 'react';
import PhoneIcon from '@mui/icons-material/Phone';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import Avatar from '@mui/material/Avatar';
import MasazeImage from '../images/top_tabs/image_masaz.jpg'
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

export default function IconLabelTabs() {
    const [value, setValue] = React.useState('1');

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
      setValue(newValue);
    };

  return (

<TabContext value={value}>
  <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
    <TabList onChange={handleChange} aria-label="lab API tabs example">
      <Tab icon={<PhoneIcon />} label="RECENTS" value="1" />
      <Tab icon={<FavoriteIcon />} label="FAVORITES" value="2"/>
      <Tab icon={<PersonPinIcon />} label="NEARBY"  value="3" />
      <Tab icon={<Avatar alt="test avatar" src={MasazeImage} variant="square"/>} sx={{ p: 0 }}  value="4" />
    </TabList>
  </Box>
  <TabPanel value="1">Item One</TabPanel>
  <TabPanel value="2">Item Two</TabPanel>
  <TabPanel value="3">Item Three</TabPanel>
  <TabPanel value="4">Item For</TabPanel>
</TabContext>
    
  );
}

