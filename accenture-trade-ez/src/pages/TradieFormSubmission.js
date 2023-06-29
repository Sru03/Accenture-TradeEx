import React from 'react';

const TradieFormSubmission = () => {

    return (
        <div>
            <div className='section-container'>
                <div className="textbox-container">
                    <p>Your registration has been sent for review! Our team will review your details and certification and notify you via <p style={{color: 'orange', display: 'inline'}}>email</p> when we have an update.</p>
                </div>
            </div>
            <p className='other-textbox'> In the meantime, checkout our&nbsp;<a href="/marketplace" style={{color: 'orange'}}>marketplace</a></p>
        </div>
    );
}

export default TradieFormSubmission;