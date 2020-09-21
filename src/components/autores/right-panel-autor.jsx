import React, { Component } from 'react';
import DestItem from '@/components/general/right_panel/destacado-item';
import Locutor from '@/static/imgs/locutor.png'
import {
    Block,
    Searchbar,
    Card,
    CardHeader,
    List,
    ListItem
} from 'framework7-react';

export default class RightPanelAutor extends Component {
    articuloSearch = (e) => {
        if (e.key === "Enter")
        {
            //TODO: ToLowercase como no
            let searchValue = e.target.value.trim();
            if (searchValue !== "")
            {
                // console.log(encodeURI(e.target.value));
                // console.log(this.$f7.views.main.router.navigate);
                this.$f7.views.main.router.navigate(`/busqueda/${encodeURI(e.target.value)}`);
            }
            else
            {
                // console.log("Ta vacio que quieres que busque lmao");
            }
        }
    }
    constructor(props){
        super(props);
        // console.log(props);

        if (props.autorInfo != undefined)
        {
            this.otherAuthors = JSON.parse(JSON.stringify(props.autores));
            for (let i = 0; i < this.otherAuthors.length; i++)
            {
                if (this.otherAuthors[i].id === (props.autorInfo.id))
                {
                    this.otherAuthors.splice(i, 1);
                    break;
                }
            }
        }
        else
        {
            this.otherAuthors = [];
        }
    }
    render() {
        return (
            <Block className="right_panel_cont">
                <Block className="search_block">
                    <input id="searchBar" type="text" onKeyPress={this.articuloSearch}/>
                    <Block className="ads square"></Block>
                </Block>
                <Block className="right_panel_down">
                    {/* { console.log(`Las weas estas`, this.props) } */}
                    {
                        this.otherAuthors.map((autor, key) => {
                            let autorImgUrl = autor.img != null ? `http://${window.location.hostname}:1337${autor.img.url}` : ``;
                            let twLink = autor.twitter_link   != null ? (<a href={autor.twitter_link}   target="_blank"><img src="../static/icons/TW_Icon.png"/></a>) : ("");
                            let fbLink = autor.facebook_link  != null ? (<a href={autor.facebook_link}  target="_blank"><img src="../static/icons/FB_Icon.png"/></a>) : ("");
                            let igLink = autor.instagram_link != null ? (<a href={autor.instagram_link} target="_blank"><img src="../static/icons/IG_Icon.png"/></a>) : ("");
                            return (
                                <Card key={key} className="right_panel_down_card">
                                    <img src={autorImgUrl}/>
                                    <p>{autor.nombre}</p>
                                    <a href={`/autor/${autor.id}`}>{`${autor.articulos.length} Noticias`}</a>
                                    <p>Redes:</p>
                                    <Block className="display-flex">
                                        {twLink}
                                        {fbLink}
                                        {igLink}
                                    </Block>
                                </Card>
                            )
                        })
                    }
                </Block>
            </Block>
        )
    }
}