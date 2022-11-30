import logo from './logo.svg';
import './App.css';

function ProductCategoryRow({category}) {
  return(
    <>
      <tr>
        <th>
          {category}
        </th>
      </tr>
    </>
  )
}

function ProductRow({product}) {
  const name = product.stocked ? product.name :
  <span>
    {product.name}
  </span>
  return (
    <tr>
      <td>
        {name}
      </td>
      <td>
        {product.price}
      </td>
    </tr>
  )
}

function ProductTable({products}) {
  const rows = []
  let lastCategory = null

  products.forEach((product) => {
    if(product.category !== lastCategory) {
      rows.push(
        <ProductCategoryRow
          category={product.category}
          key={product}
        />
      )
    }
  })

} 

const products = [
  { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
  { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
  { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
  { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
  { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
  { category: "Vegetables", price: "$1", stocked: true, name: "Peas" }
]

function App() {
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
