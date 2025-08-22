import React, { useState } from 'react';

function DealBanner() {
  const [showDeal, setShowDeal] = useState(false);

  return (
    <section className="Main_container">
      <div className="container">
        <h1>Special Offers</h1>
        <p><b><i>Click the button to see today’s deal!</i></b></p>
        <button className="btn" id="dealBtn" onClick={() => setShowDeal(!showDeal)}>
          Reveal Deal
        </button>
        {showDeal && (
          <p id="dealText" className="mt-3" style={{ fontWeight: 'bold' }}>
            Buy 1 Lip Gloss, Get 1 Free!
          </p>
        )}
      </div>
    </section>
  );
}

export default DealBanner;
