import React from 'react';
import { Card, CardBody, CardHeader, CardTitle } from 'reactstrap';
import { AccountBalanceWalletOutlined as AccountBalanceWalletOutlinedIcon, AccountBalanceOutlined as AccountBalanceOutlinedIcon } from '@mui/icons-material';
import './BalanceCards.css';
import CountUpComponent from '../../assets/CountUp';

const BalanceCards = () => {
    return (
        <div className="grid-container">
    <div className="custom-card">
        <Card className="w-3/4 mx-auto custom-bg">
            <CardHeader>
                <CardTitle className='card-title color-b'><CountUpComponent end={500321} duration={5} /></CardTitle>
                <div className="card-info">
                    <p className="font-semibold color-p">Cash Balance</p>
                    <AccountBalanceWalletOutlinedIcon style={{fill:"#fefefe"}} />
                </div>
            </CardHeader>
        </Card>
    </div>
    <div className="custom-card">
        <Card className="w-3/4 mx-auto">
            <CardHeader>
                <CardTitle><CountUpComponent end={250257} duration={5} /></CardTitle>
                <div className="card-info">
                    <p className="font-semibold text-lg">Bank Balance</p>
                    <AccountBalanceOutlinedIcon />
                </div>
            </CardHeader>
        </Card>
    </div>
</div>


    );
}

export default BalanceCards;
