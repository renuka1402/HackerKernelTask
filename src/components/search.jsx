
import React, { useState } from "react";
import { useSelector } from "react-redux";

const SearchProducts = () => {
  const [searchIteam, setSearchIteam] = useState("");
  const [filterProducts, setFilterProducts] = useState([]);
  const products = useSelector((state) => state.productTask.products);

  const handleSearch = () => {
    const filtered = products.filter((product) =>
      product.name===searchIteam
    );
    console.log(filtered)
    setFilterProducts(filtered);
  };

  return (
    <div className="search-container">
           <center>
        <h1> Search Product </h1>
      </center>
      <div className="search-bar">
        <input
          type="text"
          className="input-text"
          placeholder="Search Products"
          value={searchIteam}
          onChange={(e) => setSearchIteam(e.target.value)}
        />
        <button className="btn-search" onClick={handleSearch}> Search </button>
      </div>
      <br/>
      <div className="search-results">
        {filterProducts.length > 0 ? (
          <>
            <table className="project-table">
         
                <tr>
                 
                  <th>Product Name</th>
                  <th>Product Price</th>
                </tr>
             
                {filterProducts.map((product) => (
                  <tr>
            
                    <td>{product.name}</td>
                    <td>${product.price}</td>
                  </tr>
                ))}
           
            </table>
          </>
        ) : (
            " "
        )}
      </div>
    </div>
  );
};

export default SearchProducts;
