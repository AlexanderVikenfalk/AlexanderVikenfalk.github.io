import React from "react";
import Project from "./Project"

const allProjectsData = [
    {
        title: 'Curry 61',
        address: 'http://www.curry61.de/',
        year: 2018,
        description: 'A website for the business Curry 61',
        imageName: 'curry61.png`'
    },
    {
        title: 'Not a real project',
        address: 'ducks.com/',
        year: 'no',
        description: 'A duck based project',
        imageName: 'duck.jpg'
    }
]

export default function Projects() {
    return (
        <div className={'projects'}>
            <h1> Projects </h1>
            {allProjectsData.map((projectData) => <Project project={projectData}/>)}
        </div>
    );
}