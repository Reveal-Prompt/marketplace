
interface ProductDetailProps {
    id: string;
    name: string;
    imageUrl: string;
    price: number;
    description: string;
}


export function ProductDetail(props: ProductDetailProps){
    const {id, name, imageUrl, price, description} = props;

    return (
        <div>
            <h1>{name}</h1>
            <img src={imageUrl} alt={name} />
            <p>{description}</p>
            <p>${price.toFixed(2)}</p>
        </div>
    )
}