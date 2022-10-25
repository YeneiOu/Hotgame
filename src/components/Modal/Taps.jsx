import { Tabs, TabList, Tab, TabPanel } from "react-tabs";

import "react-tabs/style/react-tabs.css";

import React from 'react'

const Taps = () => {
    state = {
        selectedIndex: 0
    };

    handleSelect = index => {
        this.setState({ selectedIndex: index });
    };

    handleButtonClick = () => {
        this.setState({ selectedIndex: 0 });
    };
    return (
        <Tabs
            selectedIndex={this.state.selectedIndex}
            onSelect={this.handleSelect}
        >
            <TabList>
                <Tab>Preview</Tab>
                <Tab>Edit</Tab>
            </TabList>
            <TabPanel>
                <h1>Preview</h1>
            </TabPanel>
            <TabPanel>
                <h1>Edit</h1>
                <button onClick={this.handleButtonClick}>Finish</button>
            </TabPanel>
        </Tabs>
    )
}

export default Taps