import styles from './AllOrdersTab.module.scss';
import StyledStatus from '../Status/StyledStatus';
import { useSelector } from 'react-redux';
import { selectOrders } from '../../../../redux/Orders/sliceOrders';

const AllOrdersTab = () => {
  const userOrders = useSelector(selectOrders);

  const nameTable = 'All Orders';
  const headers = [
    'User Info',
    'Address',
    'Products',
    'Order date',
    'Price',
    'Status',
  ];

  return (
    <div className={styles.sectionTable}>
      <h2 className={styles.titleTable}>{nameTable}</h2>
      <table className={styles.table}>
        <thead className={styles.theadTable}>
          <tr>
            {headers.map((header, index) => (
              <th key={index}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody className={styles.dataTable}>
          {userOrders.map((row, rowIndex) => (
            <tr key={rowIndex}>
              <td>
                <div>
                  <img width="40" src={row.photo} alt="img" />
                  {row.name}
                </div>
              </td>
              <td>{row.address}</td>
              <td>{row.products}</td>
              <td>{row.order_date}</td>
              <td>{row.price}</td>
              <td>
                <StyledStatus status={row.status} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default AllOrdersTab;
