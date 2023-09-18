import React from 'react';
import '../assets/css/header.css'

const Header = () => {
    return (
        <div className={'header'}>
            <div className="box-header">
                <div className="header-left">
                    {//nav qismini togirlash kere
                       // header responsive qilish kere// }
                    <nav>
                        <ul>
                            <li><a href="#">Asosiy</a></li>
                            <li><a href="#">Tasiri</a></li>
                            <li><a href="#">Natija</a></li>
                            <li><a href="#">Batafsil</a></li>
                            <li><a href="#">Fikrlar</a></li>
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
                        <a href="#">Buyurtma berish</a>
                        <img src={require('../assets/img/header/header-line.png')} className={'header-line'} alt=""/>
                    </div>
                </div>
                <div className="header-right">
                    <img src={require('../assets/img/header/header-img.png')} alt=""/>

                </div>
            </div>
        </div>
    );
};

export default Header;