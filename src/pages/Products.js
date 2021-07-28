import React, {  useState } from 'react'
import ProductsList from '../components/ProductsList'

export const Categories = () => {
  const [categoriesState, setCategories] = useState(JSON.parse(localStorage.getItem("categories")))

  function onRemove(id) {
    const newCategories = categoriesState.filter((category) => category.id !== id);
    setCategories(newCategories)
    localStorage.setItem('categories', JSON.stringify(newCategories))
   }
    return (
      <ProductsList 
        categories={categoriesState} 
        onRemove={onRemove}
      /> 
  )
}
