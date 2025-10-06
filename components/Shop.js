import { useState, useEffect } from "react";
import styles from "../styles/Home.module.css"
import DragonToBuy from "./DragonToBuy";

export default function Shop() {
	const [dragons, setDragons] = useState([]);

	useEffect(() => {
		fetch("https://dragon-back.vercel.app/dragons")
		.then(response => response.json())
		.then(data => {
			setDragons(data.dragons);
		})
	}, [])

	return (
		<>
			<header className={styles.header}>
				<div>
					<h1>Dragon Shop</h1>
					<h3>Buy your favorite dragon</h3>
				</div>
				{/* Ajouter le composant Link ici pour revenir vers la page d'accueil */}
			</header>
			<main className={styles.main}>
				{dragons.map(data => {
					return <DragonToBuy key={data.id} name={data.name} src={data.src} maxHealth={data.maxHealth} />
				})}
			</main>
		</>
	)
}