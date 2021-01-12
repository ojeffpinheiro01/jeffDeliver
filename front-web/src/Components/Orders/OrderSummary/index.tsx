import Footer from "../../Footer";
import { formatPrice } from "../utils";

type Props = {
	amount: number;
	totalPrice: number;
	onSubmit: () => void;
};

function OrderSummary({ amount, totalPrice, onSubmit }: Props) {
	return (
		<>
			<div className='order-summary-container'>
				<div className='order-summary-content'>
					<div>
						<span className='amount-selected-container'>
							<strong className='amount-selected'>{amount}</strong>
							<span>PEDIDOS SELECIONADOS</span>
						</span>
						<span className='order-summary-total'>
							<strong className='amount-selected'>{formatPrice(totalPrice)}</strong>
							<span>Valor Total</span>
						</span>
					</div>
					<button 
						className='order-summary-make-order'
						onClick={onSubmit}
						>FINALIZAR PEDIDO</button>
				</div>
			</div>
		<Footer />
		</>
	);
}

export default OrderSummary;