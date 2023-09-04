import { useSidebarContext } from '../../Context/SidebarContext';
import SearchBox from '../SubComponents/SearchBox';
import { PropertyContext } from '../../Context/PropertyContextProvider';
import PropertyTable from './PropertyTable';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Modal from 'react-bootstrap/Modal';
import { useContext, useState } from 'react'

const PropertyList = () => {

    const [show, setShow] = useState(false);
    const { property } = useContext(PropertyContext);

    const handleClose = () => {
        setShow(false)
    }

    const handleOpen = () => {
        setShow(true)
    }

    function handleAddButton() {
        handleClose();
        // createAgent(property);
    }

    const { sidebarOpen } = useSidebarContext();
    return (
        <div className={`p-3 table-container container-agent ${sidebarOpen ? 'open-container' : 'close'}`}>
            <div className='agent-table-header'>
                <h2>Department</h2>
                <span>Expires in: 1 yrs 5 months 1 days</span>
            </div>
            <div className=''>
                <Container >
                    <Row className='justify-content-md-end'>
                        <Col sm='auto'>
                            <Button onClick={handleOpen} className='addBtn' size="md"> + Add New</Button>
                        </Col>
                    </Row>
                    <hr />
                    <Row className='justify-content-md-end'>
                        <Col sm='auto' className='mb-2'>
                            <SearchBox />
                        </Col>
                    </Row>
                </Container>
                <Modal show={show} onHide={handleClose} backdrop='static' keyboard={false}>
                    <Modal.Header closeButton>
                        <Modal.Title>Super Agent</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        Hello
                    </Modal.Body>
                    <Modal.Footer>
                        <Button className='addBtn' onClick={handleAddButton}>
                            Add Agent
                        </Button>
                    </Modal.Footer>
                </Modal>
                <PropertyTable />
            </div>
        </div>
    )
}

export default PropertyList