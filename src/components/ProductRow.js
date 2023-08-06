

function ProductRow(props) {
    const { product } = props;

    const productStyle = {
        color: product.inStock ? 'black' : 'red',
    };
   
    return (
      <div className="productList" style={productStyle}>
        <p>{product.name}</p>
        <p>{product.price}</p>
      </div>
    );
  }

export default ProductRow;