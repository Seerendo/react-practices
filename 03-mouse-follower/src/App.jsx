import { useState } from 'react';
import { useEffect } from 'react';

const FollowMouse = () => {
  const [enable, setEnable] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  // Pointer move
  useEffect(() => {
    console.log('effect', { enable });
    const handleMove = (event) => {
      const { clientX, clientY } = event;
      console.log('handleMove', { clientX, clientY });
      setPosition({ x: clientX, y: clientY });
    };

    if (enable) {
      window.addEventListener('pointermove', handleMove);
    }
    // El return es una función que se ejecuta cuando el componente se desmonta
    return () => {
      window.removeEventListener('pointermove', handleMove);
    };
  }, [enable]);

  // Change body classname
  useEffect(() => {
    document.body.classList.toggle('no-cursor', enable);

    return () => {
      document.body.classList.remove('no-cursor');
    };
  });

  return (
    <>
      <div
        style={{
          position: 'absolute',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          border: '1px solid #fff',
          borderRadius: '50%',
          opacity: 0.8,
          pointerEvents: 'none',
          left: -25,
          top: -25,
          width: 50,
          height: 50,
          transform: `translate(${position.x}px, ${position.y}px)`,
        }}
      ></div>

      <button onClick={() => setEnable(!enable)}>
        {enable ? 'Desactivar' : 'Activar'} seguir puntero
      </button>
    </>
  );
};

function App() {
  return (
    <main>
      <FollowMouse />
    </main>
  );
}

export default App;
