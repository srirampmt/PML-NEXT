'use client';

import { useEffect } from 'react';

const TawkToProvider = () => {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const tawkScript = document.createElement('script');
    tawkScript.src = 'https://embed.tawk.to/6284328cb0d10b6f3e72bb70/1g3a6atnh';
    
    tawkScript.async = true;
    tawkScript.charset = 'UTF-8';
    tawkScript.setAttribute('crossorigin', '*');

    document.body.appendChild(tawkScript);

    return () => {
      document.body.removeChild(tawkScript);
    };
  }, []);

  return null;
};

export default TawkToProvider;