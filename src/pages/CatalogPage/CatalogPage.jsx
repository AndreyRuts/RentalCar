import { useDispatch } from "react-redux"
import { useEffect } from "react";

import CarList from "../../components/CarList/CarList"
import SearchBox from "../../components/SearchBox/SearchBox"

import { fetchCarsAndUpdateFilters } from "../../redux/catalog/extraOperations";

function CatalogPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCarsAndUpdateFilters());
  }, [dispatch])

  return (   
    <>
      <SearchBox/>
      <CarList/>
    </>
    )
  }
  
export default CatalogPage