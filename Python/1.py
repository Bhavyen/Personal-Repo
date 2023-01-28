def max ():
    a=int(input('Number 1: '))
    b=int(input('Number 2: '))
    c=int(input('Number 3: '))
    if(a>=b and a>=c):
        print(a)
    elif(b>=c and b>=a):
        print(b)
    else:
        print(c)
        
max()


