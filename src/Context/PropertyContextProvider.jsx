import { createContext, useState } from "react";

export const PropertyContext = createContext();

const PropertyContextProvider = (props) => {

    const [property, setProperty] = useState({
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
        ShopID: "1",  //done
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
        AuthCode: "r1d3r",
        UserID: "3",
        Flag: "U",
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
        ShopID: "",  //done
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
        propertyInfo, setPropertyInfo, property, setProperty, updateProperty, setUpdateProperty
    };

    return (
        <PropertyContext.Provider value={contextValue}>
            {props.children}
        </PropertyContext.Provider>
    )
}

export default PropertyContextProvider