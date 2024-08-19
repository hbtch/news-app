import { useState, useEffect } from 'react';
import NewsBanner from '../../NewsBanner/NewsBanner';
import styles from './styles.module.css';
import { getNews } from '../../../api/apiNews';
import NewsList from '../../NewsList/NewsList';
import Skeleton from '../../Skeleton/Skeleton'

const Main = () => {
    const [news, setNews] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    
    useEffect(() => {
        const fetchNews = async () => {
            try {
                const response = await getNews();
                setNews(response.news);
            } catch (error) {
                console.log(error);
            }
        };
        fetchNews();
    }, []);

    return (
        <main className={styles.main}>
            {news.length > 0 && !isLoading ? (
            <NewsBanner item={news[0]}/> 
            ): (
            <Skeleton  type={'banner'} count={1}/>
            )}

            {isLoading ? (
            <NewsList news={news} /> 
            ) : (
            <Skeleton  type={'item'} count={10}/>
            )}
        </main>
    );
};

export default Main;