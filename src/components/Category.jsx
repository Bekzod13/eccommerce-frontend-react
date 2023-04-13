import { Link } from "react-router-dom";

const Category = () => {
  return (
    <>
    <div className="container categories">
        {
            data.map(item=>(
                <Link to={`/${item.name}`} key={item.id} className="category">
                    <div className="category-image">
                        <img src={item.url} alt={item.name} />
                    </div>
                    <div className="category-name">
                        {item.name}
                    </div>
                </Link>
            ))
        }
    </div>
    <Link to={'/categories'} className="container category-all-btn">
        All Category
    </Link>
    </>
  );
}

export default Category;


let data = [
    {
        id: 1,
        name: 'telefon',
        url: 'https://cdn.pixabay.com/photo/2014/08/05/10/30/iphone-410324__340.jpg',
    },
    {
        id: 2,
        name: 'laptop',
        url: 'https://cdn.pixabay.com/photo/2014/09/24/14/29/macbook-459196__340.jpg',
    },
    {
        id: 3,
        name: 'watch',
        url: 'https://cdn.pixabay.com/photo/2018/01/18/19/06/time-3091031__340.jpg',
    },
    {
        id: 4,
        name: 'telefon',
        url: 'https://cdn.pixabay.com/photo/2014/08/05/10/30/iphone-410324__340.jpg',
    },
    {
        id: 5,
        name: 'laptop',
        url: 'https://cdn.pixabay.com/photo/2014/09/24/14/29/macbook-459196__340.jpg',
    },
    {
        id: 6,
        name: 'watch',
        url: 'https://cdn.pixabay.com/photo/2018/01/18/19/06/time-3091031__340.jpg',
    },
    {
        id: 7,
        name: 'telefon',
        url: 'https://cdn.pixabay.com/photo/2014/08/05/10/30/iphone-410324__340.jpg',
    },
    {
        id: 8,
        name: 'laptop',
        url: 'https://cdn.pixabay.com/photo/2014/09/24/14/29/macbook-459196__340.jpg',
    },
];
