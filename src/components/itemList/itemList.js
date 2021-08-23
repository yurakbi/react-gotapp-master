import React, {Component} from 'react';

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

    render() {
        return (
            <Char>
                <Ul>
                    <Li>
                        John Snow
                    </Li>
                    <Li>
                        Brandon Stark
                    </Li>
                    <Li>
                        Geremy
                    </Li>
                </Ul>
            </Char>
        );  
    }
}