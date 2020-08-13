import React, { Component } from 'react';
import {
    Swiper,
    SwiperSlide,
    Block,
    BlockHeader,
    BlockFooter
} from 'framework7-react';
export default class Masthead extends Component {
    constructor() {
        super();
        this.state = {}
    }
    render() {
        let home = this.props.home ? this.props.home : false;
        if (home) {
            home = <Swiper pagination params={{ loop: true }}>
                <SwiperSlide>
                    <img src="../static/imgs/LOGO_negro_sobre_blanco.png" alt="" />
                    <Block strong>
                        <BlockHeader className="categoria uppercase">estatal</BlockHeader>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing</p>
                        <BlockFooter>
                            <p className="autor">Nombre Reporter@</p> - <p className="fecha">11 Agosto 2020</p>
                        </BlockFooter>
                    </Block>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="../static/imgs/LOGO_negro_sobre_blanco.png" alt="" />
                    <Block strong>
                        <BlockHeader className="categoria uppercase">estatal</BlockHeader>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing</p>
                        <BlockFooter>
                            <p className="autor">Nombre Reporter@</p> - <p className="fecha">11 Agosto 2020</p>
                        </BlockFooter>
                    </Block>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="../static/imgs/LOGO_negro_sobre_blanco.png" alt="" />
                    <Block strong>
                        <BlockHeader className="categoria uppercase">estatal</BlockHeader>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing</p>
                        <BlockFooter>
                            <p className="autor">Nombre Reporter@</p> - <p className="fecha">11 Agosto 2020</p>
                        </BlockFooter>
                    </Block>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="../static/imgs/LOGO_negro_sobre_blanco.png" alt="" />
                    <Block strong>
                        <BlockHeader className="categoria uppercase">estatal</BlockHeader>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing</p>
                        <BlockFooter>
                            <p className="autor">Nombre Reporter@</p> - <p className="fecha">11 Agosto 2020</p>
                        </BlockFooter>
                    </Block>
                </SwiperSlide>
            </Swiper>
        } else {
            home = <img src="../static/imgs/Logo_negro.png" alt="" srcset="" />
        }
        return (
            <Block>
                {home}
            </Block>
        );
    }
}