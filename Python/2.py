ui=input('Enter a String:')

count1=0
count2=0
for i in ui:
    if(i.isupper()):
        count1+=1
    else:
        count2+=1

print(count1 , count2)