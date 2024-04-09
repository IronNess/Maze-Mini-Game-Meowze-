const maze = document.getElementById('maze');
const rows = 10;
const cols = 10;
const player = document.createElement('div');
player.classList.add('player');
maze.appendChild(player);


// maze grid
for (let i = 0; i < rows; i++) {
    for (let j =0; j < cols; j++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        maze.appendChild(cell);
    }
}

// players position on maze
let PlayerRow = 0;
let PlayerCol = 0;
player.style.gridRow = PlayerRow + 1;
player.style.gridCol = playerCol + 1;

// Keyboard input
document.addEventListener('keydown' , (e) => {
    switch (e.key) {
        case 'ArrowUp':
            if (PlayerRow > 0) {
                PlayerRow--;
            }
            break;
            case 'ArrowDown':
                if (PlayerRow < rows - 1) {
                    PlayerRow++;
                }
                break;
                case 'ArrowLeft':
                    if (PlayerCol > 0) {
                        PlayerCol--;
                    }
                    break;
                    case 'ArrowRight':
                        if (PlayerCol < cols - 1) {
                            PlayerCol++;
                        }
                        break;
                    }
                    player.style.gridRow = PlayerRow + 1;
                    player.style.gridCol = PlayerCol + 1;
                });
