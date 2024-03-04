import CoreConcept from "./CoreConcept.jsx";
import Section from "./Section.jsx";
import {CORE_CONCEPTS} from "../data.js"

export default function CoreConcepts()
{
    //the following syntax works because the keys in the object imported have the same names as the props recieved:
    // <CoreConcept {...CORE_CONCEPTS[0]} />
    //otherwise, we would need to have code like this:
    // <CoreConcept title={CORE_CONCEPTS[0].title} image={CORE_CONCEPTS[0].image} description={CORE_CONCEPTS[0].description} />
    return (
        <Section title = "Core Concepts" id = "core-concepts">
         <ul>
          {CORE_CONCEPTS.map((conceptItem)=><CoreConcept key={conceptItem.title} {...conceptItem} />)}
         </ul>
        </Section>
    );
}