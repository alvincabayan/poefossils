import React, { useState, useEffect } from 'react';
import { Button, Modal, Input, Divider, Message } from 'semantic-ui-react';
import poe from '../apis/poe';


//POESESSID = 8764dd05934510b62482e163a88ce471

const Authenticate = ({ username, setUsername, poesessid, setPoesessid }) => {
    const [tempUsername, setTempUsername] = useState("");
    const [tempPoesessid, setTempPoesessid] = useState("");
    const [open, setOpen] = useState(false);
    const [messageHidden, setMessageHidden] = useState(true);
    

    const authenticateAccount = async () => {
        const response = await poe.get(`/character-window/get-characters?accountName=${tempUsername}`, {
            headers: {
                POESESSID: {poesessid}
            }
        })
        .then(function (response) {
            setUsername(tempUsername);
            setPoesessid(tempPoesessid);
            setOpen(false);
        })
        .catch(function (error){
            setMessageHidden(false);
        });
    }

    // useEffect( () => {
    //     if (username) {
    //         setTempUsername(username);
    //     }
    // }, []);

    const onModalOpen = () => {
        setOpen(true);
        if (username) {
            setTempUsername(username);
        } else {
            setTempUsername("");
            setTempPoesessid("");
            setMessageHidden(true);
        }
    }

    // const cancelAuthentication = () => {
    //     //() => setOpen(false)
    //     console.log(tempUsername);
    // }

    

    return (
        <Modal 
            centered={false}                
            open={open}
            onClose={() => setOpen(false)}
            onOpen={onModalOpen}
            size="tiny"
            trigger={<Button>Edit</Button>}
        >
            <Modal.Header>Edit Credentials</Modal.Header>
            <Modal.Content>
                <Input type="text" placeholder="Username" value={tempUsername} onChange={e => setTempUsername(e.target.value)}></Input>
                <Divider />
                <Input type="text" placeholder="POE Session ID" value={tempPoesessid} onChange={e => setTempPoesessid(e.target.value)}></Input>
                <Message negative hidden={messageHidden} >
                    <Message.Header>Sorry, error in retrieving account info.</Message.Header>
                    <p>Either account does not exists or server is down.</p>
                </Message>
            </Modal.Content>
            <Modal.Actions>
                <Button negative onClick={() => setOpen(false)}> Cancel </Button>
                <Button positive onClick={authenticateAccount}> Save </Button>
            </Modal.Actions>
        </Modal>
    );
};

export default Authenticate;