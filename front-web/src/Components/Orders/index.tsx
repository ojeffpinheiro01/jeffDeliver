import { useEffect, useState } from 'react';
import StepsHeader from "./StepsHeader";
import ProductsList from './ProductsList';
import { OrderLocationData, Product } from './types';
import { fetchProducts } from '../../api';
import OrderLocation from './OrderLocation';
import './style.css';
import OrderSummary from './OrderSummary';
import { checkIsSelected } from './utils';

function Orders() {
	const [products, setProducts] = useState<Product[]>([])
	const [selectedProducts, setSelectedProducts] = useState<Product[]>([]);
	const [orderLocation, setOrderLocation] = useState<OrderLocationData>();
	const totalPrice = selectedProducts.reduce((sum, item) => {
		return sum + item.price
	}, 0)
	useEffect(() => {
		window.scrollTo(0, 0);
		fetchProducts()
			.then((response) => setProducts(response.data))
			.catch((error) => console.log(error));
	}, []);
	
	const handleSelectProduct = (product: Product) => {
		const isAlreadySelected = checkIsSelected(selectedProducts, product);

		if (isAlreadySelected) {
			const selected = selectedProducts.filter((item) => item.id !== product.id);
			setSelectedProducts(selected);
		} else {
			setSelectedProducts((previous) => [...previous, product]);
		}
	};


	return (
		<>
			<div className='orders-container'>
					<StepsHeader />
					<ProductsList
						products={products}
						onSelectProduct={handleSelectProduct}
						selectedProducts={selectedProducts}
					/>
					<OrderLocation
						onChangeLocation={(location) => setOrderLocation(location)}
						/>
					<OrderSummary 
						amount={selectedProducts.length}
						totalPrice={totalPrice}  />
			</div>
		</>
	);
}

export default Orders;
