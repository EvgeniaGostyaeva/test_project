import React from 'react';
import { Navigation } from './../../components/navigation';
import {
    FooterContainer,
    FooterItem, FooterNav,
} from './styled';

export const Footer = () => {
    return (
        <FooterContainer>
            <FooterItem>
                <FooterNav>
                    <Navigation className={'navigation_footer'} arrValue={[
                        {title: 'Buyer’s Guides', onClick: ()=> alert('Buyer’s Guides is clicked !')},
                        {title: 'Calculators', onClick: ()=> alert('Calculators is clicked !')},
                        {title: 'All Brands', onClick: ()=> alert('All Brands is clicked !')},
                        {title: 'Catalog Updates', onClick: ()=> alert('Catalog Updates is clicked !')}
                    ]}/>
                </FooterNav>
                <FooterNav>
                    <Navigation className={'navigation_footer'} arrValue={[
                        {title: 'Express Delivery', onClick: ()=> alert('Express Delivery is clicked !')},
                        {title: 'Privacy Statement', onClick: ()=> alert('Privacy Statement is clicked !')},
                        {title: 'Terms of Use', onClick: ()=> alert('Terms of Use is clicked !')},
                        {title: 'Pricing Policy', onClick: ()=> alert('Pricing Policy is clicked !')},
                        {title: 'Returns and Refunds', onClick: ()=> alert('Returns and Refunds is clicked !')},
                        {title: 'Help and FAQ', onClick: ()=> alert('Help and FAQ is clicked !')},
                        {title: 'Return Points', onClick: ()=> alert('Return Points is clicked !')},
                        {title: 'Returns and Orders', onClick: ()=> alert('Returns and Orders is clicked !')}
                    ]}/>
                </FooterNav>
                <FooterNav>
                    <Navigation className={'navigation_footer'} arrValue={[
                        {title: 'Contact Us', onClick: ()=> alert('Contact Us is clicked !')},
                        {title: 'FAQ', onClick: ()=> alert('FAQ is clicked !')},
                        {title: 'Feedback', onClick: ()=> alert('Feedback is clicked !')},
                        {title: 'Live Chat', onClick: ()=> alert('Live Chat is clicked !')},
                        {title: 'My Account', onClick: ()=> alert('My Account is clicked !')}
                    ]}/>
                </FooterNav>
            </FooterItem>
            <FooterItem></FooterItem>
        </FooterContainer>
    );
};