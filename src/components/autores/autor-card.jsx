import React from "react";
import photo from "@/static/imgs/grayback.jpg";
import { f7 } from "framework7-react";
import { Card, Link, Block } from "framework7-react";

export default function AutorCard(props) {
	const { autor, numArticulos, className } = props;
	let DB_url = f7.methods.get_URL_DB();
	let imagen, nombre, articulos, url;
	if (autor) {
		imagen = "/static/icons/person_x2.png";
		if (autor.img) {
			if (autor.img.formats) {
				if (autor.img.formats.thumbnail) {
					imagen = DB_url + autor.img.formats.thumbnail.url;
				} else if (autor.img.formats.xxsmall) {
					imagen = DB_url + autor.img.formats.xxsmall.url;
				} else if (articulo.cover.formats.xsmall) {
					imagen = DB_url + autor.img.formats.xsmall.url;
				} else if (articulo.cover.formats.small) {
					imagen = DB_url + autor.img.formats.small.url;
				} else {
					imagen = DB_url + autor.img.url;
				}
			} else {
				imagen = DB_url + autor.img.url;
			}
		}
		nombre = autor.nombre;
		articulos = numArticulos ? numArticulos.articulos : "0";
		url = autor.url;
	} else {
		imagen = photo;
		nombre = "";
		articulos = "0";
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
			</Block>
		</Card>
	);
}
