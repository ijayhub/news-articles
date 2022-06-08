import React from 'react';
import Article from './Article'
import SearchForm from './SearchForm';
import UseFetch from './UseFetch';


const Home = () => {
    const [term, setTerm] = React.useState('everything');
    const { data:articles, isLoading } = UseFetch(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${term}&api-key=${process.env.REACT_APP_ARTICLES_API_KEY}`);
    
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
					
					{isLoading && <div className='text-center text-3xl mt-20 font-bold'>Loading...</div>}
					{articles && <Article articles={articles} />}
				</div>
			</>
		);
}

export default Home
