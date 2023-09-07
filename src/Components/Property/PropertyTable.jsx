import React, { useContext, useEffect, useState } from 'react'
import DataTable from 'react-data-table-component'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal';
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';
import EditIcon from '@mui/icons-material/Edit';
import { PropertyContext } from '../../Context/PropertyContextProvider';
import EditPropertyForm from './EditPropertyForm';


const PropertyTable = () => {

    const [propertyList, setPropertyList] = useState([])
    const [showDelete, setShowDelete] = useState(false)
    const [selectedProperty, setSelectedProperty] = useState();
    const { updateProperty, propertyInfo, setPropertyInfo } = useContext(PropertyContext);
    const [showEdit, setShowEdit] = useState(false);


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
            setPropertyList(data.Values)
        }
        catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchProperty();
    }, [])

    const handleDelOpen = (property) => {
        setSelectedProperty(property)
        console.log(selectedProperty)
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

    async function updatePropertyData(data) {
        try {
            await fetch("https://testing.esnep.com/happyhomes/api/admin/property", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Signature": "p0m76"
                },
                body: JSON.stringify(data)
            })
        } catch (error) {
            console.log(error)
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
                    <button onClick={() => handleDelOpen(row)} title="Remove" className="btn bg-transparent"><DeleteForeverRoundedIcon style={{ color: '#0F52BA', border: "0px!important" }} /></button>
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
                selectableRows
                columns={columns}
                data={propertyList}
                customStyles={customStyles}
            />

            <Modal show={showEdit} onHide={handleEditClose} backdrop='static' size='sm' keyboard={false}>
                <Modal.Header closeButton className='modal-header'>
                    <Modal.Title>Edit Agent</Modal.Title>
                </Modal.Header >
                <Modal.Body>
                    <EditPropertyForm property={propertyInfo} />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleEditButtonClick}>
                        Edit
                    </Button>
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