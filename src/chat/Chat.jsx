import React, { useState } from 'react';
import ListaMensagens from './ListaMensagens';
import Footer from './Footer';
import Header from './Header';
import './chat.css';

const mensagensIniciais = [
	{
		texto: 'Olá! Como posso ajudar?',
		atendente: true,
	},
	{
		texto: 'Olá! Gostaria de tirar uma dúvida referente ao curso de Engenharia de Software!',
		atendente: false,
	},
	{
		texto: 'Certo! Qual seria a dúvida?',
		atendente: true,
	},
];

function Chat() {
	const [mensagens, setMensagens] = useState(mensagensIniciais);

	const handleSubmit = (texto) => {
		const nMensagens = [...mensagens];

		nMensagens.push({ texto, atendente: false });

		setMensagens([...nMensagens]);
	}

	return (
		<div className='chat'>
			<Header title='Atendimento Online' />
			<ListaMensagens mensagens={mensagens} />
			<Footer onSubmit={handleSubmit} />
		</div>
	);
}

export default Chat;
