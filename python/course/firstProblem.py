def unionArr():
    something = input("Say something: ")
    result = []

    while something != '\\end':
        result.append(something)
        something = input("Say something: ")

    return print('. '.join(result))

unionArr()