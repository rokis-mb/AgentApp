import Button from 'react-bootstrap/Button'
import { useContext, useEffect, useState } from 'react'
import DataTable from 'react-data-table-component'
import Modal from 'react-bootstrap/Modal';
import Badge from 'react-bootstrap/Badge';
import { AgentContext } from '../../Context/AgentContextProvider';
import EditAgentForm from './EditAgentForm';


import EditIcon from '@mui/icons-material/Edit';
import LockResetIcon from '@mui/icons-material/LockReset';

import '../../CSS/AgentTable.css'

const AgentTable = ({searchBoxFilter}) => {
    const [agent, setAgent] = useState([]);
    const [selectedAgent, setSelectedAgent] = useState();
    const { updateAgent, agentInfo, setAgentInfo } = useContext(AgentContext);
    const [show, setShow] = useState(false);
    const [rpshow, setRPShow] = useState(false);
    const [filteredAgentList, setFilteredAgentList] = useState([]);
    
    // Fetching data from the api

    const getAgents = async () => {
        try {
            const res = await fetch("https://testing.esnep.com/happyhomes/api/admin/agent", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Signature": "p0m76"
                },
                body: JSON.stringify({
                    "AuthCode": "r1d3r",
                    "Flag": "S",
                    "UserID": "-1",
                    "IsActive": "-1",
                    "AllowApp": "-1"
                })
            })
            const data = await res.json();
            // console.log(data.Values[0].AllowApp)
            const agentsWithAllowStatus = data.Values.map(agent => {
                return {
                    ...agent,
                    isAllowed: agent.AllowApp === "Y" ? true : false,
                    isActivated: agent.IsActive === "A" ? true : false
                };
            });
            setAgent(agentsWithAllowStatus);
            setFilteredAgentList(agentsWithAllowStatus);
        } catch (error) {
            console.log(error)
        }
    }

    // calling the agents function during rendering
    useEffect(() => {
        getAgents();
    }, [])

    useEffect(() => {
        setFilteredAgentList(agent.filter((agent) => {
            const searchFilter = searchBoxFilter ? searchBoxFilter.toLowerCase() : ""; // Check if searchBoxFilter is defined
            const fullname = agent.FullName?agent.FullName.toLowerCase() : ""; // Check if agent.Username is defined
            const matchesSearch = searchFilter === "" || fullname.includes(searchFilter);
    
            return matchesSearch;
        }));
    }, [searchBoxFilter]);
    

    const handleRPClose = () => {
        setRPShow(false)
        setSelectedAgent(null)
    }

    function handleRPButtonClick() {
        handleRPClose();
        resetPassword(selectedAgent);
    }

    async function resetPassword(data) {
        console.log(data)
        try {
            await fetch("https://testing.esnep.com/happyhomes/api/admin/agent", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Signature": "p0m76"
                },
                body: JSON.stringify({
                    "AuthCode": "r1d3r",
                    "Flag": "RP",
                    "AgentID": data.AgentID + "",
                    "Password": "1"
                })
            })
        } catch (error) {
            console.log(error)
        }
    }

    const handleRPOpen = (agent) => {
        setSelectedAgent(agent)
        console.log(selectedAgent)
        setRPShow(true)
    }

    const handleClose = () => {
        setShow(false)
        setSelectedAgent(null)
    }

    const handleOpen = (agent) => {
        async function getAgentInfo() {
            try {
                const res = await fetch("https://testing.esnep.com/happyhomes/api/admin/agent", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "Signature": "p0m76"
                    },
                    body: JSON.stringify({
                        "AuthCode": "r1d3r",
                        "Flag": "SI",
                        "AgentID": agent.AgentID + ""
                    }),
                })
                const data = await res.json();
                console.log(data)
                setAgentInfo(data)
                
            } catch (error) {
                console.log(error)
            }
        }
        getAgentInfo()
        // setSelectedAgent(agent)
        setShow(true)
    }

    function handleEditButtonClick() {
        handleClose();
        updateAgentData(updateAgent);
    }

    async function updateAgentData(data) {
        try {
            await fetch("https://testing.esnep.com/happyhomes/api/admin/agent", {
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

    const columns = [
        {
            name: "S.N",
            cell: (row, index) => index + 1,
            width: "4rem",
        },
        {
            name: "Fullname",
            selector: (row) => row.FullName,
            sortable: "true"

        },
        {
            name: "Agent Code",
            selector: (row) => row.AgentCode,
            sortable: "true"
        },
        {
            name: "Total Property",
            selector: (row) => row.NoOfProperty,
            sortable: "true"
        },
        {
            name: "Access",
            selector: (row) =>
                <Allow data={row} />
        },
        {
            name: "Status",
            cell: (row) => (
                <Active data={row} />
            )
        },
        {
            name: "Action",
            width: "10rem", // Adjust the width as needed
            cell: (row) => (
                <div className='d-flex'>
                    <button title="Edit" onClick={() => handleOpen(row)}className="btn bg-transparent"><EditIcon style={{ color: '#0F52BA', border: "0px!important" }}/></button>&nbsp;
                    <button title="Reset Password" onClick={() => handleRPOpen(row)} className="btn bg-transparent"><LockResetIcon style={{ color: '#0F52BA' }}/></button>
                </div>
            )
        },
    ]

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
        <>
            <DataTable columns={columns} data={filteredAgentList}
                pagination
                fixedHeader
                fixedHeaderScrollHeight='500px'
                selectableRows
                selectableRowsHighlight
                customStyles={customStyles}
            />

            <Modal show={show} onHide={handleClose} backdrop='static' size='sm' keyboard={false}>
                <Modal.Header closeButton className='modal-header'>
                    <Modal.Title>Edit Agent</Modal.Title>
                </Modal.Header >
                <Modal.Body>
                    <EditAgentForm agent={agentInfo} />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleEditButtonClick}>
                        Edit
                    </Button>
                </Modal.Footer>
            </Modal>

            <Modal show={rpshow} onHide={handleRPClose} backdrop='static' keyboard={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Reset Password</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Are you sure you want to reset your password?
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="warning" onClick={handleRPButtonClick}>
                        Yes, Reset it
                    </Button>
                    <Button variant="danger" onClick={handleRPClose}>
                        No
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

function Allow({ data }) {

    const [isAllowed, setIsAllowed] = useState(data.isAllowed);
    async function allow(shouldAAllow) {
        setIsAllowed(!shouldAAllow); //client side
        //backend
        await fetch("https://testing.esnep.com/happyhomes/api/admin/agent", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Signature": "p0m76"
            },
            body: JSON.stringify({
                "AuthCode": "r1d3r",
                "Flag": "AD",
                "AgentID": data.AgentID.toString(),
                "AllowApp": !shouldAAllow ? "Y" : "N",
            }),
        })
    }
    return (
        <Badge pill onClick={() => allow(isAllowed)} style={{ cursor: 'pointer' }}>
            {isAllowed ? 'Allow' : 'Disallow'}
        </Badge>
        // <Badge pill  bg={`${isAllowed ? 'success' : 'danger'}`} onClick={() => allow(isAllowed)} style={{ cursor: 'pointer' }}>
        //     {isAllowed ? 'Allow' : 'Disallow'}
        // </Badge>
    )
}

function Active({ data }) {
    const [isActivated, setIsActivated] = useState(data.isActivated);
    // console.log(data)
    async function activate(shouldActivate) {
        setIsActivated(!shouldActivate); //client side
        //backend
        await fetch("https://testing.esnep.com/happyhomes/api/admin/agent", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Signature": "p0m76"
            },
            body: JSON.stringify({
                "AuthCode": "r1d3r",
                "Flag": "AI",
                "AgentID": data.AgentID.toString(),
                "IsActive": !shouldActivate ? "A" : "I",
            })
        })
    }
    return (
        <Badge pill onClick={() => activate(isActivated)} style={{ cursor: 'pointer' }}>
            {isActivated ? 'Activate' : 'Deactivate'}
        </Badge>
        // <Badge pill  bg={`${isActivated ? 'success' : 'danger'}`} onClick={() => activate(isActivated)} style={{ cursor: 'pointer' }}>
        //     {isActivated ? 'Activate' : 'Deactivate'}
        // </Badge>
    )
}

export default AgentTable