
print("Adição")
for i in range(1, 11):
    adi = numero + i
    print(f"{numero} + {i}: {adi}")

    print("Subtração")
    for i in range(1, 11):
        sub = numero - i
        print(f"{numero} - {i}: {sub:2}")
    

    print("\nMultiplicação")
    for i in range(1, 11):
        mult = numero * i
        print(f"{numero} x {i}: {mult}")

    print("\nDivisão")
    for i in range(1, 11):
        div = numero / i
        print(f"{numero} / {i}: {div:2}")
