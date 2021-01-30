// we are de structuring out of the module, the useState hook. 
import React, {useState} from 'react';
function App() { 
  return <div> 
          < Folder name="Desktop">
            < Folder name="Music">
              < File name="darkthrone.mp3" />
              < File name="slayer.mp3" />
              < File name="morbid_angel.mp3" />
            </Folder>
            < Folder name="Animals">
              < File name="dogs.jpg" />
              < File name="hawks.png" />
            </Folder>
          </Folder>
          < Folder name="Applications">
            < Folder name="Web_Development">
              < File name="vs_code.app" />
              < File name="postman.app" />
            </Folder>
            < Folder name="Utility">
              < File name="terminal.app" />
              < File name="keychain.app" />
            </Folder>
          </Folder>
        </div>
}

const Folder = (props) => { 
  const [ isOpen, setIsOpen ] = useState();
  const {name, children} = props;
  // ternary statement for managing the direction of the arrow
  const direction = isOpen ? 'down' : 'right';

  const handleClick = () => {
    // setting to the opposite, effectively a switch
    setIsOpen(!isOpen);
  }
  return <div>
          <span onClick={handleClick}>
            <i className="blue folder icon"></i>
            <i className={`caret ${direction} icon`}></i>
          </span>
            {name} 
          <div style={{marginLeft: '20px'}}>
            {isOpen ? children : null}
          </div>
         </div>
}

const File = (props) => {
  return <div>{props.name}</div>
}

export default App;


