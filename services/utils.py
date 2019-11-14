import math

def secuencia(n):
    while n != 1:
        print n,
        if n%2 == 0:
            n = n/2 
        else:
            n = n*3+1

def imprimeMultiplos(n, mayor): 
    i = 1
    while i <= mayor: 
        print n * i, '\t', 
        i = i + 1
    print

def imprimeTablaMult(mayor):
    i = 1
    while i <= mayor:
        imprimeMultiplos(i, i) 
        i = i + 1

def logratimos():
    x = 1.0
    while x < 10.0:
        print x, '\t', math.log(x)
        x = x + 1.0

nro = input('ingrese un nro : ')
secuencia(nro)
logratimos()
imprimeTablaMult(7)