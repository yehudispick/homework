class Employee:
    raise_percent =1.05 #static

    def __init__(self, first, last,salary):
        self.first = first
        self.last = last
        self.salary=salary
    
    def raise_salary(self):
        self.salary *= self.raise_percent

    def print(self):
        print(f'Name: {self.first} {self.last} Salary: {self.salary} ' )
    
    @classmethod
    def set_raise_amount(cls,raise_percent):
        cls.raise_percent=raise_percent
    
    @staticmethod
    def get_department():
        return('Engineering', 'Sales', 'Janitorial')
    

employee =Employee('Donald', 'Trump',50000)
#employee.first='Donald'
#employee.last='Trump'

employee.print()
employee.raise_percent=1.10
employee.raise_salary()
employee.print()

employee2 =Employee('Mike', 'Pence',40000)
employee2.print()
employee2.raise_salary()
employee2.print()

Employee.set_raise_amount(1.02)
employee.raise_salary()
employee.print()
employee2.raise_salary()
employee2.print()

print(Employee.get_department())

class Developer(Employee):
    pass

developer=Developer('Bill', 'Gates',100000)
developer.raise_salary()
developer.print()