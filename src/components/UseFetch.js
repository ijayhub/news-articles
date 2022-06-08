
import { useEffect, useState } from 'react'

const UseFetch = (url) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
		

		useEffect(() => {
			setTimeout(() => {
				fetch(url)
					.then(res => {
						
						return res.json();
					})
					.then(data => {
                        setData(data.response.docs);
                        setIsLoading(false);
					})
					
			}, 300);
		}, [url]);
  return {data,isLoading}
}

export default UseFetch
