import Footer from "../../Footer";

type Props = {
	amount: number;
	totalPrice: number;
	onSubmit: () => void;
};

function OrderSummary() {
	return (
		<>
			<div className='order-summary-container'>
				<div className='order-summary-content'>
					<div>
						<span className='amount-selected-container'>
							<strong className='amount-selected'>2</strong>
							<span>PEDIDOS SELECIONADOS</span>
						</span>
						<span className='order-summary-total'>
							<strong className='amount-selected'>R$ 50,00</strong>
							<span>Valor Total</span>
						</span>
					</div>
					<button className='order-summary-make-order'>FINALIZAR PEDIDO</button>
				</div>
			</div>
		<Footer />
		</>
	);
}

export default OrderSummary;