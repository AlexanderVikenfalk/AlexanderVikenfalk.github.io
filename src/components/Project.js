import React from 'react';

export default function Project(prop) {
return (
        <div className={'project'}>
                <p>title:{prop.project.title} </p>
                <p>address: {prop.project.address}</p>
                <p>year: {prop.project.year}</p>
                <p>description: {prop.project.description}</p>
                <img src={ `../styles/images/${prop.project.imageName}`}/>
        </div>
);
}

