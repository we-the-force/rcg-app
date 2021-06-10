import React, { useRef, useState, useEffect } from "react";
import Nav from "@/components/general/navbar/navbar";
import LeftPanel from "@/components/general/left_panel/left-panel";
import RightPanel from "@/components/general/right_panel/right-panel";
import Footer from "@/components/general/footer";
import AdsTop from "@/components/general/ads/ads_top";
import BusquedaPanel from "@/components/busqueda/busqueda-panel";
import LoadingPanel from "@/components/loading/loading-panel";
import ErrorPanel from "@/components/error-panel";
import LeftPanelTablet from "@/components/general/left_panel/left-panel-tablet";
import RightPanelTablet from "@/components/general/right_panel/right-panel-tablet";
import { f7, f7ready } from "framework7-react";
import { useLazyQuery, useQuery } from "@apollo/client";
import { BusquedaTag, BusquedaTitulo, BusquedaDesc } from "@/graphql/queries.graphql";
import { Page, Block, PageContent, Card, CardHeader, Preloader } from "framework7-react";

export default function Busqueda(props) {
	const values = props.params.trim().toString();
	const limitStatic = 20;
	const [type, setType] = useState(-1);
	const [isCalled, setIsCalled] = useState(false);
	const [results, setResults] = useState([]);
	const [limit, setLimit] = useState(limitStatic);
	const [inicial, setInicial] = useState(0);
	const [allowInfinite, setAllowInfinite] = useState(true);
	const [preloader, setPreloader] = useState(false);
	const [callApi, setCallApi] = useState(false);
	const [firstCharge, setFirstCharge] = useState(true);
	const [data, setData] = useState(false);
	const [getTitulo, valuesTitulo] = useLazyQuery(BusquedaTitulo, {
		onCompleted: (data) => {
			handleCompleted(data);
		},
	});
	const [getTag, valuesTag] = useLazyQuery(BusquedaTag, {
		onCompleted: (data) => {
			handleCompleted(data);
		},
	});
	const [getDesc, valuesDesc] = useLazyQuery(BusquedaDesc, {
		onCompleted: (data) => {
			handleCompleted(data);
		},
	});

	const handleCompleted = (data) => {
		setIsCalled(true);
		setData(data);
	};

	const loadMore = () => {
		if (!allowInfinite) return;
		setAllowInfinite(false);
		setPreloader(true);
		setCallApi(!callApi);
	};

	//efecto para quitar etiqueta roja
	useEffect(() => {
		f7ready((f7) => {
			f7.methods.handleCategoriaActual("");
			setType(0);
		});
	}, []);

	useEffect(() => {
		let _arguments = {
			variables: {
				values: values,
				inicio: inicial,
				limite: limit,
			},
		};
		switch (type) {
			case 0:
				getTitulo(_arguments);
				break;
			case 1:
				getDesc(_arguments);
				break;
			case 2:
				getTag(_arguments);
				break;
			default:
				setPreloader(false);
				break;
		}
	}, [type, callApi]);

	if (isCalled && data) {
		let val = data.articulos;
		let length = val.length;
		let underLimit = length < limit && length > 0;
		let nothing = length === 0;
		let done = length === limit;
		let newType = type + 1;

		//console.log('-----------');
		//for (let i = 0; i < results.length; i++) {
		//    for (let j = 0; j < val.length; j++) {
		//        console.log('++++++++++');
		//        console.log(results[i].id);
		//        console.log(val[j].id);
		//        if (results[i].id === val[j].id) {
		//            val.splice(j, 1);
		//        }
		//    }
		//}

		setResults(results.concat(val));
		setData(false);
		if (underLimit) setLimit(limit - length);
		if (!done) {
			setInicial(0);
			setType(newType);
		} else {
			let newInicial = inicial + limit;
			setIsCalled(false);
			setInicial(newInicial);
			setLimit(limitStatic);
			setPreloader(false);
			setAllowInfinite(true);
		}
	}

	let isLoading = valuesTitulo.loading || valuesDesc.loading || valuesTag.loading;
	let isError = valuesTitulo.error || valuesDesc.error || valuesTag.error;
	let newResults = [...results];
	for (let i = 0; i < newResults.length; i++) {
		for (let j = i + 1; j < newResults.length; j++) {
			if (newResults[i].id === newResults[j].id) {
				newResults.splice(j, 1);
			}
		}
	}
	let centerPanel =
		isLoading && firstCharge ? isError ? <ErrorPanel /> : <LoadingPanel /> : <BusquedaPanel first={type} title={values} articulos={newResults} />;
	let rightPanel = f7.methods.getArticulosRightPanel();
	let leftPanelTV = f7.methods.getTV();
	let leftPanelRadio = f7.methods.getRadio();

	const logo = f7.methods.getLogo();
	const logoDark = f7.methods.getLogoDarkMode();
	const DB_url = f7.methods.get_URL_DB();
	let radio_name = f7.methods.get_RadioName();
	let radio_url = f7.methods.get_RadioURL();
	let radio_img = f7.methods.get_RadioIMG();
	return (
		<Page
			pageContent={false}
			name="busqueda"
			onPageInit={() => {
				setFirstCharge(false);
			}}
		>
			<PageContent
				infinite
				infiniteDistance={50}
				infinitePreloader={false}
				onInfinite={() => {
					loadMore();
				}}
			>
				{/* Top Navbar */}
				<Nav
					categorias={f7.methods.getCategorias()}
					tv_channels={leftPanelTV}
					radio_stations={leftPanelRadio}
					logoD={DB_url + logoDark}
					logo={DB_url + logo}
				/>
				{/* Page content */}
				<Block className="main_cont display-flex flex-direction-column justify-content-center">
					<Block className="paneles">
						<Block className="left_pan">
							<LeftPanel tv_channels={leftPanelTV} radio_stations={leftPanelRadio} radio_url={radio_url} radio_name={radio_name} radio_img={radio_img}/>
							<LeftPanelTablet tv_channels={leftPanelTV} radio_stations={leftPanelRadio} />
						</Block>
						<Block className="center_pan search">
							<AdsTop />
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
			</PageContent>
		</Page>
	);
}
