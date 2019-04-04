course_name='PCS Programing Course'
print(course_name.find('Course'))
print(course_name.find('course'))

some_people=['Sam', 'Joe','Bob']
print(some_people.index('Sam'))

name =input('what is your name? ')
print(f'Hello {name}')

try: 
    age=int (input('How old are you? '))
    print(f'You will be 100 in {100-age} years')
except ValueError as e:
    print(e)
    
if age >= 21:
    print('you can buy alchol')
elif age <3:
    print('you cant buy anything')
else:
    print('you picked some other age')

if age>= 18 and age<65:
    print('You need to pay taxes')
else:
    print('No taxes')
message = 'Taxes'if age>= 18 and age<65 else 'no taxes'
print(message)

for letter in 'PCS Programminng Course':
    print(letter)
#for number in copy:
    #print(number)