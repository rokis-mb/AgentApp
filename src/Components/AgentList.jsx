import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CreateAgentForm from './CreateAgentForm';
import Modal from 'react-bootstrap/Modal';
import AgentTable from './AgentTable';
import { AgentContext } from '../Context/AgentContextProvider';
import { useContext, useState } from 'react'
import Form from 'react-bootstrap/Form';


import '../CSS/AgentList.css'
import { useSidebarContext } from '../Context/SidebarContext';
import SearchBox from './SubComponents/SearchBox';

const AgentList = () => {

    const { sidebarOpen } = useSidebarContext();

    // States
    const [show, setShow] = useState(false);
    const { agent } = useContext(AgentContext);

    const [searchValue, setSearchValue] = useState('');

    const handleSearchChange = (event) => {
        setSearchValue(event.target.value);
    };


    const handleClose = () => {
        setShow(false)
    }

    const handleOpen = () => {
        setShow(true)
    }

    function handleAddButton() {
        handleClose();
        createAgent(agent);
    }

    async function createAgent(data) {
        try {

            await fetch("https://testing.esnep.com/happyhomes/api/admin/agent", {
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

                            <SearchBox/>
                        </Col>
                    </Row>
                </Container>
                <Modal show={show} onHide={handleClose} backdrop='static' keyboard={false}>
                    <Modal.Header closeButton>
                        <Modal.Title>Super Agent</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <CreateAgentForm />
                    </Modal.Body>
                    <Modal.Footer>
                        <Button className='addBtn' onClick={handleAddButton}>
                            Add Agent
                        </Button>
                    </Modal.Footer>
                </Modal>

                <AgentTable />
            </div>
        </div>
    )
}
export default AgentList;