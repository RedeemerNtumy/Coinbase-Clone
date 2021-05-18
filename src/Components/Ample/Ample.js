import React from 'react';
import './Ample.css'
import Button from '../Button/Button'
import card1 from './img/card1.svg'
import card2 from './img/card2.svg'
import card3 from './img/card3.svg'
import card4 from './img/card4.svg'

const Ample = () => {
    return (
        <section className='section-container'>
            <div className='section-div'>
                <section className='sec-inner'>
                    <div className='div-left'>
                        <div className='left-inner'>
                            <h2>Earn up to $28 worth of crypto</h2>
                            <p>Discover how specific cryptocurrencies work — and get a bit of each crypto to try out for yourself.</p>
                            <div>
                                <Button placeholder='Start earning' button_color='blue' pad={12} add_pad={16} />
                            </div>
                        </div>
                    </div>
                    <div className='div-right'>
                        <div className='right-inner'>
                            <div className='inner-div-right'>
                                <div className='card-1'>
                                    <div className='card-div-1'>
                                        <img src={card1} />
                                        <h2>SKALE</h2>
                                        <h3>SKL</h3>
                                    </div>
                                    <div className='card-div-2'>
                                        <div className='earn-skl'>Earn $3 SKL</div>
                                    </div>
                                </div>

                                <div className='card-1'>
                                    <div className='card-div-1'>
                                        <img src={card2} />
                                        <h2 style={{ whiteSpace: 'normal', textAlign: 'left' }}>Ampleforth Governance Token</h2>
                                        <h3>FORTH</h3>
                                    </div>
                                    <div className='card-div-2'>
                                        <div className='earn-skl'>Earn $3 FORTH</div>
                                    </div>
                                </div>

                                <div className='card-1'>
                                    <div className='card-div-1'>
                                        <img src={card3} />
                                        <h2>The Grapth</h2>
                                        <h3>GRT</h3>
                                    </div>
                                    <div className='card-div-2'>
                                        <div className='earn-skl'>Earn $3 GRT</div>
                                    </div>
                                </div>

                                <div className='card-1'>
                                    <div className='card-div-1'>
                                        <img src={card4} />
                                        <h2>Stella Lumens</h2>
                                        <h3>XML</h3>
                                    </div>
                                    <div className='card-div-2'>
                                        <div className='earn-skl'>Earn $10 XML</div>
                                    </div>
                                </div>
                            </div>

                            <a href="/">View more &gt;</a>
                        </div>
                    </div>
                </section>
            </div>
        </section>
    );
}

export default Ample; <div></div>