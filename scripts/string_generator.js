function generate_number(a, b) {
    return a + Math.floor(Math.random() * (b - a));
}
function shuffle(array) {
    let currentIndex = array.length, randomIndex;

    while (currentIndex != 0) {

        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }
    return array;
}

const word_setting = {
    alphabet_in_line: 100,
    words_in_line: 19,
    no_line: 5,
    words_count_5: 6,
    word_count_4: 7,
    word_count_3: 5,
    word_count_2: 1,

}

function generate_word_set() {
    let word_set = [];
    let generated_string = "";
    const word_pool = {
        size_5: [
            "hello",
            "timer",
            "police",
            "forth",
            "gamer",
            "swigy",
            "coder",
            "limit",
            "scope",
            "guide",
            "elite",
        ],
        size_4: [
            "time",
            "acer",
            "live",
            "city",
            "race",
            "ride",
            "apex",
            "redo",
            "bite",
            "kite",
            "lite",
            "dark",
            "real",
            "sumo"
        ],
        size_3: [
            "ace",
            "pet",
            "cat",
            "dat",
            "sad",
            "pad",
            "ink",
            "igl",
            "the",
            "the",
            "the",
            "the",
            "the",
            "the",
            "the",
            "ear"
        ],
        size_2: [
            "do",
            "so",
            "lo",
            "ok",
            "ko"
        ],
    }
    for (let index = 0; index < word_setting.no_line; index++) {
        let curr_line = [];
        for (let i = 0; i < word_setting.words_count_5; i++) {
            const x = generate_number(0, word_pool.size_5.length);
            curr_line.push(word_pool.size_5[i]);
        }
        for (let i = 0; i < word_setting.word_count_4; i++) {
            const x = generate_number(0, word_pool.size_4.length);
            console.log("Number:", x);
            curr_line.push(word_pool.size_4[i]);
        } for (let i = 0; i < word_setting.word_count_3; i++) {
            const x = generate_number(0, word_pool.size_3.length);
            curr_line.push(word_pool.size_3[i]);

        } for (let i = 0; i < word_setting.word_count_2; i++) {
            const x = generate_number(0, word_pool.size_2.length);
            curr_line.push(word_pool.size_2[i]);
        }
        shuffle(curr_line);
        for (let i = 0; i < curr_line.length; i++) {
            word_set.push(curr_line[i]);
        }
    }
    console.log(word_set);
    for (let i = 0; i < word_set.length; i++) {

        generated_string = generated_string + " " + word_set[i];
        if ((i + 1) % word_setting.words_in_line == 0) {
            generated_string += "<br>";
        }
    }
    return [generated_string, word_set];
}

generate_word_set();