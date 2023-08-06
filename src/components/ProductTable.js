import ProductRow from "./ProductRow";

function ProductTable (props) {
    const { products } = props;
    
    return(
        <div className="productTable">
          <h5>Name</h5>
          <h5>Price</h5>
          
          {products.map ((product) => (
            <ProductRow key={product.id} product={product}/>
          ))}
        </div>    
    )
}

export default ProductTable;