def numPlates(weight):
    if ((weight % 5) != 0): return "Invalid input."
    bar = 45
    num45 = 0
    num25 = 0
    num10 = 0
    num5 = 0
    num2point5 = 0
    trueWeight = weight - bar
    temp = trueWeight
    while (temp > 0):
        num45 += temp//90
        temp -= num45*90
        num25 += temp//50
        temp -= num25*50
        num10 += temp//20
        temp -= num10*20
        num5 += temp//10
        temp -= num5*10
        num2point5 += temp//5
        temp -= num2point5*5
    return [num45,num25,num10,num5,num2point5]
def calcPlates():
    weight = input("Enter weight.")
    plates = numPlates(weight)
    arr = [45,25,10,5,2.5]
    for i in range(len(plates)):
        print("You'll need x"+ str(plates[i]) + " " + str(arr[i]) + " lb plate(s) on each side")
    return
calcPlates()
