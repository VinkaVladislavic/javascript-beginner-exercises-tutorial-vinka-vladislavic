function sing() {
    let lyrics = '';
    for(let i=0; i<4; i++) {
        lyrics += 'let it be, ';
    }
    lyrics += 'there will be an answer, ';
    for(let i=0; i<5; i++) {
        lyrics += 'let it be, ';
    }
    lyrics = lyrics + 'whisper words of wisdom, ';
    for(let i=0; i<1; i++) {
        lyrics += 'let it be';
    }
    return lyrics;
}

//Your code above ^^^

console.log(sing());