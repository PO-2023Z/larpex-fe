type CallbackFunction = () => void;
import "./SendGameResultModalView.css"

interface SendGameResultModalViewProps {
    show: boolean;
    closeModal: CallbackFunction;
    contentPredicate: boolean;
}

const SendGameResultModalView: React.FC<SendGameResultModalViewProps> = ({show, closeModal, contentPredicate}) => {
    if (!show) return null;

    const modalTitle = contentPredicate ? "SUKCES" : "NIEPOWODZENIE";
    const modalText = contentPredicate ?
        "Pomyślnie przesłano propozycję nowej gry." :
        "Przesyłanie propozycji gry zakończyło się niepowodzeniem.";

    function close() {
        show = false;
        closeModal();
        window.location.reload();
    }

    return (
        <>
            <div className="center-screen">
                <h2 className="thicc-title">{modalTitle}</h2>
                <h5 className="mt-3">{modalText}</h5>
                <button onClick={close} className="primary-button mt-3 white-font">
                    O.K.
                </button>
            </div>
        </>
    );
};

export default SendGameResultModalView;
