import { createContext, useState } from "react";

export const AgentContext = createContext()

const AgentContextProvider = (props) => {

    const [agent, setAgent] = useState({

        AuthCode: "r1d3r",
        Flag: "i",
        AgentCode: "",
        AgentID: "",
        FullName: "",
        UserName: "",
        Password: "",
        Image: "",
        Address: "",
        District: "",
        StarGrading: "",
        Academic: "",
        Professional: "",
        WorkExp: "",
        ResponseTime: "",
        ProductCat: "",
        ProductType: "",
        Statement: "",
        Contact: "",
        AllowApp: "N"
    })

    const [updateAgent, setUpdateAgent] = useState({
        AuthCode: "r1d3r",
        Flag: "U",
        AgentID: "",
        UserID: "",
        FullName: "",
        Image: "",
        Address: "k",
        District: "",
        StarGrading: "",
        Academic: "",
        Professional: "",
        WorkExp: "",
        ResponseTime: "",
        ProductCat: "",
        ProductType: "",
        Statement: "",
        Contact: ""
    });

    const [agentInfo, setAgentInfo] = useState({
        AgentID: "",
        FullName: "",
        UserName: "",
        AgentCode: "",
        Image: "",
        Address: "",
        District: "",
        GradingRate: "",
        Academic: "",
        Professional: "",
        WorkExp: "",
        ResponseTime: "",
        ProdCategory: "",
        ProdType: "",
        Statement: "",
        Contact: "",
        CreatedDate: ""
    })

    const contextValue = {
        agent, setAgent, updateAgent, setUpdateAgent, agentInfo, setAgentInfo
    };
    return (
        <AgentContext.Provider value={contextValue}>
            {props.children}
        </AgentContext.Provider>
    )

}

export default AgentContextProvider;