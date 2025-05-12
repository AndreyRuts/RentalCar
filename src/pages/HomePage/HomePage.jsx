import s from './HomePage.module.css';

function HomePage() {

    return (
      <>
        <div className={s.homePageWrapper}>
          <h1 className={s.title}>Find your perfect rental car</h1>
          <p className={s.text}>Reliable and budget-friendly rentals for any journey</p>
          <button type='button'>View Catalog</button>
        </div>
      </>
    )
  }
  
  export default HomePage