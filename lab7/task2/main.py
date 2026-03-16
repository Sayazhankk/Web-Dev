# main.py

from models import Animal, Dog, Cat


def main():
    animal1 = Animal("Generic Animal", 5, "gray")
    dog1 = Dog("Buddy", 3, "brown", "Labrador")
    cat1 = Cat("Misty", 2, "white", True)

    animals = [animal1, dog1, cat1]

    for animal in animals:
        print(animal)
        print(animal.eat())
        print(animal.speak())
        print()


if __name__ == "__main__":
    main()