import { useCallback, useEffect, useMemo, useRef } from 'react';
import ImageHelper from '../../js/helper/ImageHelper';
import './styles.css';

const ImageCart = ({ galleryImage, customClass }) => {
    const imageRef = useRef(null);

    const helper = useMemo(() => {
        return new ImageHelper(imageRef)
    }, [ ]);

    const setImage = useCallback(width => {
        if(width >= 992) {
            helper.addImage(galleryImage.desktop)
        } else if(width >= 501) {
            helper.addImage(galleryImage.mobile)
        } else {
            helper.addImage(galleryImage.mobile)
        }
    }, [ helper, galleryImage ]);

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