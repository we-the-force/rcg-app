import React, { Component } from 'react';
import {
    Block,
    Card,
    CardHeader,
} from 'framework7-react';

export default class ArticuloPanel extends Component {
    constructor() {
        super();
        this.state = {}
    }
    render() {
        return (
            <Block className="articulo_panel">
                <Card className="articulo">
                    <CardHeader>Locales</CardHeader>
                    <Block id="share"></Block>
                    <Block>
                        <p id="autor">Nombre Reporter@</p> - <p id="fecha">11 Agosto 2020</p>
                    </Block>
                    <Block id="titulo">Lorem ipsum dolor sit amet, consectetur adipiscing elit...</Block>
                    <Block>
                        {/* <img src="../static/imgs/418464-PD8PXQ-214 1.png" alt="" /> */}
                        <Block> <p id="pieTitulo">Pie de foto</p> - <p id="pie">Pie de foto</p> </Block>
                    </Block>
                    <Block>
                        <Block>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce imperdiet vel lorem quis suscipit. Aenean faucibus pulvinar molestie. Aenean sapien ante, interdum a nulla sit amet, bibendum porta nunc. Nulla vitae mattis lacus. Vivamus pretium imperdiet arcu vel interdum. Mauris suscipit ex sit amet libero convallis tristique. Aliquam posuere, ipsum eget iaculis ornare, metus purus auctor mi, eu fringilla ligula purus a ipsum. Etiam blandit orci elit, quis maximus ipsum tincidunt maximus. Mauris imperdiet pulvinar elit, vitae ultricies ligula lacinia eget. Duis mauris nulla, pellentesque a magna vel, commodo venenatis metus.

                            Maecenas volutpat metus vitae eros bibendum, rhoncus imperdiet magna laoreet. Quisque sed risus quis purus pulvinar sodales. Ut lacus lectus, euismod in pharetra sit amet, efficitur vel mi. Donec nisi risus, finibus a leo vitae, ornare consectetur mi. Donec sollicitudin massa eget ligula lobortis, eu congue lacus malesuada. Nulla arcu sem, vestibulum sed elementum sit amet, finibus sit amet sapien. Praesent semper elit a turpis malesuada eleifend. Duis efficitur urna id mi iaculis, eget pretium mi malesuada. In id libero massa. Morbi at leo lorem. Vivamus fermentum sodales eros eu convallis. Cras congue vel lacus non lacinia. Maecenas vel erat id enim aliquam tempor. Aliquam ac felis at ipsum sagittis venenatis sit amet a dolor. Praesent commodo tempus lacus, eu commodo purus dictum ut. Aenean metus nibh, porttitor in libero viverra, condimentum blandit quam.

                            Vivamus quis justo et neque rutrum consequat in eget neque. Praesent aliquam gravida vestibulum. Proin porttitor augue ac orci semper rutrum. Pellentesque congue, odio eu dignissim dictum, purus justo pellentesque risus, ac ornare sapien turpis sit amet erat. Quisque vehicula ligula vitae volutpat eleifend. Morbi sollicitudin vel neque tristique viverra. Nunc bibendum velit quis iaculis cursus. Pellentesque nec arcu odio. Suspendisse potenti. Mauris a metus quis tortor auctor tincidunt et vel enim. Donec vitae risus scelerisque, tristique nulla in, sagittis purus.

                            Vestibulum iaculis lacus ac arcu commodo lobortis. Fusce augue risus, efficitur vitae metus sit amet, iaculis auctor leo. Cras dictum viverra neque, quis ultricies felis dictum faucibus. Proin iaculis iaculis tortor, id lobortis tortor lacinia a. Donec a suscipit eros. Praesent quis fermentum justo, a sodales lectus. Fusce porta dolor quis venenatis condimentum. Nam maximus mauris at nisi cursus viverra. Mauris placerat molestie dui ac lacinia. Nam viverra in nibh id euismod. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.

                            Nullam eu consequat nisl. Phasellus elementum risus sed ante rutrum, a feugiat felis vulputate. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut quis imperdiet orci. Integer vitae mi at arcu porttitor mollis. Aenean hendrerit porta urna ac commodo. Vivamus vitae ex dolor. Etiam dapibus mi nulla, ut finibus tellus porttitor eget. Curabitur eleifend ante ac dolor vehicula auctor ut vel ante. Maecenas faucibus, dolor sit amet semper ultrices, nulla velit faucibus nisi, quis venenatis nisl massa et elit. Cras pretium, odio in viverra consectetur, orci neque hendrerit tellus, rutrum tincidunt felis metus eget ligula.
                                        {/* aqui va el contenido */}
                        </Block>
                        <Block>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce imperdiet vel lorem quis suscipit. Aenean faucibus pulvinar molestie. Aenean sapien ante, interdum a nulla sit amet, bibendum porta nunc. Nulla vitae mattis lacus. Vivamus pretium imperdiet arcu vel interdum. Mauris suscipit ex sit amet libero convallis tristique. Aliquam posuere, ipsum eget iaculis ornare, metus purus auctor mi, eu fringilla ligula purus a ipsum. Etiam blandit orci elit, quis maximus ipsum tincidunt maximus. Mauris imperdiet pulvinar elit, vitae ultricies ligula lacinia eget. Duis mauris nulla, pellentesque a magna vel, commodo venenatis metus.

                            Maecenas volutpat metus vitae eros bibendum, rhoncus imperdiet magna laoreet. Quisque sed risus quis purus pulvinar sodales. Ut lacus lectus, euismod in pharetra sit amet, efficitur vel mi. Donec nisi risus, finibus a leo vitae, ornare consectetur mi. Donec sollicitudin massa eget ligula lobortis, eu congue lacus malesuada. Nulla arcu sem, vestibulum sed elementum sit amet, finibus sit amet sapien. Praesent semper elit a turpis malesuada eleifend. Duis efficitur urna id mi iaculis, eget pretium mi malesuada. In id libero massa. Morbi at leo lorem. Vivamus fermentum sodales eros eu convallis. Cras congue vel lacus non lacinia. Maecenas vel erat id enim aliquam tempor. Aliquam ac felis at ipsum sagittis venenatis sit amet a dolor. Praesent commodo tempus lacus, eu commodo purus dictum ut. Aenean metus nibh, porttitor in libero viverra, condimentum blandit quam.

                            Vivamus quis justo et neque rutrum consequat in eget neque. Praesent aliquam gravida vestibulum. Proin porttitor augue ac orci semper rutrum. Pellentesque congue, odio eu dignissim dictum, purus justo pellentesque risus, ac ornare sapien turpis sit amet erat. Quisque vehicula ligula vitae volutpat eleifend. Morbi sollicitudin vel neque tristique viverra. Nunc bibendum velit quis iaculis cursus. Pellentesque nec arcu odio. Suspendisse potenti. Mauris a metus quis tortor auctor tincidunt et vel enim. Donec vitae risus scelerisque, tristique nulla in, sagittis purus.

                            Vestibulum iaculis lacus ac arcu commodo lobortis. Fusce augue risus, efficitur vitae metus sit amet, iaculis auctor leo. Cras dictum viverra neque, quis ultricies felis dictum faucibus. Proin iaculis iaculis tortor, id lobortis tortor lacinia a. Donec a suscipit eros. Praesent quis fermentum justo, a sodales lectus. Fusce porta dolor quis venenatis condimentum. Nam maximus mauris at nisi cursus viverra. Mauris placerat molestie dui ac lacinia. Nam viverra in nibh id euismod. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.

                            Nullam eu consequat nisl. Phasellus elementum risus sed ante rutrum, a feugiat felis vulputate. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut quis imperdiet orci. Integer vitae mi at arcu porttitor mollis. Aenean hendrerit porta urna ac commodo. Vivamus vitae ex dolor. Etiam dapibus mi nulla, ut finibus tellus porttitor eget. Curabitur eleifend ante ac dolor vehicula auctor ut vel ante. Maecenas faucibus, dolor sit amet semper ultrices, nulla velit faucibus nisi, quis venenatis nisl massa et elit. Cras pretium, odio in viverra consectetur, orci neque hendrerit tellus, rutrum tincidunt felis metus eget ligula.
                                        {/* aqui va el contenido */}
                        </Block>
                        
                        <Block>
                            <Block>
                                {/* ads */}
                            </Block>
                            <Block>
                                {/* mas ads */}
                            </Block>
                        </Block>
                    </Block>
                    <Block>
                        {/* aqui van los comentarios */}
                    </Block>
                    <Block>
                        {/* share */}
                    </Block>
                    <Block>
                        {/* ads */}
                    </Block>
                    <Block>
                        <div>
                            <h1></h1>
                            <a href="">Mostrar mas</a>
                        </div>
                        {/* aqui va un swiper */}
                        {/* Recomendamos */}
                    </Block>
                </Card>
            </Block>
        );
    }
}