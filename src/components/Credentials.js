import React, { useState } from 'react';
import { Button, Container, Table } from 'semantic-ui-react';
import Authenticate from './Authenticate';

const Credentials = (props) => {
    const getUsername = () => {
        if (props.username) {
            return props.username;
        } else {
            return "Please edit and enter your account name and security code.";
        }
    };

    return (
        <Container>
            <Table definition>
                <Table.Body>
                    <Table.Row>
                        <Table.Cell width={2}>Username</Table.Cell>
                        <Table.Cell>{getUsername()}</Table.Cell>
                        <Table.Cell> <Authenticate username={props.username} setUsername={props.setUsername} poesessid={props.poesessid} setPoesessid={props.setPoesessid}/> </Table.Cell>
                    </Table.Row>
                    {/* <Table.Row>
                        <Table.Cell>IGN</Table.Cell>
                        <Table.Cell>{props.ign}</Table.Cell>
                        <Table.Cell />
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>Stash</Table.Cell>
                        <Table.Cell>0 Stash(es)</Table.Cell>
                        <Table.Cell><Button>Pick</Button></Table.Cell>
                    </Table.Row> */}
                </Table.Body>
            </Table>







        </Container>
    );
};

export default Credentials;