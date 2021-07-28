import React, { useState } from "react";
import {Table,Button} from 'react-bootstrap'
import { NavLink } from "react-router-dom";



function ProductsList({categories,description,onRemove}) {
  return !categories,description?.length ? (
    <p>No categories</p>
  ) : (
    <>
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.2/css/all.css"></link>
      <Table striped bordered hover>
  <thead>
    <tr>
      <th>Назва</th>
      <th>Опис</th>
      <th>Кількість</th>
      <th>Фото</th>
      <th>Управління</th>
    </tr>
  </thead>
  <tbody>
  {categories.map((product) => (
     <tr>
        <td>{product.name}</td>
        <td>{product.description}</td>
        <td>{product.quantity}</td>
        <td className="img"><img src = {product.photo} alt = 'image'></img></td>
         <NavLink
           to ={`/editcategory/${product.id}`}>
         <Button type="button" variant="outline-secondary"><i className="fas fa-edit"></i></Button>
         </NavLink>
        <Button type="button" variant="outline-danger" onClick={() => onRemove(product.id)}><i className="fa fa-trash"></i></Button>{''}   
     </tr>
   ))}
</tbody>
</Table>
     </>
     
    );   
}

export default ProductsList;
