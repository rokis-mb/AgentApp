import React, { useContext, useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Input from '../../SubComponents/Input';
import RadioBtn from '../../SubComponents/RadioBtn';
import TextArea from '../../SubComponents/TextArea';
import { PropertyContext } from '../../../Context/PropertyContextProvider';
import '../../../CSS/CreatePropertyForm.css';

const Edit1 = ({ propertyData, next }) => {
    const { updateProperty, setUpdateProperty } = useContext(PropertyContext);
    
    const [selectedType, setSelectedType] = useState('');
    const [selectedPurpose, setSelectedPurpose] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');
    const [title, setTitle] = useState('');

    const handleTitleChange = (e) => {
        const newTitle = e.target.value;
        setTitle(newTitle);
        setUpdateProperty((prevProperty) => ({
            ...prevProperty,
            Title: newTitle,
            Slug: newTitle,
        }));
    };

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
        console.log(newType)
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
                                    ...updateProperty,
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
                                    ...updateProperty,
                                    BuiltYear: e.target.value,
                                })
                            }
                        />
                    </Col>
                </Row>

                <Row className='mt-2'>
                    <Col md={12}>
                        <Form.Label>Title</Form.Label>
                        <Input type="text" value={updateProperty?.Title} onChange={handleTitleChange} />
                    </Col>
                </Row>

                <Row className='mt-2'>
                    <Col md={12}>
                        <Form.Label>Slug</Form.Label>
                        <Input type="text" value={updateProperty.Title} readOnly='true' />
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
                                    ...updateProperty,
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
                                defaultChecked={updateProperty.Purpose === 'R '}
                                onChange={handlePurposeChange}
                            />
                            <RadioBtn
                                label='Sale'
                                name='purpose'
                                value='S'
                                defaultChecked={updateProperty.Purpose === 'S '}
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
                                defaultChecked={updateProperty.PropType === 'R '}
                                onChange={handleTypeChange}
                            />
                            <RadioBtn
                                label='Commercial'
                                name='type'
                                value='C'
                                defaultChecked={updateProperty.PropType === 'C '}
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
                                defaultChecked={updateProperty.Category === 'H '}
                                onChange={handleCategoryChange}
                            />
                            <RadioBtn
                                label='Land'
                                name='category'
                                value='L'
                                defaultChecked={updateProperty.Category === 'L '}
                                onChange={handleCategoryChange}
                            />
                            <RadioBtn
                                label='Flats'
                                name='category'
                                value='F'
                                defaultChecked={updateProperty.Category === 'F '}
                                onChange={handleCategoryChange}
                            />
                            <RadioBtn
                                label='Office'
                                name='category'
                                value='O'
                                defaultChecked={updateProperty.Category === 'O '}
                                onChange={handleCategoryChange}
                            />
                            <RadioBtn
                                label='Shutter'
                                name='category'
                                value='S'
                                defaultChecked={updateProperty.Category === 'S '}
                                onChange={handleCategoryChange}
                            />
                            <RadioBtn
                                label='Apartment'
                                name='category'
                                value='A'
                                defaultChecked={updateProperty.Category === 'A '}
                                onChange={handleCategoryChange}
                            />
                        </Col>
                    </Col>
                </Row>
            </Container>
        </Form>
    )
}

export default Edit1