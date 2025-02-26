#siempre que quieras sumar/comparar o lo que sea del primer indice (y que este se quede estático) con los demás indices del array hay que
# HACER UN DOBLE BUCLE FOR ANIDADO

def two_sum(numbers, target):
    for i in range(len(numbers)):
        for j in range(i + 1, len(numbers)): #lo que se está haciendo aquí es iniciar el bucle j un índice después para que no se solape con el i, que empiece despues para poder compararlo bien
            if numbers[i] + numbers[j] == target:
                return (i, j)
    return None