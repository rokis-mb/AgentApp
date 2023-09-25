import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CreateAgentForm from './CreateAgentForm';
import Modal from 'react-bootstrap/Modal';
import AgentTable from './AgentTable';
import { AgentContext } from '../../Context/AgentContextProvider';
import { useContext, useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../../CSS/AgentList.css'
import { useSidebarContext } from '../../Context/SidebarContext';
import SearchBox from '../SubComponents/SearchBox';

const AgentList = () => {

    const { sidebarOpen } = useSidebarContext();

    // States
    const [show, setShow] = useState(false);
    const { agent } = useContext(AgentContext);
    const [searchInputValue, setSearchInputValue] = useState("")
    const [sendSearchInputValue, setSendSearchInputValue] = useState("");

    const handleClear  = () =>{
        setSearchInputValue("")
    }
    
    useEffect(()=>{
        setSendSearchInputValue(searchInputValue)
    }, [searchInputValue])


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
                        <Col sm='auto' title='pdf' style={{fontSize: 'x-large', color: 'red', cursor: 'pointer'}}>
                            <FontAwesomeIcon icon='fa-solid fa-file-pdf' />
                        </Col>
                        <Col sm='auto' title='excel' style={{fontSize: 'x-large', color: 'green', cursor: 'pointer'}}>
                            <FontAwesomeIcon icon='fa-solid fa-file-excel' />
                        </Col>
                    </Row>
                    <hr />
                    <Row className='justify-content-md-end'>
                        <Col sm='auto' className='mb-2'>
                        <SearchBox border={true} handleClear={handleClear} onChange={(e)=>setSearchInputValue(e.target.value)}/>
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
                <AgentTable searchBoxFilter = {sendSearchInputValue}/>
            </div>
        </div>
    )
}
export default AgentList;