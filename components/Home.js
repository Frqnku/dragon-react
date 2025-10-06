import { useState } from 'react';
import styles from '../styles/Home.module.css';
import Dragon from './Dragon';

function Home() {
  const [deadDragons, setDeadDragons] = useState([]);

  // Changer le state dragons par un store redux accessible avec useSelector
  const [dragons, setDragons] = useState([]);

  const addDeadDragon = (name) => {
    if (!deadDragons.includes(name)) {
      setDeadDragons([...deadDragons, name]);
    }
  }

  const removeDeadDragon = (name) => {
    setDeadDragons(deadDragons.filter(dragon => dragon !== name));
  }

  return (
    <>
      <div className={styles.header}>
        <div>
          <h1>Dragon Manager</h1>
          <h3>Dead dragons: {deadDragons.join(' - ') || 'None'}</h3>
        </div>
        {/* Ajouter le composant Link ici pour aller vers la page shop */}
      </div>
      <main className={styles.main}>
        {dragons.map(data => {
          return <Dragon key={data.id} name={data.name} src={data.src} maxHealth={data.maxHealth}
                    addDeadDragon={addDeadDragon} removeDeadDragon={removeDeadDragon}/>
        })}
      </main>
    </>
  );
}

export default Home;
