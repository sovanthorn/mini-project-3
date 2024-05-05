import { useRouter } from 'next/router'
import React from 'react'

function ProductDetail({ params }:any) {
    const { id } = params;
    
  return (
    <div>ProductDetail{id}</div>
  )
}

export default ProductDetail