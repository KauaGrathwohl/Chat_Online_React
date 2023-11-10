import React, { useState, useRef, useEffect } from "react";
import "./chat.css";
import Input from "../components/input/Input";
import Button from "../components/button/Button";

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
]

function Chat() {
    const [mensagens, setMensagens] = useState(mensagensIniciais);
    const [mensagem, setMensagem] = useState("");
    const chatMensagemRef = useRef(null);

    const adicionarMensagem = (texto) => {
        const nMensagens = [...mensagens];

        nMensagens.push({ texto, atendente: false });

        setMensagens([...nMensagens]);
    };

    const enviarMensagem = () => {
        if (mensagem && mensagem.trim() !== "") {
            adicionarMensagem(mensagem);
            setMensagem("");
        } else {
            alert("Digite uma mensagem!");
        }
    };

    const handleKeyDown = (event) => {
        if (event.key === "Enter") {
            event.preventDefault();
            enviarMensagem();
        }
    };

    useEffect(() => {
        const chatMensagem = chatMensagemRef.current;
        if (chatMensagem) {
            chatMensagem.scrollTop = chatMensagem.scrollHeight;
        }
    }, [mensagens]);

    return (
        <div className="chat-box">

            <div className="chat-header">
                <h2>Atendimento Online</h2>
            </div>

            <div className="chat-mensagem" ref={chatMensagemRef}>
                {mensagens.map((msg, i) => {
                    const { atendente, usuario, texto } = msg;
                    const className = `mensagem-${atendente ? 'atendente' : 'aluno'}`;

                    return (
                        <div key={i}>
                            <div className={className}>
                                <strong>{atendente || usuario}</strong>
                            </div>
                            <div className={`msg ${className}`}>
                                {texto}
                            </div>
                        </div>
                    );
                })}
            </div>
            <div className="input-box">
                <form style={{ width: '100%' }}
                    onSubmit={(e) => {
                        e.preventDefault();
                        enviarMensagem();
                    }}>
                    <Input value={mensagem}
                        style={{ width: '75%' }}
                        placeholder="Digite sua mensagem..."
                        onChange={(e) => setMensagem(e.target.value)}
                        onKeyDown={(event) => handleKeyDown(event)}
                    />
                    <Button type='submit'
                        style={{ width: '23%' }}>
                        Enviar
                    </Button>
                </form>
            </div>

        </div>
    );
}

export default Chat;
