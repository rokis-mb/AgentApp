import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { AgentContext } from '../Context/AgentContextProvider';
import React, { useContext, useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import '../CSS/CreateAgentForm.css'

const CreateAgentForm = () => {

    const { setAgent, agent } = useContext(AgentContext);
    const [imageData, setImageData] = useState('');

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                const base64Data = reader.result.split(',')[1]; // Extract base64 data
                setImageData(base64Data);
                setAgent({ ...agent, Image: base64Data });
            };
            reader.readAsDataURL(file);
        }
    };


    return (
        <Form>
            <Container>
                <Row >
                    <Col md={4}><Form.Label>Agent Code</Form.Label><Form.Control className='my-form-control' type="text" onChange={(e) => setAgent({ ...agent, AgentCode: e.target.value })} /></Col>
                    <Col md={4}><Form.Label>Fullname</Form.Label><Form.Control type="text" onChange={(e) => setAgent({ ...agent, FullName: e.target.value })} /></Col>
                    <Col md={4}><Form.Label>Username</Form.Label><Form.Control type="text" onChange={(e) => setAgent({ ...agent, UserName: e.target.value })} /></Col>
                </Row>

                <Row className='mt-2'>
                    <Col md={4}><Form.Label>Password</Form.Label><Form.Control type="password" onChange={(e) => setAgent({ ...agent, Password: e.target.value })} /></Col>
                    <Col md={4}><Form.Label>Address</Form.Label><Form.Control type="text" onChange={(e) => setAgent({ ...agent, Address: e.target.value })} /></Col>
                    <Col md={4}><Form.Label>District</Form.Label><Form.Select aria-label="Default select example" onChange={(e) => setAgent({ ...agent, District: e.target.value })}>
                        <option>District</option>
                        <option value="1">Kathmandu</option>
                        <option value="2">Bhaktapur</option>
                        <option value="3">Lalitpur</option>
                    </Form.Select></Col>
                </Row>

                <Row className='mt-2'>
                    <Col md={4}><Form.Label>Academic</Form.Label><Form.Control type="text" onChange={(e) => setAgent({ ...agent, Academic: e.target.value })} /></Col>
                    <Col md={4}><Form.Label>Professional</Form.Label><Form.Control type="text" onChange={(e) => setAgent({ ...agent, Professional: e.target.value })} /></Col>
                    <Col md={4}><Form.Label>Work Experience</Form.Label><Form.Control type="text" onChange={(e) => setAgent({ ...agent, WorkExp: e.target.value })} /></Col>
                </Row>

                <Row className='mt-2'>
                    <Col md={4}><Form.Label>Response Time</Form.Label><Form.Control type="text" onChange={(e) => setAgent({ ...agent, ResponseTime: e.target.value })} /></Col>
                    <Col md={4}><Form.Label>Product Category</Form.Label><Form.Control type="text" onChange={(e) => setAgent({ ...agent, ProductCat: e.target.value })} /></Col>
                    <Col md={4}><Form.Label>Product Type</Form.Label><Form.Control type="text" onChange={(e) => setAgent({ ...agent, ProductType: e.target.value })} /></Col>
                </Row>

                <Row className='mt-2'>
                    <Col md={4}><Form.Label>Contact</Form.Label><Form.Control type="number" onChange={(e) => setAgent({ ...agent, Contact: e.target.value })} /></Col>
                    <Col md={4}><Form.Label>Star Grading</Form.Label><Form.Control type="text" onChange={(e) => setAgent({ ...agent, StarGrading: e.target.value })} /></Col>
                    <Col md={4}><Form.Label>Statement</Form.Label><Form.Control as="textarea" rows={3} onChange={(e) => setAgent({ ...agent, Statement: e.target.value })} /></Col>
                </Row>

                <Row className='mt-2'>
                    <Col className=' image-box' md={4}>
                        <Form.Control type="file" id="image-input" onChange={handleImageChange} hidden />
                        <div >

                            <Form.Label>Upload Image</Form.Label>
                            <label for="image-input" className='img-input'>
                                <AddIcon fontSize='large'/>
                            </label>
                        </div>
                        {imageData && <img src={`data:image/png;base64,${imageData}`} alt="Agent" style={{ maxWidth: '100px', objectFit: 'contain', marginLeft: "1rem" }} />}
                    </Col>
                    <Col md={4}>
                    </Col>

                </Row>


            </Container>
        </Form>
    )
}

export default CreateAgentForm;