import './styles.css';

const CategoriesPanel = ({ text }) => {
    return (
        <div className="align-center flex justify-center w-100 categories-panel">
            <h1 className="uppercase text-white categories-panel__title">{ text }</h1>
        </div>
    );
 };

 export default CategoriesPanel;