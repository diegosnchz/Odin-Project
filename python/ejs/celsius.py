# fahrenheit to celsius --> (x − 32) * ⁠5/9
# celsius to fahreinheit --> (x * ⁠9/5⁠ + 32)

temp = int(input("please introduce the temperature (celsius): "))

def convert_temp(temp):
    return (temp * 9/5) + 32

fahreinheit = convert_temp(temp)

print(f"the temperature in fahreinheit is: {fahreinheit}")