import React, { useContext, useEffect, useState } from 'react'
import DataTable from 'react-data-table-component'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal';
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';
import EditIcon from '@mui/icons-material/Edit';
import { PropertyContext } from '../../Context/PropertyContextProvider';
import EditPropertyForm from './EditPropertyForm';


const PropertyTable = ({ categoryFilter, purposeFilter, searchBoxFilter }) => {

    const [propertyList, setPropertyList] = useState([])
    const [showDelete, setShowDelete] = useState(false)
    const [selectedProperty, setSelectedProperty] = useState();
    const { updateProperty, propertyInfo, setPropertyInfo, editFormStep, setEditFormStep } = useContext(PropertyContext);
    const [showEdit, setShowEdit] = useState(false);
    const [filteredPropertyList, setFilteredPropertyList] = useState([]);

    const fetchProperty = async () => {
        try {
            const res = await fetch("https://testing.esnep.com/happyhomes/api/admin/property", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Signature": "p0m76"
                },
                body: JSON.stringify({
                    "AuthCode": "r1d3r",
                    "UserID": "-1",
                    "Flag": "S",
                    "MemID": "-1",
                    "MemType": "-1",
                    "Purpose": "-1",
                    "Type": "-1",
                    "Category": "-1",
                    "IsFeatured": "-1",
                })
            })
            const data = await res.json();
            const mappedData = data.Values.map((property) => {
                const categoryMapping = propertyCategory.find((x) => x.category === property.Category);
                if (categoryMapping) {
                    return { ...property, Category: categoryMapping.fullform };
                }
                return property;
            });

            setPropertyList(mappedData);
            setFilteredPropertyList(mappedData);
        }
        catch (error) {
            console.log(error)
        }
    }

    const propertyCategory = [
        { category: 'H ', fullform: 'House' },
        { category: 'O ', fullform: 'Office' },
        { category: 'L ', fullform: 'Land' },
        { category: 'S ', fullform: 'Shutter' },
        { category: 'A ', fullform: 'Apartment' },
        { category: 'F ', fullform: 'Flat' },
    ]

    useEffect(() => {
        fetchProperty();
    }, [])

    const handleDelOpen = (property) => {
        setSelectedProperty(property)
        setShowDelete(true)
    }

    const handleDelClose = () => {
        setShowDelete(false)
        setSelectedProperty(null)
    }

    function handleDelButtonClick() {
        handleDelClose();
        removeProperty(selectedProperty);
    }

    const handleEditClose = () => {
        setShowEdit(false)
        setSelectedProperty(null)
        setEditFormStep(1)
    }

    const handleEditOpen = (property) => {
        async function getPropertyInfo() {
            try {
                const res = await fetch("https://testing.esnep.com/happyhomes/api/admin/property", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "Signature": "p0m76"
                    },
                    body: JSON.stringify({
                        "UserID": "-1",
                        "AuthCode": "r1d3r",
                        "Flag": "SI",
                        "PropertyID": property.PropertyID + ""
                    }),
                })
                const data = await res.json();
                setPropertyInfo(data)
            } catch (error) {
                console.log(error)
            }
        }
        getPropertyInfo()
        // setSelectedProperty(Property)
        setShowEdit(true)
    }

    function handleEditButtonClick() {
        handleEditClose();
        updatePropertyData(updateProperty);
    }

    function convertNumericValuesToStrings(data) {
        const newData = { ...data };

        for (const key in newData) {
            if (typeof newData[key] === 'number') {
                newData[key] = newData[key].toString();
            }
        }

        return newData;
    }

    async function updatePropertyData(data) {
        try {
            if (data) {
                const convertedData = convertNumericValuesToStrings(data);
                const jsonData = JSON.stringify({ ...convertedData, ShopID: "1" });
                console.log("JSON Data:", jsonData); // Log the JSON data to check if it's valid
                await fetch("https://testing.esnep.com/happyhomes/api/admin/property", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "Signature": "p0m76"
                    },
                    body: jsonData
                });
            } else {
                console.log("Data is empty or invalid.");
            }
        } catch (error) {
            console.error("Error:", error);
        }
    }

    async function removeProperty(property) {
        try {
            await fetch("https://testing.esnep.com/happyhomes/api/admin/property", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Signature": "p0m76"
                },
                body: JSON.stringify({
                    "AuthCode": "r1d3r",
                    "UserID": "1",
                    "Flag": "R",
                    "MemID": "1",
                    "PropertyID": property.PropertyID + "",
                })
            })
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        setFilteredPropertyList(propertyList.filter((property) => {
            const matchesCategory = categoryFilter === "-1" || categoryFilter === property.Category.trim();
            const matchesPurpose = purposeFilter === "-1" || purposeFilter === property.Purpose.trim();
            const searchFilter = searchBoxFilter.toLowerCase(); // Convert searchBoxFilter to lowercase
            const title = property.Title.toLowerCase(); // Convert Title to lowercase
            const matchesSearch = searchFilter === "" || title.includes(searchFilter);

            return matchesCategory && matchesPurpose && matchesSearch;
        }));
    }, [categoryFilter, purposeFilter, searchBoxFilter]);

    const columns = [
        {
            name: 'S.N',
            cell: (row, index) => index + 1,
            width: "4rem"
        },
        {
            name: 'Title',
            selector: row => row.Title,
        },
        {
            name: 'Property Number',
            selector: row => row.PropertyNO,
            width: "12rem",
        },
        {
            name: 'Slug',
            selector: row => row.Slug,
            width: "7rem",
        },
        {
            name: 'NoOfUnit',
            selector: row => row.noOfUnit,
            width: "7rem",
        },
        {
            name: 'Category',
            selector: row => row.Category,
            width: "7rem",
        },
        {
            name: "Action",
            width: "8rem", // Adjust the width as needed
            cell: (row) => (
                <div className='d-flex'>
                    <button onClick={() => { handleEditOpen(row) }} title="Edit" className="btn bg-transparent"><EditIcon style={{ color: '#0F52BA', border: "0px!important" }} /></button>
                    <button onClick={() => handleDelOpen(row)} title="Remove" className="btn bg-transparent"><DeleteForeverRoundedIcon style={{ color: 'red', border: "0px!important" }} /></button>
                </div>
            )
        },
    ];

    const customStyles = {
        headCells: {
            style: {
                backgroundColor: '#0F52BA',
                color: 'white',
                fontSize: 'medium',
                borderLeft: '1px solid #666  ',
            },
        },
        cells: {
            style: {
                fontSize: 'medium',
                borderLeft: '1px solid #eee  ',
                // borderCollapse: 'coll'
            },
        },
    }

    return (
        <div>
            <DataTable
                pagination
                columns={columns}
                data={filteredPropertyList} // Use the filtered list here
                customStyles={customStyles}
            />

            <Modal show={showEdit} onHide={handleEditClose} backdrop='static' size='sm' keyboard={false}>
                <Modal.Header closeButton className='modal-header'>
                    <Modal.Title>Edit Property</Modal.Title>
                </Modal.Header >
                <Modal.Body>
                    <EditPropertyForm property={propertyInfo} />
                </Modal.Body>
                <Modal.Footer>
                    {editFormStep === 2 ? (<Button variant="primary" onClick={handleEditButtonClick}>)

                        Edit
                    </Button>) : <></>}
                </Modal.Footer>
            </Modal>


            <Modal show={showDelete} onHide={handleDelClose} backdrop='static' keyboard={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Delete Property</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Are you sure you want to delete this property?
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="warning" onClick={handleDelButtonClick}>
                        Yes, Delete it
                    </Button>
                    <Button variant="danger" onClick={handleDelClose}>
                        No
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default PropertyTable