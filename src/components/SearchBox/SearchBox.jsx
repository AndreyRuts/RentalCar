import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';

import {
    setBrand,
    setRentalPrice,
    setMileageTo,
    setMileageFrom,
    resetFilters
} from '../../redux/filters/slice';
import { selectFilters, selectBrandList, selectRentalPrice } from '../../redux/filters/selectors';
import { fetchFilteredCarsThunk } from '../../redux/filters/operations';

import s from './SearchBox.module.css';


function SearchBox() {
    const dispatch = useDispatch();
    const brands = useSelector(selectBrandList);
    const prices = useSelector(selectRentalPrice);
    const filters = useSelector(selectFilters);
   
    const [isBrandOpen, setIsBrandOpen] = useState(false);
    const [isPriceOpen, setIsPriceOpen] = useState(false);
    const toggleBrandOpen = (val) => setIsBrandOpen(val);
    const togglePriceOpen = (val) => setIsPriceOpen(val);

    const handleSearch = () => {
        dispatch(fetchFilteredCarsThunk(filters));
    };
    
    
    return (
        <>
            <div className={s.wrapper}>
                <div className={s.searchBoxContainer}>
                    <label className={s.labelBox}>
                        Car brand
                        <div className={s.selectWithIcon}>
                            <select
                                className={s.select}
                                value={filters.brand}
                                onFocus={() => toggleBrandOpen(true)}
                                onBlur={() => setIsBrandOpen(false)}  
                                onChange={(e) => {
                                    dispatch(setBrand(e.target.value));
                                    e.target.blur();
                                }}>
                                <option value="" disabled hidden>Choose a brand</option>
                                {brands.map((brand) => (
                                    <option className={s.options} key={brand} value={brand}>{brand}</option>
                                ))}
                            </select>
                            <svg className={s.arrow} width="13" height="7" viewBox="0 0 13 7">
                                <use href={`/sprite.svg#${isBrandOpen ? 'searchArrowUp' : 'searchArrowDown'}`}></use>
                            </svg>
                        </div>
                    </label>

                    <label className={s.labelBox}>
                        Price / 1 hour
                        <div className={s.selectWithIcon}>
                            <select
                                className={s.select}
                                value={filters.rentalPrice}
                                onFocus={() => togglePriceOpen(true)}
                                onBlur={() => setIsPriceOpen(false)} 
                                onChange={(e) => {
                                    dispatch(setRentalPrice(e.target.value));
                                    e.target.blur();
                                }}>
                                <option value="" disabled hidden>Choose a price</option>
                                {prices.map(price => (
                                    <option className={s.options} key={price} value={price}>${price}</option>
                                ))}
                            </select>
                            <svg className={s.arrow} width="13" height="7" viewBox="0 0 13 7">
                                <use href={`/sprite.svg#${isPriceOpen ? 'searchArrowUp' : 'searchArrowDown'}`}></use>
                            </svg>
                        </div>
                    </label>

                    <label className={s.labelBox}>
                        Car mileage / km
                        <div className={s.mileageInputs}>
                            <input className={s.inputFrom}
                                type="number"
                                placeholder="From"
                                value={filters.mileageFrom}
                                onChange={(e) => dispatch(setMileageFrom(e.target.value))}
                            />
                            <input className={s.inputTo}
                                type="number"
                                placeholder="To"
                                value={filters.mileageTo}
                                onChange={(e) => dispatch(setMileageTo(e.target.value))}
                            />
                        </div>
                    </label>

                    <button className={s.searchBtn} onClick={handleSearch}>Search</button>
                </div>
            </div>
        </>
    );
  }
  
export default SearchBox;