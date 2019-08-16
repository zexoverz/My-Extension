import random


def cetak(input):
    string_list = []
    unique_list = []
    while len(unique_list) < input:
        for i in range(input):
            temp = []
            for x in range(32):
                first = random.randint(48, 57)
                second = random.randint(97, 122)
                spin = random.choice([first, second])
                temp.append(chr(spin))
            string_list.append("".join(temp))

        list_set = set(string_list)
        unique_list = list(list_set)

    for i in range(len(unique_list)):
        print(string_list[i])


cetak(2)
