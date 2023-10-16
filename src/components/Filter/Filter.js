import React from 'react';
import propTypes from 'prop-types';
import { FilterName } from './Filter.styled';

import { useSelector, useDispatch } from 'react-redux';
import { selectFilter } from 'redux/selectors';
import { changeFilter } from 'redux/filterSlice';


export const Filter = () => {
  const value = useSelector(selectFilter);
  const dispatch = useDispatch();

  const onChange = event => {
    const normalizedValue = event.target.value.toLowerCase();

    dispatch(changeFilter(normalizedValue));
  };

  return (
    <div>
      <label>
        Find contacts by name
        <FilterName
          type="text"
          value={value}
          onChange={onChange}
        />
      </label>
    </div>
  );
};

Filter.propTypes = {
  filter: propTypes.string.isRequired,
  handleChange: propTypes.func.isRequired,
};
