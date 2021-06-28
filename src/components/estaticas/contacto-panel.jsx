import React, { useState, Fragment } from "react";
import ReactPlayer from "react-player";
import radio from "@/static/imgs/Radio_contacto.png";
import tv from "@/static/imgs/TV_contacto.png";
import espect from "@/static/imgs/Espect_contacto.png";
import spantalla from "@/static/imgs/Super_pantalla_contacto.png";
import media from "@/static/imgs/Media_contacto.png";
import radio_dark from "@/static/imgs/Radio_contacto_black.png";
import tv_dark from "@/static/imgs/tv_contact_dark.png";
import espect_dark from "@/static/imgs/Espect_contacto_dark.png";
import spantalla_dark from "@/static/imgs/super_pant_dark.png";
import media_dark from "@/static/imgs/social_media_dark.png";
import { Block, Card, BlockHeader, Input, Popup, Button, f7 } from "framework7-react";

export default function ContactoPanel(props) {
	const DB_url = f7.methods.get_URL_DB();
	const [nombre, setNombre] = useState("");
	const [address, setAddress] = useState("");
	const [asunto, setAsunto] = useState("");
	const [mssg, setMssg] = useState("");
	const [errorPopup, setErrorPopup] = useState(false);
	const [successPopup, setSuccessPopup] = useState(false);
	let { correo, telefono, video_source, whatsapp } = props.contactInfo;

	const resetData = () => {
		setAddress("");
		setNombre("");
		setAsunto("");
		setMssg("");
	};

	const handleChange = (val, set) => {
		set(val);
	};

	const handleSubmit = async (e) => {
		f7.preloader.show();
		e.preventDefault();
		let requestObject = {
			name: nombre,
			address: address,
			subject: asunto,
			message: mssg,
		};
		f7.request.promise
			.post(`${DB_url}/request`, requestObject)
			.then(() => {
				f7.preloader.hide();
				setSuccessPopup(true);
				resetData();
			})
			.catch(() => {
				f7.preloader.hide();
				setErrorPopup(true);
			});
	};

	let areVideo = video_source != "" && video_source != null && video_source != undefined;

	return (
		<Fragment>
			<Block className="center_panel contacto_panel">
				<Card>
					<Block className="back">
						<BlockHeader>
							<h1> Contacto</h1>
						</BlockHeader>
						{areVideo && (
							<Block className="player-wrapper">
								<ReactPlayer className="player" controls={true} url={video_source} playing={false} />
							</Block>
						)}
						<Block className="icons_cont display-flex">
							<Block id="radio" className="contacto_icon">
								<img className="light" src={radio} alt="" />
								<img className="dark" src={radio_dark} alt="" />
								<p>Radio</p>
							</Block>
							<Block id="tv" className="contacto_icon">
								<img className="light" src={tv} alt="" />
								<img className="dark" src={tv_dark} alt="" />
								<p>Televisión</p>
							</Block>
							<Block id="espect" className="contacto_icon">
								<img className="light" src={espect} alt="" />
								<img className="dark" src={espect_dark} alt="" />
								<p>Espectaculares</p>
							</Block>
							<Block id="spantalla" className="contacto_icon">
								<img className="light" src={spantalla} alt="" />
								<img className="dark" src={spantalla_dark} alt="" />
								<p>Super Pantalla</p>
							</Block>
							<Block id="media" className="contacto_icon">
								<img className="light" src={media} alt="" />
								<img className="dark" src={media_dark} alt="" />
								<p>Redes Sociales</p>
							</Block>
						</Block>
						<Block className="info">
							<p className="titulo">Incrementa tus ventas</p>
							<p className="text">a través de nuestros diferentes medios.</p>
							<h1 className="warning">¡Anúnciate!</h1>
							<p className="parrafo">
								Deja tus datos en esta sección de formulario y nos pondremos en contacto contigo o llama al teléfono: <b>{telefono}</b>
							</p>
						</Block>
						<form onSubmit={handleSubmit}>
							<div className="titulo">
								<p>formulario</p>
							</div>
							<Input
								value={nombre}
								required
								validate
								validateOnBlur
								pattern="^([a-zA-ZñÑ]+ ?)+"
								errorMessage="Por favor llene este campo"
								clearButton
								id="formulario-name"
								type="text"
								placeholder="Nombre Completo"
								onChange={(e) => {
									handleChange(e.target.value, setNombre);
								}}
								onInputClear={() => {
									handleChange("", setNombre);
								}}
							/>
							<Input
								value={address}
								required
								validate
								validateOnBlur
								pattern="^[^@]+@[^@]+\.[a-zA-Z]{2,}$"
								errorMessage="Por favor llene este campo"
								clearButton
								id="formulario-address"
								type="text"
								placeholder="Dirección de Correo Completa*"
								onChange={(e) => {
									handleChange(e.target.value, setAddress);
								}}
								onInputClear={() => {
									handleChange("", setAddress);
								}}
							/>
							<Input
								value={asunto}
								required
								validate
								validateOnBlur
								pattern="^[^ ][\w\W ]*"
								errorMessage="Por favor llene este campo"
								clearButton
								id="formulario-subject"
								type="text"
								placeholder="Asunto"
								onChange={(e) => {
									handleChange(e.target.value, setAsunto);
								}}
								onInputClear={() => {
									handleChange("", setAsunto);
								}}
							/>
							<Input
								value={mssg}
								required
								validate
								validateOnBlur
								resizable
								pattern="^[^ ][\w\W ]*"
								errorMessage="Por favor llene este campo"
								clearButton
								id="formulario-message"
								type="textarea"
								placeholder="Mensaje"
								onChange={(e) => {
									handleChange(e.target.value, setMssg);
								}}
								onInputClear={() => {
									handleChange("", setMssg);
								}}
							/>
							<Input className="enviar" id="formulario-send" type="submit" value="Enviar" />
						</form>
						<div className="parrafo_bottom">
							<p>Te ofrecemos paquetes a tu medida.</p>
							<p>Pregunta sin compromiso, ¡Nosotros te ayudamos!</p>
						</div>
						<p className="parrafo_red">WhatsApp {whatsapp}</p>
						<p className="parrafo_red">{correo}</p>
					</Block>
				</Card>
			</Block>
			<Popup className="popupContact errorPopup" opened={errorPopup} onPopupClosed={() => setErrorPopup(false)}>
				<Block className="back">
					<p> ¡Oops! </p>
					<p>Ocurrió un error intentalo de nuevo más tarde.</p>
					<Button onClick={() => setErrorPopup(false)}>Ok</Button>
				</Block>
			</Popup>
			<Popup className="popupContact successPopup" opened={successPopup} onPopupClosed={() => setSuccessPopup(false)}>
				<Block className="back">
					<p> Tu formulario ha sido enviado. </p>
					<p>Nos pondremos en contacto contigo en breve.</p>
					<Button onClick={() => setSuccessPopup(false)}>Ok</Button>
				</Block>
			</Popup>
		</Fragment>
	);
}
