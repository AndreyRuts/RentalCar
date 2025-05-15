import { useDispatch, useSelector } from 'react-redux';

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

    const handleSearch = () => {
        dispatch(fetchFilteredCarsThunk(filters));
    };
    
    return (
        <>
            <div className={s.wrapper}>
                <div className={s.searchBoxContainer}>
                    <label>
                        Car brand
                        <select value={filters.brand} onChange={(e) => dispatch(setBrand(e.target.value))}>
                            <option value="">Choose a brand</option>
                            {brands.map((brand) => (
                                <option key={brand} value={brand}>{brand}</option>
                            ))}
                        </select>
                    </label>

                    <label>
                        Price / 1 hour
                        <select value={filters.rentalPrice} onChange={(e) => dispatch(setRentalPrice(e.target.value))}>
                            <option value="">Choose a price</option>
                            {prices.map(price => (
                                <option key={price} value={price}>${price}</option>
                            ))}
                        </select>
                    </label>

                    <label>
                        Car mileage / km
                        <div className={s.mileageInputs}>
                            <input
                                type="number"
                                placeholder="From"
                                value={filters.mileageFrom}
                                onChange={(e) => dispatch(setMileageFrom(e.target.value))}
                            />
                            <input
                                type="number"
                                placeholder="To"
                                value={filters.mileageTo}
                                onChange={(e) => dispatch(setMileageTo(e.target.value))}
                            />
                        </div>
                    </label>

                    <button onClick={handleSearch}>Search</button>
                </div>
            </div>
        </>
    );
  }
  
export default SearchBox;