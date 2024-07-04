

import { useSelector } from "react-redux";
const PurchaseTable = () => {

// useSelector(({ shopping }) => shopping
  // const data = [
  //   { plant: 'Green Soil Lotus', quantity: 1, price: 34.00, stars: 4 },
  //   { plant: 'Green Soil Lotus', quantity: 1, price: 34.00, stars: 4 }
  // ];
  const data = useSelector(({ shopping }) => shopping);
  console.log(data);
  return (
    <table>
      <thead>
        <tr>
          <th>Plant List</th>
          <th>Quantity</th>
          <th>Price $</th>
          <th>Stars</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.name}</td>
            {/* <td>{item.quantity}</td> */}
            <td>1</td>
            <td>{item.price}</td>
            <td>{item.stars}</td>
          </tr>
        ))}
        <tr>
          <td><strong>Total</strong></td>
          <td></td>
          <td><strong>{data.reduce((total, item) => total + item.price, 0).toFixed(2)}</strong></td>
          <td></td>
        </tr>
      </tbody>
    </table>
  );
};

export default PurchaseTable;