import React from 'react';
import '../assets/css/header.css'

const Header = () => {
    return (
        <div className={'header'} id={'header'}>
            <div className="box-header">
                <div className="header-left">
                    <nav>
                        <ul>
                            <li><a href="#header">Asosiy</a></li>
                            <li><a href="#tasiri">Tasiri</a></li>
                            <li><a href="#natija">Natija</a></li>
                            <li><a href="#batafsil">Batafsil</a></li>
                            <li><a href="#fikir">Fikrlar</a></li>
                        </ul>
                    </nav>
                    <div className="header-content-box">
                        <div className="header-text">
                            <h1><span style={{color:'#FB8645'}}>Gemoroy</span> shprislari Xittoy tibbiyoti</h1>
                            <p>Samaradorligi bilan hatto shifokorlarni ham xayratda qoldirgan yangi vosita  </p>
                        </div>
                        <div className="header-element">
                            <div className="h-element-left">
                                <h1>100%</h1>
                                <p>Hollarda yordam beradi tegishli klinik tadqiqotlar bilan tasdiqlangan</p>
                            </div>
                            <div className="h-element-right">
                                <h1>50%</h1>
                                <p>Chegirma bilan sotib olishga ulguring
                                    vaqt chegaralangan</p>
                            </div>
                        </div>
                        <a href="#footer">Buyurtma berish</a>
                        <img src={require('../assets/img/header/header-line.png')} className={'header-line'} alt=""/>
                    </div>
                </div>
                <div className="header-right">
                    <img src={require('../assets/img/header/header-img.png')} alt=""/>

                </div>
            </div>
            <nav className={'mobile-nav'}>
                <ul>
                    <li><a href="#header">Asosiy</a></li>
                    <li><a href="#tasiri">Tasiri</a></li>
                    <li><a href="#natija">Natija</a></li>
                    <li><a href="#batafsil">Batafsil</a></li>
                    <li><a href="#fikir">Fikrlar</a></li>
                </ul>
            </nav>
            <div className="box-header-mobile container">
                <div className="header-left">

                    <div className="header-content-box">

                        <div className="header-text">
                            <h1><span style={{color:'#FB8645'}}>Gemoroy</span> shprislari Xittoy tibbiyoti</h1>
                            <p>Samaradorligi bilan hatto shifokorlarni ham xayratda qoldirgan yangi vosita  </p>
                        </div>

                        <div className="header-img">
                            <img src={require('../assets/img/header/header-img-mobile.png')} alt=""/>
                        </div>
                        <div className="header-element">
                            <div className="h-element-left">
                                <h1>100%</h1>
                                <p>Hollarda yordam beradi tegishli klinik tadqiqotlar bilan tasdiqlangan</p>
                            </div>
                            <div className="h-element-right">
                                <h1>50%</h1>
                                <p>Chegirma bilan sotib olishga ulguring
                                    vaqt chegaralangan</p>
                            </div>
                        </div>

                        <a href="#footer">Buyurtma berish</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;