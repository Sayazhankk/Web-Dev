class JoJo:
    def __init__(self, name, age, part):
        self.name = name
        self.age = age
        self.part = part

    def fight(self):
        return f"{self.name} is fighting."

    def speak(self):
        return f"{self.name} :ORA ORA."

    def __str__(self):
        return f"JoJo(name={self.name}, age={self.age}, part={self.part})"
    
class Jolyne(JoJo):
     def __init__(self, name, age, part, stand):
        super().__init__(name, age, part)
        self.stand = stand

     def speak(self):  
        return f"{self.name} says:ORA ORA !"

     def result(self):
        return f"{self.name} lost battle."

     def __str__(self):
        return f"Jolyne(name={self.name}, age={self.age}, part={self.part}, stand={self.stand})"
class Jotaro(JoJo):
     def __init__(self, name, age, part, grandfather):
        super().__init__(name, age, part)
        self.grandfather = grandfather

     def speak(self):  
        return f"{self.name} says: ORA ORA!"

     def feature(self):
        return f"{self.name} has stopped the time for 5 seconds."

     def __str__(self):
        return f"Jotaroo(name={self.name}, age={self.age}, part={self.part}, grandfather={self.grandfather})"