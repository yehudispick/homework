names = ['Sam', 'Bob','Joe']
i=0
for name in names:
    print(i,name)
    i+= 1

for i in range(len(names)):
    print(i, names[i])

for i, v in enumerate(names):
    print(i, v)

scores =[98,87,76]
for i, v in enumerate(names):
    print(i, v, scores[i])

for name,score in zip(names, scores):
    print(name, score)

myTuple = (1,2,3,4)
for x in myTuple:
    print(x)

names.append('Donald')

anotherTuple = 5,6,7,8
for x in anotherTuple:
    print(x)

empty =()
for x in empty:
    print(x)

tuple_of_one =(1,)
for x in tuple_of_one:
    print(x)

potus ={
    'first_name': 'Donald',
    'last_name': 'Trump'
}

print(potus)
print(potus['first_name'])
print(potus.get('name'))

potus ['email']='dtrump@whitehouse.gov'
print(potus)

del potus['email']
print(potus)

potus['first_name']='Ivanka'
print(potus)

good_foods=set(['pizza','steak','hamburger'])
foods = set(['brocolli','pizza'])

print('steak'in good_foods)
print('brocolli' not in good_foods)

print(foods.union(good_foods))
print(foods.intersection(good_foods))
print(foods.difference(good_foods))
foods.add('chulent')
print(foods)
cant_change= frozenset(['ice cream', 'pizza'])
print(foods.union(cant_change))
#cant_change.add('sorbet') can't add to a frozenset