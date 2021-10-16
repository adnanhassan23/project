import React from 'react';
import TradingViewWidget, { Themes } from 'react-tradingview-widget';

const TradingViewChart = () => {
    return (
        <>
            <p className="text-center ls-3">CHARTS</p>
            <div className="TradingViewGraph h-100">
                <TradingViewWidget
                    symbol="BTCUSD"
                    theme={Themes.Light}
                    locale="en"
                    toolbar_bg="#f1f3f6"
                    enable_publishing={false}
                    withdateranges={true}
                    hide_side_toolbar={false}
                    allow_symbol_change={true}
                    details={true}
                    hotlist={true}
                    calendar={true}
                // watchlist=[SP:SPX]
                />
            </div>
        </>
    );
}

export default TradingViewChart;