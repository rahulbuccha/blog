import React from 'react';
import './FrontPage.css';
import box3 from './assets/box3.jpg';
import box4 from './assets/box4.jpg';
import box2 from './assets/box2.jpg';
import box1 from './assets/box1.jpg';
 import 'bootstrap/dist/css/bootstrap.min.css'
import { Button } from 'react-bootstrap';
import 'animate.css'

const FrontPage =  () => {
  return (
    <div className='fullpage'>
    <div>
      <h1>Travelling-Blog</h1>
    </div>
    <div className='container'>
        <div className='container-1'>
          <div className='box'>
            <img src={box1} alt='' />
            <p>Travel</p>
            <h3>Mountains</h3>
            <p>The first box</p>
          </div>
        </div>

        <div className='container-1'>
          <div className='box'>
            <img src={box2} alt='' />
            <p>Travel</p>
            <h3>Valleys</h3>
            <p>the second box</p>
          </div>
        </div>

        <div className='container-1'>
          <div className='box'>
            <img src={box3} alt='' />
            <p>Travel</p>
            <h3>WaterFalls</h3>
            <p>the third box </p>
          </div>
        </div>

        <div className='container-1'>
          <div className='box'>
            <img src={box4} alt='' />
            <p>Travel</p>
            <h3>Resturant & bars</h3>
            <p>the fourth box </p>
          </div>
        </div>
       
      </div><br></br>
        <div className='button'>
          <Button>SignUp</Button>&nbsp;&nbsp;&nbsp;
          <Button>SignIn</Button>
        </div>

        <div className='footer'>
            <footer>
            <p>Copyright &copy; Rahul Shaw</p>
            </footer>
        </div>
      </div>


  );
}

export default FrontPage;

