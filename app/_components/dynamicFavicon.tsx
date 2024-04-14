import React, { useEffect } from 'react';

interface DynamicFaviconProps {
  iconIndex: number;
}

const DynamicFavicon: React.FC<DynamicFaviconProps> = ({ iconIndex }) => {
  useEffect(() => {
    // Determine the path to the favicon file based on the iconIndex
    const faviconPath = `/images/favicon${iconIndex}.ico`;
    // Try to find an existing link element for the favicon or create a new one
    const linkElement: HTMLLinkElement =
      (document.querySelector("link[rel*='icon']") as HTMLLinkElement) ||
      document.createElement('link');

    // Set the appropriate attributes for the favicon
    linkElement.type = 'image/x-icon';
    linkElement.rel = 'shortcut icon';
    linkElement.href = faviconPath;

    // Append the link element to the <head> of the document
    document.getElementsByTagName('head')[0].appendChild(linkElement);

    // Optional: Return a cleanup function to reset the favicon when the component unmounts
    return () => {
      linkElement.href = '/favicon.ico'; // Set it back to your default favicon
    };
  }, [iconIndex]);

  // This component does not render anything to the DOM
  return null;
};

export default DynamicFavicon;