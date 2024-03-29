import React from 'react'
import './experience.css'
import { BsPatchCheckFill } from 'react-icons/bs'

function Experience() {
    return (
        <section id='experience'>
            <h5>My Skills</h5>
            <h2>My Experience</h2>
            <div className="container experience__container">
                <div className="experience__frontend">
                    <h3>Frontend Development</h3>
                    <div className="experience__content">
                        <article className='experience__details'>
                            <div>
                                <BsPatchCheckFill className='experience__icon' />
                            </div>
                            <h4>HTML5</h4>
                        </article>
                        <article className='experience__details'>
                            <div>
                                <BsPatchCheckFill className='experience__icon' />
                            </div>

                            <h4>CSS3</h4>
                        </article>
                        <article className='experience__details'>
                            <div>
                                <BsPatchCheckFill className='experience__icon' />
                            </div>

                            <h4>JavaScript(ES6+)</h4>
                        </article>
                        <article className='experience__details'>
                            <div>
                                <BsPatchCheckFill className='experience__icon' />
                            </div>
                            <h4>React</h4>
                        </article>
                        <article className='experience__details'>
                            <div>
                                <BsPatchCheckFill className='experience__icon' />
                            </div>
                            <h4>Redux</h4>
                        </article>
                        <article className='experience__details'>
                            <div>
                                <BsPatchCheckFill className='experience__icon' />
                            </div>
                            <h4>Drupal</h4>
                        </article>
                        <article className='experience__details'>
                            <div>
                                <BsPatchCheckFill className='experience__icon' />
                            </div>
                            <h4>Bootstrap</h4>
                        </article><article className='experience__details'>
                            <div>
                                <BsPatchCheckFill className='experience__icon' />
                            </div>
                            <h4>Tailwind</h4>
                        </article>

                    </div>
                </div>
                <div className="experience__backend">
                    <h3>Backend Development</h3>
                    <div className="experience__content">
                        <article className='experience__details'>
                            <div>
                                <BsPatchCheckFill className='experience__icon' />
                            </div>
                            <h4>Node.js</h4>
                        </article>
                        <article className='experience__details'>
                            <div>
                                <BsPatchCheckFill className='experience__icon' />
                            </div>
                            <h4>Express.js</h4>
                        </article>
                        <article className='experience__details'>
                            <div>
                                <BsPatchCheckFill className='experience__icon' />
                            </div>
                            <h4>MySQL</h4>
                        </article>
                        <article className='experience__details'>
                            <div>
                                <BsPatchCheckFill className='experience__icon' />
                            </div>
                            <h4>MongoDB</h4>
                        </article>
                        <article className='experience__details'>
                            <div>
                                <BsPatchCheckFill className='experience__icon' />
                            </div>
                            <h4>PHP</h4>
                        </article>
                        <article className='experience__details'>
                            <div>
                                <BsPatchCheckFill className='experience__icon' />
                            </div>
                            <h4>RESTful APIs</h4>
                        </article><article className='experience__details'>
                            <div>
                                <BsPatchCheckFill className='experience__icon' />
                            </div>
                            <h4>Unit Testing</h4>
                        </article><article className='experience__details'>
                            <div>
                                <BsPatchCheckFill className='experience__icon' />
                            </div>
                            <h4>Git</h4>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experience