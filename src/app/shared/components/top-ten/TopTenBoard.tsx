import { TabPanel, TabView } from 'primereact';
import * as React from 'react';
import { Link } from 'react-router-dom';
import './top-ten-board.css';

interface TopTen {
    name: string;
    url: string;
}

interface IProps {
    latest: TopTen[];
    yearly: TopTen[];
    total: TopTen[];
}

const TopTenBoard: React.FC<IProps> = ({
    latest,
    yearly,
    total
}) => {

    return (
        <div className='infoBoard topTenBoard'>
            <div className='titleArea'>
                <h1>TOP 10</h1>
            </div>
            <TabView className='contentArea'>
                <TabPanel header="최신">
                    <ul className='links'>
                    {
                        latest.map((item, index) => (
                            <li key={`top-ten-latest-${index}`}>
                                {
                                    index < 3 && <span className='num'>{index+1}</span>
                                }
                                <Link to={item.url}>{item.name}</Link>
                            </li>
                        ))
                    }
                    </ul>
                </TabPanel>
                <TabPanel header="1년">
                    <ul className='links'>
                    {
                        yearly.map((item, index) => (
                            <li key={`top-ten-yearly-${index}`}>
                                {
                                    index < 3 && <span className='num'>{index+1}</span>
                                }
                                <Link to={item.url}>{item.name}</Link>
                            </li>
                        ))
                    }
                    </ul>
                </TabPanel>
                <TabPanel header="전체">
                    <ul className='links'>
                    {
                        total.map((item, index) => (
                            <li key={`top-ten-total-${index}`}>
                                {
                                    index < 3 && <span className='num'>{index+1}</span>
                                }
                                <Link to={item.url}>{item.name}</Link>
                            </li>
                        ))
                    }
                    </ul>
                </TabPanel>
            </TabView>
        </div>
    )
}
export default TopTenBoard;