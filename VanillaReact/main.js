// 1. Selector
let $ = function(name) {
  document.querySelector(name);
}
// 2. AddEventHandler
let on = function(event, callback) {
  document.addEventListener(event, callback);
}
// 3. Render
/**
 * @param {Object} props 
 * @param {DOM} node 
 */
let render = function(props, node) {
  
}
// 4. CreateStore
/**
 * @param {Object} initialState 
 * @return {Object} store
 */
const createStore = function(initialState) {
  let _state = initialState || {};
  let _listeners = [];

  const updateListeners = function(state) {
    _listeners.forEach((listener) => {
      listener.callback(state);
    })
  }

  return {
    setState: function(state) {
      _state = state;
      updateListeners(state);
    },
    getState: function() {
      return _state;
    },
    onUpdate: function(name, callback) {
      _listeners.push({ name, callback });
    }
  }
}
// 5. CreateElement
/**
 * 
 * @param {String} tag 
 * @param {Object} props 
 * @param {Element Object[]} children 
 */
const CreateElement = function(tag, props, children) {
  let elem = $(`<${tag}>`);

  // find the events in attrs
  for (let key in props) {
    let value = props[key];
    // onUpdate function is passed from props
    // find event name and addEventHandler
    elem.on(event, val)

    // if no event, set attribute to val
    elem.setAttribute(key, val);
  }
  return elem.innerHTML(children);
}

/**
 * React.createElement(tag, props, children): returns an Element Tree Object
 * React.createClass({ InitialStates }, { DefaultProps }, { render func }): returns a function
 */