import React from 'react';
import '../assets/css/sec4-batafsil.css'

const Sec4Batafsil = () => {
    return (
        <div className={'s4 container'} id={'batafsil'}>
            <div className="s4-title wow animate__animated animate__fadeInUp">
                <h1><span>Gemoroy</span> shprislarining batafsil tarkibi</h1>
                <p>Malham tarkibiga kiritilgan komponentlar sinergik qutqaruvi, ya'ni bir-birining geografiyasini
                    kuchaytiradi va tashki va ichki morroyni davolashda preparatning yuqori samaradorligini
                    ta'minlaydi.</p>
            </div>
            <div className="s4-box">
                <div className="s4-row">
                    <div className="s4-item wow animate__animated animate__fadeInUp">
                        <div className="s4-cycle">
                            <div className="cycle-dot"></div>
                        </div>
                        <div className="s4-text">
                            <h1>Gemoroy shprislari</h1>
                            <p>Yallignalishga qarchi tasirga ega, to’g’ri ichakdagi qonning turgunligini bartaraf
                                etishga yordamberadi, venoz qonning oqimini yaxshilaydi</p>
                        </div>
                    </div>
                    <div className="s4-item wow animate__animated animate__fadeInUp">
                        <div className="s4-cycle">
                            <div className="cycle-dot"></div>
                        </div>
                        <div className="s4-text">
                            <h1>Sun’iy bezlar</h1>
                            <p>Yallig'lanishga qarshi va antibakterial ta'sirga ega, samarali bexushlikka yordam beradi
                                va spazmlarni ishlab chiqaradi</p>
                        </div>
                    </div>
                    <div className="s4-item wow animate__animated animate__fadeInUp">
                        <div className="s4-cycle">
                            <div className="cycle-dot"></div>
                        </div>
                        <div className="s4-text">
                            <h1>Marvarid</h1>
                            <p>Qon ketishini to’xtatadi, rektumdan qon ketishini kamaytirado va to’xtatadi</p>
                        </div>
                    </div>
                </div>
                <div className="s4-row">
                    <div className="s4-item wow animate__animated animate__fadeInUp">
                        <div className="s4-cycle">
                            <div className="cycle-dot"></div>
                        </div>
                        <div className="s4-text">
                            <h1>Qalamin</h1>
                            <p>Rektumdagi yaralarning tez bitishiga yordam beradi, shuningdek, ularga mikroblar va
                                bakteriyalarning kirib kelishiga to’sqinlik qiluvchi ximoya plyonka xosil qiladi</p>
                        </div>
                    </div>
                    <div className="s4-item wow animate__animated animate__fadeInUp">
                        <div className="s4-cycle">
                            <div className="cycle-dot"></div>
                        </div>
                        <div className="s4-text">
                            <h1>Boraks</h1>
                            <p>Kuchli mikroblarga qarshi va antibakterial tasiriga ega, xavfli virusli asoratlarni
                                rivojlanishiga to’sqinlik qiladi</p>
                        </div>
                    </div>
                    <div className="s4-item wow animate__animated animate__fadeInUp">
                        <div className="s4-cycle">
                            <div className="cycle-dot"></div>
                        </div>
                        <div className="s4-text">
                            <h1>Borneol</h1>
                            <p>Rektumning shikastlangan to’qimalarini tiklashga yordam beradi, yallig’lanish jarayonini
                                yengillashtiradi, safilokollar va streptokklar bilan kurashadi</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sec4Batafsil;