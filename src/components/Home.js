import React, { useEffect, useState } from 'react'
import Article from './Article'
import SearchForm from './SearchForm';

const Home = () => {
    const [articles, setArticles] = useState([])
    // const [search, setSearch] = useState('');
    const [term, setTerm]=useState('everything')
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        setTimeout(() => {
            fetch(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${term}&api-key=${process.env.REACT_APP_ARTICLES_API_KEY}`)
                .then((res) => {
                    if (!res.ok) {
                        throw Error("can't connect");
                    }
                    return res.json();
                })
                .then((data) => {
                    setArticles(data.response.docs);
                    setError(null);
                    setIsLoading(false);
                })
                .catch((err) => {
                    setError(err.message);
                    setIsLoading(false);
                });

            
        }, 300);
        
    },[term])
    return (
			<>
				<div className='showcase mb-8'>
					<div className='overlay'>
						<h1 className='title text-6xl text-white font-bold mb-4'>
							{' '}
							News on {term}
						</h1>
						<SearchForm searchText={(search)=>setTerm(search)} />
					</div>
            </div>
            <div className='container mx-auto'>
					{error && <div className="text-center text-3xl mt-20 font-bold">{error}</div>}
					{isLoading && <div className='text-center text-3xl mt-20 font-bold'>Loading...</div>}
					{articles && <Article articles={articles} />}
				</div>
			</>
		);
}

export default Home
