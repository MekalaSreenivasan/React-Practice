import { useState } from 'react';
import { CORE_CONCEPTS, EXAMPLES } from './data';
import Header from './components/Header/Header';
import CoreConcept from './components/CoreConcept';
import TabButton from './components/TabButton';

function App() {

  const [selectedTopic, setSelectedTopic] = useState();

  function handleClick(selectedButton) {
    setSelectedTopic(selectedButton);
  }

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
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
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton isSelected={selectedTopic === 'components'} 
              onClick={() => handleClick('components')}>Components</TabButton>
            <TabButton isSelected={selectedTopic === 'jsx'}
              onClick={() => handleClick('jsx')}>JSX</TabButton>
            <TabButton isSelected={selectedTopic === 'props'}
              onClick={() => handleClick('props')}>Props</TabButton>
            <TabButton isSelected={selectedTopic === 'state'}
              onClick={() => handleClick('state')}>State</TabButton>
          </menu>
          {!selectedTopic ? (<p>Please select a topic.</p>) : ( 
            <div id="tab-content">
              <h3>{EXAMPLES[selectedTopic].title}</h3>
              <p>{EXAMPLES[selectedTopic].description}</p>
              <pre>
                <code>
                {EXAMPLES[selectedTopic].code}
                </code>
              </pre>
            </div>)}
            {/**
             * ALTERNATIVE APPROACH FOR THE ABOVE CONDITONAL STATEMENT
             * APPROACH 1:
             * {!selectedTopic && (<p>Please select a topic.</p>)}
             * {selectedTopic && ( 
                <div id="tab-content">
                  <h3>{EXAMPLES[selectedTopic].title}</h3>
                  <p>{EXAMPLES[selectedTopic].description}</p>
                  <pre>
                    <code>
                    {EXAMPLES[selectedTopic].code}
                    </code>
                  </pre>
                </div>) }

              * APPROACH 2:
              * Add the following code to the beginning(inside) of the component function
              * let tabContent = <p>Please select a topic.</p>;
              * if (selectedTopic) {
              * tabContent = (
              * <div id="tab-content">
                  <h3>{EXAMPLES[selectedTopic].title}</h3>
                  <p>{EXAMPLES[selectedTopic].description}</p>
                  <pre>
                    <code>
                    {EXAMPLES[selectedTopic].code}
                    </code>
                  </pre>
                </div>);
              * }
             */}
        </section>
      </main>
    </div>
  );
}

export default App;