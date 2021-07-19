import './styles.css';

const SummaryItem = ({ text, value, customClass }) => {
    return (
        <p className="align-center flex justify-between text-black w-100 summary-item">
            <span className="opacity-8">{ text }</span>
            <span className={`font-weight-7 ${customClass}`}>${ value }</span>
        </p>
    );
};

export default SummaryItem;