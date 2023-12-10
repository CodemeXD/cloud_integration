import React from 'react';
import { Placeholder } from 'react-bootstrap';


const Header = () => {
  function headerTopic () {
    return React.createElement('input', null)
  }

  
  return (
    <div>
  {/* {headerTopic()} */}
  <div className='grid'>
  <div className='grid2'>
<div className='flex'>
<div style={{width: '2%', height: '350px', backgroundColor: '', borderRadius: '15px 45px'}}>
{/* <h2 style={{color: 'red'}}>Signup for our Newsletter</h2>
<form>
Name: <input type='text' placeholder='Enter your name'/><br/><br/>
Email: <input type='text' placeholder='Enter your email'/><br/><br/>
Phone: <input type='number' placeholder='Enter your phone number'/><br/><br/>
Age: <input type='number' placeholder='Enter your age'/><br/><br/>
Password: <input type='password' placeholder='New password'/><br/><br/>
<button>Submit</button>
</form> */}

{/* <h2>Contact Us</h2>

<h4>Yopougon Sicogi Score</h4>
<p><b>Boulevard principale de Yopougon</b></p>
<p><b>Phone: +225 0752487922</b></p>
<p><b>Email: abidjanfashiondes@gmail.com</b></p>
<p><b>Affordable trending designers</b></p>
<p><b>See direction below</b></p> */}

</div>

<div className='butt'>
{/* <h2>Contact Us</h2>
<h4>Yopougon Sicogi Score</h4>
<p><b>Boulevard principale de Yopougon</b></p>
<p><b>Phone: +225 0752487922</b></p>
<p><b>Email: abidjanfashiondes@gmail.com</b></p>
<p><b>Affordable trending designers</b></p>
<p><b>See direction below</b></p> */}
<button className='butt1'>Browse products</button>
{/* <button className='butt2'>Signup for our newsletter</button> */}
</div>

<div style={{width: '20%', height: '350px', backgroundColor: 'whitesmoke', borderRadius: '15px 45px'}}>
<h2>Contact Us</h2>

<h4>Yopougon Sicogi Score</h4>
<p><b>Boulevard principale de Yopougon</b></p>
<p><b>Phone: +225 0752487922</b></p>
<p><b>Email: abidjanfashiondes@gmail.com</b></p>
<p><b>Affordable trending designers</b></p>
<p><b>See direction below</b></p>


</div>

</div>
  </div>
  </div>
  


    </div>
  );
}

export default Header;
