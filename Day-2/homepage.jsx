import '../assets/homepage.css'
import {Box} from '@mui/material';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import Header from './header';
import Footer from './footer';
import SouthIcon from '@mui/icons-material/South';
import { Link } from 'react-router-dom';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import PlaceIcon from '@mui/icons-material/Place';
import SailingIcon from '@mui/icons-material/Sailing';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import InfoIcon from '@mui/icons-material/Info';
import ContactsIcon from '@mui/icons-material/Contacts';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';

export default function ClippedDrawer() {
  const drawerWidth = 240;

  const items = [
    { text: 'Top Boats', icon: <SailingIcon /> },
    { text: 'Top Locations', icon: <PlaceIcon /> },
    { text: 'Top Dealers', icon: <LocalOfferIcon /> }
  ];
  const items1 = [
    { text: 'About Us', icon: <InfoIcon /> },
    { text: 'Contact Us', icon: <ContactsIcon /> },
    { text: 'Help and Support', icon: <MailIcon /> }
  ];
  const items2 = [
    { text: 'Notification', icon: <NotificationsNoneIcon /> },
    { text: 'Setting', icon: <SettingsIcon /> },
    { text: 'Logout', icon: <LogoutIcon /> }
  ];
  
  return (
    <div className='home-body'>
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar className='tool-head'>
          <Header/>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}
      >
        <Toolbar />
        <Box className='drawer' sx={{ overflow: 'auto' }}>
          
           <List className='list'>
      {items.map((item) => (
        <ListItem key={item.text} disablePadding>
          <ListItemButton>
            <ListItemIcon className='listicon'>
              {item.icon}
            </ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
           <List className='list'>
      {items1.map((item1) => (
        <ListItem key={item1.text} disablePadding>
          <ListItemButton>
            <ListItemIcon className='listicon'>
              {item1.icon}
            </ListItemIcon>
            <ListItemText primary={item1.text} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
           <List className='list'>
      {items2.map((item2) => (
        <ListItem key={item2.text} disablePadding>
          <ListItemButton>
            <ListItemIcon className='listicon'>
              {item2.icon}
            </ListItemIcon>
            <ListItemText primary={item2.text} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>

         
        </Box>
      </Drawer>

      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <div className="card-body">
          <div className='t0'>
        <p className='t3'><ArrowForwardIcon/></p>
        <h1 className='home-h1'>Explore our Famous Boat Homes from South..</h1>
        </div>
        <h2 className='t2'>Kerala, India</h2>
        <p>Nestled in the southwestern corner of India, Kerala, often referred to as Gods Own Country, is a land of enchanting beauty and rich cultural tapestry. Lush with tropical vegetation, pristine beaches, serene backwaters and a variety of flora and fauna, Kerala is an ideal destination for honeymooners and families. The famous backwaters of Alleppey and Kumarakom, adorned with houseboats gently gliding on tranquil waters, epitomize the unique charm of Kerala.</p>
        <p>Kerala is divided into three distinct regions  – Malabar, Cochin, and Travancore – comprising a total of 14 districts each offering a unique experience. The Malabar region, with its historic spice trade, has a rich cultural heritage. Kochi, a bustling port city, reflects the influence of various colonial powers through its architecture and cuisine. The southern region of Travancore boasts majestic temples and pristine beaches, contributing to the states diverse charm.</p>
        <p>Keralas international airports, including Trivandrum, Cochin, and Calicut, facilitate seamless connectivity, welcoming visitors from around the globe. The state is a haven for Ayurveda, with rejuvenating practices deeply ingrained in its culture. Ayurvedic resorts and wellness centers, nestled amidst serene landscapes, offer holistic experiences, blending traditional therapies, herbal treatments, and yoga. The best time to visit Kerala is during the winter months, from October to March, when the weather is pleasant, and the landscapes are at their verdant best.</p>
        <h2 className='t1'>Top Boat Homes of Kerala..</h2>
        <div className="card-body1">

        <Card className='c1' sx={{ maxWidth: 300 }}>
      <CardActionArea>
        <CardMedia className='cm'
          component="img"
          height="200"
          image="https://res.cloudinary.com/dcc7xkmex/image/upload/v1708520856/jcthouseboat_ghforl.jpg"
          alt="jct"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            JCT Housetboat
          </Typography>
          <div className='c'>
          <p className='c-p'>#1 in Boat Houses in kerala</p>
          <h2 className='c-h2'>9.5/10</h2>
          </div>
          <h3>About JCT</h3>
          <p>Providing unique accommodation on water, JCT Houseboats is a wooden boat offering overwater rooms. It has a common kitchen and sun deck. A restaurant is available. JCT Houseboats is 5.8 km from Alleppey Railway Station.</p>
          <div className='c1'>
          <p className='c1-p'>Prices from..</p>
          <h2 className='c1-h2'>Rs/-5000</h2>
          <button className='c1-btn'><Link className="h-link"to ="jct">Book Now</Link></button>
          </div>
        </CardContent>
      </CardActionArea>
    </Card>

    <Card className='c2' sx={{ maxWidth: 300 }}>
      <CardActionArea>
        <CardMedia className='cm'
          component="img"
          height="200"
          image="https://res.cloudinary.com/dcc7xkmex/image/upload/v1708521222/grantvilla_murpsc.jpg"
          alt="grandvilla"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Grand Villa
          </Typography>
          <div className='c'>
          <p className='c-p'>#2 in Boat Houses in kerala</p>
          <h2 className='c-h2'>9.4/10</h2>
          </div>
          <h3>About GrandVilla</h3>
          <p>49 km from Cochin Shipyard, Grand Villa Houseboat is a sustainable property situated in Kumarakom and features air-conditioned rooms with free WiFi and parking on-site.</p>
          <div className='c1'>
          <p className='c2-p'>Prices from..</p>
          <h2 className='c2-h2'>Rs/-6500</h2>
          <button className='c2-btn'>Book Now</button>
          </div>
         </CardContent>
      </CardActionArea>
    </Card>

    <Card className='c3' sx={{ maxWidth: 300 }}>
    
      <CardActionArea>
        <CardMedia className='cm'
          component="img"
          height="200"
          image="https://res.cloudinary.com/dcc7xkmex/image/upload/v1708521586/crusi_ifqgyk.jpg"
          alt="crusi"
        />
        
        <CardContent>
        <Typography gutterBottom variant="h5" component="div">
            Spice Coast Cruises
          </Typography>
          <div className='c'>
          <p className='c-p'>#3 in Boat Houses in kerala</p>
          <h2 className='c-h2'>9.3/10</h2>
          </div>
          <h3>About Spice Coast Cruises</h3>
          <p>Spice Coast Cruises houseboat offers luxury sailing on Keralas tranquil backwaters.The houseboat is anchored in Kumarakom, and visitors may walk 3 kilometers to the Kumarakom Bird Sanctuary.</p>
          <div className='c1'>
          <p className='c3-p'>Prices from..</p>
          <h2 className='c3-h2'>Rs/-7000</h2>
          <button className='c3-btn'>Book Now</button>
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
    <div className='cardbody1-d'>
    <h2 className='c1d1'>Luxury Boat Houses..</h2>
    <p className='c1p1'><SouthIcon/></p></div>
<p>Standard Houseboats: These are basic boats that have only the necessary amenities on board.
Deluxe/Premium Houseboats: These have a few more luxuries as compared to the standard ones, such as air conditioners for 10 hours at nights.
Luxury/Super Deluxe Houseboats: These are the crème de la crème of houseboats. They have an entourage of uniformed butlers and 24-hour air conditioning services.</p>
<p>Houseboats in Kerala are made of eco-friendly materials and are available for hire for day cruises or night stays. Most of them have thatched 
  roofs made of coconut leaves. There are also separate rest rooms with televisions, in case the raw beauty outside gets monotonous
    (although, we don’t see that happening anytime soon). All these houseboats have the necessary 
   safety measures and are in accordance with the Kerala Government and the Tourism department.</p>
<div className="card-body2">
    <Card className='c4' sx={{ maxWidth: 300 }}>
      <CardActionArea>
        <CardMedia className='cm'
          component="img"
          height="200"
          image="https://res.cloudinary.com/dcc7xkmex/image/upload/v1708538708/harmony_b77qrt.jpg"
          alt="harmony"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Harmony Houseboats
          </Typography>
          <div className='c'>
          <p className='c-p'>#4 in Boat Houses in kerala</p>
          <h2 className='c-h2'>9.1/10</h2>
          </div>
          <h3>About Harmony</h3>
         <p>Offering a shared lounge and lake view, Harmony Houseboats is set in Alleppey, 3.8 km from Mullakkal Rajarajeswari Temple and 6.2 km from Alleppey Lighthouse. Boasting room service, this property also provides guests with a sun terrace.</p>
         <div className='c1'>
          <p className='c1-p'>Prices from..</p>
          <h2 className='c1-h2'>Rs/-8000</h2>
          <button className='c1-btn'>Book Now</button>
          </div>
         </CardContent>
      </CardActionArea>
    </Card>

    <Card className='c5' sx={{ maxWidth: 300 }}>
      <CardActionArea>
        <CardMedia className='cm'
          component="img"
          height="200"
          image="https://res.cloudinary.com/dcc7xkmex/image/upload/v1708538708/xandari_ymkfos.jpg"
          alt="xandari"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Xandari Riverscapes
          </Typography>
          <div className='c'>
          <p className='c-p'>#5 in Boat Houses in kerala</p>
          <h2 className='c-h2'>9.0/10</h2>
          </div>
          <h3>About Xandari</h3>
          <p>Xandari Riverscapes are a fleet of house boats which sails along Vembanad Lake and in the backwaters of Alleppey. The houseboats are docked near Pallathuruthy Bridge.</p> 
          <div className='c1'>
          <p className='c5-p'>Prices from..</p>
          <h2 className='c5-h2'>Rs/-9500</h2>
          <button className='c5-btn'>Book Now</button>
          </div>
        </CardContent>
      </CardActionArea>
    </Card>

    <Card className='c6' sx={{ maxWidth: 300 }}>
      <CardActionArea>
        <CardMedia className='cm'
          component="img"
          height="200"
          image="https://res.cloudinary.com/dcc7xkmex/image/upload/v1708538708/vaishnav_zxlvxg.jpg"
          alt="vaishnav"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Vaishnav Tours
          </Typography>
          <div className='c'>
          <p className='c-p'>#6 in Boat Houses in kerala</p>
          <h2 className='c-h2'>9.0/10</h2>
          </div>
          <h3>About Vaishnav Tours</h3>
          <p>Vaishnav Tours is located in the backwaters of the beautiful and pristine Alleppey. It is 1 km from the one of the largest lakes of India, Vembanad. The air-conditioned accommodation will provide you with a flat-screen satellite TV.</p>
          <div className='c1'>
          <p className='c1-p'>Prices from..</p>
          <h2 className='c1-h2'>Rs/-9000</h2>
          <button className='c1-btn'>Book Now</button>
          </div>
        </CardContent>
      </CardActionArea>
    </Card>

    </div>
        </div>
      </Box>
    </Box>
    <Footer/>
    </div>
  );
}
