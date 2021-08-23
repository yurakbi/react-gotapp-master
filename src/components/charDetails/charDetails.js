import React, {Component} from 'react';

import styled from 'styled-components';

const Char = styled.div `
    background-color: #fff;
    padding: 25px 25px 15px 25px;
    margin-bottom: 40px;
    border-radius: 5px;
`
const H = styled.h4 `
    margin-bottom: 20px;
    text-align: center; 
`
const UList = styled.ul `
    cursor: pointer;
`
const List = styled.li`
    display: flex;
    justify-content: space-between;
    padding: 12px 20px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.125);

`
const Term = styled.span`
    font-weight: bold;
`
const Er = styled.div `
    color: #fff;
    text-align: center;
    font-size: 26px;
`
export default class CharDetails extends Component {

    render() {
        return (
            <Char>
                <H>John Snow</H>
                <UList>
                    <List>
                        <Term>Gender</Term>
                        <span>male</span>
                    </List>
                    <List>
                        <Term>Born</Term>
                        <span>1783</span>
                    </List>
                    <List>
                        <Term>Died</Term>
                        <span>1820</span>
                    </List>
                    <List>
                        <Term>Culture</Term>
                        <span>First</span>
                    </List>
                </UList>
            </Char>
        );
    }
}