import styles from "../styles/Dragon.module.css"

import { buyDragon } from "../reducers/dragons"
import { useDispatch } from "react-redux"

function DragonToBuy(props) {
	const dispatch = useDispatch();

	const buy = () => {
		dispatch(buyDragon(props))
		props.updateShop(props.name)
	}

	return (
		<div className={styles.dragon}>
			<span className={styles.name}>{props.name}</span>
			<img className={styles.img} src={props.src} alt={props.name}/>
			<span className={styles.health}>Max Health : {props.maxHealth}</span>
			<div className={styles.actionBtns}>
				{/* En cliquant sur Buy, j'ajoute le dragon à mon store Redux */}
				<button onClick={() => buy()}>Buy</button>
			</div>
		</div>
	)
}

export default DragonToBuy