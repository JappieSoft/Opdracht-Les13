function readTimer(blog) {
    const amountWords = 100;
    const readSpeed = 0.3;
    let calculated = blog.split(" ").length / amountWords / readSpeed;
    let finalNumber = Math.round(calculated);

    return finalNumber > 0 ? finalNumber : 1;
}

export default readTimer;