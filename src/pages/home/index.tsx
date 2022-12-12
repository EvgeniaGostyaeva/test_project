import React from 'react';
import { Header } from './../../containers/header';
import { Footer } from './../../containers/footer';
import { Slider } from './../../components/slider';
import { Card } from './../../components/card';
import { Icon } from './../../components/icon';
import { Button } from './../../ui-kit/button';
import {
    HomePage
} from './styled';
import SliderImage from './../../assets/images/slider1.svg';

export const HomePageContainer = () => {
    return (
        <HomePage>
            <Header/>
            <Slider arrValue={[
                {
                    title: 'Fiberglass and specialty metals are in stock across the United States',
                    imagePath: SliderImage,
                    button: <Button onClick={()=> alert('Shop Now is clicked !')}>Shop Now</Button>,
                    isActive: true
                },
                {title: 'Fiberglass and specialty metals', imagePath: ''},
                {title: 'Fiberglass and specialty metals are in stock across', imagePath: ''}
            ]}/>
            <Card arrValue={[
                {title: 'Products Catalog', icon: <Icon name={'card1'} sizeX={'77'} sizeY={'74'}/>},
                {title: '24/7 Customer Support', icon: <Icon name={'card2'} sizeX={'86'} sizeY={'82'}/>},
                {title: 'Product Ideas', icon: <Icon name={'card3'} sizeX={'61'} sizeY={'80'}/>}
            ]} />
            <Footer/>
        </HomePage>
    );
};
