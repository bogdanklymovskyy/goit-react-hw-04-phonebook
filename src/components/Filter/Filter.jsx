import PropTypes from 'prop-types';
import styles from './Filter.module.scss';

const Filter = ({ value, changeFilter }) => {
  return (
    <label className={styles.filterTitle}>
      Find contacts by name
      <input
        className={styles.filterInput}
        onChange={changeFilter}
        type="text"
        value={value}
      ></input>
    </label>
  );
};
export default Filter;

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  changeFilter: PropTypes.func.isRequired,
};
