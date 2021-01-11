import './style.css';

import StepsHeader from "./StepsHeader";
import ProductsList from './ProductsList';

function Orders() {
	return (
		<div className='orders-container'>
			<div>
                <StepsHeader/>
				<ProductsList />
            </div>
		</div>
	);
}

export default Orders;
