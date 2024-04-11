function CartTable({ items }) {
  // TODO: Map through “items”, creating 1 row
  // per item.

  return (
    <table className="shopping-cart">
      <thead>
        <tr>
          <th></th>
          <th>Title</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {
      items.map((element) => 
/*
    id: 'cnl333',
    imageSrc: 'https://sandpack-bundler.vercel.app/img/shopping-cart-night-light.png',
    imageAlt: 'A kid-friendly nightlight sculpted to look like a dog astronaut',
    title: 'Astro-pup Night Light',
    price: '130.00',
    inStock: true,
*/

        <tr className="cart-row" key={element.id}>
          <td>
            <img
              className="product-thumb"              
              src={element.imageSrc}
              alt={element.imageAlt}
            />
          </td>
          <td>
            {element.title}
          </td>
          <td>
            ${element.price}
          </td>
        </tr>        
      )
            }
      </tbody>
    </table>
  );
}

export default CartTable;