import React, { Component } from 'react'
import "./Board.css"
import Cell from './Cell'

class Board extends Component {
	static defaultProps = {
		nrows: 5,
		ncol: 5,
		changeLightStartOn: 0.25,
	}
	constructor(props) {
		super(props)
		this.state = {
			hasWon: false,
			board: this.createBoard(),
		}
	}
	createBoard() {
		let board = []
		for (let y = 0; y < this.props.nrows; y++) {
			let row = []
			for (let x = 0; x < this.props.ncols; x++) {
				row.push(math.random() < this.props.changeLightStartsOn)
			}
			board.push(row)
		}
		return board
	}
	flipCellsAround(coord) {
		let { ncols, nrows } = this.props
		let board = this.state.board
		let [y, x] = coord.split("-").map(Number)

		function flipCell(y, x) {
			if (x >= 0 && x < ncols && y >= 0 && y < nrows) {
				board[y][x] = !board[y][x]
			}
		}
		flipCell(y, x)
		flipCell(y, x - 1)
		flipCell(y, x + 1)
		flipCell(y - 1, x)
		flipCell(y + 1, x)

		let hasWon = board.every((row) => row.every((cell) => !cell))
		this.setState({ board: board, hasWon: hasWon })
	}

	render() {
		return (
			<div>
				🍀 This Component Board.jsx
				<h1>Gölge Yoket</h1>
				<Cell />
			</div>
		)
	}
}

export default Board