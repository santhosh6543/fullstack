import  { useState } from 'react';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import '../assets/card.css'

const FlipCard = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleSignUpClick = () => {
    setIsFlipped(true);
  };

  const handleSignInClick = () => {
    setIsFlipped(false);
  };

  return (
    <div className='flip'>
    <div className={`flip-card ${isFlipped ? 'flipped' : ''}`}>
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <LoginForm onSignUpClick={handleSignUpClick} />
        </div>
        <div className="flip-card-back">
          <RegisterForm onSignInClick={handleSignInClick} />
        </div>
      </div>
    </div>
    </div>
  );
};

export default FlipCard;

