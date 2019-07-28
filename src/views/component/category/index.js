import React from 'react';

import Categorys from '../../../components/category/categoriesComponent'
import FormInsert from '../../../components/forms/insert'
import {defaultCategory} from '../../../db/defaultObjects'

class Category extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
    }
  }

  render() {
  return (
    <div className="">
      <h1>Categories</h1>
      <h4>List of All Categories & Items</h4>
      <Categorys />
      <FormInsert item={defaultCategory} formClass={"categories"} />

    </div>
  );

  }
}

export default Category;
