import React from 'react';

const Skills = () => {
    return (
        <div className='skills'>
            <h2 className='section-title'>
                Skills & Education
            </h2>

            <div className='skills-container'>
                {/* Education List */}
                <ul className='education-list'>
                    <li className='list-item'>
                        <i className='fa-solid fa-graduation-cap'></i>
                        <p>B.S. Information Technology (May 2024)</p>
                        <p>Western Governers University</p>
                    </li>
                    <li className='list-item'>
                        <i className='fa-solid fa-building-columns'></i>
                        <p>Full-Stack Web Development Certification</p>
                        <p>Southern Methodist University</p>
                    </li>
                    <li className='list-item'>
                        <i className='fa-solid fa-computer'></i>
                        <p>CompTIA A+</p>
                    </li>
                    <li className='list-item'>
                        <i className='fa-solid fa-person-chalkboard'></i>
                        <p>CompTIA Project+</p>
                    </li>
                    <li className='list-item'>
                        <i className='fa-solid fa-wifi'></i>
                        <p>CompTIA Network+</p>
                    </li>
                    <li className='list-item'>
                        <i className='fa-solid shield'></i>
                        <p>CompTIA Security+ (May 2024)</p>
                    </li>
                    <li className='list-item'>
                        <i className='fa-solid fa-computer'></i>
                        <p>Axelos ITIL Foundation</p>
                    </li>
                    <li className='list-item'>
                        <i className='fa-brands fa-aws'></i>
                        <p>AWS Cloud Practitioner</p>
                    </li>
                    <li className='list-item'>
                        <i className='fa-brands fa-linux'></i>
                        <p>LIT Linux Foundations</p>
                    </li>
                </ul>

                {/* Skills List */}
                <ul className='skills-list'>
                    <li className='list-item'>
                        <i className='fa-brands fa-html5'></i>
                        <p>HTML5</p>
                    </li>
                    <li className='list-item'>
                        <i className='fa-brands fa-css3-alt'></i>
                        <p>CSS3</p>
                    </li>
                    <li className='list-item'>
                        <i className='fa-brands fa-sass'></i>
                        <p>Sass</p>
                    </li>
                    <li className='list-item'>
                        <i className='fa-brands fa-bootstrap'></i>
                        <p>Bootstrap</p>
                    </li>
                    <li className='list-item'>
                        <i className='fa-brands fa-js'></i>
                        <p>JavaScript</p>
                    </li>
                    <li className='list-item'>
                        <i className='fa-brands fa-react'></i>
                        <p>React</p>
                    </li>
                    <li className='list-item'>
                        <i className='fa-brands fa-node-js'></i>
                        <p>Node JS</p>
                    </li>
                    <li className='list-item'>
                        <i className='fa-brands fa-git-alt'></i>
                        <p>Git</p>
                    </li>
                    <li className='list-item'>
                        <i className='fa-solid fa-database'></i>
                        <p>MySQL</p>
                    </li>
                </ul>
            </div>
        </div>
    )
};

export default Skills;