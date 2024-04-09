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
let playerRow = 0;
let playerCol = 0;
player.style.gridRow = playerRow + 1;
player.style.gridCol = playerCol + 1;

// Keyboard input
document.addEventListener('keydown' , (e) => {
    switch (e.key) {
        case 'ArrowUp':
            if (playerRow > 0) {
                playerRow--;
            }
            break;
            case 'ArrowDown':
                if (playerRow < rows - 1) {
                    playerRow++;
                }
                break;
                case 'ArrowLeft':
                    if (playerCol > 0) {
                        playerCol--;
                    }
                    break;
                    case 'ArrowRight':
                        if (playerCol < cols - 1) {
                            playerCol++;
                        }
                        break;
                    }
                    player.style.gridRow = playerRow + 1;
                    player.style.gridColumn = playerCol + 1;
            
                });
