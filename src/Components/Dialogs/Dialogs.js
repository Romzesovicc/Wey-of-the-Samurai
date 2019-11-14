import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";





const Dialogs = (props) => {
    let state = props.dialogsPage;
    let dialogsElement = state.dialogs.map(dialog => <DialogItem key={dialog.id}
                                                                 name={dialog.name}
                                                                 id={dialog.id}/>
    );

    let messagesElements = state.messages.map((message) => <Message key={message.id}
                                                                    message={message.message}
                                                                    id={message.id}/>
    );
    let newMessageBody = state.newMessageBody;

    let onSendMessageClick = () => {
        props.sendMessage();
    };

    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.updateNewMessageBody(body);
    };

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElement}

            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div>
                        <textarea onChange={onNewMessageChange}
                                  placeholder='enter your message'
                                  value={newMessageBody}/>
                    </div>
                    <div>
                        <button onClick={onSendMessageClick}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    )
};
export default Dialogs