from datetime import datetime

class Car:
    def __init__(self, name, model):
        self.name = name
        self.model = model
        self.isHere = True
        self.startDate = None
        self.endDate = None
        self.isClient = "owner"
    
    def checkout(self, start_date, end_date):
        self.isHere = False
        self.startDate = start_date
        self.endDate = end_date

    def checkin(self):
        self.isHere = True
        self.startDate = None
        self.endDate = None
    
    def __str__(self):
        whoHasCar = "owner" if self.isHere else "client"
        return f"Car is {self.name} {self.model} and Car is with the {whoHasCar}. Start Date: {self.startDate}, End Date: {self.endDate}"

class Customer:
    def __init__(self, name):
        self.name = name

    def __str__(self):
        return f"This is our customer {self.name}"

class Task_Manager:
    def __init__(self):
        self.cars = []
        self.members = []

    def add_car(self, car):
        self.cars.append(car)
        return f"{car.name} is added"

    def add_member(self, customer):
        self.members.append(customer)
        return f"{customer.name} is added"

    def car_checkout(self, customer, car, start_date, end_date):
        # Check if customer is registered
        if customer not in self.members:
            return f"Customer {customer.name} is not registered."
        
        # Check if car is available
        if car not in self.cars:
            return f"Car {car.name} is not available."
        
        # Check if car is already rented during the requested period
        if car.startDate and car.endDate:
            start = datetime.strptime(start_date, "%d-%m-%Y")
            end = datetime.strptime(end_date, "%d-%m-%Y")
            car_start = datetime.strptime(car.startDate, "%d-%m-%Y")
            car_end = datetime.strptime(car.endDate, "%d-%m-%Y")
            
            if (start <= car_end and end >= car_start):
                return f"Car {car.name} is already rented from {car.startDate} to {car.endDate}."

        # Checkout the car
        car.checkout(start_date, end_date)
        car.isClient = customer.name
        return f"Car {car.name} has been rented by {customer.name} from {start_date} to {end_date}."

    def car_checkin(self, car):
        car.checkin()
        return f"Car {car.name} has been returned."

# Example usage
task_manager = Task_Manager()

customer1 = Customer("Burhan")
print(task_manager.add_member(customer1))

car1 = Car("Toyota", "Corolla")
print(task_manager.add_car(car1))

# Checkout car
print(task_manager.car_checkout(customer1, car1, "01-08-2024", "10-08-2024"))

# Attempt to checkout the same car during an overlapping period
print(task_manager.car_checkout(customer1, car1, "05-08-2024", "15-08-2024"))

# Checkin car
print(task_manager.car_checkin(car1))

# Checkout car again with a non-overlapping period
print(task_manager.car_checkout(customer1, car1, "15-08-2024", "20-08-2024"))

# Print car status
print(car1)
