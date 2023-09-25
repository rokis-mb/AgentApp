import React, { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Input from '../SubComponents/Input';
import RadioBtn from '../SubComponents/RadioBtn';
import '../../CSS/CreatePropertyForm.css';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

export default function Step1({ property, setProperty, next }){

    const [selectedPropType, setSelectedPropType] = useState('R');
    const [selectedPurpose, setSelectedPurpose] = useState('R');
    const [selectedCategory, setSelectedCategory] = useState('H');
    const [title, setTitle] = useState('');
    const [slug, setSlug] = useState('');
    const [editorState, setEditorState] = useState(null);
    const [editorContent, setEditorContent] = useState('');

    

    const onEditorStateChange = (newEditorState) => {
        setEditorState(newEditorState);
        setEditorContent(newEditorState.getCurrentContent().getPlainText());
        setProperty({
            ...property,
            Description: editorContent,
        })
    };

    useEffect(() => {
        const generatedSlug = title;
        setSlug(generatedSlug);
    }, [title]);

    const handlePurposeChange = (e) => {
        const newPurpose = e.target.value;
        console.log(newPurpose)
        setSelectedPurpose(newPurpose);
        setProperty((prevProperty) => ({
            ...prevProperty,
            Purpose: newPurpose,
        }));
    };

    const handlePropTypeChange = (e) => {
        const newType = e.target.value;
        console.log(newType)
        setSelectedPropType(newType);
        setProperty((prevProperty) => ({
            ...prevProperty,
            PropType: newType,
        }));
    };

    const handleCategoryChange = (e) => {
        const newCategory = e.target.value;
        setSelectedCategory(newCategory);
        setProperty((prevProperty) => ({
            ...prevProperty,
            Category: newCategory,
        }));
    };

    const handleTitleChange = (e) => {
        const newTitle = e.target.value;
        setTitle(newTitle);
        setProperty((prevProperty) => ({
            ...prevProperty,
            Title: newTitle,
            Slug: newTitle,
        }));
    };
    return (
        <Form>
            <Container fluid='lg'>
                <Row>
                    <Col md={6}>
                        <Form.Label>Property No.</Form.Label>
                        <Input
                            className='my-form-control'
                            type="text"
                            onChange={(e) =>
                                setProperty({
                                    ...property,
                                    PropertyNo: e.target.value,
                                })
                            }
                        />
                    </Col>
                    <Col md={6}>
                        <Form.Label>Built Year</Form.Label>
                        <Input
                            type="text"
                            onChange={(e) =>
                                setProperty({
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
                        <Input type="text" onChange={handleTitleChange} />
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
                        <div className="editor-container">

                            <Editor
                                editorState={editorState}
                                onEditorStateChange={onEditorStateChange}
                            />
                        </div>
                        {/* <TextArea
                            name="Description"
                            rows='3'
                            onChange={(e) =>
                                setProperty({
                                    ...property,
                                    Description: e.target.value,
                                })
                            }
                        /> */}
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
                                checked={selectedPropType === 'R'}
                                onChange={handlePropTypeChange}
                            />
                            <RadioBtn
                                label='Commercial'
                                name='type'
                                value='C'
                                checked={selectedPropType === 'C'}
                                onChange={handlePropTypeChange}
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
            </Container>
        </Form>
    )
}
