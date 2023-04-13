import {Link} from 'react-router-dom';

const Brand = () => {
  return (
    <div className='container brands'>
        {
            data.map(item=>(
                <Link to={`/${item.id}`} className="brand" key={item.id}>
                    <img src={item.url} alt={item.name} />
                </Link>
            ))
        }
    </div>
  );
}

export default Brand;


let data = [
    {
        id: 1,
        name: 'hp',
        url: 'https://cdn.pixabay.com/photo/2017/10/09/19/03/logo-2834458__340.jpg'
    },
    {
        id: 2,
        name: 'apple',
        url: 'https://cdn.pixabay.com/photo/2017/06/08/23/00/apple-2385198__340.jpg'
    },
    {
        id: 3,
        name: 'hp',
        url: 'https://cdn.pixabay.com/photo/2017/10/09/19/03/logo-2834458__340.jpg'
    },
    {
        id: 4,
        name: 'hp',
        url: 'https://cdn.pixabay.com/photo/2017/10/09/19/03/logo-2834458__340.jpg'
    },
    {
        id: 5,
        name: 'hp',
        url: 'https://cdn.pixabay.com/photo/2017/10/09/19/03/logo-2834458__340.jpg'
    },
    {
        id: 6,
        name: 'apple',
        url: 'https://cdn.pixabay.com/photo/2017/06/08/23/00/apple-2385198__340.jpg'
    },
    {
        id: 7,
        name: 'hp',
        url: 'https://cdn.pixabay.com/photo/2017/10/09/19/03/logo-2834458__340.jpg'
    },
    {
        id: 8,
        name: 'apple',
        url: 'https://cdn.pixabay.com/photo/2017/06/08/23/00/apple-2385198__340.jpg'
    },
    {
        id: 9,
        name: 'hp',
        url: 'https://cdn.pixabay.com/photo/2017/10/09/19/03/logo-2834458__340.jpg'
    },
    {
        id: 10,
        name: 'hp',
        url: 'https://cdn.pixabay.com/photo/2017/10/09/19/03/logo-2834458__340.jpg'
    },
    {
        id: 11,
        name: 'hp',
        url: 'https://cdn.pixabay.com/photo/2017/10/09/19/03/logo-2834458__340.jpg'
    },
    {
        id: 12,
        name: 'apple',
        url: 'https://cdn.pixabay.com/photo/2017/06/08/23/00/apple-2385198__340.jpg'
    },
];
