# https://www.codewars.com/kata/52597aa56021e91c93000cb0/train/python

# move_zeros([1, 0, 1, 2, 0, 1, 3]) # returns [1, 1, 2, 1, 3, 0, 0]

def move_zeros(lst):
    sortList = sortArr()
    cont = 0
    for i, number in enumerate (lst):
        if (number == 0):
            cont += 1
            lst.pop(i)
#Lo que puedo hacer es que recorra la lista y meter un contador que cuente cuantas veces se ha quitado el 0. Luego añadir n 0 al final del array

    return lst


def sortArr (lst):
    sorted = lst.sort()