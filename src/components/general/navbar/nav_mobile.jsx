import React, { Fragment } from "react";
import { NavLeft, NavRight, Link } from "framework7-react";

export default function navMobile(props) {
	return (
		<Fragment>
			<NavLeft>
				<Link panelOpen="left" className="categorias" iconMaterial="menu" icon="menu" color="red"></Link>
			</NavLeft>
			<a className="logo" href="/">
				<img src={props.logoD} alt="" />
			</a>
			<NavRight>
				<Link popupOpen=".menuPopup" className="menuIcon" iconMaterial="apps" icon="apps" color="red"></Link>
			</NavRight>
		</Fragment>
	);
}
