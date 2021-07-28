import React from 'react'
import { ProductForm } from '../components/ProductForm'


export function AddCategory () {
    function onSave (formData) {
        const {name,description,photo,quantity} = formData
        console.log(name, description,photo,quantity)
        const prevProductsStr = localStorage.getItem('categories')
        const prevProducts = JSON.parse (prevProductsStr) ?? []
        const newProduct = {id:Date.now(),name, description,photo,quantity}
        prevProducts.push(newProduct)
        const productStr = JSON.stringify(prevProducts) 
        localStorage.setItem('categories', productStr)
        if (newProduct === {name, description}) {
            alert('Сорі, така категорія вже є')
            return
        }}
    return(
        <ProductForm 
        onSave={onSave}
        />
        )
    }