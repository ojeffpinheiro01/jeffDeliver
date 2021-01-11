import './style.css'
import { ReactComponent as Linkedin } from './linkedin.svg'
import { ReactComponent as GitHub } from './github.svg'

function Footer() {
	return (
		<>
			<footer className='main-footer'>
				<div className='footer-content'>
					<p>
						App desenvolvido durante a 2ª edição do evento <b>Semana DevSuperior</b>
					</p>
					<div className='footer-icons'>
					<a
							href='https://www.linkedin.com/in/jeferson-pinheiro/'
							target='_blank'
							rel='noreferrer'>
							<Linkedin />
						</a>
						<a
							href='https://github.com/ojeffpinheiro01'
							target='_blank'
							rel='noreferrer'>
							<GitHub />
						</a>
					</div>
				</div>
			</footer>
		</>
	);
}
export default Footer;