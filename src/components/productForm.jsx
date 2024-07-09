import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct, deleteProduct } from '../productTaskSlice';

const Product = () => {
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [filterProducts, setFilterProducts] = useState([]);
  const [productNameError, setProductNameError] = useState(false);
  const [productPriceError, setProductPriceError] = useState(false);

  const dispatch = useDispatch();
  const products = useSelector((state) => state.productTask.products);

  useEffect(() => {
    window.location.href = '/'; 
  }, []);

  const handleAddProduct = () => {
    if (productName.length === 0 || productPrice.length === 0) {
      if (productName.length === 0) {
        setProductNameError(true);
      } else {
        setProductNameError(false);
      }
      if (productPrice.length === 0) {
        setProductPriceError(true);
      } else {
        setProductPriceError(false);
      }
      return;
    }

    dispatch(
      addProduct({ id: Date.now(), name: productName, price: productPrice })
    );
    setProductName('');
    setProductPrice('');
    setProductNameError(false);
    setProductPriceError(false);
  };

  const handleDeleteProduct = (productId) => {
    dispatch(deleteProduct(productId));
  };

  const productsToDisplay = filterProducts.length ? filterProducts : products;

  let sno = 0;
  const productRows = productsToDisplay.map((product) => {
    sno++;
    return (
      <tr key={product.id} className="product-row">
        <td>{sno}</td>
        <td>{product.name}</td>
        <td>${product.price}</td>
        <td>
          <button
            className="btn-delete"
            onClick={() => handleDeleteProduct(product.id)}
          >
            x
          </button>
        </td>
      </tr>
    );
  });

  return (
    <div className="todo-container">
      <center>
        <h1>Product Form</h1>
      </center>

      <div className="input-container">
        <input
          type="text"
          className="input-text"
          placeholder="Product Name"
          value={productName}
          onChange={(e) => {
            setProductName(e.target.value);
            setProductNameError(false);
          }}
        />

        {productNameError && (
          <p className="input-message" style={{ color: 'red' }}>
            Please add product name.
          </p>
        )}

        <br />
        <input
          type="text"
          className="input-text"
          placeholder="Product Price"
          value={productPrice}
          onChange={(e) => {
            setProductPrice(e.target.value);
            setProductPriceError(false);
          }}
        />

        {productPriceError && (
          <p className="input-message" style={{ color: 'red' }}>
            Please add product price.
          </p>
        )}

        <button className="btn-add" onClick={handleAddProduct}>
          Add Product
        </button>
      </div>

      {productRows.length > 0 ? (
        <table className="project-table">
          <thead>
            <tr>
              <th>S.No</th>
              <th>Product Name</th>
              <th>Product Price</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>{productRows}</tbody>
        </table>
      ) : (
        <p className="no-products">No products found.</p>
      )}
    </div>
  );
};

export default Product;
