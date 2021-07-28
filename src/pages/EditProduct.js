import React from 'react'
import { useLocation } from 'react-router-dom'
import { ProductForm } from '../components/ProductForm'

export function EditCategory() {

    const location = useLocation()
    const pathParts = location.pathname.split('/')
    const id = pathParts[pathParts.length - 1]
    const prevCategoriesStr = localStorage.getItem('categories')
    const prevCategories = JSON.parse(prevCategoriesStr) ?? []
    const prevNameStr = localStorage.getItem('categories')
    const prevDescriptionStr = localStorage.getItem('categories')
    const prevName = JSON.parse(prevNameStr)
    const prevDescription = JSON.parse(prevDescriptionStr)
    const products = JSON.parse(localStorage.getItem('categories'));
    const product = products.find(category => category.id === id)
    function onSave({name,description,photo,quantity}) {
        console.log(name, description,photo,quantity)
        const prevProductsStr = localStorage.getItem('categories')
        const prevProducts = JSON.parse(prevProductsStr) ?? []
        const newProduct = { id: Date.now(), name, description, photo, quantity }
        prevProducts.push(newProduct)
        const productStr = JSON.stringify(prevProducts)
        localStorage.setItem('categories', productStr)
        if (newProduct === { name, description }) {
            alert('Сорі, така категорія вже є')
            return
        }
    }
    return (
        <ProductForm
            onSave={onSave}
            product = {product}
        />
    )
}
export default EditCategory