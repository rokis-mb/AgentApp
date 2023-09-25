import React, {useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Input from '../SubComponents/Input';
import DropDown from '../SubComponents/DropDown';
import ClearIcon from '@mui/icons-material/Clear';
import '../../CSS/CreatePropertyForm.css';

export default function Step2({ property, setProperty }){

    const [selectedImages, setSelectedImages] = useState([]);
    const [selectedBase64, setSelectedBase64] = useState('');


    const handleImageChange = (e) => {
        if (e.target.files) {
            console.log(e.target.files)
            const selected_files = Object.values(e.target.files);

            selected_files.map((file) => {
                let reader = new FileReader();

                reader.onload = function (e) {
                    const result = reader.result;
                    setSelectedImages((prevImages) => {

                        return prevImages.concat({ Img: result })
                    }
                    );
                    setSelectedBase64((prevImages) =>
                        prevImages.concat({
                            Img: result !== null ? result.split(',')[1] : '',
                        })
                    );
                    console.log(selectedBase64)

                };

                reader.readAsDataURL(file);
            });
        }
    };

    useEffect(() => {
        setProperty(prevProperty => ({
            ...prevProperty,
            "Images": selectedImages.map(x => ({ Values: x.Img.split(',')[1] }))
        }))
    }, [selectedImages])

    const handleImageRemove = (e, img) => {
        e.preventDefault();
        setSelectedImages(
            selectedImages.filter((file) => file.Img !== img.Img)
        );
    };

    const handleFeaturedChange = (e) => {
        const isFeatured = e.target.checked;
        setProperty((prevProperty) => ({
            ...prevProperty,
            IsFeatured: isFeatured ? "Y" : "N",
        }));
    };

    const handleNegotiableChange = (e) => {
        const isNegotiable = e.target.checked;
        setProperty((prevProperty) => ({
            ...prevProperty,
            IsNeg: isNegotiable ? "Y" : "N",
        }));
    };

    const handlePropStatusChange = (e) => {
        const propStatus = e.target.checked;
        setProperty((prevProperty) => ({
            ...prevProperty,
            PropStatus: propStatus ? "Y" : "N",
        }));
    };

    const districts = [
        { name: 'Kathmandu', value: '1' },
        { name: 'Bhaktapur', value: '2' },
        { name: 'Lalitpur', value: '3' },
    ];

    const totalAreaUnit = [
        { name: 'Sq. Feet', value: 'S' },
        { name: 'Acres', value: 'A' },
        { name: 'Dhur', value: 'D' },
        { name: 'Kattha', value: 'K' },
        { name: 'Ropani', value: 'R' },
        { name: ' Aana', value: 'AA' },
    ];

    const pricePer = [
        { name: 'Aana', value: 'AA' },
        { name: 'Ropani', value: 'R' },
        { name: 'Dhur', value: 'D' },
    ];

    const roadAccess = [
        { name: 'Meter', value: 'M' },
        { name: 'Kilometer', value: 'K' },
        { name: 'Feet', value: 'F' },
    ];

    const propertyFacing = [
        { name: 'North', value: 'N' },
        { name: 'East', value: 'E' },
        { name: 'West', value: 'W' },
        { name: 'South', value: 'S' },
    ];

    return (
        <Form>
            <Container fluid='lg'>
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
                    <Col md={6}><Form.Label>Select District</Form.Label><DropDown options={districts} info="Select a district" onChange={(e) => setProperty({ ...property, District: e.target.value })} /></Col>
                </Row>

                <Row className='mt-2'>
                    <Col md={6}><Form.Label>Latitude</Form.Label><Input className='my-form-control' type="text" onChange={(e) => setProperty({ ...property, Latitude: e.target.value })} /></Col>
                    <Col md={6}><Form.Label>Longitude</Form.Label><Input type="text" onChange={(e) => setProperty({ ...property, Longitude: e.target.value })} /></Col>
                </Row>

                <Row className='mt-2'>
                    <Col md={3}><Form.Label>Total Area</Form.Label><Input className='my-form-control' type="text" onChange={(e) => setProperty({ ...property, TotalArea: e.target.value })} /></Col>
                    <Col md={3}><Form.Label></Form.Label><DropDown options={totalAreaUnit} info="Select unit" onChange={(e) => setProperty({ ...property, TotalAreaUnit: e.target.value })} /></Col>
                    <Col md={3}><Form.Label>Price</Form.Label><DropDown options={pricePer} info="Price Per" onChange={(e) => setProperty({ ...property, PricePer: e.target.value })} /></Col>
                    <Col md={3}><Form.Label></Form.Label><Input className='my-form-control' type="number" onChange={(e) => setProperty({ ...property, Price: e.target.value })} /></Col>
                </Row>

                <Row className='mt-2'>
                    <Col md={3}><Form.Label>Road Access</Form.Label><Input type="text" onChange={(e) => setProperty({ ...property, RoadAccess: e.target.value })} /></Col>
                    <Col md={3}><Form.Label></Form.Label><DropDown options={roadAccess} info="Road Access Unit" onChange={(e) => setProperty({ ...property, RoadAccessUnit: e.target.value })} /></Col>
                    <Col md={6}><Form.Label></Form.Label><DropDown options={propertyFacing} info="Select Property Facing" onChange={(e) => setProperty({ ...property, PropertyFacing: e.target.value })} /></Col>
                </Row>

                <Row className='mt-2'>
                    <Col md={12}><Form.Label>Contact</Form.Label><Input type="number" onChange={(e) => setProperty({ ...property, Contact: e.target.value })} /></Col>
                </Row>

                <Row className='mt-2'>
                    <Col md={2} className='d-flex align-items-center'>
                        <input
                            id='featured'
                            type="checkbox"
                            checked={property.IsFeatured}
                            onChange={handleFeaturedChange}
                        />
                        <Form.Label htmlFor='featured'>&nbsp;Featured</Form.Label>
                    </Col>
                    <Col md={2} className='d-flex align-items-center'>
                        <input
                            id='negotiable'
                            type="checkbox"
                            checked={property.IsNeg}
                            onChange={handleNegotiableChange}
                        />
                        <Form.Label htmlFor='negotiable'>&nbsp;Negotiable</Form.Label>
                    </Col>
                    <Col md={2} className='d-flex align-items-center'>
                        <input
                            id='propStatus'
                            type="checkbox"
                            checked={property.PropStatus}
                            onChange={handlePropStatusChange}
                        />
                        <Form.Label htmlFor='propStatus'>&nbsp;PropStatus</Form.Label>
                    </Col>
                </Row>


                <Row className='mt-2'>
                    <section>
                        <label className="multi-label">
                            + Add Images
                            <br />
                            <span>up to 10 images</span>
                            <input className="multi-input"
                                type="file"
                                name="images"
                                onChange={handleImageChange}
                                multiple
                                accept="image/png , image/jpeg, image/webp"
                            />
                        </label>
                        <br />
                        {selectedImages.length > 0 &&
                            (selectedImages.length > 10 ? (
                                <p className="error">
                                    You can't upload more than 10 images! <br />
                                    <span>
                                        Please delete <b> {selectedImages.length - 10} </b> of them{" "}
                                    </span>
                                </p>
                            ) : (
                                <span
                                    className="upload-btn"
                                >
                                    {selectedImages.length} Image Selected
                                </span>
                            ))}
                        <div className="images">
                            {selectedImages &&
                                selectedImages.map((image, i) => {
                                    return (
                                        <div key={i} className="image">
                                            <img className='multi-img' src={image.Img} height="200" alt="upload" />
                                            <button onClick={(e) => handleImageRemove(e, image)}>
                                                <ClearIcon />
                                            </button>
                                        </div>
                                    );
                                })}
                        </div>
                    </section>
                    <Col md={4}>
                    </Col>
                </Row>
            </Container>
        </Form>
    )
}
