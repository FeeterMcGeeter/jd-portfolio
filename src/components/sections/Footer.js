import React from 'react';

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-backToTop'>
                <i className='fa-solid fa-angles-up'></i>
            </div>

            <div className='footer-logo'>
                <i className='fa-solid fa-code'></i>
                <p>Jeff Davis</p>
            </div>

            <div className='footer-copyright'>
                <p>&copy; 2024 Developed By Jeff Davis</p>
            </div>
        </div>
    )
};

export default Footer;