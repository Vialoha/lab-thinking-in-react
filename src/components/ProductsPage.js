
import {useState} from 'react';
import jsonData from './../data.json';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

function ProductsPage () {
    const [products, setProducts] = useState(jsonData);


    const [searchQuery, setSearchQuery] = useState('');

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    // const filteredProducts = products.filter((product) =>
    // product.name.toLowerCase().includes(searchQuery.toLowerCase())
    // );


    const [inStockOnly, setInStockOnly] = useState(false);

    const handleStockChange = (event) => {
        setInStockOnly(event.target.checked);
    };

    const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
    (!inStockOnly || product.inStock) // Only show in-stock products if inStockOnly is true
  );

    
    return(
        <div>
          <h1>IronStore</h1>
          <SearchBar searchQuery={searchQuery} onSearchChange={handleSearchChange} inStockOnly={inStockOnly}
        onStockChange={handleStockChange}/>
          <ProductTable products={filteredProducts}/>
        </div>
    )
}

export default ProductsPage;