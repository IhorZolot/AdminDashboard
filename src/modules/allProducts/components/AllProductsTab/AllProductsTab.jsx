import { useDispatch, useSelector } from 'react-redux';

import ActionsBottom from '../ActionsBottom/ActionsBottom';
import styles from './AllProductsTab.module.scss';
import { selectProducts } from '../../../../redux/Products/productSlice';
import { deleteProductThunk } from '../../../../redux/Products/operations';
import { toast } from 'react-toastify';

const AllProductsTab = ({ onOpenEdit }) => {
  const dispatch = useDispatch();
  const userProduct = useSelector(selectProducts);

  const handleEdit = (product) => {
    onOpenEdit(product);
  };

  const handleDelete = (id) => {
    dispatch(deleteProductThunk(id));
    console.log(dispatch);
    toast.success('Product deleted successfully');
  };

  const nameTable = 'All products';
  const headers = [
    'Product Info',
    'Category',
    'Stock',
    'Suppliers',
    'Price',
    'Action',
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
          {userProduct.map((row, rowIndex) => (
            <tr key={rowIndex}>
              <td>{row.name}</td>
              <td>{row.category}</td>
              <td>{row.stock}</td>
              <td>{row.suppliers}</td>
              <td>{row.price}</td>
              <td>
                <div key="uniqueKey" className={styles.action}>
                  <ActionsBottom
                    onClick={() => handleEdit(row)}
                    actionType="edit"
                  />
                  <ActionsBottom onClick={() => handleDelete(row.id)} />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllProductsTab;
