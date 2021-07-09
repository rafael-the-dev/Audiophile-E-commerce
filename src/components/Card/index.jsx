import SeeProductLink from "../SeeProductLink";

const Card = ({ name, image, url}) => {
    return (
        <article className="align-center flex flex-column justify-center width-100 cart">
            <figure className="">
                <img src={ image } alt={ name } className="" />
            </figure>
            <h2 className="">{ name }</h2>
            <SeeProductLink customClass="bg-black" />
        </article>
    );
};

export default Card;