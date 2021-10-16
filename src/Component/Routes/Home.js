import React from 'react';
import Button from '../atoms/Button'
import Footer from '../SubComponent/Footer/Footer';


const Home = () => {
    return (
        <>
            <div className="Background AntiInvert ">
                <div className="maxWidth invert">
                    <div className="container mt-5">
                        <h1 className="ExtraBold pt-5" >Copy Trading</h1>
                        <p>BY NEWSCRYPTO</p>
                        <p className="py-3 my-3 HalfScreen">Join +1 million traders and copy our top traders
                            with one tap — or become a trading star yourself!</p>
                        <div className="HalfScreen">
                            <div className="pt-3 full">
                                <Button value="CREATE A TRADERS ACCOUNT" Link="/Register" />
                            </div>
                            <div className="pt-3 full">
                                <Button value="CREATE A USERS ACCOUNT" Link="/Register" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Home;