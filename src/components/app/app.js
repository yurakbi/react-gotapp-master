import React, { Component } from 'react';
import {Col, Row, Container} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import ErrorMessage from '../errorMessage';
import ToggleButton from 'reactstrap/lib/Button';
import CharacterPage from '../characterPage';

export default class App extends Component {
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
            <> 
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
                    <CharacterPage/>
                </Container>
            </>
        )

    }
    
};