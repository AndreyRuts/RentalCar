import { Route, Routes } from "react-router-dom"

import CatalogPage from "./pages/CatalogPage/CatalogPage"
import DetailsPage from "./pages/DetailsPage/DetailsPage"
import HomePage from "./pages/HomePage/HomePage"
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage"

import Layout from "./components/Layout/Layout"

function App() {

  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/catalog/:id" element={<DetailsPage />} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </Layout>
    </>
  )
}

export default App
