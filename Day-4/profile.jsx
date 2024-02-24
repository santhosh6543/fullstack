import '../assets/profile.css'
import {Box, Divider} from '@mui/material';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import '../assets/profile.css'
import Header1 from './header1';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import BookIcon from '@mui/icons-material/Book';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import HomeIcon from '@mui/icons-material/Home';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';

const drawerWidth = 240;

export default function Profile() {

  const items = [
    { text: 'My Bookings', icon: <BookIcon/> },
    { text: 'Favourites', icon: <FavoriteBorderIcon/> },
    { text: 'Setting', icon: < SettingsIcon/> },
    { text: 'Logout', icon: < LogoutIcon/> }
  ];

  return (
    <div className='home-body'>
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar className='tool-head'>
          <Header1/>
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
        <img src={"https://res.cloudinary.com/dcc7xkmex/image/upload/v1708701446/profile_jrzq01.jpg"} 
        alt={Profile} className="profile-image" />
        
          <h3 className='p-h'>SANTHOSH </h3>
          <div className='b1'>
          <p className='b1-p1'><EmailIcon /></p>
          <p className='b1-p2'>abc@gmail.com</p>
          </div>
          <div className='b2'>
          <p className='b2-p1'><LocalPhoneIcon/></p>
          <p className='b2-p2'>998877665544</p>
          </div>
          <div className='b3'>
          <p className='b3-p1'><HomeIcon /></p>
          <p className='b3-p2'>116,abc street,Abc Town,D city,
            State,Country.</p>
          </div>
         <Divider/>

         <List>
      {items.map((item) => (
        <ListItem key={item.text} disablePadding>
          <ListItemButton>
            <ListItemIcon >
              {item.icon}
            </ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
        </Box>
      </Drawer>

      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <h2>History..</h2>
        <h3>Dear santhosh s</h3>
        <p>We extend our heartfelt gratitude for choosing our boathouse for your recent getaway. 
          Your past booking not only supported our endeavor but also enriched our waters with the laughter,
           joy, and cherished memories you created during your stay. It is our privilege to have been a part
            of your journey, and we hope that your experience surpassed your expectations, leaving you with moments
             to treasure for a lifetime. Your patronage is deeply appreciated, and we look forward to welcoming you back
              aboard for another unforgettable adventure on the tranquil waters.</p>
              <div className='rating'>
              <p className='rating-p'>Your Top Rating..</p>
              <p className='rating-icon'><StarIcon/><StarIcon/><StarIcon/><StarIcon/><StarIcon/><StarIcon/><StarIcon/><StarIcon/><StarIcon/><StarHalfIcon/></p>
              </div>
<div className='p-cardbody'>
        <div className='p-card1'>
          <div>
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
    </div>
    <div className='b4'>
      <h2 className='b5'>Booking details.</h2>
      <p className='b5'>Date : 2nd January 2024</p>
      <p className='b5'>Adult : 5</p>
      <p className='b5'>Child:2</p>
      <p className='b5'>No.Of.Places visited:8</p>
      <p className='b5'>Total : Rs/-5400(GST)</p>
      <p className='b5'>Status:Paid</p>
      <p className='b5'>Your ratings:9.5/10</p>
      
    </div>
        </div>

        <div className='p-card2'>
          <div>
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
    <div>
    <h2 className='b5'>Booking details.</h2>
      <p className='b5'>Date : 11th Feburary 2024</p>
      <p className='b5'>Adult : 7</p>
      <p className='b5'>Child:2</p>
      <p className='b5'>No.Of.Places visited:10</p>
      <p className='b5'>Total : Rs/-7800(GST)</p>
      <p className='b5'>Status:Paid</p>
      <p className='b5'>Your ratings:9.1/10</p>
    </div>
    </div>
    </div>
<h2>For you..</h2>
<h3>Explore more popular Boat Homes from South</h3>
<p>
Discover an unparalleled boating experience with our newest and most popular boat homes nestled in the serene landscapes of the South. Embark on an unforgettable journey as you explore the tranquil waters and breathtaking vistas that await you. Whether you seek a secluded retreat or
 an adventure-filled escape, our handpicked selection of boat homes promises to exceed your expectations. </p>
<h2 className='b6'>BOOK NOW!!!</h2>
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

      </Box>
    </Box>
    </div>
  );
}
