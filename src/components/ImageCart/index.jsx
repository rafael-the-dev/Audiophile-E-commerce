import { useCallback, useEffect, useRef } from 'react';
import './styles.css';

const ImageCart = ({ galleryImage, customClass }) => {
    const imageRef = useRef(null);

    const getImage = url => {
        import('../../assets/images/' + url)
            .then(image => imageRef.current.src = image.default)
            .catch(console.log); 
    };

    const setImage = useCallback(width => {
        if(width >= 992) {
            getImage(galleryImage.desktop)
        } else if(width >= 501) {
            getImage(galleryImage.mobile)
        } else {
            getImage(galleryImage.mobile)
        }
    }, [ galleryImage ]);

    useEffect(() => {
        setImage(window.innerWidth); 

        window.addEventListener('resize', event => {
            setImage(event.target.innerWidth);
        });

        return () => window.onresize = null;

    }, [ setImage ]);

    return (
        <figure className={`gallery-image radius-default w-100 ${customClass}`}>
            <img  ref={imageRef} src="" alt="" className="d-block height-100 w-100 radius-default" />
        </figure>
    );
};

export default ImageCart;