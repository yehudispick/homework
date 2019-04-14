from random import randint
class Die:
    def __init__(self, amount_sides):
        self._amount_sides=amount_sides
    
    def roll(self):
        number =  randint(1,self._amount_sides)
        return number


class Six_Sided_Die(Die):
    def __init__(self):
        self._amount_sides=6

die = Die(25)
print(die.roll())   
six_die = Six_Sided_Die()
print(six_die.roll())
