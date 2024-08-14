import React from 'react';

interface ToastProps {
  children: React.ReactNode;
}
const Toast: React.FC<ToastProps> = ({ children }) => {
  return (
    <div style={styles.toast}>
      {children}
    </div>
  );
};

const styles = {
  toast: {
    position: 'absolute' as 'absolute',
    width: '80%',
    bottom: '30px',
    left: '50%',
    transform: 'translateX(-50%)',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    color: 'white',
    borderRadius: '5px',
    zIndex: 1000,
    fontSize: '24px',
    padding: '5px',
    animation: 'slideUp 0.5s ease-out'
  },
};

export default Toast;
