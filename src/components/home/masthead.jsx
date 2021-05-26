import React, { useRef, useEffect, Fragment } from "react";
import RCGlogo from "@/static/imgs/LOGO_negro_sobre_blanco.png";
import img1 from "@/static/imgs/418464-PD8PXQ-214 1.png";
import img2 from "@/static/imgs/fondo-sj-e1540342434825 1.png";
import img3 from "@/static/imgs/Rcg.png";
import img4 from "@/static/imgs/Image.png";
import twenyforseven from "@/static/imgs/24-7.png";
import IMG from '@/static/imgs/grayback.jpg';
import { Swiper, SwiperSlide, Block, BlockHeader, BlockFooter, Link, f7 } from "framework7-react";
export default function Masthead(props) {
    const { banner, relevante } = props;
    const swiper = useRef(null);
	let DB_url = f7.methods.get_URL_DB();
	/* banner contiene los articulos del banner */
	/* relevante contiene los más relevantes en caso de que no se complete con el banner */
	/* accedo solo a los valores que necesito */
	let banners = banner.map((val) => {
		return {
			id: val.articulo.id,
			cover: val.articulo.cover,
			categoria: val.articulo.categoria,
			url: val.articulo.url,
			Titulo: val.articulo.Titulo,
			autor: val.articulo.autor,
			fecha: val.articulo.fecha,
			creditos: val.articulo.cover_creditos,
		};
	});

	let relevantes = relevante.map((val) => {
		return {
			id: val.id,
			cover: val.cover,
			categoria: val.categoria,
			url: val.url,
			Titulo: val.Titulo,
			autor: val.autor,
			fecha: val.fecha,
			creditos: val.cover_creditos,
		};
	});

	banners.reverse();
	/* concateno los arreglos */
	let articulos = banners.concat(relevantes);

	/* quito los repetidos */
	for (let i = 0; i < articulos.length; i++) {
		for (let j = i + 1; j < articulos.length; j++) {
			if (articulos[i].id === articulos[j].id) {
				articulos.splice(j, 1);
			}
		}
	}

	/* traigo solo los primeros 10 */
    articulos = articulos.slice(0, 9);
    console.log(articulos[0]);
    useEffect(() => {
		const interval = setInterval(() => {
            let el_swiper = swiper.current.swiper;
            el_swiper.slideNext(1000);
		}, 8000);
		return () => clearInterval(interval);
	}, []);

	return (
		<Block className="masthead">
			{articulos.length > 0 && (
				<Fragment>
					{/* <Block className="logo">
						<img src={props.logo} alt="" />
						<img className="doscuatrosiete" src={twenyforseven} alt="" />
					</Block> */}
					<Swiper ref={swiper} pagination params={{ loop: true }}>
						{articulos.map((item, i) => {
							return (
								<SwiperSlide key={i}>
									<Block className="background">
										<img src={item.cover ? DB_url + item.cover.url : IMG} alt="" />
										<Block className="label">
											<Link href={"/categoria/" + item.categoria.nombre} className="categoria upperscale">
												{item.categoria.nombre}
											</Link>
										</Block>
										<Block className="bottom-cont">
											<Block className="label-desk">
												<Link href={"/categoria/" + item.categoria.nombre} className="categoria upperscale">
													{item.categoria.nombre}
												</Link>
											</Block>
											<Link className="title" href={`/articulo/${item.url}/`}>
												{item.Titulo}
											</Link>
											<BlockFooter>
												<Link className="autor" href={"/autores"}>
													{item.autor.nombre}&nbsp;-&nbsp;{item.fecha}&nbsp;-&nbsp;Foto por: {item.creditos}
												</Link>
												
												{/* <p className="fecha"></p>
												
												<p className="creditos"></p> */}
											</BlockFooter>
										</Block>
									</Block>
								</SwiperSlide>
							);
						})}
					</Swiper>
				</Fragment>
			)}
		</Block>
	);
}
