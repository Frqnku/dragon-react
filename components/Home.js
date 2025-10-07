import { useState } from 'react';
import styles from '../styles/Home.module.css';
import Dragon from './Dragon';
import Link from "next/link"
import { useSelector } from 'react-redux';

function Home() {
  const [deadDragons, setDeadDragons] = useState([]);

  const dragons = useSelector(state => state.dragons.value);

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
        <Link href="/shop">Go to shop</Link>
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
