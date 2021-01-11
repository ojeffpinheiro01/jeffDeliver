import './style.css';
import { useEffect, useState } from 'react';

import StepsHeader from "./StepsHeader";
import ProductsList from './ProductsList';
import { Product } from './types';
import { fetchProducts } from '../../api';
import OrderLocation from './OrderLocation';

function Orders() {
	const [products, setProducts] = useState<Product[]>([])
	useEffect(() => {
		window.scrollTo(0, 0);
		fetchProducts()
			.then((response) => setProducts(response.data))
			.catch((error) => console.log(error));
	}, []);


	return (
		<div className='orders-container'>
			<div>
                <StepsHeader/>
				<ProductsList products={products} />
				<OrderLocation />
            </div>
		</div>
	);
}

export default Orders;
