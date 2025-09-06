import React from 'react';

const overlayStyle: React.CSSProperties = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100vw',
  height: '100vh',
  background: 'rgba(255,255,255,0.7)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 9999,
  transition: 'opacity 0.3s',
};

const spinnerStyle: React.CSSProperties = {
  width: 48,
  height: 48,
  border: '6px solid #dbeafe',
  borderTop: '6px solid #1a4b8c',
  borderRadius: '50%',
  animation: 'spin 1s linear infinite',
};

const spinnerKeyframes = `@keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }`;

const HashLoadingOverlay: React.FC<{ visible: boolean }> = ({ visible }) => {
  if (!visible) return null;
  return (
    <>
      <style>{spinnerKeyframes}</style>
      <div style={overlayStyle}>
        <div style={spinnerStyle} />
      </div>
    </>
  );
};

export default HashLoadingOverlay;
