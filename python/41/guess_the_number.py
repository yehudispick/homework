from random import randint
number= int(input('Pick a number for the computer to guess between 1 and 100:  '))
list= range(1,100)
Guess = randint(1,100)
print(Guess)
low_index = 1
high_index = 100


while low_index<= high_index:
    try:
        answer = int(input("Please type: 1 for my try is too high\n"
                   "             2 for my try is too low\n"
                   "             3 I guessed your number\n"))
        
        if answer ==1:
            high_index=Guess-1
            Guess =(low_index+ high_index)//2
            if Guess <= low_index:
                    Guess = Guess + 1
            if high_index - low_index == 2:
                    Guess = low_index + 1
            print(Guess)
        elif answer == 2:
            low_index= Guess+1
            Guess =(low_index+ high_index)//2
            if Guess <= low_index:
                    Guess = Guess + 1
            if high_index - low_index == 2:
                    Guess = low_index + 1
            print(Guess)
        elif answer ==3:
            print('Yay, I won')
            break
       
    except ValueError as e:
        print(e)
