import re

# Function Validasi username
def is_username_valid(username):
    username_pattern = re.compile("^([a-z]{8})")
    if username_pattern.match(username):
        print(True)
    else:
        print(False)


# Function Validasi email
def is_email_valid(email):
    email_pattern = re.compile("^[A-Z0-9](<)?(\w+@\w+(?:\.\w+)+)(?(1)(?=.*[A-Z]){4}>)")
    if email_pattern.match(email):
        print(True)
    else:
        print(False)


is_username_valid("zeronull")
is_email_valid("aku@kamu.com")
is_email_valid("Kamu@aku.com")
