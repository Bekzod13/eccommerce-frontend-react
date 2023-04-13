import Brand from '../components/Brand';
import Category from '../components/Category';
import MainCarusel from '../components/MainCarusel';
import Product from '../components/Product';
import Title from '../components/Title';

const Home = () => {
  return (
    <>
        <MainCarusel caruselHeight={400}/>
        <Title title={'Categories'} />
        <Category/>
        <Title title={'More Sales'} />
        <Product limit={10} sort={'more'} />
        <MainCarusel caruselHeight={300}/>
        <Title title={'Public'} />
        <Product limit={10} sort={'public'} />
        <Title title={'Brands'} />
        <Brand/>
        <MainCarusel caruselHeight={300}/>
        <Title title={'Markets'} />
        <Brand/>
    </>
  );
}

export default Home;
