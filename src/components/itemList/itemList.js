import React, {useState, useEffect} from 'react';
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
function ItemList({getData, onItemSelected, renderItem}) {

    const [itemList, updateList] = useState([]);
  
    useEffect(() => {
        getData()
            .then((data) => {
                updateList(data)
            })
    }, [])
    


    function renderItems(arr) {
        return arr.map((item) => {
            const {id} = item;
            const label = renderItem(item);

            return (
                <Li
                    key={id}
                    onClick={() => onItemSelected(id)}>
                    {label}
                </Li>
            )
        })
    }        

    if(!itemList) {
        return <Spinner/>
    }

    const items = renderItems(itemList);

    return (
        <Char>
            <Ul>
             {items}
            </Ul>
        </Char>
    );  
}
export default ItemList;