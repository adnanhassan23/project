
import userlogo from '../../../../Assets/img/userlogo.png'
import news from '../../../../Assets/img/news.png'
import bit from '../../../../Assets/img/bit.png'
import signal1 from '../../../../Assets/img/signal1.png'
import signal2 from '../../../../Assets/img/signal2.png'
import icon from '../../../../Assets/img/icon.png'
import feed from '../../../../Assets/img/feed.png'
import dp1 from '../../../../Assets/img/dp1.png'
import dp2 from '../../../../Assets/img/dp2.png'
import sponsored from '../../../../Assets/img/sponsored.png'
const UserData = {
    Profile: {
            id: '1',
            firstName: 'username',
            lastName: 'lastname',
            following: 48,
            totalTraders: 892,
            totalPNL: '92.19%',
            todayPNL: '34.73%',
            img: userlogo
        },
    News: [

        {
            id: '2',
            description: 'Binance and FTX slash leverage limit from 100x to 20x amid crypto regulations heat',
            wesbite: "forkast.news •",
            time: 11,
            img: news
        },
        {
            id: '3',
            description: 'Nearly $900 million in crypto short positions liquidated as BTC breaks $39,000',
            wesbite: "forkast.news •",
            time: 11,
            img: bit
        },
        {
            id: '4',
            description: 'Binance and FTX slash leverage limit from 100x to 20x amid crypto regulations heat',
            wesbite: "forkast.news •",
            time: 11,
            img: news
        },
    ],
    Signal: [
        {
            id: '1',
            img: signal1
        },
        {
            id: '2',
            img: signal2
        },
        {
            id: '3',
            img: signal1
        },
        {
            id: '4',
            img: signal2
        },
    ],
    Feed: [
        {
            id: "1",
            img: icon,
            name:'btc_',
            followers:353,
            feed:feed,
            desc:'Binance and FTX slash leverage limit from 100x to 20x amid crypto regulations heat. Binance and FTX slash leverage limit from 100x to 20x amid crypto regulations heat',
            title:'Binance and FTX slash leverage limit from 100x to 20x amid crypto',
            detail:'Binance and FTX slash leverage limit from 100x to 20x amid crypto regulations heat. Binance and FTX slash leverage limit from 100x to 20x amid crypto regulations heat',
            link:'cointelegraph.com',
            time:'11:30 PM •',
            date:'July 20, 2021 •',
            type:'Buffer',
            retweets:16,
            quote:3,
            likes:70
        },
        {
            id: "2",
            img: icon,
            name:'btc_',
            followers:353,
            feed:feed,
            desc:'Binance and FTX slash leverage limit from 100x to 20x amid crypto regulations heat. Binance and FTX slash leverage limit from 100x to 20x amid crypto regulations heat',
            title:'Binance and FTX slash leverage limit from 100x to 20x amid crypto',
            detail:'Binance and FTX slash leverage limit from 100x to 20x amid crypto regulations heat. Binance and FTX slash leverage limit from 100x to 20x amid crypto regulations heat',
            link:'cointelegraph.com',
            time:'11:30 PM •',
            date:'July 20, 2021 •',
            type:'Buffer',
            retweets:16,
            quote:3,
            likes:70
        },
        {
            id: "3",
            img: icon,
            name:'btc_',
            followers:353,
            feed:feed,
            desc:'Binance and FTX slash leverage limit from 100x to 20x amid crypto regulations heat. Binance and FTX slash leverage limit from 100x to 20x amid crypto regulations heat',
            title:'Binance and FTX slash leverage limit from 100x to 20x amid crypto',
            detail:'Binance and FTX slash leverage limit from 100x to 20x amid crypto regulations heat. Binance and FTX slash leverage limit from 100x to 20x amid crypto regulations heat',
            link:'cointelegraph.com',
            time:'11:30 PM •',
            date:'July 20, 2021 •',
            type:'Buffer',
            retweets:16,
            quote:3,
            likes:70
        }
    ],
    Returns:[
        {
            id: '1',
            img: dp1,
            name:"cryptostyle",
            followers: 353,
            currency: "Bitcoin/USD",
            price: "$132,655.2"
        },
        {
            id: '2',
            img: dp2,
            name:"cryptoshi",
            followers: 653,
            currency: "Ether/USD",
            price: "$92,655.2"
        },
        {
            id:"3",
            img: dp1,
            name:"cryptostyle",
            followers: 353,
            currency: "Bitcoin/USD",
            price: "$132,655.2"
        },
        {
            id: '4',
            img: dp2,
            name:"cryptoshi111",
            followers: 653,
            currency: "Ethereum",
            price: "$92,655.2"
        },
    ],
    Sponsored: [
        {
            id: '1',
            img: sponsored,
        },
    ]
}

export default UserData;