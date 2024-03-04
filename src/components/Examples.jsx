import TabButton from "./TabButton.jsx";
import Section from "./Section.jsx";
import { useState } from "react";
import { EXAMPLES } from "../data.js"
import Tabs from "./Tabs.jsx";

export default function Examples() {
    //set up a useState, that provides:
    // * a state: a value we want to be able to change (with an optional default value)
    // * a function that sets the contant to whatever we give it as a parameter
    // * tells react to rerun the component (App) after this function is called, so we can see the new changes
    const [selectedTopic, setSelectedTopic] = useState();

    let topicMessage = (<p>Please select topic</p>);
    if (selectedTopic) {
        topicMessage = (
            <div id="tab-content">
                <h3>{EXAMPLES[selectedTopic].title}</h3>
                <p>{EXAMPLES[selectedTopic].description}</p>
                <pre>
                    <code>{EXAMPLES[selectedTopic].code}</code>
                </pre>
            </div>
        );
    }

    function handleSelect(selected) {
        setSelectedTopic(selected);
    }

    return (
        <Section title="Examples" id="examples">
            <Tabs buttons={<>
                <TabButton isSelected={selectedTopic === "components" ? "active" : undefined} onClick={() => handleSelect("components")}>Components</TabButton>
                <TabButton isSelected={selectedTopic === "jsx" ? "active" : undefined} onClick={() => handleSelect("jsx")}>JSX</TabButton>
                <TabButton isSelected={selectedTopic === "props" ? "active" : undefined} onClick={() => handleSelect("props")}>Props</TabButton>
                <TabButton isSelected={selectedTopic === "state" ? "active" : undefined} onClick={() => handleSelect("state")}>State</TabButton>
            </>}
            >
                {topicMessage}
            </Tabs>

        </Section>
    );
    //a useful syntax is using a ternary expression, which is this syntax:
    //"X ? do a : do b"
    //to determine wether we want to show the info about the selected topic (if a topic has been selected)
    //or just a prompt for the user to pick a topic (otherwise)

    //another useful syntax is:
    // x && do a
    //meaning if x is truthy, do a
}