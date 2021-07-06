import React, { Fragment } from "react";
import doscuatrosiete from "@/static/imgs/24-7.png";
import { NavLeft, NavRight, Link } from "framework7-react";

export default function navMobile(props) {
	const { itemsShow, itemsPop, home } = props;
	var navLinks = [];
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
				{/* <hr /> */}
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
	return (
		<Fragment>
			<NavLeft className={home ? "home" : ""}>
				<a href="/">
					<img src={props.logoD} alt="" />
				</a>
			</NavLeft>
			{navLinks}
			<NavRight>
				<img src={doscuatrosiete} alt="" />
			</NavRight>
		</Fragment>
	);
}
