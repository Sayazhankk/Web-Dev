def power(a, n):
    result = 1.0
    for _ in range(n):
        result *= a
    return result

if __name__ == "__main__":
    a, n = map(float, input().split())
    n = int(n)
    print(power(a, n))