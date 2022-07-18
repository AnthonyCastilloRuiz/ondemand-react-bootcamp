import React,{useEffect,useState} from 'react';
import '../estilos/ProductList.css'
import product_categories from '../data/product-categories.json';
import products from '../data/products.json';

export const ProductList = () => {
  let valor='';
  let [valor2,setValor2]=useState('furniture');

  // const handleVal = (e) =>{
  //     //console.log(e.target.innerText)
  //     valor=e.target.innerText.toUpperCase();
  //     setValor2(valor2='prueba');
  //     console.log(valor)
  //     console.log(valor2)
  // }

  const arrayCategories = Object.entries(product_categories);
  const categories= arrayCategories[7][1];
  const dataSideBar = categories.map(item =>{
      return item.data 
  })


  const arrayProducts = Object.entries(products);
  const productos= arrayProducts[7][1];


  console.log(valor2)

  return (
    <>
        <div class="sidebar">
          {dataSideBar.map(item => 
            <div value={item.name} onClick={ () => setValor2(item.name) }  key={item.sku} >{item.name}</div>
          )}
        </div>
        
          <div class="grid-container">
          {
              productos.map(img =>{
                if(img.data.category.slug.toUpperCase() == valor2.toUpperCase()){
                  return(
                    <div class="grid-item" key={img.data.sku} >
                        <img className='imagenTamanio' key={img.data.sku} src={img.data.mainimage.url} alt=""/>
                        <div>
                            {img.data.name}                          
                        </div>
                        <div>
                            {img.data.category.slug}
                        </div>
                        <div>
                            {img.data.price} $
                        </div>
                    </div>
                  )
                }else{
                  return(<></>)
                }           
              })
          }
        </div>
        
    </>
  )
}

