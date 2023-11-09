generate_string();
set_settings(false);
apply_setting();
function generate_string() {
    const [generated_string, word_set] = generate_word_set();
    console.log("generted:", generated_string);
    document.getElementById('raw_text').innerHTML = generated_string;
    start_run();
}