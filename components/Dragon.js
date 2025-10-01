import styles from "../styles/Dragon.module.css"
import { useState } from 'react'

function Dragon(props) {
	const [dragonSrc, setDragonSrc] = useState(props.src);
	const [currentHealth, setCurrentHealth] = useState(props.maxHealth);

	const takeDamage = () => {
		if (currentHealth - 20 <= 0) {
			setCurrentHealth(0)
			setDragonSrc("dead.avif")
			props.addDeadDragon(props.name)
		} else {
			setCurrentHealth(currentHealth - 20);
		}
	}

	const heal = () => {
		if (currentHealth === 0) {
			setDragonSrc(props.src)
			props.removeDeadDragon(props.name)
		}
		if (currentHealth + 10 >= props.maxHealth) {
			setCurrentHealth(props.maxHealth)
		} else {
			setCurrentHealth(currentHealth + 10);
		}
	}

	return (
		<div className={styles.dragon}>
			<span className={styles.name}>{props.name}</span>
			<img className={styles.img} src={dragonSrc} alt={props.name}/>
			<span className={styles.health}>Health : {currentHealth} / {props.maxHealth}</span>
			<div className={styles.actionBtns}>
				<button onClick={takeDamage}>Attack</button>
				<button onClick={heal}>Heal</button>
			</div>
		</div>
	)
}

export default Dragon