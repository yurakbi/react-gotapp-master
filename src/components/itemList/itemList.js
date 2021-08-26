import React, {Component} from 'react';
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

    state = {
        itemList: null,
    }
    
    componentDidMount() {
        const {getData} = this.props;

        getData()
            .then((itemList) => {
                this.setState ({
                    itemList
                })
            })
    }

    renderItems(arr) {
        return arr.map((item) => {
            const {id} = item;
            const label = this.props.renderItem(item);

            return (
                <Li
                    key={id}
                    onClick={() => this.props.onItemSelected(id)}>
                    {label}
                </Li>
            )
        })
    }

    render() {
        const {itemList} = this.state;

        

        if(!itemList) {
            return <Spinner/>
        }

        const items = this.renderItems(itemList);

        return (
            <Char>
                <Ul>
                 {items}
                </Ul>
            </Char>
        );  
    }
}