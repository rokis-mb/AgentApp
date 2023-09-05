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
import CreatePropertyForm from './CreatePropertyForm';

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
        createProperty(property);
    }

    async function createProperty(data) {
        try {

            await fetch("https://testing.esnep.com/happyhomes/api/admin/property", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Signature": "p0m76"
                },
                body: JSON.stringify(data)
            })
        }
        catch (error) {
            console.log(error)
        }
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
                        <Modal.Title>Create Property</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <CreatePropertyForm/>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button className='addBtn' onClick={handleAddButton}>
                            Add Property
                        </Button>
                    </Modal.Footer>
                </Modal>
                <PropertyTable />
            </div>
        </div>
    )
}

export default PropertyList