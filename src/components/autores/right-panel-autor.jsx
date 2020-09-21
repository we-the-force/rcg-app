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
        console.log(props);

        if (props.autorInfo != undefined)
        {
            this.otherAuthors = JSON.parse(JSON.stringify(props.autores));
            console.log("Other authors",this.otherAuthors);
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
        console.log("Ayayayyyy las otras weas como no", this.otherAuthors);
    }
    render() {
        return (
            <Block className="right_panel_cont">
                <Block className="search_block">
                    <input id="searchBar" type="text" onKeyPress={this.articuloSearch}/>
                    <Block className="ads square"></Block>
                </Block>
                <Block className="right_panel_down">
                    { console.log(`Las weas estas`, this.props) }
                    {
                        this.otherAuthors.map((author, key) => {
                            console.log("Author: ", author);
                            return (
                                <Card key={key} className="right_panel_down_card">
                                    <img src={``}/>
                                    <p>{author.nombre}</p>
                                    <p>{`${author.articulos.length} Noticias`}</p>
                                    <Block className="display-flex">
                                        <img src="../static/icons/TW_Icon.png" alt="" />
                                        <img src="../static/icons/FB_Icon.png" alt="" />
                                        <img src="../static/icons/IG_Icon.png" alt="" />
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