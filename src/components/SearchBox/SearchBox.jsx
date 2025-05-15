import { useDispatch, useSelector } from 'react-redux';

import {
    setBrand,
    setRentalPrice,
    setMileageFrom,
    setMileageTo,
    resetFilters
} from '../../redux/filters/slice';
import { selectFilters } from '../../redux/filters/selectors';
import { selectBrands, selectRentalPrices } from '../../redux/filterOptions/selectors';
import { fetchFilteredCarsThunk } from '../../redux/filters/operations';

import s from './SearchBox.module.css';

function SearchBox() {
    const dispatch = useDispatch();
    const filters = useSelector(selectFilters);
    const brands = useSelector(selectBrands);
    console.log(brands);
    
    const rentalPrices = useSelector(selectRentalPrices);

    const handleApply = () => {
        const appliedFilters = {};
        if (filters.brand) appliedFilters.brand = filters.brand;
        if (filters.rentalPrice) appliedFilters.rentalPrice = filters.rentalPrice;
        if (filters.mileageFrom) appliedFilters.mileageFrom = filters.mileageFrom;
        if (filters.mileageTo) appliedFilters.mileageTo = filters.mileageTo;
        dispatch(fetchFilteredCarsThunk(appliedFilters));
        dispatch(resetFilters());
    };

    return (
        <>
            <div className={s.wrapper}>
                <div className={s.searchBoxContainer}>
                <select
                    value={filters?.brand}
                    onChange={(e) => dispatch(setBrand(e.target.value))}
                >
                    <option value="">All</option>
                    {brands?.map((brand) => (
                        <option key={brand} value={brand}>{brand}</option>
                    ))}
                </select>
                </div>
            </div>
        </>
    )
  }
  
export default SearchBox;