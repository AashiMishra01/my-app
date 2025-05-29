import React, { useEffect, useState } from 'react';

const ProfileCard = ({ name, role, image }) => {
  const [secondsOnScreen, setSecondsOnScreen] = useState(0);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setSecondsOnScreen(prev => prev + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <>
      <div style={styles.card} onClick={togglePopup}>
        <img src={image} alt={name} style={styles.image} />
        <h2>{name}</h2>
        <p style={styles.moreInfo}>Click for details</p>
      </div>

      {showPopup && (
        <div style={styles.popupOverlay} onClick={togglePopup}>
          <div style={styles.popupContent} onClick={(e) => e.stopPropagation()}>
            <button style={styles.closeButton} onClick={togglePopup}>×</button>
            <img src={image} alt={name} style={styles.popupImage} />
            <h2>{name}</h2>
            <p>{role}</p>
            <p>Time on screen: {secondsOnScreen}s</p>
          </div>
        </div>
      )}
    </>
  );
};

const styles = {
  card: {
    width: '250px',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    textAlign: 'center',
    fontFamily: 'sans-serif',
    background: '#fff',
    margin: '20px',
    cursor: 'pointer',
    transition: 'transform 0.2s',
    '&:hover': {
      transform: 'scale(1.02)'
    }
  },
  image: {
    width: '100px',
    height: '100px',
    borderRadius: '50%',
    objectFit: 'cover'
  },
  moreInfo: {
    color: '#666',
    fontStyle: 'italic',
    marginTop: '10px'
  },
  popupOverlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000
  },
  popupContent: {
    backgroundColor: 'white',
    padding: '30px',
    borderRadius: '10px',
    width: '300px',
    textAlign: 'center',
    position: 'relative',
    boxShadow: '0 5px 15px rgba(0,0,0,0.3)'
  },
  popupImage: {
    width: '150px',
    height: '150px',
    borderRadius: '50%',
    objectFit: 'cover',
    marginBottom: '20px'
  },
  closeButton: {
    position: 'absolute',
    top: '10px',
    right: '15px',
    fontSize: '24px',
    border: 'none',
    background: 'none',
    cursor: 'pointer',
    color: '#666',
    '&:hover': {
      color: '#333'
    }
  }
};

export default ProfileCard;