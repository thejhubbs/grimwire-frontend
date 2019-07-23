import React from 'react';
import { connect } from 'react-redux';
import SimpleSymbolList from './simpleSymbolList';
import {Form} from 'react-bootstrap'

class Symbols extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            symbols: this.randomSymbols(props.randomNumber),
            search: "",
            randomNumber: props.randomNumber ? props.randomNumber : 12,
            showSearch: typeof props.showSearch !== 'undefined' ? props.showSearch : true
        }
    }

    search = (e) => {
        if(e.target.value !== "") {
        this.setState({
            symbols: this.props.symbols.filter( item => item.name.toLowerCase().indexOf(e.target.value.toLowerCase()) >= 0 ) 
        })
        } else {
            this.setState({ symbols: this.randomSymbols(this.state.randomNumber) })
        }
    }

    //returns a selected amount of random objects based on the input number
    randomSymbols = (num = 12) => {
        const symbols = [];
        for(let i=0; i < num; i++){
            const num = Math.floor(Math.random() * this.props.symbols.length)
            symbols.push(this.props.symbols[num])
        }
        return symbols
    }

    render() {
        return <div>
            {this.state.showSearch ? <Form.Control type='text' onChange={this.search} placeholder="Search" /> : "" }
            
            <SimpleSymbolList symbols={this.state.symbols} />
        </div>
    }


}
const mapStateToProps = state => {
    return {
        symbols: state.symbols
    }
}

export default connect(mapStateToProps)(Symbols);

export const defaultSymbolValues = {
    name: "",
    pantheons: [],
    kind: "",
    otherSpellings: [],
    description: "",
    images: [],
    number: 0
}