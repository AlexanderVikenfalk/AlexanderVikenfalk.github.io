import React from "react";
import profilePicture from '../styles/images/profile.jpg'

export default function About() {
    return (
        <div className="about">
            <div className={'about__image-wrapper'}>
                <img
                    className={'about__image'}
                    src={profilePicture}/>
            </div>
            <div className={'about__text-wrapper'}>
                <span className={'about__text--light-color'}>Hej!</span>
                <span className={'about__text--dark-color'}>My name is </span>
                <span className={'about__text--light-color'}>Alexander </span>
                <p className={'about__text'}>
                    I'm a Berlin based web developer with an growing interest for UI/ UX. Currently I'm working
                    as a Frontend developer at Business Keeper, building customer tailored compliance solutions.
                </p>
            </div>
        </div>
    );
}