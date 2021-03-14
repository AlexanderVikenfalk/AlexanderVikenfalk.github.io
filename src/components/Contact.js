import React from "react";

export default function Contact() {
    return (
        <div className='contact'>
            <p>You can reach me here</p>
            <ul>
                <li className='contact__icon'>
                    <a className='contact__email'
                        href="mailto:alexander@vikenfalk.com?subject=Regarding Portfolio">
                    </a>
                </li>
                <li className='contact__icon'>
                    <a className='contact__linkedin' href="https://www.linkedin.com/in/alexander-vikenfalk/">
                    </a>
                </li>
                <li className='contact__icon'><a
                    className='contact__github'
                    href="https://github.com/AlexanderVikenfalk"> </a></li>
            </ul>
        </div>
    );
}