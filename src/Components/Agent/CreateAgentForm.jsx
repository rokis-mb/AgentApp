import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { AgentContext } from '../../Context/AgentContextProvider';
import React, { useContext, useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import '../../CSS/CreateAgentForm.css'
import Input from '../SubComponents/Input';
import DropDown from '../SubComponents/DropDown';
import ClearIcon from '@mui/icons-material/Clear';


const CreateAgentForm = () => {

    const { setAgent, agent } = useContext(AgentContext);
    const [imageData, setImageData] = useState('');
    const [c_imageUrl, setC_imageUrl] = useState("");
    const [isClearingImage, setIsClearingImage] = useState(false);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const url = URL.createObjectURL(file);
            setC_imageUrl(url)
            const reader = new FileReader();
            reader.onload = () => {
                const base64Data = reader.result.split(',')[1]; // Extract base64 data
                setImageData(base64Data);
                setAgent({ ...agent, Image: base64Data });
            };
            reader.readAsDataURL(file);
        } else {
            setIsClearingImage(true); // Set the flag when clearing the image
        }
    };

    const clearImage = () => {
        setC_imageUrl('');
        // Clear the file input value to prevent it from triggering onChange event again
        setIsClearingImage(true);
        const fileInput = document.getElementById('image-input');
        if (fileInput) {
            fileInput.value = '';
        }
    };

    const handleFileInputChange = (e) => {
        if (!isClearingImage) {
            handleImageChange(e);
        } else {
            setIsClearingImage(false); // Reset the flag
        }
    };

    const options = [
        { name: 'Kathmandu', value: '1' },
        { name: 'Bhaktapur', value: '2' },
        { name: 'Lalitpur', value: '3' },
    ]

    return (
        <Form>
            <Container>
                <Row >
                    <Col md={4}><Form.Label>Agent Code</Form.Label><Input className='my-form-control' type="text" onChange={(e) => setAgent({ ...agent, AgentCode: e.target.value })} /></Col>
                    <Col md={4}><Form.Label>Fullname</Form.Label><Input type="text" onChange={(e) => setAgent({ ...agent, FullName: e.target.value })} /></Col>
                    <Col md={4}><Form.Label>Username</Form.Label><Input type="text" onChange={(e) => setAgent({ ...agent, UserName: e.target.value })} /></Col>
                </Row>

                <Row className='mt-2'>
                    <Col md={4}><Form.Label>Password</Form.Label><Input type="password" onChange={(e) => setAgent({ ...agent, Password: e.target.value })} /></Col>
                    <Col md={4}><Form.Label>Address</Form.Label><Input type="text" onChange={(e) => setAgent({ ...agent, Address: e.target.value })} /></Col>
                    <Col md={4}><Form.Label>District</Form.Label>
                        <DropDown options={options} onChange={(e) => setAgent({ ...agent, District: e.target.value })} />
                    </Col>
                </Row>

                <Row className='mt-2'>
                    <Col md={4}><Form.Label>Academic</Form.Label><Input type="text" onChange={(e) => setAgent({ ...agent, Academic: e.target.value })} /></Col>
                    <Col md={4}><Form.Label>Professional</Form.Label><Input type="text" onChange={(e) => setAgent({ ...agent, Professional: e.target.value })} /></Col>
                    <Col md={4}><Form.Label>Work Experience</Form.Label><Input type="text" onChange={(e) => setAgent({ ...agent, WorkExp: e.target.value })} /></Col>
                </Row>

                <Row className='mt-2'>
                    <Col md={4}><Form.Label>Response Time</Form.Label><Input type="text" onChange={(e) => setAgent({ ...agent, ResponseTime: e.target.value })} /></Col>
                    <Col md={4}><Form.Label>Product Category</Form.Label><Input type="text" onChange={(e) => setAgent({ ...agent, ProductCat: e.target.value })} /></Col>
                    <Col md={4}><Form.Label>Product Type</Form.Label><Input type="text" onChange={(e) => setAgent({ ...agent, ProductType: e.target.value })} /></Col>
                </Row>

                <Row className='mt-2'>
                    <Col md={4}><Form.Label>Contact</Form.Label><Input type="number" onChange={(e) => setAgent({ ...agent, Contact: e.target.value })} /></Col>
                    <Col md={4}><Form.Label>Star Grading</Form.Label><Input type="text" onChange={(e) => setAgent({ ...agent, StarGrading: e.target.value })} /></Col>
                    <Col md={4}><Form.Label>Statement</Form.Label><Input as="textarea" rows={3} onChange={(e) => setAgent({ ...agent, Statement: e.target.value })} /></Col>
                </Row>

                <Row className='mt-2'>
                    <Col className=' image-box' md={4}>
                        <Form.Control
                            type="file"
                            id="image-input"
                            onChange={handleFileInputChange}
                            hidden
                        />

                        <div className='d-flex flex-column justify-content-center'>
                            <Form.Label className='d-flex justify-content-center'>Upload Image</Form.Label>
                            <label
                                htmlFor="image-input"
                                className='img-input'
                                style={{
                                    backgroundImage: `url('${c_imageUrl}')`,
                                    backgroundSize: 'cover',
                                    backgroundRepeat: 'no-repeat',
                                    backgroundPosition: 'center',
                                }}
                            >
                                {!c_imageUrl ? (
                                    <AddIcon fontSize='large' />
                                ) : (
                                    <ClearIcon fontSize='large' onClick={clearImage} />
                                )}
                            </label>
                        </div>
                        {/* {imageData && <img src={`data:image/png;base64,${imageData}`} alt="Agent" style={{ maxWidth: '100px', objectFit: 'contain', marginLeft: "1rem" }} />} */}
                    </Col>
                    <Col md={4}>
                    </Col>

                </Row>


            </Container>
        </Form>
    )
}

export default CreateAgentForm;