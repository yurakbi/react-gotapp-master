import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import ErrorMessage from '../errorMessage';
import ToggleButton from 'reactstrap/lib/Button';
import {CharacterPage, BooksItem, BooksPage, HousePage} from '../pages';
import gotService from '../../services/gotService';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import styled from 'styled-components';

const Apps  = styled.div `
    background: blue url('got.jpeg') center center no-repeat;
    background-size: cover;
    height: 1000px;
`


export default class App extends Component {
    gotService = new gotService();

    state = {
        showrandomChar: true,
        error: false
    };

    componentDidCatch(){
        console.log('error');
        this.setState({
            error: true
        })
    }

    toggleRandomChar = () => {
        this.setState((state) => {
            return {
                showrandomChar: !state.showrandomChar
            }
        })
    }

    

    render() {
        if (this.state.error) {
            return <ErrorMessage/>
        }
        const char = this.state.showrandomChar ? <RandomChar/> : null;

        if(this.state.error) {
            return <ErrorMessage/>
        }
        return (
            <Router>
                <Apps > 
                    <Container>
                        <Header />
                    </Container>
                    <Container>
                        <Row>
                            <Col lg={{size: 5, offset: 0}}>
                                {char}
                                <ToggleButton
                                    className="mb-2"
                                    variant="primary"
                                    onClick={this.toggleRandomChar}
                                    >
                                    Toggle random character
                                </ToggleButton>
                            </Col>
                        </Row>
                        <Route path='/' exact component={() => <h1>Welcome to GOT DB</h1>}/>
                        <Route path='/characters' component={CharacterPage}/>
                        <Route path='/houses' component={HousePage}/>
                        <Route path='/books' exact component={BooksPage}/>
                        <Route path='/books/:id' render={
                            ({match})=> {
                                const {id} = match.params;
                            return <BooksItem bookId={id}/>}
                        }/>
                    </Container>
                </Apps>
            </Router>
        )

    }
    
};