import React, { useEffect, useState } from 'react';
import useAxios from '../../hooks/useAxios';
import useAuth from '../../hooks/useAuth';
import ProductCard from '../../components/ProductCard/ProductCard';

const LatestProducts = () => {
    const [products, setProducts] = useState([]);
    const axios = useAxios();
    const { user } = useAuth()

    useEffect(() => {
        axios
            .get(`/latestProducts`)
            .then((res) => setProducts(res.data))
            .catch((err) => console.error(err));
    }, [axios, user]);

    return (
        <div className="py-12 px-4 md:px-10 bg-base-100 min-h-screen">
            {/* Title Section */}
            <div className="text-center mb-10">
                <h2 className="text-3xl font-bold text-primary mb-2">
                    All Export Products
                </h2>
                <p className="text-base-content/70 max-w-xl mx-auto">
                    Explore all available export products from various countries. Click
                    “See Details” to learn more about each product.
                </p>
            </div>

            {/* Products Grid */}
            <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {products.map((product) => (
                    <ProductCard key={product._id} product={product}></ProductCard>
                ))}
            </div>
        </div>
    )
};

export default LatestProducts;