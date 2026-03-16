def xor(x, y):
    return (x and not y) or (not x and y)

if __name__ == "__main__":
    x, y = map(int, input().split())
    x = bool(x)
    y = bool(y)
    result = xor(x, y)
    print(int(result))