import Cell from "./Cell";
import { ALIVE, DEAD } from "./CellState";
import Game from "./Game";

const deadState = [
  [DEAD, DEAD, DEAD],
  [DEAD, DEAD, DEAD],
  [DEAD, DEAD, DEAD]
];

describe('Game of Life', () => {
  it('Should be initialized with a given state', () => {


    const game = new Game(deadState);

    const cellState = [
      [new Cell(DEAD), new Cell(DEAD), new Cell(DEAD)],
      [new Cell(DEAD), new Cell(DEAD), new Cell(DEAD)],
      [new Cell(DEAD), new Cell(DEAD), new Cell(DEAD)]
    ];

    expect(game.state).toEqual(cellState);
  });

  it('Should retrieve a cell at a given row and column', () => {
    const game = new Game(deadState);
    const cell = game.getCell(0, 0);
    expect(cell).toBeInstanceOf(Cell);
    expect(cell.state).toEqual(deadState[0][0]);

    const gameState = [
      [ALIVE, DEAD],
      [DEAD, ALIVE]
    ];
    const newGame = new Game(gameState);
    const aliveCell = newGame.getCell(0, 0);
    expect(aliveCell).toBeInstanceOf(Cell);
    expect(aliveCell.state).toEqual(gameState[0][0]);

    const deadCell = newGame.getCell(1, 1);
    expect(deadCell).toBeInstanceOf(Cell);
    expect(deadCell.state).toEqual(gameState[1][1]);
  });
});