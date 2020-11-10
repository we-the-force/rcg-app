import React, { Fragment, useEffect, useState } from "react";
import LogoBlanco from "@/static/imgs/Logo_blanco.png";
import navGraph from "@/static/imgs/nav_graph.png";
import { Navbar, NavLeft, NavRight, Block, Icon, Link, Popover, List, ListItem, f7 } from "framework7-react";

export default function navMobile(props) {
	const { itemsShow, itemsPop, esp, home } = props;
	var navLinks = [];
	if (esp) {
		navLinks = (
			<Fragment>
				<Link href="/" className="uppercase">
					Inicio
				</Link>
				<hr />
				<Link href="/catalogo" className="uppercase">
					Galería
				</Link>
				<hr />
				<Link href="/contacto" className="uppercase">
					Contacto
				</Link>
			</Fragment>
		);
	} else {
		navLinks = itemsShow.map((val, key) => {
			let dis = itemsShow.length - 1 == key ? "display-none" : "display-flex";
			return (
				<Fragment key={key}>
					<Link href={"/categoria/" + val.url} className="uppercase">
						{val.nombre}
					</Link>
					<hr className={dis} />
				</Fragment>
			);
		});
		if (itemsPop.length === 0) {
			navLinks.push(
				<Fragment key="autoresLink">
					<hr />
					<Link href="/autores" className="uppercase">
						autores{" "}
					</Link>
				</Fragment>
			);
		}
		if (itemsPop.length > 0) {
			navLinks.push(
				<Fragment key="masLink">
					<hr />
					<Link popoverOpen=".popover-menu" iconMaterial="arrow_drop_down" className={"uppercase more-icon display-flex"}>
						MÁS{" "}
					</Link>
				</Fragment>
			);
		}
	}
	return (
		<Fragment>
			<NavLeft className={home ? "home" : ""}>
				{home && <img className="home" src={navGraph} alt="" />}
				{!home && (
					<a href="/">
						<img src={props.logoD} alt="" />
					</a>
				)}
			</NavLeft>
			{navLinks}
			<NavRight>
				<img src={navGraph} alt="" />
			</NavRight>
		</Fragment>
	);
}
