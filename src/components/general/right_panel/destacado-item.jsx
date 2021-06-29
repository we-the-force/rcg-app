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
        let newUrl = cover.url.split("/");
        //cambiar a xs
        imgn = cover.width > 500 ? DB_url + newUrl[0] + "/" + newUrl[1] + "/small_" + newUrl[2] : DB_url + cover.url;
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
