// 'use client';

// import { useEffect } from 'react';

// const ResponseIQProvider = () => {
//   useEffect(() => {
//     if (typeof window === 'undefined') return;

//     const script = document.createElement('script');
//     script.type = 'text/javascript';
//     script.src =
//       'https://app.responseiq.com/widgetsrc.php?widget=4SYI118ER72MND5958&widgetrnd=' +
//       Math.random();
//     script.async = true;

//     document.body.appendChild(script);

//     return () => {
//       document.body.removeChild(script);
//     };
//   }, []);

//   return null;
// };

// export default ResponseIQProvider;

// 'use client';

// import { useEffect } from 'react';

// const ResponseIQProvider = () => {
//   useEffect(() => {
//     if (typeof window === 'undefined') return;

//     // Prevent duplicate loading
//     if (document.getElementById('responseiq-widget')) return;

//     const script = document.createElement('script');
//     script.id = 'responseiq-widget';
//     script.type = 'text/javascript';
//     script.async = true;

//     const rnd = Math.floor(Math.random() * 1000000);
//     script.src = `https://app.responseiq.com/widgetsrc.php?widget=4SYI118ER72MND5958&widgetrnd=${rnd}`;

//     document.body.appendChild(script);

//     return () => {
//       script.remove();
//     };
//   }, []);

//   return null;
// };

// export default ResponseIQProvider;

'use client';

import Script from 'next/script';

const ResponseIQProvider = () => {
  return (
    <Script
      id="responseiq-widget"
      strategy="afterInteractive"
      src="https://app.responseiq.com/widgetsrc.php?widget=4SYI118ER72MND5958"
    />
  );
};

export default ResponseIQProvider;
