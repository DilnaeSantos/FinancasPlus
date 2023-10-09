//import React from 'react';

import Header from '../../components/Header/index';
import BannerBemVindo from '../../components/BannerBemVindo';
import BannerDesafioFinanceiro from '../../components/BannerDesafioFinanceiro'
import BannerComeceAgora from '../../components/BannerComeceAgora'
import BannerDepoimentos from '../../components/BannerDepoimentos'


const LandingPage = () => {
    return (
        <>
            <Header/>
            <BannerBemVindo/>
            <BannerDesafioFinanceiro/>
            <BannerComeceAgora/>
            <BannerDepoimentos/>
        </>
        
    );
};
export default LandingPage;