import React, { useContext, useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Input from '../../SubComponents/Input';
import DropDown from '../../SubComponents/DropDown';
import { PropertyContext } from '../../../Context/PropertyContextProvider';
import ClearIcon from '@mui/icons-material/Clear';
import '../../../CSS/CreatePropertyForm.css';

const Edit2 = ({ propertyData }) => {

    const { updateProperty, setUpdateProperty } = useContext(PropertyContext);
    const [selectedImages, setSelectedImages] = useState([]);
    const [selectedBase64, setSelectedBase64] = useState('');

    const handleImageChange = (e) => {
        if (e.target.files) {
            const selected_files = Object.values(e.target.files);

            selected_files.map((file) => {
                let reader = new FileReader();

                reader.onload = function (e) {
                    const result = reader.result;
                    setSelectedImages((prevImages) =>
                        prevImages.concat({ Img: result })
                    );
                    setSelectedBase64((prevImages) =>
                        prevImages.concat({
                            Img: result !== null ? result.split(',')[1] : '',
                        })
                    );
                };

                reader.readAsDataURL(file);
            });
        }
    };

    const handleImageRemove = (e, img) => {
        e.preventDefault();
        setSelectedImages(
            selectedImages.filter((file) => file.Img !== img.Img)
        );
    };

    const handleFeaturedChange = (e) => {
        const isFeatured = e.target.checked;
        setUpdateProperty((prevProperty) => ({
            ...prevProperty,
            IsFeatured: isFeatured?'Y':'N',
        }));
    };

    const handleNegotiableChange = (e) => {
        const isNegotiable = e.target.checked;
        setUpdateProperty((prevProperty) => ({
            ...prevProperty,
            IsNeg: isNegotiable?'Y':'N',
        }));
    };

    const handlePropStatusChange = (e) => {
        const propStatus = e.target.checked;
        setUpdateProperty((prevProperty) => ({
            ...prevProperty,
            PropStatus: propStatus?'Y':'N',
        }));
    };

    const districts = [
        { name: 'Kathmandu', value: '1' },
        { name: 'Bhaktapur', value: '2' },
        { name: 'Lalitpur', value: '3' },
    ];

    const totalAreaUnit = [
        { name: 'Sq. Feet', value: 'S ' },
        { name: 'Acres', value: 'A ' },
        { name: 'Dhur', value: 'D ' },
        { name: 'Kattha', value: 'K ' },
        { name: 'Ropani', value: 'R ' },
        { name: ' Aana', value: 'AA ' },
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
        <Form >
            <Container fluid='md'>
                <Row className='mt-2'>
                    <Col md={12}><Form.Label>YtUrl</Form.Label><Input defaultValue={propertyData?.YtUrl} className='my-form-control' type="text" onChange={(e) => setUpdateProperty({ ...updateProperty, YtUrl: e.target.value })} /></Col>
                </Row>

                <Row className='mt-2'>
                    <Col md={2}><Form.Label>Dining</Form.Label><Input defaultValue={propertyData?.Dining} className='my-form-control' type="number" onChange={(e) => setUpdateProperty({ ...updateProperty, Dining: e.target.value })} /></Col>
                    <Col md={2}><Form.Label>Kitchen</Form.Label><Input defaultValue={propertyData?.Kitchen} type="number" onChange={(e) => setUpdateProperty({ ...updateProperty, Kitchen: e.target.value })} /></Col>
                    <Col md={2}><Form.Label>BedRoom</Form.Label><Input defaultValue={propertyData?.BedRoom} className='my-form-control' type="number" onChange={(e) => setUpdateProperty({ ...updateProperty, BedRoom: e.target.value })} /></Col>
                    <Col md={2}><Form.Label>BathRoom</Form.Label><Input defaultValue={propertyData?.BathRoom} type="number" onChange={(e) => setUpdateProperty({ ...updateProperty, BathRoom: e.target.value })} /></Col>
                    <Col md={2}><Form.Label>Hall</Form.Label><Input defaultValue={propertyData?.Hall} type="number" onChange={(e) => setUpdateProperty({ ...updateProperty, Hall: e.target.value })} /></Col>
                </Row>

                <Row className='mt-2'>
                    <Col md={6}><Form.Label>Total Floor</Form.Label><Input defaultValue={propertyData?.TotalFloor} className='my-form-control' type="text" onChange={(e) => setUpdateProperty({ ...updateProperty, TotalFloor: e.target.value })} /></Col>
                    <Col md={6}><Form.Label>Parking</Form.Label><Input defaultValue={propertyData?.Parking} type="text" onChange={(e) => setUpdateProperty({ ...updateProperty, Parking: e.target.value })} /></Col>
                </Row>

                <Row className='mt-2'>
                    <Col md={6}><Form.Label>Address</Form.Label><Input defaultValue={propertyData?.Address} className='my-form-control' type="text" onChange={(e) => setUpdateProperty({ ...updateProperty, Address: e.target.value })} /></Col>
                    <Col md={6}><Form.Label>Select District</Form.Label><DropDown defaultValue={propertyData?.District} options={districts} info="Select a district" onChange={(e) => setUpdateProperty({ ...updateProperty, District: e.target.value })} /></Col>
                </Row>

                <Row className='mt-2'>
                    <Col md={6}><Form.Label>Latitude</Form.Label><Input defaultValue={propertyData?.Latitude} className='my-form-control' type="text" onChange={(e) => setUpdateProperty({ ...updateProperty, Latitude: e.target.value })} /></Col>
                    <Col md={6}><Form.Label>Longitude</Form.Label><Input defaultValue={propertyData?.Longitude} type="text" onChange={(e) => setUpdateProperty({ ...updateProperty, Longitude: e.target.value })} /></Col>
                </Row>

                <Row className='mt-2'>
                    <Col md={3}><Form.Label>Total Area</Form.Label><Input defaultValue={propertyData?.TotalArea} className='my-form-control' type="text" onChange={(e) => setUpdateProperty({ ...updateProperty, TotalArea: e.target.value })} /></Col>
                    <Col md={3}><Form.Label></Form.Label><DropDown defaultValue={propertyData?.TotalAreaUnit} options={totalAreaUnit} info="Select unit" onChange={(e) => setUpdateProperty({ ...updateProperty, TotalAreaUnit: e.target.value })} /></Col>
                    <Col md={3}><Form.Label>Price</Form.Label><DropDown defaultValue={propertyData?.PricePerUnit} options={pricePer} info="Price Per" onChange={(e) => setUpdateProperty({ ...updateProperty, PricePer: e.target.value })} /></Col>
                    <Col md={3}><Form.Label></Form.Label><Input defaultValue={propertyData?.Price} className='my-form-control' type="number" onChange={(e) => setUpdateProperty({ ...updateProperty, Price: e.target.value })} /></Col>
                </Row>

                <Row className='mt-2'>
                    <Col md={3}><Form.Label>Road Access</Form.Label><Input defaultValue={propertyData?.RoadAccess} type="text" onChange={(e) => setUpdateProperty({ ...updateProperty, RoadAccess: e.target.value })} /></Col>
                    <Col md={3}><Form.Label></Form.Label><DropDown defaultValue={propertyData?.RoadAccessUnit} options={roadAccess} info="Road Access Unit" onChange={(e) => setUpdateProperty({ ...updateProperty, RoadAccessUnit: e.target.value })} /></Col>
                    <Col md={6}><Form.Label></Form.Label><DropDown defaultValue={propertyData?.PropertyFacing} options={propertyFacing} info="Select Property Facing" onChange={(e) => setUpdateProperty({ ...updateProperty, PropertyFacing: e.target.value })} /></Col>
                </Row>

                <Row className='mt-2'>
                    <Col md={12}><Form.Label>Contact</Form.Label><Input defaultValue={propertyData?.Contact} type="number" onChange={(e) => setUpdateProperty({ ...updateProperty, Contact: e.target.value })} /></Col>
                </Row>

                <Row className='mt-2'>
                    <Col md={2} className='d-flex align-items-center '>
                        <input
                            id='featured'
                            type="checkbox"
                            defaultChecked={updateProperty.IsFeatured === 'Y'}
                            onChange={handleFeaturedChange}
                        />
                        <Form.Label htmlFor='featured'>&nbsp; Featured</Form.Label>
                    </Col>
                    <Col md={2} className='d-flex align-items-center'>
                        <input
                            id='negotiable'
                            type="checkbox"
                            defaultChecked={updateProperty.IsNeg === 'Y'}
                            onChange={handleNegotiableChange}
                        />
                        <Form.Label htmlFor='negotiable'>&nbsp; Negotiable</Form.Label>
                    </Col>
                    <Col md={2} className='d-flex align-items-center'>
                        <input
                            id='propStatus'
                            type="checkbox"
                            defaultChecked={updateProperty.PropStatus === 'Y'}
                            onChange={handlePropStatusChange}
                        />
                        <Form.Label htmlFor='propStatus'>&nbsp; PropStatus</Form.Label>
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
            </Container >
        </Form >
    )
}

export default Edit2