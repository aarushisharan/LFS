import React from 'react';
import { Link } from 'react-router-dom';
import './landingpage.css';
import UndrawSignUpImage from './assets/undraw_undraw_undraw_undraw_sign_up_ln1s_-1-_s4bc_-1-_ee41_-1-_3xti.svg'; // Import the SVG file
import MobileSearchImage from './assets/undraw_mobile_search_jxq5.svg'; // Import the mobile search SVG file

const LandingPage = () => {
    return (
        <div className="parent-container">
            <div className="d-flex parts">
                <div className='part1'>
                    {/* Render the first image */}
                    <h3>LOST AND FOUND PORTAL</h3>
                    <div className='h-50'>
                        <div className="images">
                        <Link to="/register">
                                <img src={UndrawSignUpImage} alt="Sign Up Illustration" />
                            </Link>
                        </div>
                    </div>
                </div>
                <div className='part2'>
                    
                    {/* Render the mobile search SVG image */}
                    <div className='h-50'>
                        <div className="images">
                        <Link to="/lostitems">
                            <img src={MobileSearchImage} alt="Mobile Search Illustration" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LandingPage;
