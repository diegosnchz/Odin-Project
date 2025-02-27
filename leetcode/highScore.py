def valorAbc():
    abc = "abcdefghijklmnopqrstuvwxyz"
    result = {}
    for i, letter in enumerate(abc):
        result[letter] = i + 1
    return result

def high(x):
    letter_values = valorAbc()
    words = x.split()
    word_scores = {}

    for word in words:
        score = 0
        for letter in word:
            score += letter_values.get(letter, 0)  
        word_scores[word] = score

    if not word_scores:
        return ""  

    best_word = max(word_scores, key=word_scores.get)
    return best_word