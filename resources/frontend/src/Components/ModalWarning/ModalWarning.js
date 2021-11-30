import { Modal, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { setWarning } from '../../store/actions/warningAction';

function ModalWarning({ text }) {
  const dispatch = useDispatch()
  const warning = useSelector((state) => state.warning)

  function warningClose() {
    dispatch(setWarning(false))
  }


  return (
    <>
      <Modal
        show={warning}
        onHide={warningClose}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header>
          <Modal.Title>Внимание</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {text}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={warningClose}>
            Ok
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalWarning