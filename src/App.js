import "./App.css";
import { Table, Container, Checkbox, Divider, Button } from "semantic-ui-react";
const axios = require("axios").default;

let pbData = [
    {
        ID: "try_001",
        esg: "4.33",
        environmentalScore: {
            overall: "4.3",
            emissionsScore: "4.3",
            directAndIndirectEnergyConsumptionScore: "4.3",
            waterConsumptionInTotalAndIntensityScore: "4.3",
        },
        socialScore: {
            overall: "4.1",
            employmentScore: "3.7",
            healthAndSafetyScore: "4.3",
            supplyChainManagementScore: "4.3",
        },
        governanceScore: {
            overall: "4.3",
            riskManagementScore: "4.3",
            businessEthicScore: "4.3",
        },
    },
];

const url = "http://localhost:3000/api/esgEvaluations/";

const handlePublish = () => {
    axios
        .post(url, pbData)
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
};

function handleRetrieve() {
    axios
        .get(url)
        .then(function (response) {
            // handle success
            console.log(response);
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .then(function () {
            // always executed
        });
}

function App() {
    return (
        <Container>
            <Divider />
            <Table textAlign="center" celled structured>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell rowSpan="2">Select</Table.HeaderCell>
                        <Table.HeaderCell rowSpan="2">
                            ESG Overall
                        </Table.HeaderCell>
                        <Table.HeaderCell colSpan="4">
                            Environmental
                        </Table.HeaderCell>
                        <Table.HeaderCell colSpan="4">Social</Table.HeaderCell>
                        <Table.HeaderCell colSpan="3">
                            Governance
                        </Table.HeaderCell>
                    </Table.Row>
                    <Table.Row>
                        <Table.HeaderCell>Overall</Table.HeaderCell>
                        <Table.HeaderCell>Emissions</Table.HeaderCell>
                        <Table.HeaderCell>Energy Consumption</Table.HeaderCell>
                        <Table.HeaderCell>Water Consumption</Table.HeaderCell>
                        <Table.HeaderCell>Overall</Table.HeaderCell>
                        <Table.HeaderCell>Employment</Table.HeaderCell>
                        <Table.HeaderCell>Health Safety</Table.HeaderCell>
                        <Table.HeaderCell>
                            Supply Chain Management
                        </Table.HeaderCell>
                        <Table.HeaderCell>Overall</Table.HeaderCell>
                        <Table.HeaderCell>Risk Management</Table.HeaderCell>
                        <Table.HeaderCell>Business Ethic</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    <Table.Row>
                        <Table.Cell>
                            <Checkbox />
                        </Table.Cell>
                        <Table.Cell>4.33</Table.Cell>
                        <Table.Cell>4.3</Table.Cell>
                        <Table.Cell>4.3</Table.Cell>
                        <Table.Cell>4.3</Table.Cell>
                        <Table.Cell>4.3</Table.Cell>
                        <Table.Cell>4.1</Table.Cell>
                        <Table.Cell>3.7</Table.Cell>
                        <Table.Cell>4.3</Table.Cell>
                        <Table.Cell>4.3</Table.Cell>
                        <Table.Cell>4.2</Table.Cell>
                        <Table.Cell>4.4</Table.Cell>
                        <Table.Cell>4.0</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>
                            <Checkbox />
                        </Table.Cell>
                        <Table.Cell>4.33</Table.Cell>
                        <Table.Cell>4.3</Table.Cell>
                        <Table.Cell>4.3</Table.Cell>
                        <Table.Cell>4.3</Table.Cell>
                        <Table.Cell>4.3</Table.Cell>
                        <Table.Cell>4.1</Table.Cell>
                        <Table.Cell>3.7</Table.Cell>
                        <Table.Cell>4.3</Table.Cell>
                        <Table.Cell>4.3</Table.Cell>
                        <Table.Cell>4.2</Table.Cell>
                        <Table.Cell>4.4</Table.Cell>
                        <Table.Cell>4.0</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>
                            <Checkbox />
                        </Table.Cell>
                        <Table.Cell>4.33</Table.Cell>
                        <Table.Cell>4.3</Table.Cell>
                        <Table.Cell>4.3</Table.Cell>
                        <Table.Cell>4.3</Table.Cell>
                        <Table.Cell>4.3</Table.Cell>
                        <Table.Cell>4.1</Table.Cell>
                        <Table.Cell>3.7</Table.Cell>
                        <Table.Cell>4.3</Table.Cell>
                        <Table.Cell>4.3</Table.Cell>
                        <Table.Cell>4.2</Table.Cell>
                        <Table.Cell>4.4</Table.Cell>
                        <Table.Cell>4.0</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>
                            <Checkbox />
                        </Table.Cell>
                        <Table.Cell>4.33</Table.Cell>
                        <Table.Cell>4.3</Table.Cell>
                        <Table.Cell>4.3</Table.Cell>
                        <Table.Cell>4.3</Table.Cell>
                        <Table.Cell>4.3</Table.Cell>
                        <Table.Cell>4.1</Table.Cell>
                        <Table.Cell>3.7</Table.Cell>
                        <Table.Cell>4.3</Table.Cell>
                        <Table.Cell>4.3</Table.Cell>
                        <Table.Cell>4.2</Table.Cell>
                        <Table.Cell>4.4</Table.Cell>
                        <Table.Cell>4.0</Table.Cell>
                    </Table.Row>
                </Table.Body>
            </Table>
            <Button content="Publish" color="violet" onClick={handlePublish} />
            <Button content="Retrieve" color="blue" onClick={handleRetrieve} />
        </Container>
    );
}

export default App;
