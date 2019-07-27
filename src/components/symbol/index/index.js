import React from 'react';
import { connect } from 'react-redux';
import SimpleSymbolList from '../lists/simple';
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
        const allSymbols = this.props.symbols
        var randomSymbols = [];
        var i = 0;
        while(randomSymbols.length < num){
            const num = Math.floor(Math.random() * allSymbols.length)
            const possibleSymbol = allSymbols[num]
            const exists = allSymbols.filter(item => item.name === possibleSymbol.name).length > 0

            if(exists) { randomSymbols.push(possibleSymbol) }

        }
        return randomSymbols
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
