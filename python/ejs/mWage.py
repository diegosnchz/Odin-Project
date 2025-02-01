wage = float(input("Hourly wage: "))
worked = int(input("Hours worked: "))
dWeek = str(input("Day of the week: ").lower())

totalDay = wage * worked

def money_returned (dWeek, totalDay):
  match dWeek:
    case "monday":
        return totalDay * 1
    case "tuesday":
        return totalDay *2
    case "wednesday":
        return totalDay *3
    case "thursday":
        return totalDay *4
    case "friday":
        return totalDay*5
    case "saturday":
        return totalDay*6
    case "sunday":
        return totalDay *7
    case _:
        return totalDay
      

print(f"Your total payment is {money_returned(dWeek, totalDay)}€")
