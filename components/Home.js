import { useEffect, useState } from 'react';
import styles from '../styles/Home.module.css';
import Dragon from './Dragon';

// FETCH l'url suivant : https://dragon-back.vercel.app/dragons

function Home() {
  const [dragons, setDragons] = useState([]);
  const [deadDragons, setDeadDragons] = useState([]);

  useEffect(() => {
    fetch("https://dragon-back.vercel.app/dragons")
    .then(response => response.json())
    .then(data => {
      setDragons(data.dragons);
    })
  }, [])

  const addDeadDragon = (name) => {
    if (!deadDragons.includes(name)) {
      setDeadDragons([...deadDragons, name]);
    }
  }

  const removeDeadDragon = (name) => {
    setDeadDragons(deadDragons.filter(dragon => dragon !== name));
  }

  return (
    <div>
      <div className={styles.header}>
        <h1>Dragon Manager</h1>
        <h3>Dead dragons: {deadDragons.join(' - ') || 'None'}</h3>
      </div>
      <main className={styles.main}>
        {dragons.map(data => {
          return <Dragon key={data.id} name={data.name} src={data.src} maxHealth={data.maxHealth} 
                    addDeadDragon={addDeadDragon} removeDeadDragon={removeDeadDragon}/>
        })}
      </main>
    </div>
  );
}

export default Home;
