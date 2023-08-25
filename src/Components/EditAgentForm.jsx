import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useContext, useEffect, useState } from 'react';
import { AgentContext } from '../Context/AgentContextProvider';

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
                <Row >
                    <Col className='mb-2' md={4}>
                        <Form.Control type="text" placeholder="FullName" defaultValue={agentData?.FullName} onChange={(e) => setUpdateAgent({ ...updateAgent, FullName: e.target.value })} />
                    </Col>

                    <Col className='mb-2' md={4}>

                        <Form.Control type="text" placeholder="Address" defaultValue={agentData?.Address} onChange={(e) => setUpdateAgent({ ...updateAgent, Address: e.target.value })} />
                    </Col>

                    <Col className='mb-2' md={4}>
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

                <Row >
                    <Col className='mb-2' md={4}>
                        <Form.Control type="text" placeholder="Star Grading" defaultValue={agentData?.GradingRate} onChange={(e) => setUpdateAgent({ ...updateAgent, StarGrading: e.target.value })} />
                    </Col>
                    <Col className='mb-2' md={4}>
                        <Form.Control type="text" placeholder="Academic" defaultValue={agentData?.Academic} onChange={(e) => setUpdateAgent({ ...updateAgent, Academic: e.target.value })} />
                    </Col>
                    <Col className='mb-2' md={4}>
                        <Form.Control type="text" placeholder="Professional" defaultValue={agentData?.Professional} onChange={(e) => setUpdateAgent({ ...updateAgent, Professional: e.target.value })} />
                    </Col>
                </Row>

                <Row >
                    <Col className='mb-2' md={4}>
                        <Form.Control type="text" placeholder="Work Experience" defaultValue={agentData?.WorkExp} onChange={(e) => setUpdateAgent({ ...updateAgent, WorkExp: e.target.value })} />
                    </Col>
                    <Col className='mb-2' md={4}>
                        <Form.Control type="text" placeholder="Response Time" defaultValue={agentData?.ResponseTime} onChange={(e) => setUpdateAgent({ ...updateAgent, ResponseTime: e.target.value })} />
                    </Col>
                    <Col className='mb-2' md={4}>
                        <Form.Control type="text" placeholder="Product Category" defaultValue={agentData?.ProdCategory} onChange={(e) => setUpdateAgent({ ...updateAgent, ProductCat: e.target.value })} />
                    </Col>
                </Row>

                <Row >
                    <Col className='mb-2' md={4}>
                        <Form.Control type="text" placeholder="Product Type" defaultValue={agentData?.ProdType} onChange={(e) => setUpdateAgent({ ...updateAgent, ProductType: e.target.value })} />
                    </Col>
                    <Col className='mb-2' md={4}>
                        <Form.Control as="textarea" rows={3} placeholder="Statement" defaultValue={agentData?.Statement} onChange={(e) => setUpdateAgent({ ...updateAgent, Statement: e.target.value })} />
                    </Col>
                </Row>

                <Row >
                    <Col className='mb-2' md={4}>
                        <Form.Control type="file" onChange={handleImageChange} />
                    </Col>
                    <Col className='mb-2' md={4}>
                        {imageData && <img src={`data:image/png;base64,${imageData}`} alt="Agent" style={{ maxWidth: '100px' }} />}
                    </Col>
                </Row>

            </Container>
        </Form>

    )
}

