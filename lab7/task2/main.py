from models import JoJo, Jolyne, Jotaro


def main():
    jojo1 = JoJo("Joseph", 25, "Hermit Purple")
    jolyne1 = Jolyne("Jolyne", 20, "Stone Ocean", "Stone Free")
    jotaro1 = Jotaro("Jotaro", 23, "The Crusaders", "Joseph")

    jojos = [jojo1, jolyne1, jotaro1]

    for jojo in jojos:
        print(jojo)
        print(jojo.fight())
        print(jojo.speak())
        print()


if __name__ == "__main__":
    main()