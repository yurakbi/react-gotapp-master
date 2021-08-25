import React, {Component} from 'react';
import gotService from '../../services/gotService';

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
    gotService = new gotService();

    state = {
        char: null
    }

    componentDidMount() {
        this.updateChar();
    }

    componentDidUpdate(prevProps) {
        if(this.props.charId !== prevProps.charId) {
            this.updateChar();
        }
    }

    updateChar() {
        const {charId} = this.props;
        if(!charId) {
            return;
        }

        this.gotService.getCharacters(charId)
            .then((char) => {
                this.setState({char})
            })
    }

    render() {

        if(!this.state.char) {
            return <Er> Please select a character</Er>
        }

        const {name, gender, born, died, culture} = this.state.char;

        return (
            <Char>
                <H>{name}</H>
                <UList>
                    <List>
                        <Term>{gender}</Term>
                        <span>male</span>
                    </List>
                    <List>
                        <Term>Born</Term>
                        <span>{born}</span>
                    </List>
                    <List>
                        <Term>Died</Term>
                        <span>{died}</span>
                    </List>
                    <List>
                        <Term>Culture</Term>
                        <span>{culture}</span>
                    </List>
                </UList>
            </Char>
        );
    }
}