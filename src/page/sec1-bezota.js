import React from 'react';
import '../assets/css/sec1-bezota.css'

const Sec1Bezota = () => {
    return (
        <div className={'s1 container'}>
            <div className="s1-box">
                <div className="s1-left">
                    <div className="s1-text">
                        <h1 className={'s1-title'}>Agar sizni quyidagilar bezovta qilsa </h1>
                        <div className="s1-text-content">
                            <div className="s1-text-content-l"></div>
                            <div className="s1-text-content-r">
                                <p>Siz bir necha kun ichida yuqorida aytilganlarning barchasidan xalos bo’lishingiz
                                    mumkun, ushbu ajoyib malxamni sinab ko’rgan 10 minglab odamlar allaqachon
                                    qutilishgan!</p>
                            </div>

                        </div>
                        <div className="s1-box-element">
                            <div className="s1-element">
                               <h1>01</h1>
                                <p>Qattiq va ogriqli <br/> ich kelishi</p>
                            </div>
                            <div className="s1-element">
                               <h1>02</h1>
                                <p>Qichishish, yonish, begona jism xissi</p>
                            </div>
                            <div className="s1-element">
                               <h1>03</h1>
                                <p>Anunsni tashqi tomoni ishish</p>
                            </div>
                            <div className="s1-element">
                               <h1>04</h1>
                                <p>Qattiq va ogriqli ich kelishi</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="s1-right">
                    <div className="s1-right-box">
                        <img src={require('../assets/img/s1/1.png')} alt=""/>
                        <img src={require('../assets/img/s1/2.png')} alt=""/>
                        <img src={require('../assets/img/s1/3.png')} alt=""/>
                        <img src={require('../assets/img/s1/4.png')} alt=""/>
                    </div>
                    <div className="s1-right-cycle"></div>
                </div>
            </div>
            <div className="s1-box-mobile">
                <div className="s1-left">
                    <div className="s1-text">
                        <h1 className={'s1-title'}>Agar sizni quyidagilar bezovta qilsa </h1>
                        <div className="s1-text-content">
                            <div className="s1-text-content-l"></div>
                            <div className="s1-text-content-r">
                                <p>Siz bir necha kun ichida yuqorida aytilganlarning barchasidan xalos bo’lishingiz
                                    mumkun, ushbu ajoyib malxamni sinab ko’rgan 10 minglab odamlar allaqachon
                                    qutilishgan!</p>
                            </div>

                        </div>
                        <div className="s1-right">
                            <div className="s1-right-box">
                                <img src={require('../assets/img/s1/1.png')} alt=""/>
                                <img src={require('../assets/img/s1/2.png')} alt=""/>
                                <img src={require('../assets/img/s1/3.png')} alt=""/>
                                <img src={require('../assets/img/s1/4.png')} alt=""/>
                            </div>
                        </div>
                        <div className="s1-box-element">
                            <div className="s1-element">
                               <h1>01</h1>
                                <p>Qattiq va ogriqli <br/> ich kelishi</p>
                            </div>
                            <div className="s1-element">
                               <h1>02</h1>
                                <p>Qichishish, yonish, begona jism xissi</p>
                            </div>
                            <div className="s1-element">
                               <h1>03</h1>
                                <p>Anunsni tashqi tomoni ishish</p>
                            </div>
                            <div className="s1-element">
                               <h1>04</h1>
                                <p>Qattiq va ogriqli ich kelishi</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Sec1Bezota;