
import { useEffect, useState } from 'react'

const UseFetch = (url) => {
        const [data, setData] = useState([]);
	
		const [isLoading, setIsLoading] = useState(true);
		const [error, setError] = useState(null);

		useEffect(() => {
			setTimeout(() => {
				fetch(url)
					.then((res) => {
						// if (!res.ok) {
						// 	throw Error("can't connect");
						// }
						return res.json();
					})
					.then((data) => {
						setData(data.response.docs);
						setError(null);
						setIsLoading(false);
					})
					.catch((err) => {
						setError(err.message);
						setIsLoading(false);
					});
			}, 300);
		}, [url]);
  return {data,isLoading,error}
}

export default UseFetch
