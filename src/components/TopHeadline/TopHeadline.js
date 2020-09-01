import React, { useEffect, useState } from 'react';
import './TopHeadline.css'
import News from '../News/News';

const TopHeadline = () => {

    const [articles, setArticles] = useState([]);

    useEffect(() => {
        const url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=b9fe343d51084796bd36386f8b2befd8';
        fetch(url)
            .then(res => res.json())
            .then(data => setArticles(data.articles))
    }, []);
    return (
        <div>
            <h1>Top Headlines: {articles.length}</h1>
            {
                articles.map(article => <News article={article}></News>)
            }
        </div>
    );
};
export default TopHeadline;