import { useState } from 'react';
import { EXAMPLES } from '../data';
import TabButton from '../components/TabButton';
import Section from './Section';
import Tabs from './Tabs';

export default function Examples() {

    const [selectedTopic, setSelectedTopic] = useState();

    function handleClick(selectedButton) {
      setSelectedTopic(selectedButton);
    }

    return (
        <Section id="examples" title="Examples">
            <Tabs 
                buttons={
                <>
                    <TabButton isSelected={selectedTopic === 'components'} 
                        onClick={() => handleClick('components')}>Components</TabButton>
                    <TabButton isSelected={selectedTopic === 'jsx'}
                        onClick={() => handleClick('jsx')}>JSX</TabButton>
                    <TabButton isSelected={selectedTopic === 'props'}
                        onClick={() => handleClick('props')}>Props</TabButton>
                    <TabButton isSelected={selectedTopic === 'state'}
                        onClick={() => handleClick('state')}>State</TabButton>                
                </>
            }>
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
            </Tabs>
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
      </Section>
    );
}