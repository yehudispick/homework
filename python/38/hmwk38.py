import random
for number in range(1,11):
    for table in range(1,11):
        print('{} x {} = {}'.format(number,table,number*table))

random_number = random.randint(1,101)
while True:
    try:
        guess = int(input('Guess the number: '))
        if guess == random_number:
            print(f'You Won! the number was {guess}')
            break
        elif guess != random_number and guess > random_number:
            print(f'Sorry, {guess} is too high')
        elif guess != random_number and guess < random_number:
            print(f'Sorry, {guess} is too low')
    except ValueError as e:
        print(e)
