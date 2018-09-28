import Cell from './Cell';
import CellState from './CellState';

describe('Cell', () => {
  it('Should be initialized with a cellState', () => {
    const cell = new Cell(CellState.ALIVE);
    expect(cell.state).toBe(CellState.ALIVE);

    const deadCell = new Cell(CellState.DEAD);
    expect(deadCell.state).toBe(CellState.DEAD);
  });
});