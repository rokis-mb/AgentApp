import { createContext, useState } from "react";

export const PropertyContext = createContext();

const PropertyContextProvider = (props) => {

    const [property, setProperty] = useState({
        PropertyID : "",
        AuthCode: "r1d3r",
        UserID: "3",
        Flag: "i",
        MemID: "3",
        MemType: "",
        PropertyNo: "", //done
        Title: "",  //done
        Slug: "",  //done
        Description: "",  //done
        Tags: "",  //done
        Purpose: "",  //done
        PropType: "",  //done
        Category: "",  //done
        YtUrl: "",  //done
        TypeID: "1",  //done
        IsFurnished: "",
        Dining: "",  //done
        Kitchen: "",  //done
        BedRoom: "",  //done
        BathRoom: "",  //done
        Hall: "",  //done
        TotalFloor: "",  //done
        Parking: "",  //done
        Price: "",  //done
        PricePer: "",  //done
        IsNeg: "",  //done
        IsFeatured: "",  //done
        PropStatus: "",  //done
        Address: "",  //done
        District: "",  //done
        Latitude: "",  //done
        Longitude: "",  //done
        TotalArea: "",  //done
        TotalAreaUnit: "",  //done
        BuiltYear: "",  //done
        RoadAccess: "",  //done
        RoadAccessUnit: "",  //done
        PropertyFacing: "",  //done
        Contact: "",  //done
        OwnerID: "1",  //done
        Images: [{
            Values: ""
        }]  //done
    })

    const [updateProperty, setUpdateProperty] = useState({
        PropertyID : "",
        AuthCode: "r1d3r",
        UserID: "3",
        Flag: "U",
        ShopID: "1",
        MemID: "",
        MemType: "",
        PropertyNo: "", //done
        Title: "",  //done
        Slug: "",  //done
        Description: "",  //done
        Tags: "",  //done
        Purpose: "",  //done
        PropType: "",  //done
        Category: "",  //done
        YtUrl: "",  //done
        TypeID: "",  //done
        IsFurnished: "",
        Dining: "",  //done
        Kitchen: "",  //done
        BedRoom: "",  //done
        BathRoom: "",  //done
        Hall: "",  //done
        TotalFloor: "",  //done
        Parking: "",  //done
        Price: "",  //done
        PricePer: "",  //done
        IsNeg: "",  //done
        IsFeatured: "",  //done
        PropStatus: "",  //done
        Address: "",  //done
        District: "",  //done
        Latitude: "",  //done
        Longitude: "",  //done
        TotalArea: "",  //done
        TotalAreaUnit: "",  //done
        BuiltYear: "",  //done
        RoadAccess: "",  //done
        RoadAccessUnit: "",  //done
        PropertyFacing: "",  //done
        Contact: "",  //done
        OwnerID: "",  //done
        Images: []  //done
    })

    const [propertyInfo, setPropertyInfo] = useState({
        UserID: "3",
        PropertyID: "",
        PropertyNo: "",
        Title: "",
        YtUrl: "",
        Slug: "",
        Description: "",
        Tags: "",
        Purpose: "",
        PropType: "",
        Category: "",
        TypeID: "",
        Furnished: "",
        Dining: "",
        Kitchen: "",
        BedRoom: "",
        BathRoom: "",
        Hall: "",
        TotalFloor:"",
        Parking: "",
        Price: "",
        PricePer: "",
        IsNeg: "",
        IsFeatured: "",
        PropView: "",
        PropertyStatus: "",
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
        UserType: "",
        UserID: "",
        IsActive: ""
    })

    const contextValue = {
        propertyInfo, setPropertyInfo, property, setProperty, updateProperty, setUpdateProperty
    };

    return (
        <PropertyContext.Provider value={contextValue}>
            {props.children}
        </PropertyContext.Provider>
    )
}

export default PropertyContextProvider