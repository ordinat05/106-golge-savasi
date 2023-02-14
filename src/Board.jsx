import React, { Component } from 'react'
import "./Board.css"

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
			bord: this.createBoard(),
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
	}

	render() {
		return (
			<div>
				<h1>Gölge Yoket</h1>
			</div>
		)
	}
}

export default Board