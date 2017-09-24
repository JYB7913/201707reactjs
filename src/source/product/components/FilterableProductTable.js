import React,{Component} from 'react';
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";
export default class FilterableProductTable extends Component{
    render(){
        return (
            <div style={{margin:'30px auto',width:'60%'}}>
              <SearchBar/>
              <ProductTable/>
            </div>
        )
    }
}