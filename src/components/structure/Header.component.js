import React from "react";

import { NavLink } from "react-router-dom";

const Link = function(link,label){
    this.link = link;
    this.label = label;
}

const links = [
    new Link("/","Home"),
    new Link("/view-suppliers","Suppliers")
];

export const Header = () => {
    return (
        <header>
            <h1>Example rosemary</h1>
            <ul>
                {links.map((x,i)=>(
                    <li key={i}>
                        <NavLink to={x.link}>{x.label}</NavLink>
                    </li>
                ))}
            </ul>
        </header>
    );
}
