import { useState, useEffect } from "react";
import styles from "../styles/Home.module.css"
import DragonToBuy from "./DragonToBuy";
import Link from "next/link"
import { useSelector } from "react-redux";

export default function Shop() {
	const [dragons, setDragons] = useState([]);
	const dragonsBought = useSelector(state => state.dragons.value)

	useEffect(() => {
		fetch("https://dragon-back.vercel.app/dragons")
		.then(response => response.json())
		.then(data => {
			let dragons = []
			for (let d of data.dragons) {
				if (!dragonsBought.some(e => e.name === d.name)) {
					dragons.push(d);
				}
			}
			setDragons(dragons);
		})
	}, []);

	const updateShop = (name) => {
		setDragons(dragons.filter(d => d.name !== name));
	}

	return (
		<>
			<header className={styles.header}>
				<div>
					<h1>Dragon Shop</h1>
					<h3>Buy your favorite dragon</h3>
				</div>
				<Link href="/">Go to home</Link>
			</header>
			<main className={styles.main}>
				{dragons.map(data => {
					return <DragonToBuy key={data.id} name={data.name} src={data.src} maxHealth={data.maxHealth} updateShop={updateShop}/>
				})}
			</main>
		</>
	)
}