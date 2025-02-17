def disemvowel(string_):
    vowels = "aeiouAEIOU"
    result = ""
    for char in string_:
        if char not in vowels:
            result += char
    return result