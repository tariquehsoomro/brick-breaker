export function detectCollision(ball, gameObject) {
    // Paddle check
    let topOfBall = ball.position.y
    let bottomOfBall = ball.position.y + ball.size

    let topOfObject = gameObject.position.y
    let bottomOfObject = gameObject.position.y + gameObject.height
    let leftOfObject = gameObject.position.x
    let rightOfObject = gameObject.position.x + gameObject.width

    if (bottomOfBall >= topOfObject
        && topOfBall <= bottomOfObject
        && ball.position.x >= leftOfObject
        && ball.position.x + ball.size <= rightOfObject
    ) { return true }
    else { return false }
}