constructor() {
// 1. Initializing state
}
componentWillMount() {
  // React 16, deprecate in React 17
  // 1. Initializing state
  // 2. Fetching external data
  // 3. Adding event listeners (or subscriptions)
}
componentDidMount() {
  // 2. Fetching external data
  // 3. Adding event listeners (or subscriptions)
}
componentWillReceiveProps() {
  // React 16, deprecate in React 17
  // 4. Updating state based on props
  // 6. Side effects on props change
  // 7. Fetching external data when props change
}
static getDerivedStateFromProps(nextProps, prevState) {
  // New since React 16
  // 4. Updating state based on props
  // 7. Fetching external data when props change
}
shouldComponentUpdate() {
}
componentWillUpdate(nextProps, nextState) {
  // React 16, deprecate in React 17
  // 5. Invoking external callbacks
  // 8. Reading DOM properties before an update
  
}
render() {
}
componentDidUpdate(prevProps, prevState, snapshot) {
  // 5. Invoking external callbacks
  // 6. Side effects on props change
}
getSnapshotBeforeUpdate(prevProps, prevState) {
  // New since React 16
  // 8. Reading DOM properties before an update
}
componentWillUnmount() {
}
