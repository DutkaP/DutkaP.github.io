import React, {useState} from 'react';
import {Form, Button}  from 'react-bootstrap'; 
import {urlRegex} from '../utils'
export function ProductForm ({category,onSave}) {
     
     const [name, setName] = useState(category?.name ?? '')
     const [description, setDescription] = useState(category?.description ?? '')
     const [photo, setPhoto] = useState(category?.photo ?? '')
     const [quantity, setQuantity] = useState(category?.quantity ?? 0)
     function handleSave () {
        console.log(name, description)
        if (name.trim() === '' || description.trim() === '') {
            alert('введіть щось, please')
            return
        }
        if(!urlRegex.test(photo)){
            return alert('не правильне посилання')
        }
        if(quantity < 0 ){
            return alert('введіть число вище 0')
        }
        onSave({name,description,photo,quantity})
     }
     
    return(
    <>
         <Form.Control type='text' onChange={(event)=>{setName(event.target.value)}} placeholder='Назва продукту'></Form.Control>
         <Form.Control type='text' onChange={(event)=>{setDescription(event.target.value)}} placeholder='Опис продукту'></Form.Control>
         <Form.Control type='text' onChange={(event)=>{setPhoto(event.target.value)}} placeholder='Посилання на фото'></Form.Control>
         <Form.Control type='number' onChange={(event)=>{setQuantity(event.target.value)}} placeholder='Кількість одиниць'></Form.Control>
         
         <Button onClick={()=>handleSave()}>Додати продукт</Button>

     </>
     )
 }
 