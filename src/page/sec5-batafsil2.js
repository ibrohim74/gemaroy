import React from 'react';
import '../assets/css/sec5-batafsil2.css'

const Sec5Batafsil2 = () => {
    return (
        <div className={'s5 container'} id={'fikir'}>
            <div className="s5-info">
                <div className="s5-left"><img src={require('../assets/img/s5/s5.png')} alt=""/></div>
                <div className="s5-right">
                    <h1>Nima uchun gemoroyni imkon qadar tezroq davolash kerak?</h1>
                    <p>
                        Yuqori darajasida rivojlangan bosqichlarda xemoroid konservativ davoga javob bermaydi, faqat
                        ishlab chiqarish aralashuvi yordamida. Biroq, bu operatsiyani to'liq to'liq qura olmaydi:
                        operatsiyadan keyin bemorni davolash, yomon odatlardan, ochchiq va sho'r ovkatlardan voz kechish
                        kerak. Va siz buni butun umringiz qilish kerak bo'ladi!
                    </p>
                    <p>
                        Ammo bu eng danshatli narsa emas, balki gemorroy qo'shib ichakda poliplarning shakllanishiga
                        olib kelishi, keyingichalik ular malign o'smalarga aylanadi. Boshqacha aytganda, gemorroy rektal
                        saratonga olib keladi (statistik ma'lumotlarga qarab, rivojlangan gemorroy bilan 80% dan ortik
                        holatda).
                    </p>
                </div>
            </div>

            <div className="s5-video">
                <h1>Foydali havolalar</h1>
                <div className="s5-video-box">
                    <div className="s5-video-item">
                        <iframe width="100%" height="100%"
                                src="https://www.youtube.com/embed/5_GmNixbX04?si=wTetNItiTbNpwzQE"
                                title="YouTube video player" frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen></iframe>
                    </div>
                    <div className="s5-video-item">
                        <iframe width="100%" height="100%"
                                src="https://www.youtube.com/embed/5_GmNixbX04?si=wTetNItiTbNpwzQE"
                                title="YouTube video player" frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sec5Batafsil2;