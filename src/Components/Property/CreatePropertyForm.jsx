import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { PropertyContext } from '../../Context/PropertyContextProvider';
import { useContext, useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import Input from '../SubComponents/Input';
import DropDown from '../SubComponents/DropDown';
import ClearIcon from '@mui/icons-material/Clear';
import TextArea from '../SubComponents/TextArea';
import RadioBtn from '../SubComponents/RadioBtn';

const CreatePropertyForm = () => {

    const { setProperty, property } = useContext(PropertyContext);
    const [c_imageUrl, setC_imageUrl] = useState("");
    const [isClearingImage, setIsClearingImage] = useState(false);
    const [imageData, setImageData] = useState('');

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const url = URL.createObjectURL(file);
            setC_imageUrl(url)
            const reader = new FileReader();
            reader.onload = () => {
                const base64Data = reader.result.split(',')[1]; // Extract base64 data
                setImageData(base64Data);
                setProperty({ ...property, Image: base64Data });
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

    const districts = [
        { name: 'Kathmandu', value: '1' },
        { name: 'Bhaktapur', value: '2' },
        { name: 'Lalitpur', value: '3' },
    ]

    const totalAreaUnit = [
        { name: 'Sq. Feet', value: 'S' },
        { name: 'Acres', value: 'A' },
        { name: 'Dhur', value: 'D' },
        { name: 'Kattha', value: 'K' },
        { name: 'Ropani', value: 'R' },
        { name: ' Aana', value: 'AA' },
    ]

    const pricePer = [
        { name: 'Aana', value: '400' },
        { name: 'Ropani', value: '8000' },
        { name: 'Dhur', value: '55' },
    ]

    const roadAccess = [
        { name: 'Road1', value: '1' },
        { name: 'Road2', value: '2' },
        { name: 'Road3', value: '3' },
    ]

    const propertyFacing = [
        { name: 'North', value: 'N' },
        { name: 'East', value: 'E' },
        { name: 'West', value: 'W' },
        { name: 'South', value: 'S' },
    ]

    return (
        <Form>
            <Container fluid='md'>
                <Row >
                    <Col md={6}><Form.Label>Property No.</Form.Label><Input className='my-form-control' type="text" onChange={(e) => setProperty({ ...property, PropertyNo: e.target.value })} /></Col>
                    <Col md={6}><Form.Label>Built Year</Form.Label><Input type="text" onChange={(e) => setProperty({ ...property, BuiltYear: e.target.value })} /></Col>
                </Row>

                <Row className='mt-2'>
                    <Col md={12}><Form.Label>Title</Form.Label><Input type="text" onChange={(e) => setProperty({ ...property, Title: e.target.value })} /></Col>
                </Row>

                <Row className='mt-2'>
                    <Col md={12}><Form.Label>Slug</Form.Label><Input type="text" onChange={(e) => setProperty({ ...property, Slug: e.target.value })} /></Col>

                </Row>

                <Row className='mt-2'>
                    <Col md={12}><Form.Label>Description</Form.Label><TextArea name="Description" rows='3' onChange={(e) => setProperty({ ...property, Description: e.target.value })} /></Col>
                </Row>

                <Row className='mt-2'>
                    <Col md={6}><Form.Label>Purpose</Form.Label>
                        <Col md={12} className='d-flex'>
                            <RadioBtn label='Rent' name='purpose' value='rent' onChange={(e) => setProperty({ ...property, Purpose: e.target.value })} />
                            <RadioBtn label='Sale' name='purpose' value='sale' onChange={(e) => setProperty({ ...property, Purpose: e.target.value })} />
                        </Col>
                    </Col>
                    <Col md={6}><Form.Label>Type</Form.Label>
                        <Col md={12} className='d-flex'>
                            <RadioBtn label='Residential' name='type' value='residential' onChange={(e) => setProperty({ ...property, PropType: e.target.value })} />
                            <RadioBtn label='Commercial' name='type' value='commercial' onChange={(e) => setProperty({ ...property, PropType: e.target.value })} />
                        </Col>
                    </Col>
                </Row>

                <Row className='mt-2'>
                    <Col md={12}><Form.Label>Category</Form.Label>
                        <Col md={12} className='d-flex'>
                            <RadioBtn label='House' name='category' value='house' onChange={(e) => setProperty({ ...property, Category: e.target.value })} />
                            <RadioBtn label='Land' name='category' value='land' onChange={(e) => setProperty({ ...property, Category: e.target.value })} />
                            <RadioBtn label='Flats' name='category' value='flats' onChange={(e) => setProperty({ ...property, Category: e.target.value })} />
                            <RadioBtn label='Office' name='category' value='office' onChange={(e) => setProperty({ ...property, Category: e.target.value })} />
                            <RadioBtn label='Shutter' name='category' value='shutter' onChange={(e) => setProperty({ ...property, Category: e.target.value })} />
                            <RadioBtn label='Apartment' name='category' value='apartment' onChange={(e) => setProperty({ ...property, Category: e.target.value })} />
                        </Col>
                    </Col>
                </Row>

                <Row className='mt-2'>
                    <Col md={12}><Form.Label>YtUrl</Form.Label><Input className='my-form-control' type="text" onChange={(e) => setProperty({ ...property, YtUrl: e.target.value })} /></Col>
                </Row>

                <Row className='mt-2'>
                    <Col md={2}><Form.Label>Dining</Form.Label><Input className='my-form-control' type="number" onChange={(e) => setProperty({ ...property, Dining: e.target.value })} /></Col>
                    <Col md={2}><Form.Label>Kitchen</Form.Label><Input type="number" onChange={(e) => setProperty({ ...property, Kitchen: e.target.value })} /></Col>
                    <Col md={2}><Form.Label>BedRoom</Form.Label><Input className='my-form-control' type="number" onChange={(e) => setProperty({ ...property, BedRoom: e.target.value })} /></Col>
                    <Col md={2}><Form.Label>BathRoom</Form.Label><Input type="number" onChange={(e) => setProperty({ ...property, BathRoom: e.target.value })} /></Col>
                    <Col md={2}><Form.Label>Hall</Form.Label><Input type="number" onChange={(e) => setProperty({ ...property, Hall: e.target.value })} /></Col>
                </Row>

                <Row className='mt-2'>
                    <Col md={6}><Form.Label>Total Floor</Form.Label><Input className='my-form-control' type="text" onChange={(e) => setProperty({ ...property, TotalFloor: e.target.value })} /></Col>
                    <Col md={6}><Form.Label>Parking</Form.Label><Input type="text" onChange={(e) => setProperty({ ...property, Parking: e.target.value })} /></Col>
                </Row>

                <Row className='mt-2'>
                    <Col md={6}><Form.Label>Address</Form.Label><Input className='my-form-control' type="text" onChange={(e) => setProperty({ ...property, Address: e.target.value })} /></Col>
                    <Col md={6}><Form.Label>Select District</Form.Label><DropDown options={districts} info="Select a property" onChange={(e) => setProperty({ ...property, District: e.target.value })} /></Col>
                </Row>

                <Row className='mt-2'>
                    <Col md={6}><Form.Label>Latitude</Form.Label><Input className='my-form-control' type="text" onChange={(e) => setProperty({ ...property, Latitude: e.target.value })} /></Col>
                    <Col md={6}><Form.Label>Longitude</Form.Label><Input type="text" onChange={(e) => setProperty({ ...property, Longitude: e.target.value })} /></Col>
                </Row>

                <Row className='mt-2'>
                    <Col md={3}><Form.Label>Total Area</Form.Label><Input className='my-form-control' type="text" onChange={(e) => setProperty({ ...property, TotalArea: e.target.value })} /></Col>
                    <Col md={3}><Form.Label></Form.Label><DropDown options={totalAreaUnit} info="Select unit" onChange={(e) => setProperty({ ...property, TotalAreaUnit: e.target.value })} /></Col>
                    <Col md={3}><Form.Label>Price</Form.Label><DropDown options={pricePer} info="Price Per" onChange={(e) => setProperty({ ...property, PricePer: e.target.value })} /></Col>
                    <Col md={3}><Form.Label></Form.Label><Input className='my-form-control' type="text" disabled='true' onChange={(e) => setProperty({ ...property, Price: e.target.value })} /></Col>
                </Row>

                <Row className='mt-2'>
                    <Col md={3}><Form.Label>Road Access</Form.Label><Input type="text" onChange={(e) => setProperty({ ...property, RoadAccess: e.target.value })} /></Col>
                    <Col md={3}><Form.Label></Form.Label><DropDown options={roadAccess} info="Select unit" onChange={(e) => setProperty({ ...property, RoadAccessUnit: e.target.value })} /></Col>
                    <Col md={6}><Form.Label></Form.Label><DropDown options={propertyFacing} info="Select Property Facing" onChange={(e) => setProperty({ ...property, PropertyFacing: e.target.value })} /></Col>
                </Row>

                <Row className='mt-2'>
                    <Col md={12}><Form.Label>Contact</Form.Label><Input type="number" onChange={(e) => setProperty({ ...property, Contact: e.target.value })} /></Col>
                </Row>

                <Row className='mt-2'>
                    <Col md={2} className='d-flex align-items-center'>
                        <input type="checkbox" onChange={(e) => setProperty({ ...property, IsFeatured: e.target.value })} />&nbsp;
                        <Form.Label>Featured</Form.Label>
                    </Col>
                    <Col md={2} className='d-flex align-items-center'>
                        <input type="checkbox" onChange={(e) => setProperty({ ...property, IsNeg: e.target.value })} />&nbsp;
                        <Form.Label>Negotiable</Form.Label>
                    </Col>
                    <Col md={2} className='d-flex align-items-center'>
                        <input type="checkbox" onChange={(e) => setProperty({ ...property, PropStatus: e.target.value })} />&nbsp;
                        <Form.Label>PropStatus</Form.Label>
                    </Col>
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

export default CreatePropertyForm