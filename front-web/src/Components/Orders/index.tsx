import { useEffect, useState } from 'react';
import { toast } from 'react-toastify'
import StepsHeader from "./StepsHeader";
import ProductsList from './ProductsList';
import { OrderLocationData, Product } from './types';
import { fetchProducts, saveOrder } from '../../api';
import OrderLocation from './OrderLocation';
import OrderSummary from './OrderSummary';
import { checkIsSelected } from './utils';
import './style.css';

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
			.catch(() => {
				toast.warning('Erro ao listar os produtos')
			});
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

	const handleSubmit = () => {
		const productsIds = selectedProducts.map(({ id }) => ({ id }));
		if (productsIds.length !== 0 && orderLocation !== undefined) {
			const payload = {
				...orderLocation!,
				products: productsIds,
			};

			saveOrder(payload)
				.then((response) => {
					window.scrollTo(0, 0);
					toast.error(`Pedido de Nº ${response.data.id} enviado com sucesso!`);
					setSelectedProducts([]);
					setOrderLocation(undefined);
				})
				.catch(() => {
					toast.error('Erro ao enviar pedido!');
				});
		} else if (productsIds.length === 0) {
			toast.warning('Selecione os produtos de seu pedido');
			window.scrollTo(0, 0);
		} else {
			toast.warning('Digite o endereço de entrega para confirmar seu pedido');
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
						totalPrice={totalPrice}
						onSubmit={handleSubmit}  />
			</div>
		</>
	);
}

export default Orders;
