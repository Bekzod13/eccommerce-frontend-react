import CatalogProduct from '../components/CatalogProduct';
import MainCarusel from '../components/MainCarusel';
import Product from '../components/Product';
import Title from '../components/Title';

const Catalog = () => {
  return (
    <>
        <MainCarusel caruselHeight={400}/>
        <CatalogProduct/>
        <Title title={'More Sales'} />
        <Product limit={5} />
    </>
  );
}

export default Catalog;
