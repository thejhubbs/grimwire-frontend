import React from 'react';

import Categorys from '../components/category/categoriesComponent'
import CategoryForm from '../components/category/categoryForm';
import Categories from '../components/category/categoriesComponent'

class Category extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      showCategoryForm: false
    }
  }

  
  toggleCategoryForm = () => {
    this.setState({showCategoryForm: !this.state.showCategoryForm})
  } 

  render() {
  return (
    <div className="">
      <h1>Categories</h1>
      <h4>List of All Categories & Items</h4>
      <Categorys /> 
      <button onClick={this.toggleCategoryForm}>New Category/Collection/Category</button>
          <div className="theForm">
          { this.state.showCategoryForm ? <CategoryForm category={{
        name: "",
        description: "",
        kinds: [],
        overviewText: "",
        sourcesText: "",
    }}/> : "" }
        </div>

      
    </div>
  );

  }
}

export default Category;
