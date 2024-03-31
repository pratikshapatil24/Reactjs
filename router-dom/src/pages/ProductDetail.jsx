import { useParams } from 'react-router-dom';
import React from 'react'

function ProductDetail() {
    const params = useParams();
   
  return (
    <div>
         Inside Products deatils of {params.id}
    </div>
  )
}

export default ProductDetail