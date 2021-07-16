class ImageHelper {
    constructor(ref, product) {
        this.ref = ref;
        this.product = product;
    }

    addImage = url => {
        import('../../assets/images/' + url)
            .then(image => this.ref.current.src = image.default)
            .catch(console.log); 
    }

    setImage(width, key){
        if(width >= 992) {
            this.addImage(this.product.image.desktop);
        } else if(width >= 501) {
            this.addImage(this.product.image.mobile);
        } else {
            this.addImage(this.product.image.mobile);
        }
    }
}

export default ImageHelper;