import React, { useContext, useState } from 'react';
import { Multistep, Step } from 'react-multistep';
import Step1 from './Step1';
import Step2 from './Step2'; // Import other step components
import { PropertyContext } from '../../Context/PropertyContextProvider';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const CreatePropertyForm = () => {

    const { setProperty, property, createFormStep, setCreateFormStep } = useContext(PropertyContext);


    const handleNext = () => {
        setCreateFormStep(createFormStep + 1);
    };

    const handlePrevious = () => {
        setCreateFormStep(createFormStep - 1);
    };

    return (
        <div>
            {createFormStep === 1 && (
                <Step1
                    property={property}
                    setProperty={setProperty}
                    next={handleNext}
                />
            )}

            {createFormStep === 2 && (
                <Step2
                    property={property}
                    setProperty={setProperty}
                />
            )}

            <div>
                {createFormStep > 1 && (
                    <button className='prev-btn' onClick={handlePrevious}><ArrowBackIcon/></button>
                )}
                {createFormStep < 2 ? (
                    <button className='next-btn' onClick={handleNext}><ArrowForwardIcon/></button>
                ) : (
                    <></>
                )}
            </div>
        </div>
    );
}

export default CreatePropertyForm;