import { useNavigate } from 'react-router-dom';

import s from './HomePage.module.css';

function HomePage() {
  const navigate = useNavigate();
  const redirectToCatalog = () => {
    navigate('/catalog');
  }

    return (
      <>
        <div className={s.homePageWrapper}>
          <div className={s.container}>
            <h1 className={s.title}>Find your perfect rental car</h1>
            <p className={s.text}>Reliable and budget-friendly rentals for any journey</p>
            <button className={s.catalogBtn} onClick={redirectToCatalog}>View Catalog</button>
          </div>
        </div>
      </>
    )
  }
  
  export default HomePage