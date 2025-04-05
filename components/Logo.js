// components/Logo.js
import React from 'react';

const Logo = ({ className = '', gold = '#D4AF37', crimson = '#A4133C' }) => {
  return (
    <div className='p-2 m-2'>
          <svg 
          className='p-2 pt-4'
          width="100" height="100" viewBox="0 0 976 967" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M490.401 869.392V571.403M490.401 869.392C460.705 858.425 423.412 841.157 384.945 818.106M490.401 869.392C529.013 855.589 563.139 839.599 593.246 822.109M176.151 445.958L174.838 504.724C163.011 646.179 278.47 754.299 384.945 818.106M176.151 445.958L182.084 180.306L490.401 99L802.744 180.306V504.724C805.482 575.44 764.004 722.911 593.246 822.109M176.151 445.958L343.085 316.352C397.289 279.59 530.813 228.123 631.278 316.352C731.743 404.581 740.222 413.221 731.904 406.513L603.103 530.484C580.065 550.752 539.522 571.634 490.401 571.403M303.64 458.033C368.254 543.844 434.819 571.14 490.401 571.403M270.634 565.904L384.945 687.461V818.106M706.143 555.439L590.222 670.555L593.246 822.109" stroke="#C89A4D" stroke-width="45"/>
<ellipse cx="304.445" cy="458.033" rx="32.2003" ry="33.8103" fill="#C89A4D"/>
<ellipse cx="272.244" cy="565.904" rx="32.2003" ry="33.8103" fill="#C89A4D"/>
<ellipse cx="706.949" cy="557.854" rx="32.2003" ry="33.8103" fill="#C89A4D"/>
<circle cx="487.181" cy="423.418" r="71.6859" stroke="#A2271E" stroke-width="45"/>
</svg>
    </div>

  );
};

export default Logo;