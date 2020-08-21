import React, { Component } from 'react';
import Nav from '../components/navbar';
import LeftPanel from '../components/left-panel';
import RightPanel from '../components/right-panel';
import CategoriaPanel from '../components/categoria-panel';
import Footer from '../components/footer';
import AdsTop from '../components/ads_top';
import {
    Page,
    Block,
    PageContent
} from 'framework7-react';

export default class Categoria extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Page pageContent={false} name="categoria">
                <PageContent>
                    <Nav />
                    {/* Top Navbar */}
                    <Block className="main_cont display-flex flex-direction-column justify-content-center">
                        <AdsTop />
                        <Block className="paneles">
                            <Block className="left_pan">
                                <LeftPanel />
                            </Block>
                            <Block className="center_pan">
                                {/* {JSON.stringify(this.$f7route.context.Articles)} */}
                                <CategoriaPanel articulos={this.$f7route.context.Articles} categoria={this.$f7route.context.Category}/>
                            </Block>
                            <Block className="right_pan">
                                <RightPanel />
                            </Block>
                        </Block>
                    </Block>
                    <Footer />
                </PageContent>
            </Page>
        )
    }
}

// export default () => (
//     <Page pageContent={false} name="categoria">
//         <PageContent>
//             <Nav />
//             {/* Top Navbar */}
//             <Block className="main_cont display-flex flex-direction-column justify-content-center">
//                 <AdsTop />
//                 <Block className="paneles">
//                     <Block className="left_pan">
//                         <LeftPanel />
//                     </Block>
//                     <Block className="center_pan">
//                         <CategoriaPanel />
//                     </Block>
//                     <Block className="right_pan">
//                         <RightPanel />
//                     </Block>
//                 </Block>
//             </Block>
//             <Footer />
//         </PageContent>
//     </Page>
// );