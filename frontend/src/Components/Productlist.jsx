import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Productlist() {
    const [products, setProducts] = useState([]);

    const getProducts = async () => {
      try {
        const response = await axios.get("http://localhost:5000/product");
        setProducts(response.data);
      } catch (error) {
        console.log(error.response)
      }
        
    };

    const deleteProduct = async (productId) => {
        await axios.delete(`http://localhost:5000/product/${productId}`);
        getProducts();
    };

    useEffect(() => {
        getProducts();
    }, []);
    return (
        <div>
            <h1 className="title">Product</h1>
            <h2 className="subtitle">List Of Products</h2>
            <Link to={"/products/add"} className="button is-primary mb-2">
                Add New
            </Link>
            <table className="table is-striped is-fullwidth">
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Product Name</th>
                        <th>Price</th>
                        <th>Created</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product, index) => (
                        <tr key={product.uuid}>
                            <td>{index + 1}</td>
                            <td>{product.name}</td>
                            <td>{product.price}</td>
                            <td>{product.user.name}</td>
                            <td>
                                <Link
                                    className="button is-small is-info"
                                    to={`/products/edit/${product.uuid}`}>
                                    Edit
                                </Link>
                                <button
                                    onClick={() => deleteProduct(product.uuid)}
                                    className="is-danger button is-small">
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Productlist;
