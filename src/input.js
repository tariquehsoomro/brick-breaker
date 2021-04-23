export default class InputHandler {
    constructor(game, paddle) {
        document.addEventListener('keydown', function (event) {
            // alert(event.keyCode)
            switch (event.keyCode) {
                case 37:
                    paddle.moveLeft()
                    break
                case 39:
                    paddle.moveRight()
                    break
                case 27:
                    game.togglePause()
                    break
                case 32:
                    game.start()
                    break
            }
        })

        document.addEventListener('keyup', function (event) {
            switch (event.keyCode) {
                case 37:
                    if (paddle.speed < 0) paddle.stop()
                    break
                case 39:
                    if (paddle.speed > 0) paddle.stop()
                    break
            }
        })
    }
}