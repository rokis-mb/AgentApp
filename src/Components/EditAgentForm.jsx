import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useContext, useEffect, useState } from 'react';
import { AgentContext } from '../Context/AgentContextProvider';
import AddIcon from '@mui/icons-material/Add';

// import '../CSS/EditAgentForm'

export default function EditAgentForm({ agent }) {


    const { Values: agentValues } = agent || {};
    const [agentData] = agentValues || [];

    const { updateAgent, setUpdateAgent } = useContext(AgentContext);
    const [imageData, setImageData] = useState('');



    useEffect(() => {
        setUpdateAgent(
            {
                AuthCode: "r1d3r",
                Flag: "U",
                AgentID: agentData?.AgentID + "",
                UserID: agentData?.UserID,
                FullName: agentData?.FullName,
                Address: agentData?.Address,
                District: agentData?.District ? agentData?.District.toString() : "", // Update this line
                StarGrading: agentData?.StarGrading,
                Academic: agentData?.Academic,
                Professional: agentData?.Professional,
                WorkExp: agentData?.WorkExp,
                ResponseTime: agentData?.ResponseTime,
                ProductCat: agentData?.ProductCat,
                ProductType: agentData?.ProductType,
                Statement: agentData?.Statement,
                Contact: agentData?.Contact,
            });
    }, [agentData, setUpdateAgent])

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                const base64Data = reader.result.split(',')[1]; // Extract base64 data
                setImageData(base64Data);
                setUpdateAgent({ ...updateAgent, Image: base64Data });
            };
            reader.readAsDataURL(file);
        }
    };


    return (
        <Form>
            <Container>
                <Row className=''>
                    <Col className='mb-2' md={4}>
                        <Form.Label>Fullname</Form.Label>
                        <Form.Control type="text" placeholder="FullName" defaultValue={agentData?.FullName} onChange={(e) => setUpdateAgent({ ...updateAgent, FullName: e.target.value })} />
                    </Col>

                    <Col className='mb-2' md={4}>
                        <Form.Label>Address</Form.Label>
                        <Form.Control type="text" defaultValue={agentData?.Address} onChange={(e) => setUpdateAgent({ ...updateAgent, Address: e.target.value })} />
                    </Col>

                    <Col className='mb-2' md={4}>
                        <Form.Label>District</Form.Label>
                        <Form.Select
                            aria-label="Default select example"
                            defaultValue={agentData?.District || ""} // Set the default value for District input field
                            onChange={(e) => setUpdateAgent({ ...updateAgent, District: e.target.value })}
                        >
                            <option value=""> -- Select District --</option>
                            <option value="1">Kathmandu</option>
                            <option value="2">Bhaktapur</option>
                            <option value="3">Lalitpur</option>
                        </Form.Select>
                    </Col>
                </Row>

                <Row className='mt-2'>
                    <Col className='mb-2' md={4}>
                        <Form.Label>Star Grading</Form.Label>
                        <Form.Control type="text" defaultValue={agentData?.GradingRate} onChange={(e) => setUpdateAgent({ ...updateAgent, StarGrading: e.target.value })} />
                    </Col>
                    <Col className='mb-2' md={4}>
                        <Form.Label>Academic</Form.Label>
                        <Form.Control type="text" defaultValue={agentData?.Academic} onChange={(e) => setUpdateAgent({ ...updateAgent, Academic: e.target.value })} />
                    </Col>
                    <Col className='mb-2' md={4}>
                        <Form.Label>Professional</Form.Label>
                        <Form.Control type="text" defaultValue={agentData?.Professional} onChange={(e) => setUpdateAgent({ ...updateAgent, Professional: e.target.value })} />
                    </Col>
                </Row>

                <Row className='mt-2'>
                    <Col className='mb-2' md={4}>
                    <Form.Label>Work Experience</Form.Label>
                        <Form.Control type="text" defaultValue={agentData?.WorkExp} onChange={(e) => setUpdateAgent({ ...updateAgent, WorkExp: e.target.value })} />
                    </Col>
                    <Col className='mb-2' md={4}>
                    <Form.Label>Response Time</Form.Label>
                        <Form.Control type="text" defaultValue={agentData?.ResponseTime} onChange={(e) => setUpdateAgent({ ...updateAgent, ResponseTime: e.target.value })} />
                    </Col>
                    <Col className='mb-2' md={4}>
                    <Form.Label>Product Category</Form.Label>
                        <Form.Control type="text" defaultValue={agentData?.ProdCategory} onChange={(e) => setUpdateAgent({ ...updateAgent, ProductCat: e.target.value })} />
                    </Col>
                </Row>

                <Row className='mt-2'>
                    <Col className='mb-2' md={4}>
                    <Form.Label>Product Type</Form.Label>
                        <Form.Control type="text" defaultValue={agentData?.ProdType} onChange={(e) => setUpdateAgent({ ...updateAgent, ProductType: e.target.value })} />
                    </Col>
                    <Col className='mb-2' md={4}>
                    <Form.Label>Statement</Form.Label>
                        <Form.Control as="textarea" rows={3} defaultValue={agentData?.Statement} onChange={(e) => setUpdateAgent({ ...updateAgent, Statement: e.target.value })} />
                    </Col>
                </Row>

                <Row className='mt-2'>
                    <Col className=' image-box' md={4}>
                        <Form.Control type="file" id="image-input" onChange={handleImageChange} hidden />
                        <div >

                            <Form.Label>Upload Image</Form.Label>
                            <label for="image-input" className='img-input'>
                                <AddIcon />
                            </label>
                        </div>
                        {imageData && <img src={`data:image/png;base64,${imageData}`} alt="Agent" style={{ maxWidth: '100px', objectFit: 'contain', marginLeft: "1rem" }} />}
                    </Col>
                    <Col className='' md={4}>
                    </Col>

                </Row>

            </Container>
        </Form>

    )
}

