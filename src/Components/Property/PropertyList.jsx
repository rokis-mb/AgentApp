import { useSidebarContext } from '../../Context/SidebarContext';
import SearchBox from '../SubComponents/SearchBox';
import { PropertyContext } from '../../Context/PropertyContextProvider';
import PropertyTable from './PropertyTable';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Modal from 'react-bootstrap/Modal';
import { useContext, useEffect, useState } from 'react'
import CreatePropertyForm from './CreatePropertyForm';
import FilterDropDown from '../SubComponents/FilterDropDown';
import '../../CSS/PropertyList.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const PropertyList = () => {

    const [show, setShow] = useState(false);
    const { property, createFormStep, setCreateFormStep } = useContext(PropertyContext);

    const [selectedPurposeFilter, setSelectedPurposeFilter] = useState("-1")
    const [selectedCategoryFilter, setSelectedCategoryFilter] = useState("-1")
    const [searchInputValue, setSearchInputValue] = useState("")
    const [sendSearchInputValue, setSendSearchInputValue] = useState("");

    const handleClose = () => {
        setShow(false)
        setCreateFormStep(1)
    }

    const handleOpen = () => {
        setShow(true)
    }

    function handleAddButton() {
        handleClose();
        createProperty(property);
    }

    const purposeOptions = [
        { name: 'All', value: '-1' },
        { name: 'Rent', value: 'R' },
        { name: 'Sale', value: 'S' },
    ]

    const CategoryOptions = [
        { name: 'All', value: '-1' },
        { name: 'House', value: 'House' },
        { name: 'Land', value: 'Land' },
        { name: 'Flat', value: 'Flat' },
        { name: 'Office', value: 'Office' },
        { name: 'Shutter', value: 'Shutter' },
        { name: 'Apartment', value: 'Apartment' },
    ]

    const handleClear  = () =>{
        setSearchInputValue("")
    }
    
    useEffect(()=>{
        setSendSearchInputValue(searchInputValue)
    }, [searchInputValue])

    function convertNumericValuesToStrings(data) {
        const newData = { ...data };

        for (const key in newData) {
            if (typeof newData[key] === 'number') {
                newData[key] = newData[key].toString();
            }
        }

        return newData;
    }

    async function createProperty(data) {
        try {
            if (data) {
                const convertedData = convertNumericValuesToStrings(data);
                const jsonData = JSON.stringify({ ...convertedData, ShopID: "1" });
                console.log("JSON Data:", jsonData); // Log the JSON data to check if it's valid
                await fetch("https://testing.esnep.com/happyhomes/api/admin/property", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "Signature": "p0m76"
                    },
                    body: jsonData
                });
            } else {
                console.log("Data is empty or invalid.");
            }
        } catch (error) {
            console.error("Error:", error);
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
                        <Col sm='auto' title='pdf' style={{fontSize: 'x-large', color: 'red', cursor: 'pointer'}}>
                            <FontAwesomeIcon icon='fa-solid fa-file-pdf' />
                        </Col>
                        <Col sm='auto' title='Excel' style={{fontSize: 'x-large', color: 'green', cursor: 'pointer'}}>
                            <FontAwesomeIcon icon='fa-solid fa-file-excel' />
                        </Col>
                    </Row>
                    <hr />
                    <Row className='justify-content-md-between align-items-end'>
                        <Col sm='auto' className='mb-2' style={{ width: '25rem' }}>
                            <div className='d-flex'>
                                <div className='purpose-dropdown'>
                                    Purpose:
                                    <FilterDropDown onChange={(e) => { setSelectedPurposeFilter(e.target.value) }} options={purposeOptions} value={selectedPurposeFilter} />
                                </div>
                                <div className='category-dropdown'>
                                    Category:
                                    <FilterDropDown onChange={(e) => { setSelectedCategoryFilter(e.target.value) }} options={CategoryOptions} value={selectedCategoryFilter} />
                                </div>
                            </div>
                        </Col>
                        <Col sm='auto' className='mb-2'>
                            <SearchBox border={true} handleClear={handleClear} onChange={(e)=>setSearchInputValue(e.target.value)}/>
                        </Col>
                    </Row>
                </Container>
                <Modal show={show} onHide={handleClose} backdrop='static' keyboard={false}>
                    <Modal.Header closeButton>
                        <Modal.Title>Create Property</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <CreatePropertyForm />
                    </Modal.Body>
                    <Modal.Footer>
                        {createFormStep === 2 ? (<Button className='addBtn' onClick={handleAddButton}>
                            Add Property
                        </Button>):<></>}
                        
                    </Modal.Footer>
                </Modal>
                <PropertyTable categoryFilter={selectedCategoryFilter} purposeFilter={selectedPurposeFilter} searchBoxFilter = {sendSearchInputValue}/>
            </div>
        </div>
    )
}

export default PropertyList