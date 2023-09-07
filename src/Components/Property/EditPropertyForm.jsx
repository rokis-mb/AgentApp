import React, { useContext, useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Input from '../SubComponents/Input';
import DropDown from '../SubComponents/DropDown';
import TextArea from '../SubComponents/TextArea';
import RadioBtn from '../SubComponents/RadioBtn';
import { PropertyContext } from '../../Context/PropertyContextProvider';
import ClearIcon from '@mui/icons-material/Clear';
import '../../CSS/CreatePropertyForm.css';

const EditPropertyForm = ({ property }) => {
    const { updateProperty, setUpdateProperty } = useContext(PropertyContext);

    const { Values: propertyValues } = property || {};
    const [propertyData] = propertyValues || [];

    const [selectedImages, setSelectedImages] = useState([]);
    const [selectedBase64, setSelectedBase64] = useState('');
    const [selectedType, setSelectedType] = useState('R');
    const [selectedPurpose, setSelectedPurpose] = useState('R');
    const [selectedCategory, setSelectedCategory] = useState('H');
    const [title, setTitle] = useState('');
    const [slug, setSlug] = useState('');

    useEffect(() => {
        setUpdateProperty(
            {
                AuthCode: "r1d3r",
                UserID: "3",
                Flag: "U",
                MemID: propertyData?.MemID,
                MemType: propertyData?.MemType,
                PropertyNo: propertyData?.PropertyNo,
                Title: propertyData?.Title,
                Slug: propertyData?.Slug,
                Description: propertyData?.Description,
                Tags: propertyData?.Tags,
                Purpose: propertyData?.Purpose,
                PropType: propertyData?.PropType,
                Category: propertyData?.Category,
                YtUrl: propertyData?.YtUrl,
                TypeID: propertyData?.TypeID,
                ShopID: propertyData?.ShopID,
                IsFurnished: propertyData?.IsFurnished,
                Dining: propertyData?.Dining,
                Kitchen: propertyData?.Kitchen,
                BedRoom: propertyData?.BedRoom,
                BathRoom: propertyData?.BathRoom,
                Hall: propertyData?.Hall,
                TotalFloor: propertyData?.TotalFloor,
                Parking: propertyData?.Parking,
                Price: propertyData?.Price,
                PricePer: propertyData?.PricePer,
                IsNeg: propertyData?.IsNeg,
                IsFeatured: propertyData?.IsFeatured,
                PropStatus: propertyData?.PropStatus,
                Address: propertyData?.Address,
                District: propertyData?.District,
                Latitude: propertyData?.Latitude,
                Longitude: propertyData?.Longitude,
                TotalArea: propertyData?.TotalArea,
                TotalAreaUnit: propertyData?.TotalAreaUnit,
                BuiltYear: propertyData?.BuiltYear,
                RoadAccess: propertyData?.RoadAccess,
                RoadAccessUnit: propertyData?.RoadAccessUnit,
                PropertyFacing: propertyData?.PropertyFacing,
                Contact: propertyData?.Contact,
                OwnerID: propertyData?.OwnerID,
            })
        const generatedSlug = title;
        setSlug(generatedSlug);;
    }, [propertyData, setUpdateProperty, title])
    console.log(updateProperty)

    const handlePurposeChange = (e) => {
        const newPurpose = e.target.value;
        setSelectedPurpose(newPurpose);
        setUpdateProperty((prevProperty) => ({
            ...prevProperty,
            Purpose: newPurpose,
        }));
    };

    const handleTypeChange = (e) => {
        const newType = e.target.value;
        setSelectedType(newType);
        setUpdateProperty((prevProperty) => ({
            ...prevProperty,
            PropType: newType,
        }));
    };

    const handleCategoryChange = (e) => {
        const newCategory = e.target.value;
        setSelectedCategory(newCategory);
        setUpdateProperty((prevProperty) => ({
            ...prevProperty,
            Category: newCategory,
        }));
    };

    const handleTitleChange = (e) => {
        const newTitle = e.target.value;
        setTitle(newTitle);
        setUpdateProperty((prevProperty) => ({
            ...prevProperty,
            Title: newTitle,
            Slug: newTitle,
        }));
    };

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
            IsFeatured: isFeatured,
        }));
    };

    const handleNegotiableChange = (e) => {
        const isNegotiable = e.target.checked;
        setUpdateProperty((prevProperty) => ({
            ...prevProperty,
            IsNeg: isNegotiable,
        }));
    };

    const handlePropStatusChange = (e) => {
        const propStatus = e.target.checked;
        setUpdateProperty((prevProperty) => ({
            ...prevProperty,
            PropStatus: propStatus,
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
        { name: 'Aana', value: '400' },
        { name: 'Ropani', value: '8000' },
        { name: 'Dhur', value: '55' },
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
            <Container fluid='md'>
                <Row>
                    <Col md={6}>
                        <Form.Label>Property No.</Form.Label>
                        <Input
                            className='my-form-control'
                            defaultValue={propertyData?.PropertyNo}
                            type="text"
                            onChange={(e) =>
                                setUpdateProperty({
                                    ...property,
                                    PropertyNo: e.target.value,
                                })
                            }
                        />
                    </Col>
                    <Col md={6}>
                        <Form.Label>Built Year</Form.Label>
                        <Input
                        defaultValue={propertyData?.BuiltYear}
                            type="text"
                            onChange={(e) =>
                                setUpdateProperty({
                                    ...property,
                                    BuiltYear: e.target.value,
                                })
                            }
                        />
                    </Col>
                </Row>

                <Row className='mt-2'>
                    <Col md={12}>
                        <Form.Label>Title</Form.Label>
                        <Input type="text" defaultValue={propertyData?.Title} onChange={handleTitleChange} />
                    </Col>
                </Row>

                <Row className='mt-2'>
                    <Col md={12}>
                        <Form.Label>Slug</Form.Label>
                        <Input type="text" value={slug} readOnly='true' />
                    </Col>
                </Row>

                <Row className='mt-2'>
                    <Col md={12}>
                        <Form.Label>Description</Form.Label>
                        <TextArea
                            name="Description"
                            defaultValue={propertyData?.Description}
                            rows='3'
                            onChange={(e) =>
                                setUpdateProperty({
                                    ...property,
                                    Description: e.target.value,
                                })
                            }
                        />
                    </Col>
                </Row>

                <Row className='mt-2'>
                    <Col md={2}>
                        <Form.Label>Purpose</Form.Label>
                        <Col md={12} className='d-flex'>
                            <RadioBtn
                                label='Rent'
                                name='purpose'
                                value='R'
                                checked={selectedPurpose === 'R'}
                                onChange={handlePurposeChange}
                            />
                            <RadioBtn
                                label='Sale'
                                name='purpose'
                                value='S'
                                checked={selectedPurpose === 'S'}
                                onChange={handlePurposeChange}
                            />
                        </Col>
                    </Col>
                    <Col md={2}>
                        <Form.Label>Type</Form.Label>
                        <Col md={12} className='d-flex'>
                            <RadioBtn
                                label='Residential'
                                name='type'
                                value='R'
                                checked={selectedType === 'R'}
                                onChange={handleTypeChange}
                            />
                            <RadioBtn
                                label='Commercial'
                                name='type'
                                value='C'
                                checked={selectedType === 'C'}
                                onChange={handleTypeChange}
                            />
                        </Col>
                    </Col>
                </Row>

                <Row className='mt-2'>
                    <Col md={12}>
                        <Form.Label>Category</Form.Label>
                        <Col md={12} className='d-flex'>
                            <RadioBtn
                                label='House'
                                name='category'
                                value='H'
                                checked={selectedCategory === 'H'}
                                onChange={handleCategoryChange}
                            />
                            <RadioBtn
                                label='Land'
                                name='category'
                                value='L'
                                checked={selectedCategory === 'L'}
                                onChange={handleCategoryChange}
                            />
                            <RadioBtn
                                label='Flats'
                                name='category'
                                value='F'
                                checked={selectedCategory === 'F'}
                                onChange={handleCategoryChange}
                            />
                            <RadioBtn
                                label='Office'
                                name='category'
                                value='O'
                                checked={selectedCategory === 'O'}
                                onChange={handleCategoryChange}
                            />
                            <RadioBtn
                                label='Shutter'
                                name='category'
                                value='S'
                                checked={selectedCategory === 'S'}
                                onChange={handleCategoryChange}
                            />
                            <RadioBtn
                                label='Apartment'
                                name='category'
                                value='A'
                                checked={selectedCategory === 'A'}
                                onChange={handleCategoryChange}
                            />
                        </Col>
                    </Col>
                </Row>

                <Row className='mt-2'>
                    <Col md={12}><Form.Label>YtUrl</Form.Label><Input defaultValue={propertyData?.YtUrl} className='my-form-control' type="text" onChange={(e) => setUpdateProperty({ ...property, YtUrl: e.target.value })} /></Col>
                </Row>

                <Row className='mt-2'>
                    <Col md={2}><Form.Label>Dining</Form.Label><Input defaultValue={propertyData?.Dining} className='my-form-control' type="number" onChange={(e) => setUpdateProperty({ ...property, Dining: e.target.value })} /></Col>
                    <Col md={2}><Form.Label>Kitchen</Form.Label><Input defaultValue={propertyData?.Kitchen} type="number" onChange={(e) => setUpdateProperty({ ...property, Kitchen: e.target.value })} /></Col>
                    <Col md={2}><Form.Label>BedRoom</Form.Label><Input defaultValue={propertyData?.BedRoom} className='my-form-control' type="number" onChange={(e) => setUpdateProperty({ ...property, BedRoom: e.target.value })} /></Col>
                    <Col md={2}><Form.Label>BathRoom</Form.Label><Input defaultValue={propertyData?.BathRoom} type="number" onChange={(e) => setUpdateProperty({ ...property, BathRoom: e.target.value })} /></Col>
                    <Col md={2}><Form.Label>Hall</Form.Label><Input defaultValue={propertyData?.Hall} type="number" onChange={(e) => setUpdateProperty({ ...property, Hall: e.target.value })} /></Col>
                </Row>

                <Row className='mt-2'>
                    <Col md={6}><Form.Label>Total Floor</Form.Label><Input defaultValue={propertyData?.TotalFloor} className='my-form-control' type="text" onChange={(e) => setUpdateProperty({ ...property, TotalFloor: e.target.value })} /></Col>
                    <Col md={6}><Form.Label>Parking</Form.Label><Input defaultValue={propertyData?.Parking} type="text" onChange={(e) => setUpdateProperty({ ...property, Parking: e.target.value })} /></Col>
                </Row>

                <Row className='mt-2'>
                    <Col md={6}><Form.Label>Address</Form.Label><Input defaultValue={propertyData?.Address} className='my-form-control' type="text" onChange={(e) => setUpdateProperty({ ...property, Address: e.target.value })} /></Col>
                    <Col md={6}><Form.Label>Select District</Form.Label><DropDown defaultValue={propertyData?.District} options={districts} info="Select a district" onChange={(e) => setUpdateProperty({ ...property, District: e.target.value })} /></Col>
                </Row>

                <Row className='mt-2'>
                    <Col md={6}><Form.Label>Latitude</Form.Label><Input defaultValue={propertyData?.Latitude} className='my-form-control' type="text" onChange={(e) => setUpdateProperty({ ...property, Latitude: e.target.value })} /></Col>
                    <Col md={6}><Form.Label>Longitude</Form.Label><Input defaultValue={propertyData?.Longitude} type="text" onChange={(e) => setUpdateProperty({ ...property, Longitude: e.target.value })} /></Col>
                </Row>

                <Row className='mt-2'>
                    <Col md={3}><Form.Label>Total Area</Form.Label><Input defaultValue={propertyData?.TotalArea} className='my-form-control' type="text" onChange={(e) => setUpdateProperty({ ...property, TotalArea: e.target.value })} /></Col>
                    <Col md={3}><Form.Label></Form.Label><DropDown defaultValue={propertyData?.TotalAreaUnit} options={totalAreaUnit} info="Select unit" onChange={(e) => setUpdateProperty({ ...property, TotalAreaUnit: e.target.value })} /></Col>
                    <Col md={3}><Form.Label>Price</Form.Label><DropDown defaultValue={propertyData?.PricePer} options={pricePer} info="Price Per" onChange={(e) => setUpdateProperty({ ...property, PricePer: e.target.value })} /></Col>
                    <Col md={3}><Form.Label></Form.Label><Input defaultValue={propertyData?.Price} className='my-form-control' type="number" onChange={(e) => setUpdateProperty({ ...property, Price: e.target.value })} /></Col>
                </Row>

                <Row className='mt-2'>
                    <Col md={3}><Form.Label>Road Access</Form.Label><Input defaultValue={propertyData?.Parking} type="text" onChange={(e) => setUpdateProperty({ ...property, RoadAccess: e.target.value })} /></Col>
                    <Col md={3}><Form.Label></Form.Label><DropDown defaultValue={propertyData?.RoadAccessUnit} options={roadAccess} info="Road Access Unit" onChange={(e) => setUpdateProperty({ ...property, RoadAccessUnit: e.target.value })} /></Col>
                    <Col md={6}><Form.Label></Form.Label><DropDown defaultValue={propertyData?.PropertyFacing} options={propertyFacing} info="Select Property Facing" onChange={(e) => setUpdateProperty({ ...property, PropertyFacing: e.target.value })} /></Col>
                </Row>

                <Row className='mt-2'>
                    <Col md={12}><Form.Label>Contact</Form.Label><Input defaultValue={propertyData?.Contact} type="number" onChange={(e) => setUpdateProperty({ ...property, Contact: e.target.value })} /></Col>
                </Row>

                <Row className='mt-2'>
                    <Col md={2} className='d-flex align-items-center'>
                        <input
                            id='featured'
                            type="checkbox"
                            checked={property.IsFeatured}
                            onChange={handleFeaturedChange}
                        />
                        <Form.Label htmlFor='featured'>Featured</Form.Label>
                    </Col>
                    <Col md={2} className='d-flex align-items-center'>
                        <input
                            id='negotiable'
                            type="checkbox"
                            checked={property.IsNeg}
                            onChange={handleNegotiableChange}
                        />
                        <Form.Label htmlFor='negotiable'>Negotiable</Form.Label>
                    </Col>
                    <Col md={2} className='d-flex align-items-center'>
                        <input
                            id='propStatus'
                            type="checkbox"
                            checked={property.PropStatus}
                            onChange={handlePropStatusChange}
                        />
                        <Form.Label htmlFor='propStatus'>PropStatus</Form.Label>
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
                                                <img src={ClearIcon} alt="cross" />
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

export default EditPropertyForm;