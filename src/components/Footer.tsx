import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="footer__payments">
                {/* Payment icons */}
                <span className="payment-icon">VISA</span>
                <span className="payment-icon">MasterCard</span>
                <span className="payment-icon">AMEX</span>
                <span className="payment-icon">Skrill</span>
                <span className="payment-icon">and more</span>
            </div>
            <div className="footer__social">
                {/* Social icons */}
                <span className="social-icon">FB</span>
                <span className="social-icon">TW</span>
                <span className="social-icon">IG</span>
                <span className="social-icon">YT</span>
            </div>
            <div className="footer__links">
                <div>Chicks Gold</div>
                <div>Support</div>
                <div>Legal</div>
            </div>
            <div className="footer__copyright">
                &copy; 2017 - 2025 ChicksGold.com. All Rights Reserved.
            </div>
        </footer>
    );
};

export default Footer; 