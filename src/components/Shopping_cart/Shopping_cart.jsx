import { useSelector } from "react-redux";
import {deleteShopping} from '../../redux/actions'
import { useDispatch } from "react-redux";
const PurchaseTable = () => {
  const data = useSelector(({ shopping }) => shopping);
  const dispatch = useDispatch();

  const totalPrice = data
    .reduce((total, item) => total + parseFloat(item.price), 0)
    .toFixed(2);
  return (
    <>
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
              
              <td>1</td>
              <td>{item.price}</td>
              <td>{item.stars}</td>
            </tr>
          ))}
          <tr>
            <td>
              <strong>Total</strong>
            </td>
            <td></td>
            <td>
              <strong>{totalPrice}</strong>
            </td>
            <td></td>
          </tr>
        </tbody>
      </table>
      {data.map((item, index) => (
        <div className="showw" key={index}>
          <button className="card-close" onClick={()=>dispatch(deleteShopping(index))} >&times;</button>
          <img src={item.src} alt="Cleistocactus" />
          <div className="card-contentt">
            <h2 className="card-titlee">{item.name}</h2>
            <p className="card-pricee">${item.price}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default PurchaseTable;
