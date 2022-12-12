import React from 'react';
import { Logo } from './../../components/logo';
import { Search } from './../../components/search';
import { Icon } from './../../components/icon';
import { Navigation } from './../../components/navigation';
import { Phone } from './../../components/phone';
import {
    HeaderContainer,
    HeaderItem,
} from './styled';

export const Header = () => {
    return (
        <HeaderContainer>
            <Navigation className={'navigation_feedback'} arrValue={[
                {title: 'Request a Sample', onClick: ()=> alert('Request a Sample is clicked !')},
                {title: 'Help', onClick: ()=> alert('Help is clicked !')},
                {title: 'Contact', onClick: ()=> alert('Contact is clicked !')}
            ]} />
            <HeaderItem>
                <Logo title={'Logo'} onClick={()=> alert('Logo is clicked !')} />
                <Search onChangeHandler={()=> ('onChangeHandler !')}/>
                <Navigation className={'navigation_info'} arrValue={[
                    {title: 'Lists', icon: <Icon name={'doc'} sizeX={'30'} sizeY={'30'}/>, onClick: ()=> alert('Lists is clicked !')},
                    {title: 'Account', icon: <Icon name={'user'} sizeX={'30'} sizeY={'30'}/>, onClick: ()=> alert('Account is clicked !')},
                    {title: 'Quick Order', icon: <Icon name={'order'} sizeX={'18'} sizeY={'27'}/>, onClick: ()=> alert('Quick Order is clicked !')},
                    {title: 'Cart', icon: <Icon name={'cart'} sizeX={'30'} sizeY={'30'}/>, onClick: ()=> alert('Cart is clicked !'), count: 125}
                ]}/>
            </HeaderItem>
            <HeaderItem>
                <Navigation className={'navigation'} arrValue={[
                    {title: 'Products', onClick: ()=> alert('Products is clicked !')},
                    {title: 'Resources', onClick: ()=> alert('Resources is clicked !')},
                    {title: 'Services', onClick: ()=> alert('Services is clicked !')},
                    {title: 'Locations', onClick: ()=> alert('Locations is clicked !')},
                    {title: 'Careers', onClick: ()=> alert('Careers is clicked !')},
                    {title: 'Support', onClick: ()=> alert('Support is clicked !')}
                ]}/>
                <Phone icon={<Icon name={'phone'} sizeX={'25'} sizeY={'25'}/>} title={'+(844) 434-872'} onClick={()=> alert('Phone is clicked !')}/>
            </HeaderItem>
        </HeaderContainer>
    );
};