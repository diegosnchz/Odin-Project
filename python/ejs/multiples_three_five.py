def solution(number):
    contador = 0
    for i in range(number):
        if i%3==0 or i%5==0:
            contador += i

    return contador


print(solution(1568))
          