from random import randint
def selection_sort (list):
    for i in range (len(list)):
        min_position = i
        for j in range(i+1,len(list)):
            if list[min_position]> list[j]:
                min_position = j
        
        temp = list[i]
        list[i]= list[min_position]
        list[min_position] = temp
   
    return list

print(selection_sort([10,9,8,7,6,5,4,3,2,1]))

random_list =[]
for i in range(10):
    random_list.append(randint(1,100))

print (random_list)
print(selection_sort(random_list))



