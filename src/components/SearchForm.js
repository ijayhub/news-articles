import React from 'react'


const SearchForm = ({searchText}) => {
     const [search, setSearch] = React.useState('');
    const handleSubmit = (e) => {
        e.preventDefault();

        searchText(search)

        
    };

    
    return (
        <div>
            <form action="#" onSubmit={handleSubmit}>
                <input type="text" placeholder="e.g politics" className="py-3 px-2 rounded-l-lg input form" onChange={(e)=>setSearch(e.target.value) }/>
                <button type="submit" className="bg-green-400 py-3 px-2 rounded-r-lg text-white input form">search</button>
            </form>
        
        </div>
    )
}

export default SearchForm
