import React, { useContext, useEffect, useState } from 'react';
import { PropertyContext } from '../../Context/PropertyContextProvider';
import '../../CSS/CreatePropertyForm.css';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Edit1 from './EditFormMultiStep/Edit1';
import Edit2 from './EditFormMultiStep/Edit2';

const EditPropertyForm = ({ property }) => {
    const { updateProperty, setUpdateProperty, editFormStep, setEditFormStep } = useContext(PropertyContext);

    const [title, setTitle] = useState('');
    const [slug, setSlug] = useState('');

    const { Values: propertyValues } = property || {};
    const [propertyData] = propertyValues || [];

    const handleNext = () => {
        setEditFormStep(editFormStep + 1);
    };

    const handlePrevious = () => {
        setEditFormStep(editFormStep - 1);
    };

    useEffect(() => {
        setUpdateProperty(
            {
                AuthCode: "r1d3r",
                UserID: "3",
                Flag: "U",
                MemID: propertyData?.MemID,
                MemType: propertyData?.MemType,
                PropertyID: propertyData?.PropertyID,
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
                PropStatus: propertyData?.PropertyStatus,
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
    }, [propertyData])

    return (
        <div>
            {editFormStep === 1 && (
                <Edit1
                    propertyData={propertyData}
                    next={handleNext}
                />
            )}

            {editFormStep === 2 && (
                <Edit2
                    propertyData={propertyData}
                />
            )}

            <div>
                {editFormStep > 1 && (
                    <button className='prev-btn' onClick={handlePrevious}><ArrowBackIcon /></button>
                )}
                {editFormStep < 2 ? (
                    <button className='next-btn' onClick={handleNext}><ArrowForwardIcon /></button>
                ) : (
                    <></>
                )}
            </div>
        </div>
    )
}

export default EditPropertyForm;