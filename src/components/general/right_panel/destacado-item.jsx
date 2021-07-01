import React from "react";
import moment from "moment";
import IMG from '@/static/imgs/grayback.jpg';
import { Block, BlockTitle, Link, f7 } from "framework7-react";

export default function DestItem(props) {
	moment.locale("es");

	const { cover, Titulo, url } = props.articulo;
	let DB_url = f7.methods.get_URL_DB();
	let imgn = IMG;

	if (cover) {
		if (cover.formats) {
			if (cover.formats.thumbnail) {
				imgn = DB_url + cover.formats.thumbnail.url;
			} else if (cover.formats.xxsmall) {
				imgn = DB_url + cover.formats.xxsmall.url;
			} else {
				imgn = DB_url + cover.url;	
			}
		} else {
			imgn = DB_url + cover.url;
		}
	}

	return (
		<Block className={"dest-item"}>
			{props.image && (
				<Link popupClose href={`/articulo/${url}/`} className="img_cont">
					<img src={imgn} alt="" />
				</Link>
			)}
			<Block className="dest-cont">
				<BlockTitle>
					<Link popupClose href={`/articulo/${url}/`}>
						{Titulo}
					</Link>
				</BlockTitle>
			</Block>
		</Block>
	);
}
