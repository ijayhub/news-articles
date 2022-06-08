import React from 'react'

const Article = ({articles}) => {
    return (
			<div>
				{articles.map((article) => (
					<div
						className='pt-16 bg-white mb-8 p-4 leading-8 rounded-lg shadow-md'
						key={article._id}>
						<h1 className=' head text-3xl font-bold mb-4'>
							{article.headline.main}
						</h1>
						<h4>{article.abstract}</h4>

						<p>{article.lead_paragraph}</p>
						<ul className='my-4'>
							<div className='original font-bold'>
								<li>{article.byline.original}</li>
							</div>

							<li>
								<span className='font-bold'>Section:</span>{' '}
								{article.section_name}
							</li>
							<li>
								<span className='font-bold'>News Desk:</span>{' '}
								{article.news_desk}
							</li>
							<li>
								<span className='font-bold'>WordCount:</span>{' '}
								{article.word_count}
							</li>
						</ul>
						<a
							href={article.web_url}
							target='_blank'
							rel='noreferrer'
							className='underline text-blue-600'>
							Web Resource
						</a>
					</div>
				))}
			</div>
		);
}

export default Article
