import {useCurrentCustomer} from '@salesforce/retail-react-app/app/hooks/use-current-customer'
import React, {useState, useEffect} from 'react'
const CustomerName = () => {
    const {data: customer, isLoading, error} = useCurrentCustomer()
    const [showLoading, setShowLoading] = useState(true)
    useEffect(() => {
        const timer = setTimeout(() => {
            setShowLoading(false)
        }, 2000)
        return () => clearTimeout(timer)
    }, [])
    if (isLoading && showLoading) return <p>Loading customer...</p>
    if (error) return <p>Error loading customer data</p>
    return (
        <div>
            {customer?.firstName ? (
                <h2>
                    Welcome, {customer.firstName} {customer.lastName}!
                </h2>
            ) : (
                <h2>Welcome, Guest!</h2>
            )}
        </div>
    )
}
export default CustomerName
