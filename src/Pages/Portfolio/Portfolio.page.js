import React, { Component } from 'react';
import './Portfolio.styles.css';
import {Link} from 'react-router-dom';
import {CardList} from './components/card-list/card-list.component';

export default class Portfolio extends Component {
    state= {
        data: [{
            id: 1,
            name: "Unis: plateforme d'entraide",
            image: "https://uploads-ssl.webflow.com/5e317c9eceeebb855f94b36b/5e3d73edb1d50f557819309c_unis.jpg"
        }, {
            id: 2,
            name: "Eléments naturels",
            image: "https://uploads-ssl.webflow.com/5e317c9eceeebb855f94b36b/5e4280facd3bc563b1b6e302_romain-gal-nature.jpg"
        }, {
            id: 3,
            name: "Luminame   ",
            image: "https://uploads-ssl.webflow.com/5e317c9eceeebb855f94b36b/5fb7a4602b9bdb652c785eff_luminame.jpg"
        }]
    }
    render() {
        const data = this.state.data;
        return (
            <div>
                <div className="relative">
                    <div className="h-1/2">
                        <img src="https://uploads-ssl.webflow.com/5e317c9eceeebb042794b343/5e317c9eceeebbcd0294b60b_luca-bravo-1202673-unsplash.jpg" alt="portfolio"
                            className="w-full h-96 object-cover"
                        />
                    </div>
                    <h1 className="absolute top-0 w-full text-white uppercase text-6xl flex justify-center mt-40">Portfolio</h1>
                    <div className="absolute top-0 w-full flex border-2 border-gray-700 p-4 bg-black text-white mt-96">
                        <Link to="/">Accueil</Link>
                        <p className="px-2 text-white">-</p>
                        <p className="cursor-pointer">Portfolio</p>
                    </div>
                </div>
                    
                <div className="mt-48">
                    <div className="flex justify-center">
                        <p className="mx-2 cursor-pointer">Tous</p>
                        <p className="mx-2 cursor-pointer">Audiovisuelle</p>
                        <p className="mx-2 cursor-pointer">Website</p>
                        <p className="mx-2 cursor-pointer">Graphisme</p>
                    </div>
                </div>

                <CardList data={data}/>
            </div>
        )
    }
}
