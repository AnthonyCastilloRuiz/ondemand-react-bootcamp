import React from 'react'
import featured_products from '../data/featured-products.json';
import "../estilos/Grid.css";


export const Grid = () => {

    const array = Object.entries(featured_products);
    const imagenes= array[7][1];

    const dataGrid = imagenes.map(item =>{
        return item.data
    })

  return (
    <>
        <div class="grid-container">
        {
            dataGrid.map(img =>{
                return(
                    <div class="grid-item">
                        <img className='imagenTamanio' key={img.sku} src={img.mainimage.url} alt=""/>
                        <div>
                            {img.name}                          
                        </div>
                        <div>
                            {img.category.slug}
                        </div>
                        <div>
                            {img.price} $
                        </div>
                    </div>
                )
            })
        }
        </div>
    </>
  )
}
