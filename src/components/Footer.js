import React from 'react';

const currentYear = new Date().getFullYear();

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-items">
                <div>
                    <p>Designed and Developed by: <strong>Mario Ibarra</strong></p>
                </div> 
                <div>
                    <p>&copy; Copyright {currentYear}</p>
                </div>    
              
          </div>
        </div>
    )
}
export default Footer;