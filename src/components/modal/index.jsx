import { Modal, Button, Badge } from 'react-bootstrap';

function DetalleModal({ show, item, onCerrar }) {
  return (
    <Modal show={show} onHide={onCerrar}>
      <Modal.Header closeButton>
        <Modal.Title>{item?.titulo ?? 'Detalles del elemento'}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {item ? (
          <>
            <p><strong>ID:</strong> {item.id}</p>
            <p><strong>Contenido:</strong> {item.contenido}</p>
            <p className="mb-0">
              <strong>Tema:</strong>{' '}
              {item.tema ? (
                <Badge bg="secondary">{item.tema}</Badge>
              ) : (
                <span className="text-muted">Sin tema</span>
              )}
            </p>
          </>
        ) : (
          <p>No hay elemento seleccionado.</p>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onCerrar}>
          Cerrar
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default DetalleModal;