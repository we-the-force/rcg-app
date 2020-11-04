import React, { Fragment, useEffect, useState } from "react";
import Nav from "@/components/general/navbar/navbar";
import LeftPanel from "@/components/general/left_panel/left-panel";
import LeftPanelTablet from "@/components/general/left_panel/left-panel-tablet";
import RightPanel from "@/components/general/right_panel/right-panel";
import RightPanelTablet from "@/components/general/right_panel/right-panel-tablet";
import AutorPanel from "@/components/autores/autor-panel.jsx";
import LoadingPanel from "@/components/loading/loading-panel";
import ErrorPanel from "@/components/error-panel";
import NotFoundPanel from "@/components/not-found-panel";
import Footer from "@/components/general/footer";
import { useQuery, useLazyQuery } from "@apollo/client";
import { AutorPage, BusquedaAutor } from "@/graphql/queries.graphql";
import AdsTop from "@/components/general/ads_top";
import { f7, f7ready } from "framework7-react";
import { Page, Block, PageContent, Preloader } from "framework7-react";

export default function Autor(props) {
	const limitStatic = 20;
	const { url } = props;
	const [allowInfinite, setAllowInfinite] = useState(true);
	const [preloader, setPreloader] = useState(false);
	const [inicial, setInicial] = useState(0);
	const [callApi, setCallApi] = useState(false);
	const [articulos, setArticulos] = useState([]);
	const [footer, setFooter] = useState(false);
	const { loading, error, data } = useQuery(AutorPage, {
		variables: { url },
	});
	const [getArticulos] = useLazyQuery(BusquedaAutor, {
		onCompleted: (data) => {
			let newInicial = inicial + limitStatic;
			if (data.articulos.length > 0) setAllowInfinite(true);
			if (data.articulos.length === 0) setFooter(true);
			setPreloader(false);
			setInicial(newInicial);
			setArticulos(articulos.concat(data.articulos));
		},
	});

	const loadMore = () => {
		if (!allowInfinite) return;
		setAllowInfinite(false);
		setPreloader(true);
		setCallApi(!callApi);
	};

	useEffect(() => {
		getArticulos({
			variables: {
				url,
				inicio: inicial,
				limite: limitStatic,
			},
		});
	}, [callApi]);

	useEffect(() => {
		f7ready((f7) => {
			f7.methods.handleCategoriaActual("");
			setCallApi(!callApi);
		});
	}, []);

	let { autor, autores, autorArticulos, autoresArticulos } = !loading && !error ? data : "";

	let numArticulosAutores =
		!loading && autoresArticulos.groupBy.autor.length > 0
			? autoresArticulos.groupBy.autor.map((val) => {
					return {
						autor: val.key,
						articulos: val.connection.aggregate.count,
					};
			  })
			: [];

	let centerPanel;

	if (loading) {
		if (error) {
			centerPanel = <ErrorPanel />;
		} else {
			centerPanel = <LoadingPanel />;
		}
	} else {
		if (data.autor.length > 0) {
			centerPanel = (
				<AutorPanel
					articulos={articulos}
					autor={autor}
					articulosNum={autorArticulos.groupBy.autor.length > 0 ? data.autorArticulos.groupBy.autor[0].connection.aggregate.count : 0}
				/>
			);
		} else {
			centerPanel = <ErrorPanel error="No pudimos encontrar el autor que buscas" />;
		}
	}

	let rightPanel = loading ? (
		""
	) : (
		<Fragment>
			<RightPanel autores={autores} numArticulos={numArticulosAutores} />
			<RightPanelTablet autores={autores} numArticulos={numArticulosAutores} />
		</Fragment>
	);
	let leftPanelTV = f7.methods.getTV();
	let leftPanelRadio = f7.methods.getRadio();
	return (
		<Page pageContent={false} name="autor">
			<PageContent
				infinite
				infiniteDistance={50}
				infinitePreloader={false}
				onInfinite={() => {
					loadMore();
				}}
			>
				{/* Top Navbar */}
				<Nav categorias={f7.methods.getCategorias()} tv_channels={leftPanelTV} radio_stations={leftPanelRadio} />
				<Block className="main_cont display-flex flex-direction-column justify-content-center">
					<Block className="paneles">
						<Block className="left_pan">
							<LeftPanel tv_channels={leftPanelTV} radio_stations={leftPanelRadio} />
							<LeftPanelTablet tv_channels={leftPanelTV} radio_stations={leftPanelRadio} />
						</Block>
						<Block className="center_pan">
							{/* Aqui va el deste */}
							<AdsTop />
							{centerPanel}
							{preloader && (
								<Block className="display-flex justify-content-center align-items-center">
									<Preloader color="red"></Preloader>
								</Block>
							)}
						</Block>
						<Block className="right_pan">{rightPanel}</Block>
					</Block>
				</Block>
				{footer && <Footer />}
			</PageContent>
		</Page>
	);
}
