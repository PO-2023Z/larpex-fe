import { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

interface VerdictJustificationProps {
  onClose: () => void;
  onSend: (justification: string) => void;
}

const VerdictJustificationView: React.FC<VerdictJustificationProps> = ({
  onClose,
  onSend,
}) => {
  const [justification, setJustification] = useState("");

  const handleSend = () => {
    if (justification.trim() !== "") {
      onSend(justification);
      onClose();
    }
  };

  return (
    <Modal show={true} onHide={onClose} backdrop="static">
      <Modal.Header closeButton>
        <Modal.Title>Uzasadnienie werdyktu</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form.Group controlId="justification">
          <Form.Label>Poniżej wprowadź uzasadnienie:</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            value={justification}
            onChange={(e) => setJustification(e.target.value)}
          />
        </Form.Group>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={handleSend}>
          Wyślij
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default VerdictJustificationView;
