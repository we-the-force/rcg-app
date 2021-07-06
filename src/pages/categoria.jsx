import React, { useState, useEffect } from "react";
import Nav from "@/components/general/navbar/navbar";
import LeftPanel from "@/components/general/left_panel/left-panel";
import RightPanel from "@/components/general/right_panel/right-panel";
import LeftPanelTablet from "@/components/general/left_panel/left-panel-tablet";
import RightPanelTablet from "@/components/general/right_panel/right-panel-tablet";
import CategoriaPanel from "@/components/categoria/categoria-panel";
import LoadingPanel from "@/components/loading/loading-panel";
import ErrorPanel from "@/components/error-panel";
import Footer from "@/components/general/footer";
import AdsTop from "@/components/general/ads/ads_top";
import { useLazyQuery } from "@apollo/client";
import { CategoriaPage } from "@/graphql/queries.graphql";
import { Page, Block, PageContent, Preloader, Navbar, f7, f7ready } from "framework7-react";
export default function Categoria(props) {
	const { nombre } = props;
	const limitStatic = 20;
	const [catNombre, setCatNombre] = useState("");
	const [allowInfinite, setAllowInfinite] = useState(true);
	const [preloader, setPreloader] = useState(false);
	const [inicial, setInicial] = useState(0);
	const [callApi, setCallApi] = useState(false);
	const [articulos, setArticulos] = useState([]);
	const [footer, setFooter] = useState(false);
	const [first, setFirst] = useState(true);

	const [getArticulos, { loading, error }] = useLazyQuery(CategoriaPage, {
		onCompleted: (data) => {
			let newInicial = inicial + limitStatic;
			if (data.articulos.length > 0) setAllowInfinite(true);
			if (data.articulos.length === 0) setFooter(true);
			setPreloader(false);
			setInicial(newInicial);
			setArticulos(articulos.concat(data.articulos));
			if (data.categorias.length > 0) {
				setCatNombre(data.categorias[0].nombre);
			}
		},
	});

	const loadMore = () => {
		setFirst(false);
		if (!allowInfinite) return;
		setAllowInfinite(false);
		setPreloader(true);
		setCallApi(!callApi);
	};

	useEffect(() => {
		getArticulos({
			variables: {
				categoria: nombre,
				inicio: inicial,
				limite: limitStatic,
			},
		});
	}, [callApi]);

	useEffect(() => {
		f7ready((f7) => {
			f7.methods.handleCategoriaActual(nombre);
			setCallApi(!callApi);
		});
	}, []);

	let centerPanel;
	let navbarLoading = false;
	let anuncios = f7.methods.get_Anuncios();

	if (loading && first) {
		if (error) {
			centerPanel = <ErrorPanel />;
			navbarLoading = false;
		} else {
			centerPanel = <LoadingPanel />;
			navbarLoading = true;
		}
	} else {
		if (articulos.length > 0) {
			centerPanel = <CategoriaPanel articulos={articulos} categoria={catNombre} anuncios={anuncios}/>;
			navbarLoading = false;
		} else {
			centerPanel = <ErrorPanel error="No pudimos encontrar la categoria que buscas" />;
			navbarLoading = false;
		}
	}

	let rightPanel = f7.methods.getArticulosRightPanel();
	let leftPanelTV = f7.methods.getTV();
	let leftPanelRadio = f7.methods.getRadio();

	const logo = f7.methods.getLogo();
	const logoDark = f7.methods.getLogoDarkMode();
	const DB_url = f7.methods.get_URL_DB();
	return (
		<Page pageContent={false} name="categoria">
			<PageContent
				infinite
				infiniteDistance={50}
				infinitePreloader={false}
				onInfinite={() => {
					loadMore();
				}}
			>
				{!navbarLoading && (
					<Nav
						categorias={f7.methods.getCategorias()}
						tv_channels={leftPanelTV}
						radio_stations={leftPanelRadio}
						logoD={DB_url + logoDark}
						logo={DB_url + logo}
					/>
				)}
				{navbarLoading && <Navbar sliding noHairline noShadow></Navbar>}
				{/* Top Navbar */}
				<Block className="main_cont display-flex flex-direction-column justify-content-center">
					<Block className="paneles">
						<Block className="left_pan">
							<LeftPanel tv_channels={leftPanelTV} radio_stations={leftPanelRadio} />
							<LeftPanelTablet tv_channels={leftPanelTV} radio_stations={leftPanelRadio} />
						</Block>
						<Block className="center_pan">
							<AdsTop anuncio={anuncios.bannerHorizontalUno}/>
							{centerPanel}
							{preloader && (
								<Block className="display-flex justify-content-center align-items-center">
									<Preloader color="red"></Preloader>
								</Block>
							)}
						</Block>
						<Block className="right_pan">
							<RightPanel newsInfo={rightPanel} />
							<RightPanelTablet newsInfo={rightPanel} />
						</Block>
					</Block>
				</Block>
				{footer && <Footer logoD={DB_url + logoDark} logo={DB_url + logo} />}
			</PageContent>
		</Page>
	);
}
