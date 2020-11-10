import React, { Fragment, useRef, useState, useEffect } from "react";
import LogoBlanco from "@/static/imgs/Logo_blanco.png";
import TVLight from "@/static/icons/tv_light.png";
import services from "@/static/icons/servicios.png";
import radio from "@/static/icons/microphone.png";
import twred from "@/static/icons/TW_red.png";
import contact from "@/static/icons/Contact.png";
import face from "@/static/icons/FB_Icon.png";
import tw from "@/static/icons/TW_Icon.png";
import you from "@/static/icons/YT_Icon.png";
import insta from "@/static/icons/IG_Icon.png";
//import LeftPanelMobile from '@/components/general/left_panel/left-panel-mobile';
import { Searchbar, NavLeft, NavRight, Popup, Link, Page, View, Icon, BlockHeader, Block, Navbar, Panel, List, ListItem, f7 } from "framework7-react";

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
				{/* <Link className="menuIcon" popupOpen=".menuPopup" iconMaterial='apps' icon='apps' color="red"></Link> */}
				<Link popupOpen=".menuPopup" className="menuIcon" iconMaterial="apps" icon="apps" color="red" /*  onClick={() => setNavPopup(true)} */></Link>
			</NavRight>
		</Fragment>
	);
}
