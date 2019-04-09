import random
#def increment(number, by):
def increment(number, by=1):
    print('In increment function',number,by)
    return number +by 


print(increment(5,1))
print(increment(number=5, by=2))
print(increment(by=2,number=5))


some_numbers =[1,2,3]
x,y,z = some_numbers #unpacking
print(x,y,z)

some_numbers.extend([4, 5, 6])
#x, y, z, *the middle_ones, the_last =some_numbers
#print(x, y, z, *the middle_ones, the_last)


def add(numbers):
    total = 0
    for i in numbers:
        total+=i
    return total


print(add((1,2,3)))

def add2(*numbers):
    total = 0
    for i in numbers:
        total+=i
    return total

print(add2(1,2,3))

def add_user(**user):
    print(user)
    print(user.get('name', 'no name'))


add_user(name="Joe", age=21, email="joe@gmail.com")
add_user(size=52)

print(random.choice(some_numbers))


def choice(sequence):
    x = random.randint(0, len(sequence)-1)
    print(x)
    return sequence[x]

for i in range(20):
    print(choice(some_numbers))


