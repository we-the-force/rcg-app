import React, { Fragment, useEffect, useState } from "react";
import Mobile from "./nav_mobile";
import Desk from "./nav_desktop";
import PopMenu from "./mobile-menu-popup";
import doscuatrosiete from "@/static/imgs/24-7.png";
import { Popover, Navbar, List, ListItem, f7, NavLeft, NavRight, Icon } from "framework7-react";

export default function Nav(props) {
	let { categorias, home, espectaculares, logo, logoD, loading } = props;

	// if (categorias.length <= 0) return null;

	let [categ_show, categ_pop, type] = useData(categorias);

	const [playPause, setPlayPause] = useState(false);
	let leftPlayerRadio = f7.methods.get_LeftRadioActive();
	let radioPlay = f7.methods.get_RadioPlay();

	let radio_name = f7.methods.get_RadioName();
	let radio_img = f7.methods.get_RadioIMG();

	const handlePlayPause = () => {
		if (!playPause) {
			f7.methods.set_TVPlay(false);
		}
		setPlayPause(!playPause);
		f7.methods.set_RadioPlay(!playPause);
	};

	useEffect(() => {
		setPlayPause(radioPlay);
	}, [radioPlay]);

	return (
		<Fragment>
			{/* {true && ( */}
			{leftPlayerRadio && (
				<List className="leftRadioPlayer nav">
					<ListItem title={radio_name}>
						<img slot="media" src={radio_img} />
						<a onClick={handlePlayPause}>
							<Icon material={playPause ? "pause" : "play_arrow"} />
						</a>
					</ListItem>
				</List>
			)}
			<Navbar sliding noHairline noShadow>
				{loading && (
					<Fragment>
						<NavLeft className={home ? "home" : ""}>
							<a href="/">
								<img src={props.logoD} alt="" />
							</a>
						</NavLeft>
						<NavRight>
							<img src={doscuatrosiete} alt="" />
						</NavRight>
					</Fragment>
				)}
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
				cant = 11;
			} else if (w >= 1320) {
				cant = 10; //9 links
			} else if (w >= 1200) {
				cant = 9; //9 links
			} else if (w >= 1024) {
				cant = 8; //7 lnks
			} else if (w >= 768) {
				cant = 6; //6 links
			} else if (w >= 640) {
				cant = 5; //4 links
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
