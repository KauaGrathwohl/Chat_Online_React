import React, { useState, useRef, useEffect } from "react";
import "./chat.css";

function Chat() {
    const [mensagens, setMensagens] = useState([
        (
            <div key={0}>
                <div className="msg-atendente">
                    <strong>Atendente:</strong>
                </div>
                <div className="msg mensagem-atendente">Olá! Como posso ajudar?</div>
            </div>
        ),
        (
            <div key={1}>
                <div className="msg-aluno">
                    <strong>Você:</strong>
                </div>
                <div className="msg mensagem-aluno">Olá! Gostaria de tirar uma dúvida referente ao curso de Engenharia de Software!</div>
            </div>
        ),
        (
            <div key={2}>
                <div className="msg-atendente">
                    <strong>Atendente:</strong>
                </div>
                <div className="msg mensagem-atendente">Certo! Qual seria a dúvida?</div>
            </div>
        ),
    ]);

    const [mensagem, setMensagem] = useState("");
    const chatMensagemRef = useRef(null);

    const adicionarMensagem = (nome, texto, classe) => {
        const novaMensagem = (
            <div key={mensagens.length}>
                <div className={`msg-${classe}`}>
                    <strong>{nome} diz:</strong>
                </div>
                <div className={`msg mensagem-${classe}`}>{texto}</div>
            </div>
        );

        setMensagens((mensagensAntigas) => [...mensagensAntigas, novaMensagem]);
    };

    const enviarMensagem = () => {
        if (mensagem.trim() !== "") {
            adicionarMensagem("Você", mensagem, "aluno");
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
                {mensagens}
            </div>

            <div className="input-box">
                <form onSubmit={(e) => {
                    e.preventDefault();
                    enviarMensagem();
                }}>
                    <input
                        id="inputMensagem"
                        value={mensagem}
                        onChange={(e) => setMensagem(e.target.value)}
                        onKeyDown={(event) => handleKeyDown(event)}
                        type="text"
                        placeholder="Digite sua mensagem..."
                    />
                    <button id="buttonEnviar" type="submit">Enviar</button>
                </form>
            </div>
        </div>
    );
}

export default Chat;
