import React from 'react';
import '../assets/css/sec3-afzalik.css'
const Sec3Afzalik = () => {
    return (
        <div className={'s3 container'} id={'natija'}>
            <div className="s3-title wow animate__animated animate__fadeInUp">
                <h1><span>Gemoroy</span> shprislarining qo’shimcha afzalliklari</h1>
            </div>
            <div className="s3-box">
                <div className="s3-left wow animate__animated animate__fadeInUp">
                    <img src={require('../assets/img/s3/s3.png')} alt=""/>
                </div>
                <div className="s3-right">
                    <div className="s3-row">
                        <div className="s3-item wow animate__animated animate__fadeInUp">
                            <p>Tashqi va ichki xemoroid, shuningdek anal ekzema va rektal yoriq bilan yordam beradi</p>
                        </div>
                        <div className="s3-item wow animate__animated animate__fadeInUp">
                            <p>Organizm uchun foydali tarkibga ega, mutlaqo xavfsiz vosita</p>
                        </div>
                    </div>
                    <div className="s3-row">
                        <div className="s3-item wow animate__animated animate__fadeInUp">
                            <p>Nafaqat noxush alomatlarni yo’q qiladi, balki davolaydi</p>
                        </div>
                        <div className="s3-item wow animate__animated animate__fadeInUp">
                            <p>Tez va uzoq muddatli tasirini taminlaydi</p>
                        </div>
                    </div>
                    <div className="s3-row">
                        <div className="s3-item wow animate__animated animate__fadeInUp">
                            <p>Barcha kerakli sertifikatlar bilan jixozlangan qo’plab proktologlar tomonidan tavsiya etilgan</p>
                        </div>
                        <div className="s3-item wow animate__animated animate__fadeInUp">
                            <p>Zamonaviy texnologiyalardan foydalangan xolda qadimgi Tibet retseptlari bo’yicha tayyorlanadi</p>
                        </div>
                    </div>
                </div>
            </div>
            <a href="#footer">Buyurtma berish</a>
        </div>
    );
};

export default Sec3Afzalik;