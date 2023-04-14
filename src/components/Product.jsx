import { Link } from "react-router-dom";

// import icons
import {FiShoppingCart} from 'react-icons/fi';
import {AiOutlineHeart, AiFillHeart} from 'react-icons/ai';

const Product = ({limit, more}) => {
    data = data.slice(0, limit);
  return (
    <>
    <div className="container products">
        {
            data.map(item=>(
                <div key={item.id} className="product">
                    <div className="product-image">
                        <img src={item.url} alt={item.name} />
                    </div>
                    <div className="product-price">
                        {item.price * item.currency[0].value} {item.currency[0].symbol}
                    </div>
                    <div className="product-name">{item.name}</div>
                    <div className="product-name"><i>{item.subtitle}</i></div>
                    <div className="product-quantity">{item.quantity} ta mavjud</div>
                    <div className="product-buys">
                        <Link to={`/product/${item.id}`} className="product-btn">
                            Buy now
                        </Link>
                        <div
                        // to={`/product/${item.id}`}
                        className="product-cart">
                            <FiShoppingCart/>
                        </div>
                    </div>
                    <div className="product-tags">
                        {
                            item.tags.map(tag=>(
                                <Link
                                    to={`/${tag.name}`}
                                    key={tag.id}
                                    className={ tag.id % 2 === 0 ? "product-tag product-tag-1" : "product-tag product-tag-2"}>
                                    {tag.name}
                                </Link>
                            ))
                        }
                    </div>
                    <div className="product-like-btn">
                        {
                            liked[item.id] ?
                                <AiFillHeart/>
                                :
                                <AiOutlineHeart/>
                        }
                    </div>
                </div>
            ))
        }
    </div>
    <Link to={'/products'} className="container category-all-btn">
        Show More
    </Link>
    </>
  );
}

export default Product;

