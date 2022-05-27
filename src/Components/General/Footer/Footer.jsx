import React from 'react';
import { MDBFooter, MDBCol,MDBRow} from 'mdb-react-ui-kit';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import './FooterStyles.css';

export default function Footer(){
    return(
        <MDBFooter bgColor='light' className='text-muted'>
            <section className='container1'>
                <MDBRow>

                    <MDBCol lg='3' md='6'>
                        <MDBRow>
                            <MDBCol>
                               <img className='image' src='../Assets/logo.png' alt='logo' height='190px' width='180px'/> 
                            </MDBCol>
                        </MDBRow>
                        <MDBRow>
                            <MDBCol>
                               <div className='title'>BizStat</div>
                            </MDBCol>
                        </MDBRow>
                    </MDBCol>

                    <MDBCol lg='2' md='6'>
                        <div className='Heading'>Learn More</div>
                        <div className='Text'>About BizStat</div>
                        <div className='Text'>Our Team</div>
                        <div className='Text'>Privacy Policy</div>
                        <div className='Text'>Other</div>
                    </MDBCol>

                    <MDBCol lg='2' md='6'>
                        <div className='Heading'>Join Us</div>
                        <div className='Text'>BS Admin</div>
                        <div className='Text'>Codegen</div>
                        <div className='Text'>View More</div>
                    </MDBCol>

                    <MDBCol lg='3' md='6'>
                        <div className='Heading'>Contact us</div>
			            <div className='Text'>Technical Help - <b>011 657 1298</b></div>
			            <div className='Text'>Head Office- <b>011 657 1299</b></div>
			            <div className='Text'>Mail - <b>BizStat@cgen.net</b></div>
			            <div className='Text' href="#">Website</div>
                    </MDBCol>

                    <MDBCol lg='2' md='6'>
                        <div className='Heading'>Social Media</div>
                        <MDBRow>
                            <MDBCol lg='2' md='6'><FaFacebook/></MDBCol>
                            <MDBCol lg='2' md='6'><FaInstagram/></MDBCol>
                            <MDBCol lg='2' md='6'><FaTwitter/></MDBCol>
                            <MDBCol lg='2' md='6'><FaYoutube/></MDBCol>
                        </MDBRow>
                    </MDBCol>
                </MDBRow>
        
            </section>
            <hr/>

            <section className='container2'>
               <div className='copyright'>© 2021 Copyright : BizStat.com</div>
            </section>

        </MDBFooter>
    );
}