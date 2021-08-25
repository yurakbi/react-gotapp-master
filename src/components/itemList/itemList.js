import React, {Component} from 'react';
import gotService from '../../services/gotService';
import Spinner from '../spinner';

import styled from 'styled-components';

const Char = styled.div `
    background-color: #fff;
    padding: 25px 25px 15px 25px;
    margin-bottom: 40px;
    border-radius: 5px;
`
const Ul = styled.ul `
    cursor: pointer;
`
const Li = styled.li`
    display: flex;
    justify-content: space-between;
    padding: 12px 20px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.125);
    
`
export default class ItemList extends Component {
    gotService = new gotService();

    state = {
        charList: null
    }
    
    componentDidMount() {
        this.gotService.getAllCharacters()
            .then((charList) => {
                this.setState ({
                    charList
                })
            })
    }

    renderItems(arr) {
        return arr.map((item,i) => {
            return (
                <Li
                key={i}
                onClick={() => this.props.onCharSelected(41 + i)}>
                {item.name}
                </Li>
            )
        })
    }

    render() {
        const {charList} = this.state;

        

        if(!charList) {
            return <Spinner/>
        }

        const items = this.renderItems(charList);

        return (
            <Char>
                <Ul>
                 {items}
                </Ul>
            </Char>
        );  
    }
}