import React from "react";
import photo from "@/static/imgs/grayback.jpg";
import { f7 } from "framework7-react";
import { Card, Link, Block } from "framework7-react";
import { getDevice } from "framework7";

export default function AutorCard(props) {

	const device = getDevice();
	console.log(device);

	const { autor, numArticulos, className } = props;
	let DB_url = f7.methods.get_URL_DB();
	let imagen, id, nombre, articulos, face, twitt, insta, url;
	if (autor) {
		imagen = "/static/icons/person_x2.png";
		if (autor.img) {
			let newUrl = autor.img.url.split("/");
			//cambiar a xsmall
			imagen = autor.img.width > 500 ? DB_url + newUrl[0] + "/" + newUrl[1] + "/small_" + newUrl[2] : DB_url + autor.img.url;
		}
		// imagen = autor.img ? DB_url + autor.img.url : ;
		id = autor.id;
		nombre = autor.nombre;
		articulos = numArticulos ? numArticulos.articulos : "0";
		face = autor.facebook_link;
		twitt = autor.twitter_link;
		insta = autor.instagram_link;
		url = autor.url;
	} else {
		imagen = photo;
		id = "1";
		nombre = "";
		articulos = "0";
		face = "https://www.facebook.com";
		twitt = "https://www.twitter.com";
		insta = "https://www.instagram.com";
		url = "";
	}
	return (
		<Card className={"autor_card " + className}>
			<Block className="back">
				<Link popupClose href={`/autor/${url}`} className="image_cont">
					<img src={imagen} alt="" />
				</Link>
				<Link popupClose href={`/autor/${url}`} className="nombre">
					{nombre}
				</Link>
				<Link popupClose href={`/autor/${url}`} className="noticias">
					{" "}
					{articulos} Noticias
				</Link>
				{/* <p className="redes_label">Redes:</p>
				<Block className="redes_cont">
					<a href={face} className={`external${face == null ? " gray" : ""}`} target="_blank">
						<img src={FBIcon} />
					</a>
					<a href={twitt} className={`external${twitt == null ? " gray" : ""}`} target="_blank">
						<img src={TWIcon} />
					</a>
					<a href={insta} className={`external${insta == null ? " gray" : ""}`} target="_blank">
						<img src={IGIcon} />
					</a>
				</Block> */}
			</Block>
		</Card>
	);
}
