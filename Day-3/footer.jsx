import '../assets/footer.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TwitterIcon from '@mui/icons-material/Twitter';
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="section">
          <h3>About App</h3>
          <p>A boathouse booking application providing wide range of top boat homes in south India.Advancement in pre-booking system.  </p>
          
        </div>
        
        <div className="section1">
          <h3>Contact Information</h3>
          <p>Email: sdh@gmail.com</p>
          <p>Phone: 9988776655</p>
          <p>Address: 123 Boat House St, Marina City, Country</p>
        </div>
        <div className="section2">
          <h3 className='section2-h2'>Follow Us</h3>
          <ul className="social-icons">
            <li><FacebookIcon/></li>
            <li><WhatsAppIcon/></li>
            <li><TwitterIcon/></li>
            <li><XIcon/></li>
            <li><LinkedInIcon/></li>

          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
