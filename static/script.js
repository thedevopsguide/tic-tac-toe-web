let board = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let gameOver = false;

const statusText = document.getElementById("status");
const cells = document.querySelectorAll(".cell");
const modeSelect = document.getElementById("mode");

const modal = document.getElementById("modal");
const resultText = document.getElementById("resultText");

const winningCombos = [
    [0,1,2], [3,4,5], [6,7,8],
    [0,3,6], [1,4,7], [2,5,8],
    [0,4,8], [2,4,6]
];

cells.forEach(cell => {
    cell.addEventListener("click", () => handleClick(cell));
});

function handleClick(cell) {
    const index = cell.dataset.index;

    if (board[index] !== "" || gameOver) return;

    makeMove(index, currentPlayer);

    if (checkWinner()) return;

    if (modeSelect.value === "ai" && currentPlayer === "O") {
        computerTurn();
    }
}

function makeMove(index, player) {
    board[index] = player;
    cells[index].innerText = player;

    if (player === "X") {
        currentPlayer = "O";
        statusText.innerText = "Player O's turn";
    } else {
        currentPlayer = "X";
        statusText.innerText = "Player X's turn";
    }
}

function computerTurn() {
    fetch("/ai-move", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ board: board })
    })
    .then(res => res.json())
    .then(data => {
        if (data.move !== null && !gameOver) {
            makeMove(data.move, "O");
            checkWinner();
        }
    });
}

function checkWinner() {
    for (let combo of winningCombos) {
        const [a, b, c] = combo;

        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            showResult(`Player ${board[a]} Wins! 🎉`);
            gameOver = true;
            return true;
        }
    }

    if (!board.includes("")) {
        showResult("It's a Draw! 🤝");
        gameOver = true;
        return true;
    }

    return false;
}

function showResult(message) {
    resultText.innerText = message;
    modal.style.display = "flex";
}

function closeModal() {
    modal.style.display = "none";
    resetGame();
}

function resetGame() {
    board = ["", "", "", "", "", "", "", "", ""];
    currentPlayer = "X";
    gameOver = false;
    statusText.innerText = "Player X's turn";
    cells.forEach(cell => cell.innerText = "");
}
