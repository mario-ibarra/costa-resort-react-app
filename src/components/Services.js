import React, { Component } from 'react';
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa';

import Title from './Title';

class Services extends Component {
    state={
        services: [
            {
                icon:<FaCocktail/>,
                title:"free cocktails",
                info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, eum.'
            },
            {
                icon:<FaHiking/>,
                title:"Endless Hiking",
                info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, eum.'
            },
            {
                icon:<FaShuttleVan/>,
                title:"free Shuttebus",
                info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, eum.'
            },
            {
                icon:<FaBeer/>,
                title:"Stronges beers",
                info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, eum.'
            }
        ]
    }

    render(){
        return (
            <section className="services">

                <Title title='Services' />
                <div className="services-center">
                {this.state.services.map((item, index ) =>{
                    return <article key={index} className="service">
                        <span>{item.icon}</span>
                        <h5>{item.title}</h5>
                        <p>{item.info}</p>
                        </article>
                })}
                </div>
            </section>
            
        )
    }
};

export default Services;