import React from 'react'
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkIcon from '@mui/icons-material/Link';
import { Link } from 'react-router-dom';
import "./App.css"


function LinksSec() {
  return (
    <>

    <div className='container py-5'>
        <div className="row">
            <div className="col-md-9">
      <p>Follow us: <br /></p>
      <li>Instagram: @peterdraw.co</li>
      <li>Website: peterdraw.co</li>
      <p className='py-3'>We hope you like it! Thank you.</p>
      <hr />
      <h4 className='font-weight-bold'>Remixes</h4>

      <img width={250} src="https://colorlib.com/wp/wp-content/uploads/sites/2/free-dashboard-templates-1.jpg" className="rounded float-left py-3 m-2" alt="..."/>
      <img width={250} src="https://colorlib.com/wp/wp-content/uploads/sites/2/free-dashboard-templates-1.jpg" className="rounded float-left py-3 m-2"  alt="..."/>

<p>Free food delivery admin dashboard...</p>

<div className="search-container">
  <input type="text" className="search-input" placeholder="Search..."/>
  <button type="submit" className="search-button">
    <EmailIcon/>
  </button>
</div>




            </div>


<div className="col-md-3">
<h6>Tags</h6>
<Link to="/Admin" className="text-secondary text-decoration-none btn btn-light m-2">Admin</Link>
<Link to="/AdminDash" className="text-secondary text-decoration-none btn btn-light m-2">Admin Dashboard</Link>
<Link to="/Adminpanel" className="text-secondary text-decoration-none btn btn-light m-2">Admin panel</Link>
<Link to="/AdminUi" className="text-secondary text-decoration-none btn btn-light m-2">Admin Ui</Link>
<Link to="/Dashboard" className="text-secondary text-decoration-none btn btn-light m-2">DashBoard</Link>
<Link to="/DashboardUi" className="text-secondary text-decoration-none btn btn-light m-2">DashBoard Ui</Link>
<Link to="/Foodadmin" className="text-secondary text-decoration-none btn btn-light m-2">Food Admin</Link>
<Link to="/FoodDelivery" className="text-secondary text-decoration-none btn btn-light m-2">Food Delivery</Link>
<Link to="FreeBie" className="text-secondary text-decoration-none btn btn-light m-2">Free Bie</Link>
<Link to="FreeDesign" className="text-secondary text-decoration-none btn btn-light m-2">Free Design</Link>
<Link to="Freetemplate" className="text-secondary text-decoration-none btn btn-light m-2">Free template</Link>
<Link to="UiandUxDesign " className="text-secondary text-decoration-none btn btn-light m-2">Ui and Ux Design </Link>

<h6 className='my-2'>Share</h6>
<FacebookIcon className='fs-3 m-3'/>
<TwitterIcon className='fs-3 m-3  '/>
<LinkIcon  className='fs-3 m-3  '/>

<hr />

<h6>For Figma</h6>

<hr />

<p>Last updated 6 months ago
Support: afendihore@gmail.com
Licensed under CC BY 4.0
Report resource</p>


</div>

        </div>
    </div>
      

    </>
  )
}

export default LinksSec
