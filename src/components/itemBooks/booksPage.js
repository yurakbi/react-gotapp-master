import React, {Component} from 'react';
import ItemDetails from '../itemDetails';
import ErrorMessage from '../errorMessage';
import gotService from '../../services/gotService';
import {withRouter} from 'react-router-dom';


export  class BooksPage extends Component {
    gotService = new gotService();

    state = {
        selectedBook: null,
        error: false
    }
    componentDidCatch(){
        this.setState({
            error: true
        })
    }

    onItemSelected = (id) => {
        this.setState({
            selectedBook: id
        })
    }
    
    render() {
        if (this.state.error) {
            return <ErrorMessage/>
        }
        return (
            <ItemDetails 
            onItemSelected={(itemId) => {
                this.props.history.push(itemId)
            }}
            getData={this.gotService.getAllBooks}
            renderItem={({name}) => name}/>
        )
        
    }
}
export default withRouter(BooksPage);