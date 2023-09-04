import { createContext, useState } from "react";

export const PropertyContext = createContext();

const PropertyContextProvider = (props) => {

    const [property, setProperty] = useState({
        AuthCode: "r1d3r",
        UserID: "",
        Flag: "",
        MemID: "",
        MemType: "",
        PropertyNo: "",
        Title: "",
        Slug: "",
        Description: "",
        Tags: "",
        Purpose: "",
        PropType: "",
        Category: "",
        YtUrl: "",
        TypeID: "",
        ShopID: "",
        IsFurnished: "",
        Dining: "",
        Kitchen: "",
        BedRoom: "",
        BathRoom: "",
        Hall: "",
        TotalFloor: "",
        Parking: "",
        Price: "",
        PricePer: "",
        IsNeg: "",
        IsFeatured: "",
        PropStatus: "",
        Address: "",
        District: "",
        Latitude: "",
        Longitude: "",
        TotalArea: "",
        TotalAreaUnit: "",
        BuiltYear: "",
        RoadAccess: "",
        RoadAccessUnit: "",
        PropertyFacing: "",
        Contact: "",
        OwnerID: "",
        Images: ""
    })

    const [propertyInfo, setPropertyInfo] = useState({
        PropertyID: 0,
        PropertyNo: "",
        Title: "",
        YtUrl: "",
        Slug: "",
        Description: "",
        Tags: "",
        Purpose: "",
        PropTyp: "",
        Category: "",
        TypeID: "",
        ShopID: 0,
        Furnished: "",
        Dining: 0,
        Kitchen: 0,
        BedRoom: 0,
        BathRoom: 0,
        Hall: 0,
        TotalFloor:0,
        Parking: "",
        Price: "",
        PricePer: "",
        IsNeg: "",
        IsFeatured: "",
        PropView: 0,
        PropertyStatus: "",
        Address: "",
        District: 0,
        Latitude: "",
        Longitude: "",
        TotalArea: "",
        TotalAreaUnit: "",
        BuiltYear: "",
        RoadAccess: "",
        RoadAccessUnit: "",
        PropertyFacing: "",
        Contact: "",
        OwnerID: 0,
        UserType: "",
        UserID: 0,
        IsActive: ""
    })

    const contextValue = {
        propertyInfo, setPropertyInfo, property, setProperty
    };

    return (
        <PropertyContext.Provider value={contextValue}>
            {props.children}
        </PropertyContext.Provider>
    )
}

export default PropertyContextProvider