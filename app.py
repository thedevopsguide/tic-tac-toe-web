from flask import Flask, render_template, request, jsonify
import copy

app = Flask(__name__)

HUMAN = "X"
AI = "O"

def check_winner(board, player):
    wins = [
        [0,1,2],[3,4,5],[6,7,8],
        [0,3,6],[1,4,7],[2,5,8],
        [0,4,8],[2,4,6]
    ]
    for a,b,c in wins:
        if board[a] == board[b] == board[c] == player:
            return True
    return False

def is_full(board):
    return "" not in board

def minimax(board, is_maximizing):
    if check_winner(board, AI):
        return 1
    if check_winner(board, HUMAN):
        return -1
    if is_full(board):
        return 0

    if is_maximizing:
        best_score = -100
        for i in range(9):
            if board[i] == "":
                board[i] = AI
                score = minimax(board, False)
                board[i] = ""
                best_score = max(score, best_score)
        return best_score
    else:
        best_score = 100
        for i in range(9):
            if board[i] == "":
                board[i] = HUMAN
                score = minimax(board, True)
                board[i] = ""
                best_score = min(score, best_score)
        return best_score

def best_move(board):
    best_score = -100
    move = None

    for i in range(9):
        if board[i] == "":
            board[i] = AI
            score = minimax(board, False)
            board[i] = ""
            if score > best_score:
                best_score = score
                move = i

    return move

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/ai-move", methods=["POST"])
def ai_move():
    data = request.json
    board = data.get("board")

    move = best_move(board)

    return jsonify({"move": move})

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)
