import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem(){
	return(
				<article className="teacher-item">
					<header>
						<img src="https://avatars0.githubusercontent.com/u/50972641?s=460&u=0eba06830a11ba03fcd11d95bc12d271e7100c61&v=4" />
						<div>
							<strong> Thiago Prado </strong>
							<span> Programação </span>
						</div>
					</header>
					<p>
						Entusiasta das melhores tecnologias de programação e hacking.
						<br/> <br/>
						Apaixonado por hackear coisas e por mudar a vida de pessoas através de experiências.
					</p>
					<footer>
						<p>
							Preço/hora
							<strong>R$ 10,00</strong>
						</p>
						<button type='button'>
							<img src={whatsappIcon} alt="WhatsApp"/>
							Entrar em contato
						</button>
					</footer>
				</article>
	);
}

export default TeacherItem;
