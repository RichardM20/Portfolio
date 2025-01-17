import React from 'react';

import '../styles/footer.css';
import texts from '../utils/texts';

const FooterFragment = () => {
  return (
    <div className="footer-container">
      <p>{texts.footer_text}</p>
    </div>
  );
};

export default FooterFragment;
