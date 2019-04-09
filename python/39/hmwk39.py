name_month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August','Septemper', 'October', 'November', 'December']
amt_days_of_month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ]

for month,amt_days in zip(name_month, amt_days_of_month):
    print(month, amt_days)

name_month = 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August','Septemper', 'October', 'November', 'December'
amt_days_of_month = 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 

for month,amt_days in zip(name_month, amt_days_of_month):
    print(month, amt_days)

months ={
    'January': 31,
    'February': 28,
    'March': 31,
    'April': 30,
    'May': 31,
    'June': 30,
    'July': 31,
    'August': 31,
    'Septemper': 30,
    'October': 31,
    'November': 30,
    'December': 31
}

for x in months:
    print(x, months[x])

def get_days_month(month):
    if month =='January':
        m = 31
    elif month=='March':
        m = 31
    elif month =='May':
        m = 31
    elif month=='July':
        m = 31
    elif month=='August':
        m = 31
    elif month=='October':
        m = 31
    elif month=='December':
        m = 31
    elif month == 'April':
        m = 30
    elif month =='June':
        m = 30
    elif month=='September':
        m = 30
    elif month=='November':
        m = 30
    elif month =='February':
        m = 28
    else:
        m = 'Invalid Month'
    return m

print(get_days_month('June'))


class Account:
    account_number=10000
    num_accounts=0
    def __init__(self, account_holder_name, balance):
        self.account_holder_name = account_holder_name
        self.balance=balance
        Account.num_accounts +=1
        Account.account_number+=1
    
    def print(self):
        print(f'Name: {self.account_holder_name} Account Number: {self.account_number} Balance: {self.balance} ' )

    @classmethod
    def get_amount_accounts(cls):
        print( cls.num_accounts)


account =Account('Donald Trump', 10000)
account.print()
account2 =Account('Mike Pence', 1000000)
account2.print()
account3 =Account('Bill Clinton', 5000)
account3.print()
Account.get_amount_accounts()



    