let liked = {
    1: true,
    2: true,
}
let data = [
    {
        id: 1,
        url: "https://cdn.pixabay.com/photo/2020/03/09/08/44/redmi-note-8-4914990__340.png",
        name: "Redmi",
        price: 300,
        discount: 10,
        subtitle: "Redmi images for free download. ",
        description: "Redmi images for free download. Browse or use the filters to find your next picture for your project. Redmi images for free download. Browse or use the filters to find your next picture for your project.",
        quantity: 19,
        tags: [
            {
                id: 1,
                name: "top"
            },
            {
                id: 2,
                name: "new"
            },
        ],
        currency: [
            {
                id: 1,
                name: "sum",
                value: 11200,
                symbol: "UZS",
            },
            {
                id: 2,
                name: "rub",
                value: 82,
                symbol: "RUB",
            },
            {
                id: 3,
                name: "usd",
                value: 1,
                symbol: "USD",
            }
        ]
    },
    {
        id: 2,
        url: "https://cdn.pixabay.com/photo/2020/03/09/08/44/redmi-note-8-4914990__340.png",
        name: "Redmi",
        price: 300,
        discount: 10,
        subtitle: "Redmi images for free download. ",
        description: "Redmi images for free download. Browse or use the filters to find your next picture for your project. Redmi images for free download. Browse or use the filters to find your next picture for your project.",
        quantity: 23,
        tags: [],
        currency: [
            {
                id: 1,
                name: "sum",
                value: 11200,
                symbol: "UZS",
            },
            {
                id: 2,
                name: "rub",
                value: 82,
                symbol: "RUB",
            },
            {
                id: 3,
                name: "usd",
                value: 1,
                symbol: "USD",
            }
        ]
    },
    {
        id: 3,
        url: "https://cdn.pixabay.com/photo/2020/03/09/08/44/redmi-note-8-4914990__340.png",
        name: "Redmi",
        price: 300,
        discount: 10,
        subtitle: "Redmi images for free download. ",
        description: "Redmi images for free download. Browse or use the filters to find your next picture for your project. Redmi images for free download. Browse or use the filters to find your next picture for your project.",
        quantity: 10,
        tags: [],
        currency: [
            {
                id: 1,
                name: "sum",
                value: 11200,
                symbol: "UZS",
            },
            {
                id: 2,
                name: "rub",
                value: 82,
                symbol: "RUB",
            },
            {
                id: 3,
                name: "usd",
                value: 1,
                symbol: "USD",
            }
        ]
    },
    {
        id: 4,
        url: "https://cdn.pixabay.com/photo/2020/03/09/08/44/redmi-note-8-4914990__340.png",
        name: "Redmi",
        price: 300,
        discount: 10,
        subtitle: "Redmi images for free download. ",
        description: "Redmi images for free download. Browse or use the filters to find your next picture for your project. Redmi images for free download. Browse or use the filters to find your next picture for your project.",
        quantity: 19,
        tags: [
            {
                id: 1,
                name: "top"
            },
            {
                id: 2,
                name: "new"
            },
        ],
        currency: [
            {
                id: 1,
                name: "sum",
                value: 11200,
                symbol: "UZS",
            },
            {
                id: 2,
                name: "rub",
                value: 82,
                symbol: "RUB",
            },
            {
                id: 3,
                name: "usd",
                value: 1,
                symbol: "USD",
            }
        ]
    },
    {
        id: 5,
        url: "https://cdn.pixabay.com/photo/2020/03/09/08/44/redmi-note-8-4914990__340.png",
        name: "Redmi",
        price: 300,
        discount: 10,
        subtitle: "Redmi images for free download. ",
        description: "Redmi images for free download. Browse or use the filters to find your next picture for your project. Redmi images for free download. Browse or use the filters to find your next picture for your project.",
        quantity: 23,
        tags: [],
        currency: [
            {
                id: 1,
                name: "sum",
                value: 11200,
                symbol: "UZS",
            },
            {
                id: 2,
                name: "rub",
                value: 82,
                symbol: "RUB",
            },
            {
                id: 3,
                name: "usd",
                value: 1,
                symbol: "USD",
            }
        ]
    },
    {
        id: 6,
        url: "https://cdn.pixabay.com/photo/2020/03/09/08/44/redmi-note-8-4914990__340.png",
        name: "Redmi",
        price: 300,
        discount: 10,
        subtitle: "Redmi images for free download. ",
        description: "Redmi images for free download. Browse or use the filters to find your next picture for your project. Redmi images for free download. Browse or use the filters to find your next picture for your project.",
        quantity: 10,
        tags: [
            {
                id: 1,
                name: "top"
            },
            {
                id: 2,
                name: "new"
            },
        ],
        currency: [
            {
                id: 1,
                name: "sum",
                value: 11200,
                symbol: "UZS",
            },
            {
                id: 2,
                name: "rub",
                value: 82,
                symbol: "RUB",
            },
            {
                id: 3,
                name: "usd",
                value: 1,
                symbol: "USD",
            }
        ]
    },
    {
        id: 7,
        url: "https://cdn.pixabay.com/photo/2020/03/09/08/44/redmi-note-8-4914990__340.png",
        name: "Redmi",
        price: 300,
        discount: 10,
        subtitle: "Redmi images for free download. ",
        description: "Redmi images for free download. Browse or use the filters to find your next picture for your project. Redmi images for free download. Browse or use the filters to find your next picture for your project.",
        quantity: 19,
        tags: [
            {
                id: 1,
                name: "top"
            },
            {
                id: 2,
                name: "new"
            },
        ],
        currency: [
            {
                id: 1,
                name: "sum",
                value: 11200,
                symbol: "UZS",
            },
            {
                id: 2,
                name: "rub",
                value: 82,
                symbol: "RUB",
            },
            {
                id: 3,
                name: "usd",
                value: 1,
                symbol: "USD",
            }
        ]
    },
    {
        id: 8,
        url: "https://cdn.pixabay.com/photo/2020/03/09/08/44/redmi-note-8-4914990__340.png",
        name: "Redmi",
        price: 300,
        discount: 10,
        subtitle: "Redmi images for free download. ",
        description: "Redmi images for free download. Browse or use the filters to find your next picture for your project. Redmi images for free download. Browse or use the filters to find your next picture for your project.",
        quantity: 23,
        tags: [],
        currency: [
            {
                id: 1,
                name: "sum",
                value: 11200,
                symbol: "UZS",
            },
            {
                id: 2,
                name: "rub",
                value: 82,
                symbol: "RUB",
            },
            {
                id: 3,
                name: "usd",
                value: 1,
                symbol: "USD",
            }
        ]
    },
    {
        id: 9,
        url: "https://cdn.pixabay.com/photo/2020/03/09/08/44/redmi-note-8-4914990__340.png",
        name: "Redmi",
        price: 300,
        discount: 10,
        subtitle: "Redmi images for free download. ",
        description: "Redmi images for free download. Browse or use the filters to find your next picture for your project. Redmi images for free download. Browse or use the filters to find your next picture for your project.",
        quantity: 10,
        tags: [
            {
                id: 1,
                name: "top"
            },
            {
                id: 2,
                name: "new"
            },
        ],
        currency: [
            {
                id: 1,
                name: "sum",
                value: 11200,
                symbol: "UZS",
            },
            {
                id: 2,
                name: "rub",
                value: 82,
                symbol: "RUB",
            },
            {
                id: 3,
                name: "usd",
                value: 1,
                symbol: "USD",
            }
        ]
    },
    {
        id: 10,
        url: "https://cdn.pixabay.com/photo/2020/03/09/08/44/redmi-note-8-4914990__340.png",
        name: "Redmi",
        price: 300,
        discount: 10,
        subtitle: "Redmi images for free download. ",
        description: "Redmi images for free download. Browse or use the filters to find your next picture for your project. Redmi images for free download. Browse or use the filters to find your next picture for your project.",
        quantity: 10,
        tags: [],
        currency: [
            {
                id: 1,
                name: "sum",
                value: 11200,
                symbol: "UZS",
            },
            {
                id: 2,
                name: "rub",
                value: 82,
                symbol: "RUB",
            },
            {
                id: 3,
                name: "usd",
                value: 1,
                symbol: "USD",
            }
        ]
    }
];
