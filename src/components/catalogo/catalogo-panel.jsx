import React, { Fragment, useRef, useState } from 'react';
import ReactPlayer from 'react-player';
import { f7 } from 'framework7-react';

import {
    Block,
    Card,
    BlockHeader,
    Link,
    PhotoBrowser
} from 'framework7-react';

export default function CatalogoPanel(props) {
    const { centro, norte, oriente, poniente, sur } = props.data;
    const DB_url = f7.methods.get_URL_DB();
    const photoBrowser = useRef(null);
    const [photos, setPhotos] = useState([]);

    const handleClick = (el, face) => {
        let newPhotos = [];
        props.data[el.zona].map((el, i) => {
            newPhotos.push(DB_url + el.cara1.url);
            newPhotos.push(DB_url + el.cara2.url);
        });
        setPhotos(newPhotos);
        photoBrowser.current.open(face - 1);
    }

    const EspectTwoFaces = (prop) => {
        const { el, index } = prop;
        let cara1Url = el.cara1 ? DB_url + el.cara1.url : "/static/icons/image_x2.png";
        let cara2Url = el.cara2 ? DB_url + el.cara2.url : "/static/icons/image_x2.png";
        return (
            <Fragment>
                <Link className="img_cont" onClick={() => { handleClick(el, ((index * 2) + 1)) }}>
                    <div className="name">
                        <p>{el.id_espectacular} - cara 1</p>
                    </div>
                    <img src={cara1Url} alt="" />
                    <p className="lugar">{el.lugar}</p>
                </Link>
                <Link className="img_cont" onClick={() => { handleClick(el, ((index * 2) + 2)) }}>
                    <div className="name">
                        <p>{el.id_espectacular} - cara 2</p>
                    </div>
                    <img src={cara2Url} alt="" />
                    <p className="lugar">{el.lugar}</p>
                </Link>
            </Fragment>
        );
    }

    return (
        <Block className="center_panel catalogo_panel">
            <PhotoBrowser
                photos={photos}
                ref={photoBrowser}
                theme="dark"
                type="popup"
                routableModals={false}
                popupCloseLinkText="Cerrar"
                navbarOfText="de"
            />
            <Card className="new_head espectaculares_menu">
					<Link href="/" className="uppercase">
						Inicio
					</Link>
					<hr />
					<Link href="/espectaculares" className="uppercase">
						Información
					</Link>
					<hr />
					<Link href="/contacto" className="uppercase">
						Contacto
					</Link>
				</Card>
            <Card>
                <Block className="back">
                    <BlockHeader>
                        <h2>zona centro</h2>
                    </BlockHeader>
                    <Block className="content">
                        {
                            centro.map((el, i) => {
                                return (
                                    <EspectTwoFaces key={i} el={el} index={i} />
                                );
                            })
                        }
                    </Block>
                </Block>
            </Card>
            <Card>
                <Block className="back">
                    <BlockHeader>
                        <h2>zona norte</h2>
                    </BlockHeader>
                    <Block className="content">
                        {
                            norte.map((el, i) => {
                                return (
                                    <EspectTwoFaces key={i} el={el} index={i} />
                                );
                            })
                        }
                    </Block>
                </Block>
            </Card>
            <Card>
                <Block className="back">
                    <BlockHeader>
                        <h2>zona oriente</h2>
                    </BlockHeader>
                    <Block className="content">
                        {
                            oriente.map((el, i) => {
                                return (
                                    <EspectTwoFaces key={i} el={el} index={i} />
                                );
                            })
                        }
                    </Block>
                </Block>
            </Card>
            <Card>
                <Block className="back">
                    <BlockHeader>
                        <h2>zona poniente</h2>
                    </BlockHeader>
                    <Block className="content">
                        {
                            poniente.map((el, i) => {
                                return (
                                    <EspectTwoFaces key={i} el={el} index={i} />
                                );
                            })
                        }
                    </Block>
                </Block>
            </Card>
            <Card>
                <Block className="back">
                    <BlockHeader>
                        <h2>zona sur</h2>
                    </BlockHeader>
                    <Block className="content">
                        {
                            sur.map((el, i) => {
                                return (
                                    <EspectTwoFaces key={i} el={el} index={i} />
                                );
                            })
                        }
                    </Block>
                </Block>
            </Card>
        </Block>
    )
}