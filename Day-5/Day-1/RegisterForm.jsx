import '../assets/RegiterForm.css'
const RegisterForm = ({ onSignInClick }) => {
  return (
    <div>
      <h2 className="register-h">User Registration</h2>
      <form>
        <label className="register-label" >Name:</label>
        <input className="register-input" type="name" placeholder="Enter your fullname" required/>
        <label className="register-label" >Email:</label>
        <input className="register-input" type="email" placeholder="Enter your email" required/>
        <label className="register-label">Mobile:</label>
        <input className="register-input" type="email" placeholder="Enter your phonenumber" required/>
        <label className="register-label">Password:</label>
        <input className="register-input" type="password" placeholder="Enter your password"  />
        <label className="register-label">Confirm Password:</label>
        <input className="register-input" type="password" placeholder="Confirm your password"  />
        <button className="register-btn1" type="submit">Register</button>
      </form>
      <p className="register-p">Already have an account? <a className="register-btn2" onClick={onSignInClick}><u>Sign In</u></a></p>
    </div>
  );
};

export default RegisterForm;
