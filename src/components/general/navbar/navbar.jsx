import React, { Fragment, useEffect, useState } from "react";
import Mobile from "./nav_mobile";
import Desk from "./nav_desktop";
import PopMenu from "./mobile-menu-popup";
import { Popover, Navbar, List, ListItem, f7 } from "framework7-react";

export default function Nav(props) {
	let { categorias, home, espectaculares, logo, logoD } = props;

	if (categorias.length <= 0) return null;

	let [categ_show, categ_pop, type] = useData(categorias);
	// console.log("Categorais despues del useData");
	// console.log(categ_show);
	// console.log(categ_pop);
	return (
		<Fragment>
			<Navbar sliding noHairline noShadow>
				{type === "desktop" && <Desk logo={logo} logoD={logoD} itemsShow={categ_show} itemsPop={categ_pop} esp={espectaculares} home={home} />}
				{type === "mobile" && <Mobile logo={logo} logoD={logoD} />}
			</Navbar>
			<PopMenu tv_channels={props.tv_channels} radio_stations={props.radio_stations} logo={logo} logoD={logoD} />
			<Popover className="popover-menu">
				<List>
					{categ_pop.map((val, key) => {
						return (
							<ListItem key={key} link={`/categoria/${val.url}`} popoverClose className="uppercase">
								{val.nombre}
							</ListItem>
						);
					})}
					{/* <ListItem link="/autores" className="uppercase" popoverClose>
						autores
					</ListItem> */}
				</List>
			</Popover>
		</Fragment>
	);
}

function useData(data) {
	/* recibe categorias */
	const [categ, setCateg] = useState({
		categ_show: [] /* categorias a mostrar */,
		categ_pop: [] /* categorias en el menu pop */,
		type: "",
	});
	let cant = null;
	let thisType = "";
	useEffect(() => {
		function handleResize() {
			let categorias = [...data];
			let w = window.innerWidth;
			thisType = "desktop";
			if (w > 1420) {
				cant = 9;
			} else if (w >= 1320) {
				cant = 8; //9 links
			} else if (w >= 1200) {
				cant = 7; //9 links
			} else if (w >= 1024) {
				cant = 6; //7 lnks
			} else if (w >= 768) {
				cant = 4; //6 links
			} else if (w >= 640) {
				cant = 3; //4 links
			} else {
				thisType = "mobile";
			}
			let categ_nav = categorias.splice(0, cant);
			setCateg({
				categ_show: categ_nav,
				categ_pop: categorias,
				type: thisType,
			});
		}
		window.addEventListener("resize", handleResize);
		handleResize();
		return () => window.removeEventListener("resize", handleResize);
	}, []);
	return [categ.categ_show, categ.categ_pop, categ.type];
}
