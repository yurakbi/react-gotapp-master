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

const Field = ({item, field, label}) => {
    return (
        <List>
            <Term>{label}</Term>
            <span>{item[field]}</span>
        </List>
    )

}

export {
    Field
}
export default class ItemDetails extends Component {
    state = {
        item: null
    }

    componentDidMount() {
        this.updateItem();
    }

    componentDidUpdate(prevProps) {
        if (this.props.itemId !== prevProps.itemId) {
            this.updateItem()
        }

    }

    updateItem(){
        const {itemId, getData} = this.props;
        if (!itemId) {
            return;
        }

        getData(itemId)
            .then((item) =>{
                this.setState({item})
            })
    }
    

    render() {
        if(!this.state.item) {
            return<Er> Please select item in the list </Er>
        }

        const {item} = this.state;
        const {name} = item;
        return (
            <Char>
                <H>{name}</H>
                <UList>
                   {
                   React.Children.map(this.props.children, (child) => {
                    return React.cloneElement(child, {item})
                   })
                   }
                </UList>
            </Char>
        );
    }
}