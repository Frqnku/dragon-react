import { useState } from 'react';
import styles from '../styles/Home.module.css';
import Dragon from './Dragon';

// FETCH l'url suivant : https://dragon-back.vercel.app/dragons

function Home() {
  const [dragon, setDragon] = useState(null);

  const createDragon = () => {
    setDragon(<Dragon name="Clovis" src="dragon.webp" maxHealth={100}/>);
  }

  return (
    <div>
      <main className={styles.main}>
        {dragon}
        {!dragon && <button onClick={createDragon}>Create a dragon</button>}
      </main>
    </div>
  );
}

export default Home;
