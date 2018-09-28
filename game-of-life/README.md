# ReactJS Game of Life App
* CellState
  * [x] Has an ALIVE state
  * [x] Has a DEAD state
* Cell
  * [x] Should be initialized with a cellState
  * [x] Should die if it has fewer that 2 live neighbors
    * [x] getNextState(numNeighbors)
  * [x] Should live with 2 or 3 live neighbors
  * [x] Should die with more than 3 neighbors
  * [ ] Should come alive with exactly 3 neighbors
* Game
  * [ ] Sould be initialized with a given state
    * [ ] Array of arrays of states
  * [ ] Should retrieve a cell at a given row and column
  * [ ] Should get the number of alive neighbors for a given cell
  * [ ] Should create the next state of the game
