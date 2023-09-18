import React from 'react';
import Header from "./header";
import Sec1Bezota from "./sec1-bezota";
import Sec2Shipris from "./sec2-shipris";
import Sec3Afzalik from "./sec3-afzalik";
import Sec4Batafsil from "./sec4-batafsil";
import Sec5Batafsil2 from "./sec5-batafsil2";
import Sec6Fikir from "./sec6-fikir";
import Footer from "./footer";

const Index = () => {
    return (
        <div>
            <Header/>
            <Sec1Bezota/>
            <Sec2Shipris/>
            <Sec3Afzalik/>
            <Sec4Batafsil/>
            <Sec5Batafsil2/>
            <Sec6Fikir/>
            <Footer/>
        </div>
    );
};

export default Index;