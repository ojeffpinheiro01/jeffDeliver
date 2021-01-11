import img from './pizzacalabresaacebolada.svg'
function ProductsCard() {
	return (
		<div className='order-card-container'>
			<h3 className="order-card-title" >Pizza calabresa</h3>
			<img className="order-card-image" src={img} />
			<h3 className="order-card-price">R$35,90</h3>
			<div className="class-card-description">
				<h3>Descrição</h3>
				<p>Uma deliciosa combinação de Linguiça Calabresa, rodelas de cebolas frescas, azeitonas pretas, mussarela, polpa de tomate, orégano e massa especial.</p>
			</div>
		</div>
	);
}

export default ProductsCard;