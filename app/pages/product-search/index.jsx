import React, {useState} from 'react'
import {useProductSearch} from '@salesforce/commerce-sdk-react'

import Search from '@salesforce/retail-react-app/app/components/search/modifiedsearch'

import {HTTPNotFound, HTTPError} from '@salesforce/pwa-kit-react-sdk/ssr/universal/errors'



const ProductSearch = () => {


const [searchQuery, setSearchQuery] = useState('')
const [error, setError] = useState(null)
     const {
        isLoading,
        isFetched,
        isRefetching,
        data: productSearchResult,
        error: fetchError
     } = useProductSearch(
     {
            parameters: {
                q: searchQuery
            }
        },
        {
            keepPreviousData: true
}
     )
return (
        <div>
            <Search onSearch={(searchText) => {
                setSearchQuery(searchText)
            }} />
            <br />
            <br />
            {isLoading ? 'Loading...' : productSearchResult?.hits?.map(
                product => {
                    console.log(product)
                    return (
                    <div key={product.id}>
                        <div><strong>Product Name:</strong>{product.productName}</div>
                        <div><strong>Product ID:</strong>{product.productId}</div>
                        <br />
                        <br />
                        <hr />
                    </div>
                )}
            )}
        </div>
    )
}
export default ProductSearch