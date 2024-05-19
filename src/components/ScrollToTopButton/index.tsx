import React, { useState, useEffect, useRef } from 'react';

const styles = {
    scrollToTopButton: {
      position: 'fixed',
      bottom: '50px',
      right: '50px',
      padding: '10px 20px',
      fontSize: '16px',
      backgroundColor: '#007bff',
      color: '#fff',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      boxShadow: '0 2px 5px rgba(0,0,0,0.3)',
      transition: 'opacity 0.3s ease-in-out',
    },
  };

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const buttonRef = useRef(null);

  const toggleVisibility = () => {
    if (window.scrollY > window.innerHeight) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div>
      {isVisible && (
        <button
          ref={buttonRef}
          onClick={scrollToTop}/* 
          style={styles.scrollToTopButton} */
        >
          ↑ Top
        </button>
      )}
    </div>
  );
};

export default ScrollToTopButton;