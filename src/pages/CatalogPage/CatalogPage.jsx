import { useDispatch } from "react-redux"
import CarList from "../../components/CarList/CarList"
import SearchBox from "../../components/SearchBox/SearchBox"
import { useEffect } from "react";
import { fetchCarsThunk } from "../../redux/catalog/operations";

function CatalogPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCarsThunk());
  }, [dispatch])

  return (   
    <>
      <SearchBox/>
      <CarList/>
    </>
    )
  }
  
export default CatalogPage