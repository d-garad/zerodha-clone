import React from 'react';

function Brokerage() {
    return (
        <div className='container'>
            <div className='row p-5 mt-4 text-center border-top'>
                <div className='col-8 p-4'>
                    <a style={{ textDecoration: "none" }} href='/'><h3>Brokerage Calculator</h3></a>
                    <ul style={{ textAlign: "left", lineHeight: "2.5" }} className='text-muted'>
                        <li>Call and Trade and RMS auto-squareoff:Additional charges of Rs. 50+GST per order</li>
                        <li>Digital contract note will be sent through email</li>
                        <li>Physical copies of contract notes, if required, shall be charged RS.20 per contract note. Courier charges apply</li>
                        <li>For NRI account (non-PIS), 0.5% or Rs.100 per executed order for equity (whichever is lower). </li>
                        <li>If account is debit balance, any order placed will be charged Rs.40 per execution order instead of Rs.20 per executed order</li>
                    </ul>
                </div>
                <div className='col-4 p-4'>
                    <a style={{ textDecoration: "none" }} href='/'><h3>List of Charges</h3> </a>
                </div>

            </div>
        </div>

    );
}

export default Brokerage;