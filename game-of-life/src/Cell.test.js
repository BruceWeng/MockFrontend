import Cell from './Cell';
import CellState from './CellState';

describe('Cell', () => {
  it('Should be initialized with a cellState', () => {
    const cell = new Cell(CellState.ALIVE);
    expect(cell.state).toBe(CellState.ALIVE);

    const deadCell = new Cell(CellState.DEAD);
    expect(deadCell.state).toBe(CellState.DEAD);
  });

  it('Should die if it has fewer than 2 live neighbors', () => {
    const cell = new Cell(CellState.ALIVE);
    const nextState = cell.getNextState(1);
    expect(nextState).toBe(CellState.DEAD);
  });

  it('Should live with 2 or 3 neighbors', () => {
    const cell = new Cell(CellState.ALIVE);
    const nextStateWith2Neighbors = cell.getNextState(2);
    expect(nextStateWith2Neighbors).toBe(CellState.ALIVE);

    const nextStateWith3Neighbors = cell.getNextState(3);
    expect(nextStateWith3Neighbors).toBe(CellState.ALIVE);
  });
});