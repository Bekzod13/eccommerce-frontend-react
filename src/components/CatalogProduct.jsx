import {Link} from 'react-router-dom';


const CatalogProduct = () => {
  return (
    <>
    <div className="container catalog-main-links">
        <Link to={'/'} className="catalog-main-link">NextStore / </Link>
        <Link to={'/'} className="catalog-main-link">Kompyuterlar va notebooklar /</Link>
    </div>
    <div className="container catalog-products">
        {
            data.map(item=>(
                <Link to={`/catalog/${item.name}`} className="catalog-item" key={item.id}>
                    <div className="catalog-item-image">
                        <img src={item.image} alt={item.name} />
                    </div>
                    <div className="catalog-item-name">
                        {item.name}
                    </div>
                    <div className="catalog-item-count">
                        {item.count}
                    </div>
                </Link>
            ))
        }
    </div>
    </>
  );
}

export default CatalogProduct;


let data = [
    {
        id: 1,
        name: 'Kompyuter',
        image: 'https://cdn.pixabay.com/photo/2014/09/24/14/29/macbook-459196__340.jpg',
        count: 3023,
    },
    {
        id: 2,
        name: 'Kompyuter',
        image: 'https://cdn.pixabay.com/photo/2014/09/24/14/29/macbook-459196__340.jpg',
        count: 3023,
    },
    {
        id: 3,
        name: 'Kompyuter',
        image: 'https://cdn.pixabay.com/photo/2014/09/24/14/29/macbook-459196__340.jpg',
        count: 3023,
    },
    {
        id: 4,
        name: 'Kompyuter',
        image: 'https://cdn.pixabay.com/photo/2014/09/24/14/29/macbook-459196__340.jpg',
        count: 3023,
    },
    {
        id: 5,
        name: 'Kompyuter',
        image: 'https://cdn.pixabay.com/photo/2014/09/24/14/29/macbook-459196__340.jpg',
        count: 3023,
    },
    {
        id: 6,
        name: 'Kompyuter',
        image: 'https://cdn.pixabay.com/photo/2014/09/24/14/29/macbook-459196__340.jpg',
        count: 3023,
    },
];
