import React, { useRef, useEffect, useState, Fragment } from "react";
import IMG from "@/static/imgs/grayback.jpg";
import { Swiper, SwiperSlide, Block, Link, f7 } from "framework7-react";

export default function Masthead(props) {
	const dev = f7.device;
	let areMobile = dev.android || dev.ios || dev.ipad || dev.iphone || dev.ipod || dev.cordova;

	const { banner, relevante, loading } = props;
	const swiper = useRef(null);
	const swiperLoading = useRef(null);
	let DB_url = f7.methods.get_URL_DB();

	let banners = banner;
	let articulos = [];

	if (!loading) {
		banners = banners.map((val) => {
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

		articulos = banners.concat(relevantes);

		for (let i = 0; i < articulos.length; i++) {
			for (let j = i + 1; j < articulos.length; j++) {
				if (articulos[i].id === articulos[j].id) {
					articulos.splice(j, 1);
				}
			}
		}

		articulos = articulos.slice(0, 9);
	}

	useEffect(() => {
		const interval = setInterval(() => {
			if(swiper != null && swiper.current != null){
				let el_swiper = swiper.current.swiper;
				el_swiper.slideNext(1000);
			}
		}, 8000);
		return () => clearInterval(interval);
	}, []);

	return (
		<Block className="masthead">
			{loading && (
				<Swiper ref={swiperLoading} navigation pagination params={{ loop: true }}>
					<SwiperSlide>
						<Block className="background">
							<img src={IMG} alt="" />
						</Block>
					</SwiperSlide>
				</Swiper>
			)}
			{articulos.length > 0 && (
				<Fragment>
					<Swiper ref={swiper} navigation pagination params={{ loop: true }}>
						{articulos.map((item, i) => {
							let cover = IMG;

							if (item.cover) {
								let newUrl = item.cover.url.split("/");
								//cambiar a xs
								if (areMobile && item.cover.width > 500) {
									cover = DB_url + newUrl[0] + "/" + newUrl[1] + "/small_" + newUrl[2];
								} else {
									cover = DB_url + item.cover.url;
								}
							}

							return (
								<SwiperSlide key={i}>
									<Block className="background">
										<img src={cover} alt="" />
										<Block className="label">
											<Link href={item.categoria ? "/categoria/" + item.categoria.nombre : ""} className="categoria upperscale">
												{item.categoria ? item.categoria.nombre : ""}
											</Link>
										</Block>
										<Block className="bottom-cont">
											<Block className="label-desk">
												<Link href={item.categoria ? "/categoria/" + item.categoria.nombre : ""} className="categoria upperscale">
													{item.categoria ? item.categoria.nombre : ""}
												</Link>
											</Block>
											<Link className="title" href={`/articulo/${item.url}/`}>
												{item.Titulo}
											</Link>
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
