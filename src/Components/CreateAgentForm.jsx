import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { AgentContext } from '../Context/AgentContextProvider';
import React, { useContext, useState } from 'react';

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
                    <Col className='mb-2' md={4}><Form.Control type="text" placeholder="Agent Code" onChange={(e) => setAgent({ ...agent, AgentCode: e.target.value })} /></Col>
                    <Col className='mb-2' md={4}><Form.Control type="text" placeholder="FullName" onChange={(e) => setAgent({ ...agent, FullName: e.target.value })} /></Col>
                    <Col className='mb-2' md={4}><Form.Control type="text" placeholder="UserName" onChange={(e) => setAgent({ ...agent, UserName: e.target.value })} /></Col>
                </Row>

                <Row >
                    <Col className='mb-2' md={4}><Form.Control type="password" placeholder="Password" onChange={(e) => setAgent({ ...agent, Password: e.target.value })} /></Col>
                    <Col className='mb-2' md={4}><Form.Control type="text" placeholder="Address" onChange={(e) => setAgent({ ...agent, Address: e.target.value })} /></Col>
                    <Col className='mb-2' md={4}><Form.Select aria-label="Default select example" onChange={(e) => setAgent({ ...agent, District: e.target.value })}>
                        <option>District</option>
                        <option value="1">Kathmandu</option>
                        <option value="2">Bhaktapur</option>
                        <option value="3">Lalitpur</option>
                    </Form.Select></Col>
                </Row>

                <Row >
                    <Col className='mb-2' md={4}><Form.Control type="text" placeholder="Academic" onChange={(e) => setAgent({ ...agent, Academic: e.target.value })} /></Col>
                    <Col className='mb-2' md={4}><Form.Control type="text" placeholder="Professional" onChange={(e) => setAgent({ ...agent, Professional: e.target.value })} /></Col>
                    <Col className='mb-2' md={4}><Form.Control type="text" placeholder="Work Experience" onChange={(e) => setAgent({ ...agent, WorkExp: e.target.value })} /></Col>
                </Row>

                <Row >
                    <Col className='mb-2' md={4}><Form.Control type="text" placeholder="Response Time" onChange={(e) => setAgent({ ...agent, ResponseTime: e.target.value })} /></Col>
                    <Col className='mb-2' md={4}><Form.Control type="text" placeholder="Product Category" onChange={(e) => setAgent({ ...agent, ProductCat: e.target.value })} /></Col>
                    <Col className='mb-2' md={4}><Form.Control type="text" placeholder="Product Type" onChange={(e) => setAgent({ ...agent, ProductType: e.target.value })} /></Col>
                </Row>

                <Row >
                    <Col className='mb-2' md={4}><Form.Control type="number" placeholder="Contact" onChange={(e) => setAgent({ ...agent, Contact: e.target.value })} /></Col>
                    <Col className='mb-2' md={4}><Form.Control type="text" placeholder="Star Grading" onChange={(e) => setAgent({ ...agent, StarGrading: e.target.value })} /></Col>
                    <Col className='mb-2' md={4}><Form.Control as="textarea" rows={3} placeholder="Statement" onChange={(e) => setAgent({ ...agent, Statement: e.target.value })} /></Col>
                </Row>

                <Row>
                    <Col className='mb-2' md={4}>
                        <Form.Control type="file" id = "image-input" onChange={handleImageChange} hidden/>
                        <label for = "image-input">
                            Custom Input image +
                        </label>
                    </Col>
                    <Col className='mb-2' md={4}>
                        {imageData && <img src={`data:image/png;base64,${imageData}`} alt="Agent" style={{ maxWidth: '100px' }} />}
                    </Col>

                </Row>


            </Container>
        </Form>
    )
}

export default CreateAgentForm;