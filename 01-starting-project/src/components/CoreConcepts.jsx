import CoreConcept from "./CoreConcept";
import { CORE_CONCEPTS } from '../data';

export default function CoreConcepts() {
    return (<section id="core-concepts">
    <h2>Core Concepts</h2>
    <ul>
      {/**
       * Dynamic way of adding elements
       */}
      {CORE_CONCEPTS.map((concept) =>
         (<CoreConcept key={concept.title} {...concept}/>))
      }  

      {/**
       * To add the content manually 
       *             <CoreConcept 
            title={CORE_CONCEPTS[0].title}
            description={CORE_CONCEPTS[0].description}
            image={CORE_CONCEPTS[0].image}
          />
          <CoreConcept 
            {...CORE_CONCEPTS[1]}
          />
          <CoreConcept 
            {...CORE_CONCEPTS[2]}
          />
          <CoreConcept 
            {...CORE_CONCEPTS[3]}
          />
       */}
                  
    </ul>
  </section>);   
}