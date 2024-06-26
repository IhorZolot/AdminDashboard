import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import { toast } from 'react-toastify';

import { SpriteSVG } from '@assets/icons/SpriteSVG';
import Button from '../Button';
import Input from '../InputFields/Input';
import styles from './UserFilter.module.scss';

const UserFilter = ({ placeholder, onFilter }) => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const currentPage = searchParams.get('page') || 1;

  const [filterValue, setFilterValue] = useState('');

  const handleInputChange = (event) => {
    setFilterValue(event.target.value);
  };
  const handleFilterSubmit = async () => {
    if (!filterValue.trim()) {
      toast.error('Please enter filter value!');
      return;
    }
    const results = await onFilter(filterValue, currentPage);

    if (!results.length ) {
      toast.error('No results found for your query');
      return;
    }
    toast.success('Filter applied successfully!');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleFilterSubmit();
    }
  };
  const handleClearInput = () => {
    setFilterValue('');
    onFilter('', '');
    toast.success('Filter cleared successfully!');
  };

  return (
    <div className={styles.sectorInput}>
      <div className={styles.inputDiv}> 
        <Input
        type="text"
        placeholder={placeholder}
        value={filterValue}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        className={styles.inputField}
      />
        {filterValue && ( 
        <button className={styles.clearButton} onClick={handleClearInput}>
          &#x2715; 
        </button>
      )}</div>

      <Button onClick={handleFilterSubmit}>
        <SpriteSVG name="filter" /> Filter
      </Button>
    </div>
  );
};

export default UserFilter;
