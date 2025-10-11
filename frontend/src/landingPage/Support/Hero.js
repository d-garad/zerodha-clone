import React from 'react';

function Hero() {
    return (
        <section className='container-fluid' id='supportHero'>

            <div className=' p-5' id='supportWrapper'>
                <h4>Support Portal</h4>
                <a href='/'>Track Tickets</a>
            </div>
            <div className='row p-3 m-5' >
                <div className='col-6 p-5'>
                    <h4>Search for an answer or browse help topics to create a ticket</h4>
                    <input type='' placeholder='e.g how do i activate F&O' /><br />
                    <a href='/'>Track Account Opening</a>&nbsp;&nbsp;
                    <a href='/'>Track Segment Activation</a>&nbsp;&nbsp;
                    <a href='/'>Intraday Margin</a>&nbsp;&nbsp;
                    <a href='/'>Kite user manual</a>&nbsp;&nbsp;
                </div>
                <div className='col-6 p-5 '>
                    <h1>Featured</h1>
                    <ol>
                        <li><a href='/'>Current takeovers and Delistings - January 2024</a></li>
                        <li><a href='/'>Latest Intraday Leverages - MIS and CO</a></li>
                    </ol>


                </div>

            </div>
        </section>
    );
}

export default Hero;