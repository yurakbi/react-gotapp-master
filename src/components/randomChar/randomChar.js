import React, {Component} from 'react';


import styled from 'styled-components';

const Block = styled.div `
    background-color: #fff;
    padding: 25px 25px 15px 25px;
    margin-bottom: 40px;
    border-radius: 5px;
`
const H = styled.h4 `
    margin-bottom: 20px;
    text-align: center; 
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
const Term = styled.span`
    font-weight: bold;
`

export default class RandomChar extends Component {

    render() {

        return (
            <Block>
                <H>Random Character: John</H>
                <Ul>
                    <Li>
                        <Term>Gender </Term>
                        <span>male</span>
                    </Li>
                    <Li>
                        <Term>Born </Term>
                        <span>11.03.1039</span>
                    </Li>
                    <Li>
                        <Term>Died </Term>
                        <span>13.09.1089</span>
                    </Li>
                    <Li>
                        <Term>Culture </Term>
                        <span>Anarchy</span>
                    </Li>
                </Ul>
            </Block>
        );
    }
}
