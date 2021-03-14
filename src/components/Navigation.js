import React from "react";

export default function Navigation() {
    return (
        <ul className="navigation">
            <li className="navigation__about">
                <a className="navigation__link"
                   href="#">About</a>
            </li>
            <li className="navigation__projects">
                <a className="navigation__link"
                   href="#">Projects</a>
            </li>
            <li className="navigation__contact">
                <a className="navigation__link"
                   href="#">Contact</a>
            </li>
        </ul>
    );
}