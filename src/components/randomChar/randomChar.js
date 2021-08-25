import React, {Component} from 'react';
import gotService from '../../services/gotService';
import Spinner from '../spinner';
import ErrorMessage from '../errorMessage';

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

    gotService = new gotService();
    state = {
        char: {},
        loading: true,
        error: false
    }

    componentDidMount() {
        this.updateChar();
        // this.timerId = setInterval(this.updateChar, 1500);
    }

    componentWillUnmount() {
        clearInterval(this.timerId);
    }

    onCharLoaded = (char) => {
        this.setState({
            char,
            loading: false,
            
        })
    }

    onError = (err) => {
        this.setState({
            error: true,
            loading: false
        })
    }

    updateChar() {
        const id = Math.floor(Math.random()*140 + 25); // 25-140
        this.gotService
            .getCharacters(id)
            .then(this.onCharLoaded)
            .catch(this.onError);
        
            
    }

    render() {
        const {char, loading, error} = this.state;

        const errorMessage = error ? <ErrorMessage/> : null;
        const spinner = loading ? <Spinner/> : null;
        const content = (!loading || error) ? <View char={char}/> : null;

        return (
            <Block>
                {errorMessage}
                {spinner}
                {content}
            </Block>
        );
    }
}

const View = ({char}) => {
    const {name, gender, born, died, culture, nodata} = char;
    if(char == null) {
        char =  nodata;
    }
    return (
        <>
            <H>Random Character: {name}</H>
            <Ul>
                <Li>
                    <Term>Gender </Term>
                    <span>{gender}</span>
                </Li>
                <Li>
                    <Term>Born </Term>
                    <span>{born}</span>
                </Li>
                <Li>
                    <Term>Died </Term>
                    <span>{died}</span>
                </Li>
                <Li>
                    <Term>Culture </Term>
                    <span>{culture}</span>
                </Li>
            </Ul>
        </>
    )
}
