// ==================== PYTHON MASTER - MAIN JAVASCRIPT ====================

// ==================== TOPICS DATA ====================
const topics = [
    {
        id: 1,
        title: "Python Basics",
        icon: "🎯",
        time: "Week 1-2",
        subtopics: [
            {
                name: "Variables & Data Types",
                notes: `<h3>🎯 Understanding Variables in Python</h3>
<p>Variables are fundamental building blocks in programming. Think of a variable as a labeled container or a box where you store information. Just like you might label a box "Books" to remember what's inside, you name variables to remember what data they hold. Python is unique because it doesn't require you to declare a variable's type before using it - the type is automatically determined when you assign a value.</p>

<p>In Python, creating a variable is as simple as choosing a name and assigning a value using the equals sign (=). The variable name should be descriptive, following the snake_case convention (lowercase with underscores). Variable names can contain letters, numbers, and underscores, but cannot start with a number or contain special characters like @, $, or %.</p>

<h3>📦 Creating Variables - 10 Examples</h3>
<pre><code># Example 1: String variable
student_name = "Rahul Sharma"
print(student_name)  # Output: Rahul Sharma

# Example 2: Integer variable
age = 25
print(age)  # Output: 25

# Example 3: Float variable (decimal numbers)
price = 199.99
temperature = -5.5
print(price, temperature)  # Output: 199.99 -5.5

# Example 4: Boolean variable (True/False)
is_student = True
has_license = False
print(is_student)  # Output: True

# Example 5: None type (represents absence of value)
result = None
print(result)  # Output: None

# Example 6: Multiple assignment (same value)
a = b = c = 100
print(a, b, c)  # Output: 100 100 100

# Example 7: Multiple assignment (different values)
name, age, city = "Alice", 30, "Mumbai"
print(name, age, city)  # Output: Alice 30 Mumbai

# Example 8: Swapping variables
x, y = 10, 20
x, y = y, x  # Swap values
print(x, y)  # Output: 20 10

# Example 9: Variable reassignment
score = 50
score = score + 25  # Update value
score += 10  # Shorthand for score = score + 10
print(score)  # Output: 85

# Example 10: Dynamic typing (changing type)
data = 100        # data is int
data = "Hello"    # now data is string
data = [1, 2, 3]  # now data is list
print(data)  # Output: [1, 2, 3]</code></pre>

<h3>📊 Python Data Types Explained</h3>
<p>Python has several built-in data types that you'll use constantly. Understanding when to use each type is crucial for writing efficient and bug-free code. Here are the main categories:</p>

<p><strong>Numeric Types:</strong></p>
<ul>
<li><strong>int</strong> - Whole numbers without decimal points. Examples: 42, -17, 0, 1000000. Python integers have unlimited precision, meaning they can be as large as your memory allows!</li>
<li><strong>float</strong> - Numbers with decimal points. Examples: 3.14, -0.001, 2.0. Be aware that floats have limited precision due to how computers store decimals.</li>
<li><strong>complex</strong> - Numbers with real and imaginary parts. Example: 3+4j. Used in scientific computing.</li>
</ul>

<p><strong>Text Type:</strong></p>
<ul>
<li><strong>str</strong> - Strings are sequences of characters enclosed in quotes. You can use single quotes ('hello'), double quotes ("hello"), or triple quotes for multi-line strings.</li>
</ul>

<p><strong>Boolean Type:</strong></p>
<ul>
<li><strong>bool</strong> - Can only be True or False (note the capital T and F). Used for logical operations and conditions.</li>
</ul>

<p><strong>None Type:</strong></p>
<ul>
<li><strong>NoneType</strong> - The special value None represents the absence of a value. It's Python's way of saying "nothing here" or "no value assigned yet".</li>
</ul>

<h3>🔍 Type Checking and Conversion</h3>
<pre><code># Check the type of any variable
name = "Python"
age = 30
price = 99.99
is_active = True

print(type(name))      # <class 'str'>
print(type(age))       # <class 'int'>
print(type(price))     # <class 'float'>
print(type(is_active)) # <class 'bool'>

# Type Conversion Examples
num_str = "100"
num_int = int(num_str)      # String to Integer: 100
num_float = float(num_str)  # String to Float: 100.0

pi = 3.14159
pi_int = int(pi)    # Float to Integer: 3 (truncates decimal)
pi_str = str(pi)    # Float to String: "3.14159"

flag = 1
flag_bool = bool(flag)   # Any non-zero number is True
empty_bool = bool(0)     # Zero is False
empty_str = bool("")     # Empty string is False
print(flag_bool, empty_bool, empty_str)  # True False False

# Converting user input (always returns string)
user_age = input("Enter your age: ")  # Returns "25" as string
user_age = int(user_age)  # Now it's an integer 25</code></pre>

<h3>📝 Variable Naming Best Practices</h3>
<pre><code># ✅ GOOD variable names - descriptive and clear
user_name = "John"
total_price = 150.50
is_logged_in = True
student_count = 42
max_retry_attempts = 3

# ❌ BAD variable names - avoid these
x = "John"           # Not descriptive
n = 150.50           # What does 'n' mean?
flag = True          # Flag for what?
temp = 42            # Ambiguous
a1 = 3               # Meaningless

# ❌ INVALID variable names - these will cause errors
# 2name = "John"     # Cannot start with number
# my-name = "John"   # Cannot use hyphen
# my name = "John"   # Cannot have spaces
# class = "Python"   # Cannot use reserved keywords

# Python Reserved Keywords (cannot be used as variable names):
# False, True, None, and, or, not, if, else, elif,
# for, while, break, continue, pass, def, class,
# return, import, from, as, try, except, finally,
# raise, with, lambda, global, nonlocal, yield, assert</code></pre>

<h3>🌟 Real-Life Story: The E-Commerce Shopping Cart</h3>
<p><em>Imagine you're building an e-commerce website like Amazon or Flipkart. Let's see how variables and data types come into play in a real scenario:</em></p>

<p>Meet Priya, a Python developer at an online shopping company. One day, her manager asks her to build a simple shopping cart feature. Let's follow her journey:</p>

<pre><code># Priya starts by defining product information
product_name = "Wireless Bluetooth Headphones"
product_id = 12345
price = 2499.00
quantity_in_stock = 50
is_available = True
discount_percentage = 15.5

# Customer information
customer_name = "Amit Kumar"
customer_email = "amit.kumar@email.com"
is_premium_member = True

# Shopping cart calculations
items_in_cart = 2
subtotal = price * items_in_cart  # 4998.0

# Apply discount for premium members
if is_premium_member:
    discount_amount = subtotal * (discount_percentage / 100)  # 774.69
    final_price = subtotal - discount_amount  # 4223.31
else:
    final_price = subtotal

# Update stock after purchase
quantity_in_stock = quantity_in_stock - items_in_cart  # 48

# Generate order summary
order_id = "ORD" + str(product_id) + str(items_in_cart)  # "ORD122452"
order_placed = True

# Display order confirmation
print(f"Order Confirmation for {customer_name}")
print(f"Product: {product_name}")
print(f"Quantity: {items_in_cart}")
print(f"Subtotal: ₹{subtotal}")
print(f"Discount Applied: ₹{discount_amount:.2f}")
print(f"Final Price: ₹{final_price:.2f}")
print(f"Order ID: {order_id}")
print(f"Items remaining in stock: {quantity_in_stock}")</code></pre>

<p><strong>What Priya learned:</strong> Every piece of data in the application needed proper variable types - strings for names and emails, integers for quantities and IDs, floats for prices, and booleans for status flags. Using meaningful variable names like <code>quantity_in_stock</code> instead of just <code>q</code> made the code self-documenting and easy for her teammates to understand.</p>

<div class="tip-box">
<strong>💡 Pro Tips:</strong>
<ul>
<li>Always use descriptive variable names - your future self will thank you!</li>
<li>Follow snake_case convention for variable names in Python</li>
<li>Use UPPER_CASE for constants that shouldn't change (like PI = 3.14159)</li>
<li>Remember that Python is case-sensitive: Name, name, and NAME are different variables</li>
<li>Initialize variables before using them to avoid NameError</li>
</ul>
</div>

<div class="warning-box">
<strong>⚠️ Common Mistakes to Avoid:</strong>
<ul>
<li>Don't use reserved keywords (like 'class', 'for', 'if') as variable names</li>
<li>Be careful with float precision: 0.1 + 0.2 gives 0.30000000000000004, not 0.3</li>
<li>Remember that input() always returns a string - convert it if you need a number</li>
<li>Don't confuse = (assignment) with == (comparison)</li>
</ul>
</div>`,
                video: "https://www.youtube.com/embed/cQT33yu9pY8"
            },
            {
                name: "Operators",
                notes: `<h3>🔢 Understanding Operators in Python</h3>
<p>Operators are special symbols that perform operations on values and variables. They are the building blocks of any calculation or logical decision in your program. Python provides a rich set of operators categorized into several groups: arithmetic, comparison, logical, assignment, bitwise, and more. Mastering operators is essential because every program uses them extensively.</p>

<p>Think of operators like the buttons on a calculator - each one performs a specific action on the numbers you provide. Just as you use + to add two numbers on a calculator, you use the + operator in Python to add values together.</p>

<h3>➕ Arithmetic Operators - 10 Examples</h3>
<pre><code># Example 1: Addition (+)
salary = 50000
bonus = 5000
total = salary + bonus
print(f"Total income: ₹{total}")  # ₹55000

# Example 2: Subtraction (-)
original_price = 1000
discount = 150
final_price = original_price - discount
print(f"After discount: ₹{final_price}")  # ₹850

# Example 3: Multiplication (*)
quantity = 5
price_per_item = 250
total_cost = quantity * price_per_item
print(f"Total cost: ₹{total_cost}")  # ₹1250

# Example 4: Division (/) - always returns float
pizza_slices = 8
people = 3
slices_per_person = pizza_slices / people
print(f"Each person gets: {slices_per_person}")  # 2.666...

# Example 5: Floor Division (//) - returns integer (rounds down)
pizza_slices = 8
people = 3
whole_slices = pizza_slices // people
print(f"Whole slices each: {whole_slices}")  # 2

# Example 6: Modulus (%) - returns remainder
pizza_slices = 8
people = 3
leftover = pizza_slices % people
print(f"Leftover slices: {leftover}")  # 2

# Example 7: Exponentiation (**)
principal = 10000
rate = 1.05
years = 3
amount = principal * (rate ** years)
print(f"After {years} years: ₹{amount:.2f}")  # ₹11576.25

# Example 8: Negative numbers
temperature_celsius = -5
temperature_drop = 10
new_temp = temperature_celsius - temperature_drop
print(f"New temperature: {new_temp}°C")  # -15°C

# Example 9: Combining operators (PEMDAS/BODMAS)
result = 10 + 5 * 2  # Multiplication first
print(result)  # 20, not 30!
result = (10 + 5) * 2  # Parentheses first
print(result)  # 30

# Example 10: Practical calculation
hours_worked = 45
hourly_rate = 500
overtime_hours = hours_worked - 40  # 5 hours
overtime_rate = hourly_rate * 1.5  # 750
total_pay = (40 * hourly_rate) + (overtime_hours * overtime_rate)
print(f"Weekly pay: ₹{total_pay}")  # ₹23750</code></pre>

<h3>⚖️ Comparison Operators</h3>
<p>Comparison operators compare two values and return True or False. They are essential for making decisions in your code using if-else statements.</p>

<pre><code># All comparison operators
a, b = 10, 5

print(a == b)   # Equal to: False
print(a != b)   # Not equal to: True
print(a > b)    # Greater than: True
print(a < b)    # Less than: False
print(a >= b)   # Greater than or equal: True
print(a <= b)   # Less than or equal: False

# Comparing strings (alphabetical order)
print("apple" < "banana")   # True (a comes before b)
print("Python" == "python") # False (case-sensitive)

# Chained comparisons (Python special feature!)
age = 25
print(18 <= age <= 65)  # True - is age between 18 and 65?

score = 85
print(80 <= score <= 100)  # True - is score in A grade range?</code></pre>

<h3>🧠 Logical Operators</h3>
<pre><code># and - Both conditions must be True
age = 25
has_license = True
can_drive = age >= 18 and has_license
print(f"Can drive: {can_drive}")  # True

# or - At least one condition must be True  
is_weekend = False
is_holiday = True
can_sleep_late = is_weekend or is_holiday
print(f"Can sleep late: {can_sleep_late}")  # True

# not - Reverses the boolean value
is_raining = True
go_outside = not is_raining
print(f"Go outside: {go_outside}")  # False

# Complex conditions
age = 25
income = 50000
has_job = True
eligible_for_loan = (age >= 21 and age <= 60) and (income >= 30000 or has_job)
print(f"Eligible for loan: {eligible_for_loan}")  # True</code></pre>

<h3>📝 Assignment Operators</h3>
<pre><code># Basic assignment
score = 100

# Compound assignment operators (shortcuts)
score += 10   # Same as: score = score + 10  → 110
score -= 20   # Same as: score = score - 20  → 90
score *= 2    # Same as: score = score * 2   → 180
score //= 3   # Same as: score = score // 3  → 60
score **= 2   # Same as: score = score ** 2  → 3600
score %= 100  # Same as: score = score % 100 → 0

# Practical use
counter = 0
counter += 1  # Increment by 1
counter += 1  # Increment again
print(counter)  # 2</code></pre>

<h3>🌟 Real-Life Story: Building a Bill Calculator</h3>
<p><em>Let's see how operators work together in a real restaurant billing system:</em></p>

<p>Ravi runs a small restaurant and needs a billing system. Here's how he uses operators:</p>

<pre><code># Restaurant Bill Calculator using Operators

# Menu items ordered
burger_price = 150
pizza_price = 350
cold_drink_price = 60
dessert_price = 120

burger_qty = 2
pizza_qty = 1
cold_drink_qty = 3
dessert_qty = 2

# Calculate item totals using multiplication (*)
burger_total = burger_price * burger_qty       # 300
pizza_total = pizza_price * pizza_qty          # 350
drink_total = cold_drink_price * cold_drink_qty  # 180
dessert_total = dessert_price * dessert_qty    # 240

# Calculate subtotal using addition (+)
subtotal = burger_total + pizza_total + drink_total + dessert_total
print(f"Subtotal: ₹{subtotal}")  # ₹1070

# Apply 10% discount if bill > 1000 (comparison and logical)
discount_rate = 0.10
if subtotal > 1000:
    discount = subtotal * discount_rate  # 107
else:
    discount = 0
print(f"Discount (10%): ₹{discount}")

# Calculate after discount using subtraction (-)
after_discount = subtotal - discount  # 963

# Add 5% GST using multiplication
gst_rate = 0.05
gst_amount = after_discount * gst_rate  # 48.15

# Final bill
final_bill = after_discount + gst_amount
print(f"GST (5%): ₹{gst_amount:.2f}")
print(f"Final Bill: ₹{final_bill:.2f}")  # ₹1011.15

# Split bill among friends using division
num_friends = 4
per_person = final_bill / num_friends
print(f"Per person: ₹{per_person:.2f}")  # ₹252.79

# Calculate tip (15%)
tip_rate = 0.15
tip = final_bill * tip_rate
grand_total = final_bill + tip
print(f"Tip (15%): ₹{tip:.2f}")
print(f"Grand Total with Tip: ₹{grand_total:.2f}")</code></pre>

<p><strong>What Ravi learned:</strong> Every part of the bill calculation required operators - multiplication for item totals, addition for subtotal, comparison on whether to apply discount, subtraction for discounts, and division for splitting the bill. This is exactly how real restaurant POS systems work!</p>

<div class="tip-box">
<strong>💡 Operator Precedence (Priority Order):</strong>
<ol>
<li><strong>( )</strong> - Parentheses first</li>
<li><strong>**</strong> - Exponentiation</li>
<li><strong>*, /, //, %</strong> - Multiplication, Division, Floor Div, Modulus</li>
<li><strong>+, -</strong> - Addition, Subtraction</li>
<li><strong>==, !=, <, >, <=, >=</strong> - Comparisons</li>
<li><strong>not</strong> - Logical NOT</li>
<li><strong>and</strong> - Logical AND</li>
<li><strong>or</strong> - Logical OR</li>
</ol>
<p>When in doubt, use parentheses to make your intention clear!</p>
</div>

<div class="warning-box">
<strong>⚠️ Common Mistakes:</strong>
<ul>
<li>Using = instead of == for comparison (= is assignment, == is comparison)</li>
<li>Integer division with / when you want // (/ always returns float)</li>
<li>Forgetting operator precedence: 2 + 3 * 4 = 14, not 20</li>
<li>Comparing floats directly (0.1 + 0.2 != 0.3 due to precision)</li>
</ul>
</div>`,
                video: "https://www.youtube.com/embed/v5MR5JnKcZI"
            },
            {
                name: "Input & Output",
                notes: `<h3>🖨️ Understanding Input and Output in Python</h3>
<p>Every program needs to communicate with the user. <strong>Output</strong> is how your program shows information to the user (using <code>print()</code>), and <strong>Input</strong> is how your program receives information from the user (using <code>input()</code>). Mastering these is essential for building interactive programs!</p>

<p>Think of it like a conversation: <code>print()</code> is your program speaking, and <code>input()</code> is your program listening.</p>

<h3>🖥️ Output with print() - 10 Detailed Examples</h3>
<pre><code># Example 1: Basic Print
print("Hello, World!")  # Output: Hello, World!
print("नमस्ते Python!")  # Hindi text works too!

# Example 2: Print Multiple Values
name = "Rahul"
age = 25
city = "Mumbai"
print(name, age, city)  # Rahul 25 Mumbai (space separated)

# Example 3: Custom Separators
print("Python", "Java", "JavaScript", sep=" | ")
# Output: Python | Java | JavaScript

print("2024", "12", "18", sep="-")
# Output: 2024-12-18

# Example 4: Custom End Character
print("Loading", end="")
print("...", end="")
print("Done!")
# Output: Loading...Done! (all on one line)

# Example 5: F-strings (Modern Way - Python 3.6+)
product = "iPhone"
price = 79999
discount = 10
print(f"Product: {product}")
print(f"Price: ₹{price}")
print(f"Discount: {discount}%")
print(f"Final: ₹{price * (1 - discount/100):.2f}")
# Output: Final: ₹71999.10

# Example 6: F-string Expressions
a, b = 10, 5
print(f"{a} + {b} = {a + b}")   # 10 + 5 = 15
print(f"{a} × {b} = {a * b}")   # 10 × 5 = 50

# Example 7: String Formatting (Older Way)
print("Hello, {}!".format("World"))
print("Name: {}, Age: {}".format("Alice", 25))
print("Price: {:.2f}".format(999.5))  # 999.50

# Example 8: Formatting Numbers
pi = 3.14159265359
print(f"Pi = {pi:.2f}")      # 3.14 (2 decimal places)
print(f"Pi = {pi:.4f}")      # 3.1416 (4 decimal places)

large_num = 1234567890
print(f"Number: {large_num:,}")  # 1,234,567,890 (with commas)

# Example 9: Alignment and Padding
name = "Python"
print(f"|{name:>10}|")   # |    Python| (right align, 10 chars)
print(f"|{name:<10}|")   # |Python    | (left align)
print(f"|{name:^10}|")   # |  Python  | (center align)
print(f"|{name:*^10}|")  # |**Python**| (center with * fill)

# Example 10: Print to File
with open("output.txt", "w") as file:
    print("This goes to file!", file=file)</code></pre>

<h3>⌨️ Input from User - 10 Detailed Examples</h3>
<pre><code># Example 1: Basic Text Input
name = input("Enter your name: ")
print(f"Hello, {name}!")

# Example 2: Integer Input
age = int(input("Enter your age: "))
birth_year = 2024 - age
print(f"You were born around {birth_year}")

# Example 3: Float Input
weight = float(input("Enter weight in kg: "))
height = float(input("Enter height in meters: "))
bmi = weight / (height ** 2)
print(f"Your BMI is: {bmi:.1f}")

# Example 4: Multiple Inputs on One Line
a, b = input("Enter two numbers (space separated): ").split()
a, b = int(a), int(b)
print(f"Sum: {a + b}")

# Example 5: Input with Default Value
name = input("Enter name (press Enter for Guest): ") or "Guest"
print(f"Welcome, {name}!")

# Example 6: Yes/No Input
response = input("Do you agree? (yes/no): ").lower()
if response in ["yes", "y"]:
    print("Thank you for agreeing!")
else:
    print("That's okay!")

# Example 7: Password Input (hidden - requires getpass)
from getpass import getpass
password = getpass("Enter password: ")  # Input is hidden
print("Password received!")

# Example 8: Input Validation Loop
while True:
    try:
        age = int(input("Enter valid age (1-120): "))
        if 1 <= age <= 120:
            break
        print("Age must be between 1 and 120!")
    except ValueError:
        print("Please enter a number!")

# Example 9: Menu Selection
print("\\n=== Menu ===")
print("1. Start Game")
print("2. Settings")
print("3. Exit")
choice = input("Enter choice (1-3): ")

# Example 10: Reading Multiple Lines
print("Enter your address (type 'done' when finished):")
lines = []
while True:
    line = input()
    if line.lower() == 'done':
        break
    lines.append(line)
address = "\\n".join(lines)</code></pre>

<h3>📋 Format Specifiers Reference</h3>
<table>
<tr><th>Specifier</th><th>Description</th><th>Example</th><th>Output</th></tr>
<tr><td><code>:.2f</code></td><td>2 decimal places</td><td><code>f"{3.14159:.2f}"</code></td><td>3.14</td></tr>
<tr><td><code>:,</code></td><td>Thousand separator</td><td><code>f"{1000000:,}"</code></td><td>1,000,000</td></tr>
<tr><td><code>:>10</code></td><td>Right align (10 chars)</td><td><code>f"{'Hi':>10}"</code></td><td>"        Hi"</td></tr>
<tr><td><code>:<10</code></td><td>Left align (10 chars)</td><td><code>f"{'Hi':<10}"</code></td><td>"Hi        "</td></tr>
<tr><td><code>:^10</code></td><td>Center align</td><td><code>f"{'Hi':^10}"</code></td><td>"    Hi    "</td></tr>
<tr><td><code>:%</code></td><td>Percentage</td><td><code>f"{0.25:%}"</code></td><td>25.000000%</td></tr>
<tr><td><code>:b</code></td><td>Binary</td><td><code>f"{10:b}"</code></td><td>1010</td></tr>
<tr><td><code>:x</code></td><td>Hexadecimal</td><td><code>f"{255:x}"</code></td><td>ff</td></tr>
</table>

<h3>🌟 Real-Life Story: User Registration System</h3>
<p><em>Imagine you're building a user registration form for a website. Here's how input/output works in real applications:</em></p>

<pre><code># Complete User Registration System
def register_user():
    print("=" * 50)
    print("🎉 Welcome to PythonMaster Registration!")
    print("=" * 50)
    
    # Get user details
    print("\\n📝 Please fill in your details:\\n")
    
    # Name validation
    while True:
        name = input("Full Name: ").strip()
        if len(name) >= 2 and name.replace(" ", "").isalpha():
            break
        print("❌ Please enter a valid name (letters only)")
    
    # Email validation
    while True:
        email = input("Email: ").strip().lower()
        if "@" in email and "." in email:
            break
        print("❌ Please enter a valid email")
    
    # Age validation
    while True:
        try:
            age = int(input("Age: "))
            if 13 <= age <= 120:
                break
            print("❌ Age must be between 13 and 120")
        except ValueError:
            print("❌ Please enter a number")
    
    # Password with confirmation
    while True:
        password = input("Password (min 6 chars): ")
        if len(password) >= 6:
            confirm = input("Confirm Password: ")
            if password == confirm:
                break
            print("❌ Passwords don't match!")
        else:
            print("❌ Password too short!")
    
    # Display summary
    print("\\n" + "=" * 50)
    print("✅ Registration Successful!")
    print("=" * 50)
    print(f"Name:  {name}")
    print(f"Email: {email}")
    print(f"Age:   {age}")
    print(f"Password: {'*' * len(password)}")
    print("=" * 50)
    
    return {"name": name, "email": email, "age": age}

# Run registration
user = register_user()</code></pre>

<div class="tip-box">
<strong>💡 Best Practices:</strong>
<ul>
<li>Always use f-strings for formatting (fastest and most readable)</li>
<li>Validate user input before using it</li>
<li>Use <code>.strip()</code> to remove accidental spaces from input</li>
<li>Convert input to correct type (int, float) immediately</li>
<li>Use meaningful prompts that tell users what to enter</li>
</ul>
</div>

<div class="warning-box">
<strong>⚠️ Common Mistakes:</strong>
<ul>
<li>Forgetting that <code>input()</code> always returns a string</li>
<li>Not handling invalid input (use try-except)</li>
<li>Using <code>+</code> to concatenate instead of f-strings</li>
<li>Not stripping whitespace from input</li>
</ul>
</div>`,
                video: "https://www.youtube.com/embed/qHJjMvHLJdg"
            },
            {
                name: "Strings & String Methods",
                notes: `<h3>📝 Understanding Strings in Python</h3>
<p>A <strong>string</strong> is a sequence of characters enclosed in quotes. Strings are one of the most commonly used data types in Python. They are <strong>immutable</strong> - once created, you cannot change individual characters (but you can create new strings).</p>

<p>Strings are everywhere in programming - user names, messages, file paths, HTML content, JSON data, and much more!</p>

<h3>✨ Creating Strings - Multiple Ways</h3>
<pre><code># Single quotes
name = 'Rahul Sharma'

# Double quotes (same as single)
city = "Mumbai"

# Triple quotes for multi-line strings
address = '''123, Main Street,
Andheri West,
Mumbai - 400058'''

# Triple quotes also work with double quotes
bio = """Hello! I'm a Python developer.
I love coding and learning new things.
Let's build something amazing!"""

# Raw strings (ignores escape characters)
path = r"C:\\Users\\Rahul\\Documents"  # Backslashes not escaped

# F-strings (formatted strings)
greeting = f"Hello, {name} from {city}!"</code></pre>

<h3>🔪 String Slicing - 10 Examples</h3>
<pre><code>text = "PythonMaster"
#       0123456789...  (positive index)
#      -12...-3-2-1    (negative index)

# Example 1: Access single character
print(text[0])      # 'P' (first character)
print(text[-1])     # 'r' (last character)
print(text[6])      # 'M'

# Example 2: Basic slicing [start:end]
print(text[0:6])    # 'Python' (index 0 to 5)
print(text[6:12])   # 'Master' (index 6 to 11)

# Example 3: Omitting start or end
print(text[:6])     # 'Python' (from beginning)
print(text[6:])     # 'Master' (to end)
print(text[:])      # 'PythonMaster' (copy entire string)

# Example 4: Negative indices
print(text[-6:])    # 'Master' (last 6 characters)
print(text[:-6])    # 'Python' (all except last 6)
print(text[-6:-1])  # 'Maste' (last 6 except last 1)

# Example 5: Step/stride [start:end:step]
print(text[::2])    # 'PtoMse' (every 2nd character)
print(text[1::2])   # 'yhnate' (every 2nd, starting at 1)

# Example 6: Reverse string
print(text[::-1])   # 'retsaMnohtyP'

# Example 7: Reverse with step
print(text[::-2])   # 'rtMnhy' (reverse, every 2nd)

# Example 8: Extract middle portion
print(text[3:9])    # 'honMas'

# Example 9: Check if palindrome
word = "madam"
is_palindrome = word == word[::-1]  # True

# Example 10: Get every nth character
dna = "ATGCATGCATGC"
print(dna[::3])     # 'AAAA' (every 3rd character)</code></pre>

<h3>🛠️ String Methods - 15 Categories</h3>
<pre><code>text = "  Hello, Python World!  "

# === CASE METHODS ===
print(text.upper())       # "  HELLO, PYTHON WORLD!  "
print(text.lower())       # "  hello, python world!  "
print(text.title())       # "  Hello, Python World!  "
print(text.capitalize())  # "  hello, python world!  " (first char only)
print(text.swapcase())    # "  hELLO, pYTHON wORLD!  "

# === WHITESPACE METHODS ===
print(text.strip())       # "Hello, Python World!" (both sides)
print(text.lstrip())      # "Hello, Python World!  " (left only)
print(text.rstrip())      # "  Hello, Python World!" (right only)

# === SEARCH METHODS ===
print(text.find("Python"))      # 9 (index where found)
print(text.find("Java"))        # -1 (not found)
print(text.index("Python"))     # 9 (error if not found)
print(text.rfind("o"))          # 18 (rightmost occurrence)
print(text.count("o"))          # 3 (how many times)

# === CHECK METHODS (return True/False) ===
s = "Python3"
print(s.isalpha())        # False (has number)
print(s.isalnum())        # True (letters and numbers)
print(s.isdigit())        # False
print(s.islower())        # False
print(s.isupper())        # False
print(s.startswith("Py")) # True
print(s.endswith("3"))    # True

# === REPLACE & SPLIT ===
print(text.replace("Python", "Java"))  # Replace text
print(text.split(","))    # ['  Hello', ' Python World!  ']
print(text.split())       # ['Hello,', 'Python', 'World!'] (by whitespace)

# === JOIN ===
words = ["Learn", "Python", "Today"]
print(" ".join(words))    # "Learn Python Today"
print("-".join(words))    # "Learn-Python-Today"
print("\\n".join(words))   # Each word on new line

# === ALIGNMENT ===
name = "Python"
print(name.center(20, "*"))  # "*******Python*******"
print(name.ljust(20, "-"))   # "Python--------------"
print(name.rjust(20, "."))   # "..............Python"
print(name.zfill(10))        # "0000Python"

# === CHECKING CONTENT ===
num = "12345"
print(num.isdigit())      # True
print(num.isnumeric())    # True
space = "   "
print(space.isspace())    # True</code></pre>

<h3>📋 String Methods Reference Table</h3>
<table>
<tr><th>Method</th><th>Description</th><th>Example</th></tr>
<tr><td><code>upper()</code></td><td>All uppercase</td><td>"hello" → "HELLO"</td></tr>
<tr><td><code>lower()</code></td><td>All lowercase</td><td>"HELLO" → "hello"</td></tr>
<tr><td><code>strip()</code></td><td>Remove whitespace</td><td>" hi " → "hi"</td></tr>
<tr><td><code>split(sep)</code></td><td>Split into list</td><td>"a,b,c".split(",") → ["a","b","c"]</td></tr>
<tr><td><code>join(list)</code></td><td>Join list to string</td><td>"-".join(["a","b"]) → "a-b"</td></tr>
<tr><td><code>replace(old,new)</code></td><td>Replace substring</td><td>"hello".replace("l","x") → "hexxo"</td></tr>
<tr><td><code>find(sub)</code></td><td>Find index (-1 if not found)</td><td>"hello".find("l") → 2</td></tr>
<tr><td><code>count(sub)</code></td><td>Count occurrences</td><td>"hello".count("l") → 2</td></tr>
<tr><td><code>startswith()</code></td><td>Check prefix</td><td>"hello".startswith("he") → True</td></tr>
<tr><td><code>endswith()</code></td><td>Check suffix</td><td>"hello".endswith("lo") → True</td></tr>
</table>

<h3>🌟 Real-Life Story: Building a Text Processing System</h3>
<p><em>Imagine you're building a social media app that needs to process user posts, validate inputs, and format text. Here's how strings help:</em></p>

<pre><code># Social Media Text Processor
class TextProcessor:
    def __init__(self):
        self.banned_words = ["spam", "scam", "fake"]
    
    def clean_username(self, username):
        \"\"\"Clean and validate username\"\"\"
        # Remove whitespace
        username = username.strip().lower()
        
        # Remove special characters (keep only alphanumeric and underscore)
        cleaned = "".join(c for c in username if c.isalnum() or c == "_")
        
        # Validate length
        if len(cleaned) < 3:
            return None, "Username too short (min 3 chars)"
        if len(cleaned) > 20:
            return None, "Username too long (max 20 chars)"
        
        return cleaned, "Valid"
    
    def format_post(self, text):
        \"\"\"Format a social media post\"\"\"
        # Trim and limit length
        text = text.strip()[:280]  # Twitter-like limit
        
        # Find and format hashtags
        words = text.split()
        formatted_words = []
        hashtags = []
        
        for word in words:
            if word.startswith("#"):
                hashtag = word.lower()
                hashtags.append(hashtag)
                formatted_words.append(f"<span class='hashtag'>{hashtag}</span>")
            elif word.startswith("@"):
                formatted_words.append(f"<span class='mention'>{word}</span>")
            else:
                formatted_words.append(word)
        
        return {
            "text": " ".join(formatted_words),
            "hashtags": hashtags,
            "length": len(text)
        }
    
    def check_content(self, text):
        \"\"\"Check for banned content\"\"\"
        text_lower = text.lower()
        
        for word in self.banned_words:
            if word in text_lower:
                return False, f"Post contains banned word: {word}"
        
        return True, "Content approved"
    
    def generate_slug(self, title):
        \"\"\"Generate URL-friendly slug from title\"\"\"
        # Remove special chars, lowercase, replace spaces with hyphens
        slug = title.lower().strip()
        slug = "".join(c if c.isalnum() or c == " " else "" for c in slug)
        slug = "-".join(slug.split())
        return slug

# Usage Example
processor = TextProcessor()

# Clean username
username, msg = processor.clean_username("  Rahul_Sharma123  ")
print(f"Username: {username}")  # rahul_sharma123

# Format post
post = processor.format_post("Learning #Python with @CodeWithHarry! 🐍 #coding #programming")
print(f"Formatted: {post['text']}")
print(f"Hashtags: {post['hashtags']}")  # ['#python', '#coding', '#programming']

# Generate slug
title = "10 Best Python Tips for Beginners!"
slug = processor.generate_slug(title)
print(f"URL: /blog/{slug}")  # /blog/10-best-python-tips-for-beginners</code></pre>

<div class="tip-box">
<strong>💡 Best Practices:</strong>
<ul>
<li>Use f-strings for string formatting (fastest and most readable)</li>
<li>Use <code>.strip()</code> when processing user input</li>
<li>Remember strings are immutable - methods return NEW strings</li>
<li>Use <code>in</code> operator for checking substrings: <code>"Python" in text</code></li>
<li>Use raw strings (r"...") for regex patterns and file paths</li>
</ul>
</div>

<div class="warning-box">
<strong>⚠️ Common Mistakes:</strong>
<ul>
<li>Forgetting that string methods don't modify the original string</li>
<li>Using <code>+</code> for string concatenation in loops (very slow - use join)</li>
<li>Not handling encoding issues with non-ASCII text</li>
<li>Confusing <code>find()</code> (-1 if not found) with <code>index()</code> (raises error)</li>
</ul>
</div>`,
                video: "https://www.youtube.com/embed/qHJjMvHLJdg"
            },
            {
                name: "Comments & Documentation",
                notes: `<h3>Single-line Comments</h3>
<pre><code># This is a single-line comment
x = 5  # Inline comment</code></pre>

<h3>Multi-line Comments</h3>
<pre><code>"""
This is a multi-line comment
or docstring. It can span
multiple lines.
"""</code></pre>

<h3>Docstrings</h3>
<pre><code>def greet(name):
    """
    Greet a person by name.
    
    Args:
        name (str): The person's name
        
    Returns:
        str: A greeting message
    """
    return f"Hello, {name}!"</code></pre>

<div class="tip-box">
<strong>💡 Best Practice:</strong> Write comments that explain <em>why</em>, not <em>what</em>. Code should be self-explanatory for the <em>what</em>.
</div>`,
                video: "https://www.youtube.com/embed/qHJjMvHLJdg"
            }
        ]
    },
    {
        id: 2,
        title: "Control Flow",
        icon: "🔀",
        time: "Week 2-3",
        subtopics: [
            {
                name: "If-Else Statements",
                notes: `<h3>🔀 Understanding Conditional Statements</h3>
<p>Conditional statements let your program make <strong>decisions</strong>. They execute different code blocks based on whether a condition is True or False. This is the foundation of all programming logic!</p>

<p>Think of it like this: When you wake up, you check the weather. <strong>If</strong> it's sunny, you wear light clothes. <strong>Elif</strong> (else if) it's cloudy, you take an umbrella. <strong>Else</strong>, you stay home. This is exactly how if-else works!</p>

<h3>📚 If-Else Examples - 12 Detailed Examples</h3>
<pre><code># Example 1: Basic If Statement
age = 20
if age >= 18:
    print("You can vote! 🗳️")

# Example 2: If-Else (Two Options)
temperature = 35
if temperature > 30:
    print("It's hot! 🔥 Drink water!")
else:
    print("Weather is pleasant 😊")

# Example 3: If-Elif-Else (Multiple Options)
marks = 75

if marks >= 90:
    grade = "A+"
elif marks >= 80:
    grade = "A"
elif marks >= 70:
    grade = "B"
elif marks >= 60:
    grade = "C"
elif marks >= 40:
    grade = "D"
else:
    grade = "F (Fail)"

print(f"Your grade: {grade}")  # B

# Example 4: Multiple Conditions with 'and'
age = 25
has_license = True

if age >= 18 and has_license:
    print("You can drive! 🚗")
else:
    print("You cannot drive")

# Example 5: Multiple Conditions with 'or'
day = "Sunday"
is_holiday = True

if day == "Saturday" or day == "Sunday" or is_holiday:
    print("It's a day off! 🎉")
else:
    print("Time to work! 💼")

# Example 6: Using 'not' Operator
is_raining = False

if not is_raining:
    print("No umbrella needed! ☀️")

# Example 7: Membership Check with 'in'
username = "rahul_kumar"
banned_users = ["spammer", "hacker123", "fake_user"]

if username in banned_users:
    print("Access denied! 🚫")
else:
    print("Welcome! ✅")

# Example 8: Nested If Statements
user_type = "admin"
is_active = True

if is_active:
    if user_type == "admin":
        print("Full access granted")
    elif user_type == "editor":
        print("Edit access granted")
    else:
        print("View access only")
else:
    print("Account inactive")

# Example 9: Ternary Operator (One-line If-Else)
age = 20
status = "Adult" if age >= 18 else "Minor"
print(status)  # Adult

# More ternary examples
x = 10
result = "Positive" if x > 0 else "Zero or Negative"
message = "Even" if x % 2 == 0 else "Odd"

# Example 10: Chained Comparisons (Pythonic!)
age = 25
# Instead of: age >= 18 and age <= 65
if 18 <= age <= 65:
    print("You are of working age")

score = 75
# Instead of: score >= 70 and score < 80
if 70 <= score < 80:
    print("Grade B")

# Example 11: Truthiness Check
name = "Rahul"
items = []
result = None

# These are all "Falsy" values: None, 0, "", [], {}, False
if name:  # Truthy (non-empty string)
    print(f"Hello, {name}")

if not items:  # Empty list is Falsy
    print("Shopping cart is empty")

if result is None:  # Explicit None check
    print("No result yet")

# Example 12: Complex Conditions
user = {"name": "Rahul", "age": 25, "verified": True, "balance": 1500}

# Complex eligibility check
if (user["age"] >= 18 and 
    user["verified"] == True and 
    user["balance"] >= 1000):
    print(f"✅ {user['name']} is eligible for premium!")
else:
    print("❌ Not eligible")</code></pre>

<h3>📋 Comparison Operators Reference</h3>
<table>
<tr><th>Operator</th><th>Meaning</th><th>Example</th><th>Result</th></tr>
<tr><td><code>==</code></td><td>Equal to</td><td><code>5 == 5</code></td><td>True</td></tr>
<tr><td><code>!=</code></td><td>Not equal to</td><td><code>5 != 3</code></td><td>True</td></tr>
<tr><td><code>></code></td><td>Greater than</td><td><code>5 > 3</code></td><td>True</td></tr>
<tr><td><code><</code></td><td>Less than</td><td><code>5 < 10</code></td><td>True</td></tr>
<tr><td><code>>=</code></td><td>Greater or equal</td><td><code>5 >= 5</code></td><td>True</td></tr>
<tr><td><code><=</code></td><td>Less or equal</td><td><code>5 <= 10</code></td><td>True</td></tr>
<tr><td><code>and</code></td><td>Both true</td><td><code>True and True</code></td><td>True</td></tr>
<tr><td><code>or</code></td><td>Either true</td><td><code>True or False</code></td><td>True</td></tr>
<tr><td><code>not</code></td><td>Opposite</td><td><code>not False</code></td><td>True</td></tr>
<tr><td><code>in</code></td><td>Membership</td><td><code>"a" in "abc"</code></td><td>True</td></tr>
<tr><td><code>is</code></td><td>Identity</td><td><code>x is None</code></td><td>True/False</td></tr>
</table>

<h3>🌟 Real-Life Story: Student Grade Calculator</h3>
<p><em>Imagine you're building a grade calculator for a school. It needs to calculate grades, check eligibility, and generate report cards:</em></p>

<pre><code># Complete Grade Calculator System
class GradeCalculator:
    def __init__(self, student_name):
        self.student_name = student_name
        self.subjects = {}
    
    def add_marks(self, subject, marks, max_marks=100):
        \"\"\"Add marks for a subject\"\"\"
        if marks < 0 or marks > max_marks:
            print(f"❌ Invalid marks for {subject}")
            return False
        
        percentage = (marks / max_marks) * 100
        self.subjects[subject] = {
            "marks": marks,
            "max_marks": max_marks,
            "percentage": percentage,
            "grade": self._calculate_grade(percentage)
        }
        return True
    
    def _calculate_grade(self, percentage):
        \"\"\"Calculate grade based on percentage\"\"\"
        if percentage >= 90:
            return "A+ (Outstanding)"
        elif percentage >= 80:
            return "A (Excellent)"
        elif percentage >= 70:
            return "B (Very Good)"
        elif percentage >= 60:
            return "C (Good)"
        elif percentage >= 50:
            return "D (Average)"
        elif percentage >= 40:
            return "E (Pass)"
        else:
            return "F (Fail)"
    
    def get_overall_result(self):
        \"\"\"Calculate overall result\"\"\"
        if not self.subjects:
            return None, "No subjects added"
        
        total_marks = sum(s["marks"] for s in self.subjects.values())
        total_max = sum(s["max_marks"] for s in self.subjects.values())
        overall_percentage = (total_marks / total_max) * 100
        
        # Check if passed in all subjects
        all_passed = all(s["percentage"] >= 40 for s in self.subjects.values())
        
        if all_passed:
            return overall_percentage, self._calculate_grade(overall_percentage)
        else:
            # Find failed subjects
            failed = [sub for sub, data in self.subjects.items() 
                     if data["percentage"] < 40]
            return overall_percentage, f"FAIL (Failed in: {', '.join(failed)})"
    
    def print_report_card(self):
        \"\"\"Generate and print report card\"\"\"
        print("\\n" + "=" * 50)
        print(f"📝 REPORT CARD - {self.student_name}")
        print("=" * 50)
        
        for subject, data in self.subjects.items():
            status = "✅" if data["percentage"] >= 40 else "❌"
            print(f"{status} {subject}: {data['marks']}/{data['max_marks']} " +
                  f"({data['percentage']:.1f}%) - {data['grade']}")
        
        overall, result = self.get_overall_result()
        print("-" * 50)
        print(f"Overall: {overall:.1f}%")
        print(f"Result: {result}")
        
        # Special achievements
        if overall >= 90:
            print("🏆 DISTINCTION! Outstanding performance!")
        elif overall >= 75:
            print("⭐ First Class! Great job!")
        elif overall >= 60:
            print("📚 Second Class. Keep improving!")
        
        print("=" * 50)

# Usage
calc = GradeCalculator("Rahul Sharma")
calc.add_marks("Mathematics", 85)
calc.add_marks("Science", 78)
calc.add_marks("English", 92)
calc.add_marks("Hindi", 70)
calc.add_marks("Computer Science", 95)
calc.print_report_card()</code></pre>

<div class="tip-box">
<strong>💡 Best Practices:</strong>
<ul>
<li>Use chained comparisons: <code>18 <= age <= 65</code> instead of <code>age >= 18 and age <= 65</code></li>
<li>Use ternary for simple one-liners: <code>x = "Yes" if condition else "No"</code></li>
<li>Use <code>in</code> for membership: <code>if x in [1, 2, 3]</code> instead of <code>if x == 1 or x == 2 or x == 3</code></li>
<li>Use truthiness: <code>if items:</code> instead of <code>if len(items) > 0:</code></li>
</ul>
</div>

<div class="warning-box">
<strong>⚠️ Common Mistakes:</strong>
<ul>
<li>Using <code>=</code> (assignment) instead of <code>==</code> (comparison)</li>
<li>Forgetting the colon <code>:</code> after if/elif/else</li>
<li>Wrong indentation (Python is indentation-sensitive!)</li>
<li>Using <code>is</code> instead of <code>==</code> for value comparison</li>
</ul>
</div>`,
                video: "https://www.youtube.com/embed/yLz-Yg9j2kI"
            },
            {
                name: "For Loops",
                notes: `<h3>🔄 Understanding For Loops</h3>
<p>A <strong>for loop</strong> is used to iterate over a sequence (list, tuple, string, range, dictionary, etc.). It executes a block of code for each item in the sequence. This is the most commonly used loop in Python!</p>

<p>Think of it like going through a shopping list: <strong>For</strong> each item <strong>in</strong> your list, you pick it up from the shelf. That's exactly how for loops work!</p>

<h3>📚 For Loop Examples - 12 Detailed Examples</h3>
<pre><code># Example 1: Loop Through a List
fruits = ["🍎 Apple", "🍌 Banana", "🍒 Cherry", "🍇 Grapes"]
for fruit in fruits:
    print(fruit)
# Output: Each fruit on new line

# Example 2: Loop Through a String
name = "Python"
for letter in name:
    print(letter, end=" ")  # P y t h o n

# Example 3: range() - Generate Numbers
# range(stop) - 0 to stop-1
for i in range(5):
    print(i)  # 0, 1, 2, 3, 4

# range(start, stop) - start to stop-1
for i in range(1, 6):
    print(i)  # 1, 2, 3, 4, 5

# range(start, stop, step) - with custom step
for i in range(0, 10, 2):
    print(i)  # 0, 2, 4, 6, 8 (even numbers)

for i in range(10, 0, -1):
    print(i)  # 10, 9, 8... 1 (countdown!)

# Example 4: enumerate() - Get Index AND Value
students = ["Rahul", "Priya", "Amit", "Sneha"]
for index, name in enumerate(students):
    print(f"{index + 1}. {name}")
# Output:
# 1. Rahul
# 2. Priya
# 3. Amit
# 4. Sneha

# Start from custom index
for i, name in enumerate(students, start=1):
    print(f"Roll {i}: {name}")

# Example 5: zip() - Loop Through Multiple Lists Together
names = ["Rahul", "Priya", "Amit"]
ages = [25, 22, 28]
cities = ["Mumbai", "Delhi", "Pune"]

for name, age, city in zip(names, ages, cities):
    print(f"{name} is {age} years old from {city}")

# Example 6: Loop Through Dictionary
student = {"name": "Rahul", "age": 25, "grade": "A"}

# Keys only
for key in student:
    print(key)

# Values only
for value in student.values():
    print(value)

# Key-Value pairs
for key, value in student.items():
    print(f"{key}: {value}")

# Example 7: Nested Loops (Loop inside Loop)
# Print a pattern
for i in range(1, 6):
    for j in range(i):
        print("*", end="")
    print()  # New line
# Output:
# *
# **
# ***
# ****
# *****

# Example 8: Multiplication Table
num = 5
for i in range(1, 11):
    print(f"{num} x {i} = {num * i}")

# Example 9: List Comprehension (One-line Loop)
# Traditional way
squares = []
for x in range(1, 6):
    squares.append(x ** 2)

# List comprehension (Pythonic way)
squares = [x ** 2 for x in range(1, 6)]
print(squares)  # [1, 4, 9, 16, 25]

# With condition
evens = [x for x in range(10) if x % 2 == 0]
print(evens)  # [0, 2, 4, 6, 8]

# Example 10: For-Else (Execute if loop completes normally)
numbers = [1, 3, 5, 7, 9]

for num in numbers:
    if num % 2 == 0:
        print(f"Found even: {num}")
        break
else:
    print("No even number found!")
# Output: No even number found!

# Example 11: Iterate with Index (When you need index)
colors = ["Red", "Green", "Blue"]

# Method 1: range + len
for i in range(len(colors)):
    print(f"Index {i}: {colors[i]}")

# Method 2: enumerate (Recommended!)
for i, color in enumerate(colors):
    print(f"Index {i}: {color}")

# Example 12: Flatten Nested List
matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
flat = []

for row in matrix:
    for num in row:
        flat.append(num)

print(flat)  # [1, 2, 3, 4, 5, 6, 7, 8, 9]

# Or with list comprehension
flat = [num for row in matrix for num in row]</code></pre>

<h3>📋 range() Function Reference</h3>
<table>
<tr><th>Syntax</th><th>Description</th><th>Example</th><th>Output</th></tr>
<tr><td><code>range(5)</code></td><td>0 to 4</td><td><code>list(range(5))</code></td><td>[0, 1, 2, 3, 4]</td></tr>
<tr><td><code>range(2, 6)</code></td><td>2 to 5</td><td><code>list(range(2, 6))</code></td><td>[2, 3, 4, 5]</td></tr>
<tr><td><code>range(0, 10, 2)</code></td><td>0 to 8, step 2</td><td><code>list(range(0, 10, 2))</code></td><td>[0, 2, 4, 6, 8]</td></tr>
<tr><td><code>range(5, 0, -1)</code></td><td>5 to 1, countdown</td><td><code>list(range(5, 0, -1))</code></td><td>[5, 4, 3, 2, 1]</td></tr>
</table>

<h3>🌟 Real-Life Story: Building a Multiplication Table Generator</h3>
<p><em>Imagine you're building an educational app for kids to learn multiplication tables. Here's how for loops make it possible:</em></p>

<pre><code># Complete Multiplication Table Generator
class TableGenerator:
    def __init__(self):
        self.results = []
    
    def single_table(self, num, upto=10):
        \"\"\"Generate table for a single number\"\"\"
        print(f"\\n✨ Multiplication Table of {num} ✨")
        print("-" * 30)
        
        for i in range(1, upto + 1):
            result = num * i
            print(f"{num} × {i:2} = {result:3}")
            self.results.append((num, i, result))
    
    def all_tables(self, start=1, end=10):
        \"\"\"Generate tables from start to end\"\"\"
        for num in range(start, end + 1):
            self.single_table(num)
            print()
    
    def quiz_mode(self, num):
        \"\"\"Interactive quiz for a table\"\"\"
        print(f"\\n🎯 Quiz: Table of {num}")
        score = 0
        
        for i in range(1, 11):
            answer = int(input(f"{num} × {i} = "))
            correct = num * i
            
            if answer == correct:
                print("✅ Correct!")
                score += 1
            else:
                print(f"❌ Wrong! Answer: {correct}")
        
        print(f"\\nScore: {score}/10")
        
        if score == 10:
            print("🏆 Perfect! You're a math champion!")
        elif score >= 7:
            print("⭐ Great job! Keep practicing!")
        else:
            print("📚 Need more practice. You can do it!")
    
    def pattern_table(self, num):
        \"\"\"Show table with visual pattern\"\"\"
        print(f"\\n📊 Visual Table of {num}")
        
        for i in range(1, 11):
            result = num * i
            bar = "█" * result
            print(f"{num} × {i:2} = {result:3} |{bar}")

# Usage
gen = TableGenerator()
gen.single_table(7)       # Table of 7
gen.pattern_table(5)      # Visual pattern table
# gen.quiz_mode(9)        # Interactive quiz</code></pre>

<div class="tip-box">
<strong>💡 Best Practices:</strong>
<ul>
<li>Use <code>enumerate()</code> when you need both index and value</li>
<li>Use <code>zip()</code> to iterate over multiple lists together</li>
<li>Prefer list comprehensions for simple transformations</li>
<li>Use <code>for-else</code> to check if loop completed without break</li>
<li>Avoid modifying a list while iterating over it (make a copy first)</li>
</ul>
</div>

<div class="warning-box">
<strong>⚠️ Common Mistakes:</strong>
<ul>
<li>Forgetting that <code>range(5)</code> gives 0-4, not 1-5</li>
<li>Modifying list while iterating (causes skipped elements)</li>
<li>Using <code>range(len(list))</code> instead of <code>enumerate()</code></li>
<li>Forgetting the colon <code>:</code> after for statement</li>
</ul>
</div>`,
                video: "https://www.youtube.com/embed/94UHCEmprCY"
            },
            {
                name: "While Loops",
                notes: `<h3>🔁 Understanding While Loops</h3>
<p>A <strong>while loop</strong> repeats a block of code <strong>as long as a condition is True</strong>. Unlike for loops (which iterate a fixed number of times), while loops continue until the condition becomes False. They're perfect when you don't know how many times you need to loop!</p>

<p>Think of it like this: <strong>While</strong> you're hungry, keep eating. Once you're full (condition becomes False), stop eating. That's exactly how while loops work!</p>

<h3>📚 While Loop Examples - 10 Detailed Examples</h3>
<pre><code># Example 1: Basic While Loop
count = 0
while count < 5:
    print(f"Count: {count}")
    count += 1  # Don't forget to update!
# Output: Count: 0, 1, 2, 3, 4

# Example 2: Countdown Timer
countdown = 10
print("🚀 Rocket Launch Countdown!")
while countdown > 0:
    print(f"{countdown}...")
    countdown -= 1
print("🎉 LIFTOFF!")

# Example 3: User Input Loop (Until Valid)
while True:
    age = input("Enter your age: ")
    if age.isdigit() and 1 <= int(age) <= 120:
        age = int(age)
        print(f"Your age is {age}")
        break
    print("❌ Invalid age! Try again.")

# Example 4: Password Attempt with Limit
correct_password = "python123"
attempts = 3

while attempts > 0:
    password = input(f"Enter password ({attempts} attempts left): ")
    
    if password == correct_password:
        print("✅ Access granted!")
        break
    
    attempts -= 1
    if attempts > 0:
        print("❌ Wrong password! Try again.")
else:
    print("🔒 Account locked! Too many attempts.")

# Example 5: Sum Until Zero
print("Enter numbers to sum (enter 0 to stop):")
total = 0

while True:
    num = int(input("Number: "))
    if num == 0:
        break
    total += num
    print(f"Running total: {total}")

print(f"Final sum: {total}")

# Example 6: Menu-Driven Program
while True:
    print("\\n=== Calculator Menu ===")
    print("1. Add")
    print("2. Subtract")
    print("3. Multiply")
    print("4. Exit")
    
    choice = input("Choose option (1-4): ")
    
    if choice == "4":
        print("Goodbye! 👋")
        break
    elif choice in ["1", "2", "3"]:
        a = float(input("First number: "))
        b = float(input("Second number: "))
        
        if choice == "1":
            print(f"Result: {a + b}")
        elif choice == "2":
            print(f"Result: {a - b}")
        else:
            print(f"Result: {a * b}")
    else:
        print("❌ Invalid choice!")

# Example 7: While with Continue
num = 0
print("Odd numbers from 1 to 10:")
while num < 10:
    num += 1
    if num % 2 == 0:  # Skip even numbers
        continue
    print(num)  # Only prints: 1, 3, 5, 7, 9

# Example 8: Finding a Number
import random
secret = random.randint(1, 100)
guess = 0

print("🎯 Guess the number (1-100)!")

while guess != secret:
    guess = int(input("Your guess: "))
    
    if guess < secret:
        print("📈 Too low!")
    elif guess > secret:
        print("📉 Too high!")

print(f"🎉 Correct! The number was {secret}")

# Example 9: While-Else (Executes if no break)
n = 5

while n > 0:
    print(n)
    n -= 1
else:
    print("✅ Countdown complete!")  # Runs because no break

# With break - else doesn't run
n = 5
while n > 0:
    if n == 3:
        print("Found 3! Stopping early.")
        break
    n -= 1
else:
    print("This won't print!")  # Doesn't run due to break

# Example 10: Nested While Loops
row = 1
while row <= 5:
    col = 1
    while col <= row:
        print("*", end="")
        col += 1
    print()  # New line
    row += 1
# Output:
# *
# **
# ***
# ****
# *****</code></pre>

<h3>📋 While Loop vs For Loop</h3>
<table>
<tr><th>Feature</th><th>For Loop</th><th>While Loop</th></tr>
<tr><td><strong>Use When</strong></td><td>Known iterations</td><td>Unknown iterations</td></tr>
<tr><td><strong>Condition</strong></td><td>Iterates over sequence</td><td>Continues while True</td></tr>
<tr><td><strong>Example</strong></td><td>Looping through a list</td><td>Waiting for user input</td></tr>
<tr><td><strong>Risk</strong></td><td>Safe (finite)</td><td>Can be infinite!</td></tr>
<tr><td><strong>Best For</strong></td><td>Lists, ranges, files</td><td>Menu loops, games, input validation</td></tr>
</table>

<h3>🌟 Real-Life Story: Building a Number Guessing Game</h3>
<p><em>Imagine you're building a fun number guessing game for kids. The game continues until they guess correctly. Here's how while loops make it possible:</em></p>

<pre><code># Complete Number Guessing Game
import random

class GuessingGame:
    def __init__(self, min_num=1, max_num=100):
        self.min_num = min_num
        self.max_num = max_num
        self.secret = random.randint(min_num, max_num)
        self.attempts = 0
        self.max_attempts = 10
        self.hints_used = 0
    
    def get_hint(self):
        \"\"\"Provide a hint about the number\"\"\"
        self.hints_used += 1
        
        if self.secret % 2 == 0:
            return "💡 Hint: The number is EVEN"
        else:
            return "💡 Hint: The number is ODD"
    
    def check_guess(self, guess):
        \"\"\"Check the guess and give feedback\"\"\"
        self.attempts += 1
        diff = abs(guess - self.secret)
        
        if guess == self.secret:
            return "correct", "🎉 CORRECT!"
        elif guess < self.secret:
            if diff <= 5:
                return "low", "🔥 Very close! Just a bit higher!"
            elif diff <= 15:
                return "low", "📈 Getting warm! Go higher!"
            else:
                return "low", "📈 Too low! Much higher!"
        else:
            if diff <= 5:
                return "high", "🔥 Very close! Just a bit lower!"
            elif diff <= 15:
                return "high", "📉 Getting warm! Go lower!"
            else:
                return "high", "📉 Too high! Much lower!"
    
    def play(self):
        \"\"\"Main game loop\"\"\"
        print("=" * 50)
        print("🎯 NUMBER GUESSING GAME")
        print("=" * 50)
        print(f"Guess a number between {self.min_num} and {self.max_num}")
        print(f"You have {self.max_attempts} attempts.")
        print("Type 'hint' for a hint, 'quit' to exit.\\n")
        
        while self.attempts < self.max_attempts:
            remaining = self.max_attempts - self.attempts
            user_input = input(f"Attempt {self.attempts + 1}/{self.max_attempts}: ")
            
            # Handle special commands
            if user_input.lower() == 'quit':
                print(f"😢 Game over! The number was {self.secret}")
                return False
            
            if user_input.lower() == 'hint':
                print(self.get_hint())
                continue
            
            # Validate input
            if not user_input.isdigit():
                print("❌ Please enter a valid number!")
                continue
            
            guess = int(user_input)
            
            # Check bounds
            if guess < self.min_num or guess > self.max_num:
                print(f"❌ Number must be between {self.min_num} and {self.max_num}!")
                continue
            
            # Check guess
            result, message = self.check_guess(guess)
            print(message)
            
            if result == "correct":
                self._show_victory()
                return True
        
        # Out of attempts
        print(f"\\n😢 Game Over! The number was {self.secret}")
        return False
    
    def _show_victory(self):
        \"\"\"Show victory message\"\"\"
        print("\\n" + "🌟" * 20)
        print("🏆 CONGRATULATIONS! YOU WON!")
        print(f"You found {self.secret} in {self.attempts} attempts!")
        
        if self.attempts <= 3:
            print("⭐ LEGENDARY! Are you a mind reader?")
        elif self.attempts <= 5:
            print("🎖️ EXCELLENT! Great guessing skills!")
        elif self.attempts <= 7:
            print("👍 GOOD JOB! Nice work!")
        else:
            print("✅ You made it! Practice makes perfect!")
        
        if self.hints_used > 0:
            print(f"(Hints used: {self.hints_used})")
        print("🌟" * 20)

# Play the game
game = GuessingGame(1, 50)
game.play()</code></pre>

<div class="tip-box">
<strong>💡 Best Practices:</strong>
<ul>
<li>Always ensure the condition will eventually become False</li>
<li>Update loop variables inside the loop</li>
<li>Use <code>break</code> for early exit when needed</li>
<li>Consider <code>while True</code> with <code>break</code> for cleaner code</li>
<li>Use while-else to detect if loop completed without break</li>
</ul>
</div>

<div class="warning-box">
<strong>⚠️ Common Mistakes:</strong>
<ul>
<li><strong>Infinite loops!</strong> Forgetting to update the condition variable</li>
<li>Off-by-one errors (< vs <=)</li>
<li>Not handling edge cases (empty input, invalid data)</li>
<li>Using while when for loop is more appropriate</li>
</ul>
</div>`,
                video: "https://www.youtube.com/embed/Hn0L_vL526E"
            },
            {
                name: "Break, Continue & Pass",
                notes: `<h3>🛑 Understanding Loop Control Statements</h3>
<p>Python provides three special statements to control the flow of loops: <strong>break</strong>, <strong>continue</strong>, and <strong>pass</strong>. These are essential tools for managing loop behavior - allowing you to exit loops early, skip iterations, or create placeholder code.</p>

<p>Think of driving on a highway: <strong>break</strong> is like taking an exit ramp (leaving completely), <strong>continue</strong> is like changing lanes to avoid an obstacle (skipping but continuing), and <strong>pass</strong> is like cruise control (doing nothing special, just moving forward).</p>

<h3>🚫 Break Statement - 10 Detailed Examples</h3>
<p>The <code>break</code> statement immediately exits the current loop, regardless of the loop condition. It's like an emergency exit!</p>

<pre><code># Example 1: Basic Break
for i in range(10):
    if i == 5:
        break  # Exit when i becomes 5
    print(i)
# Output: 0, 1, 2, 3, 4

# Example 2: Search and Stop
students = ["Rahul", "Priya", "Amit", "Sneha", "Vijay"]
target = "Amit"

for student in students:
    print(f"Checking: {student}")
    if student == target:
        print(f"✅ Found {target}!")
        break
# Stops searching after finding Amit

# Example 3: Break in While Loop
password = "python123"
attempts = 0

while True:  # Infinite loop
    user_input = input("Enter password: ")
    attempts += 1
    
    if user_input == password:
        print("✅ Access granted!")
        break  # Exit infinite loop
    
    if attempts >= 3:
        print("🔒 Account locked!")
        break

# Example 4: Break in Nested Loop (exits inner loop only)
for i in range(3):
    print(f"Outer loop: {i}")
    for j in range(5):
        if j == 2:
            break  # Only exits inner loop
        print(f"  Inner loop: {j}")
# Output shows inner loop stops at 2, outer continues

# Example 5: Finding First Match
numbers = [10, 25, 30, 45, 50, 65, 70]
first_over_40 = None

for num in numbers:
    if num > 40:
        first_over_40 = num
        break

print(f"First number over 40: {first_over_40}")  # 45

# Example 6: Break with Else (else doesn't run if break executes)
for i in range(5):
    if i == 3:
        print("Found 3, breaking!")
        break
else:
    print("Loop completed normally")  # Won't print!

# Example 7: Validating Input
while True:
    age = input("Enter age (1-120): ")
    
    if not age.isdigit():
        print("Please enter a number!")
        continue
    
    age = int(age)
    if 1 <= age <= 120:
        print(f"Valid age: {age}")
        break
    else:
        print("Age must be between 1 and 120!")

# Example 8: Processing Until Sentinel Value
print("Enter numbers (0 to stop):")
total = 0
count = 0

while True:
    num = int(input("Number: "))
    if num == 0:
        break
    total += num
    count += 1

print(f"Sum: {total}, Average: {total/count if count else 0}")

# Example 9: Finding Prime Numbers
def is_prime(n):
    if n < 2:
        return False
    for i in range(2, int(n**0.5) + 1):
        if n % i == 0:
            return False  # Not using break, but return exits
    return True

# Using break version
def is_prime_with_break(n):
    if n < 2:
        return False
    is_prime = True
    for i in range(2, int(n**0.5) + 1):
        if n % i == 0:
            is_prime = False
            break
    return is_prime

# Example 10: Menu System with Exit
while True:
    print("\\n=== MENU ===")
    print("1. Add Item")
    print("2. View Items")
    print("3. Exit")
    
    choice = input("Choose: ")
    
    if choice == "1":
        print("Adding item...")
    elif choice == "2":
        print("Viewing items...")
    elif choice == "3":
        print("Goodbye! 👋")
        break
    else:
        print("Invalid choice!")</code></pre>

<h3>⏭️ Continue Statement - 10 Detailed Examples</h3>
<p>The <code>continue</code> statement skips the rest of the current iteration and jumps to the next one. The loop doesn't exit - it just skips to the next cycle.</p>

<pre><code># Example 1: Basic Continue - Skip Even Numbers
for i in range(10):
    if i % 2 == 0:
        continue  # Skip even numbers
    print(i)
# Output: 1, 3, 5, 7, 9

# Example 2: Skip Invalid Data
data = [10, "error", 20, None, 30, "", 40]

valid_sum = 0
for item in data:
    if not isinstance(item, (int, float)):
        continue  # Skip non-numeric values
    valid_sum += item

print(f"Sum of valid numbers: {valid_sum}")  # 100

# Example 3: Skip Specific Items
fruits = ["apple", "banana", "rotten_orange", "mango", "bad_grape"]

print("Fresh fruits:")
for fruit in fruits:
    if "rotten" in fruit or "bad" in fruit:
        continue
    print(f"  ✅ {fruit}")

# Example 4: Continue in While Loop
count = 0
while count < 10:
    count += 1
    if count % 3 == 0:
        continue  # Skip multiples of 3
    print(count)
# Output: 1, 2, 4, 5, 7, 8, 10

# Example 5: Processing with Validation
student_marks = [85, -5, 92, 150, 78, 0, 88]

valid_marks = []
for marks in student_marks:
    if marks < 0 or marks > 100:
        print(f"⚠️ Invalid marks: {marks}")
        continue
    valid_marks.append(marks)

print(f"Valid marks: {valid_marks}")

# Example 6: Skip Empty Lines in File Processing
lines = ["Hello", "", "World", "   ", "Python", ""]

for line in lines:
    stripped = line.strip()
    if not stripped:
        continue  # Skip empty/whitespace lines
    print(f"Processing: {stripped}")

# Example 7: Continue with Complex Conditions
users = [
    {"name": "Rahul", "active": True, "age": 25},
    {"name": "Priya", "active": False, "age": 22},
    {"name": "Amit", "active": True, "age": 17},
    {"name": "Sneha", "active": True, "age": 30}
]

print("Active adult users:")
for user in users:
    if not user["active"]:
        continue
    if user["age"] < 18:
        continue
    print(f"  {user['name']} ({user['age']})")

# Example 8: Skip Holidays in Date Processing
holidays = [1, 15, 26]  # Days of month

for day in range(1, 32):
    if day in holidays:
        print(f"Day {day}: Holiday 🎉")
        continue
    if day % 7 == 0:  # Sundays
        print(f"Day {day}: Weekend 🌴")
        continue
    print(f"Day {day}: Working day 💼")

# Example 9: Continue in Nested Loops
for i in range(1, 4):
    print(f"Table of {i}:")
    for j in range(1, 11):
        if j == 5:
            continue  # Skip 5 in each table
        print(f"  {i} x {j} = {i*j}")

# Example 10: Data Cleaning Pipeline
raw_data = ["  HELLO  ", "123", "", "world", "PYTHON", "  "]

cleaned = []
for item in raw_data:
    # Skip empty strings
    if not item.strip():
        continue
    
    # Skip numeric strings
    if item.strip().isdigit():
        continue
    
    # Clean and add
    cleaned.append(item.strip().title())

print(cleaned)  # ['Hello', 'World', 'Python']</code></pre>

<h3>⏸️ Pass Statement - 5 Detailed Examples</h3>
<p>The <code>pass</code> statement does absolutely nothing. It's a placeholder when syntax requires a statement but you don't want any action. Think of it as a "TODO" marker.</p>

<pre><code># Example 1: Empty Function (To Implement Later)
def calculate_tax():
    pass  # TODO: Implement tax calculation

def send_email():
    pass  # TODO: Add email sending logic

# Example 2: Empty Class Definition
class User:
    pass  # Will add methods later

class AdminUser(User):
    pass  # Inherits from User, no additional methods yet

# Example 3: Empty Exception Handler
try:
    risky_operation()
except SomeError:
    pass  # Silently ignore this error (use carefully!)

# Example 4: Placeholder in Conditional
status = "pending"

if status == "approved":
    process_approval()
elif status == "rejected":
    process_rejection()
else:
    pass  # No action for other statuses

# Example 5: Empty Loop Body (Rare but Valid)
# Count occurrences while reading (contrived example)
count = 0
for char in "hello world":
    if char == " ":
        pass  # Could skip spaces, but we just pass
    count += 1</code></pre>

<h3>📋 Comparison Table</h3>
<table>
<tr><th>Statement</th><th>Effect</th><th>Loop Continues?</th><th>Use Case</th></tr>
<tr><td><code>break</code></td><td>Exit loop immediately</td><td>❌ No</td><td>Found what you're looking for, stop searching</td></tr>
<tr><td><code>continue</code></td><td>Skip current iteration</td><td>✅ Yes</td><td>Skip invalid/unwanted items, process remaining</td></tr>
<tr><td><code>pass</code></td><td>Do nothing</td><td>✅ Yes</td><td>Placeholder for future code, empty blocks</td></tr>
</table>

<h3>🌟 Real-Life Story: Building a Data Validation System</h3>
<p><em>Imagine you're building an order processing system for an e-commerce company. Here's how these statements work together:</em></p>

<pre><code># E-Commerce Order Processing System
class OrderProcessor:
    def __init__(self):
        self.processed = []
        self.failed = []
        self.skipped = []
    
    def validate_order(self, order):
        """Validate order data"""
        if not order.get("customer_id"):
            return False, "Missing customer ID"
        if order.get("amount", 0) <= 0:
            return False, "Invalid amount"
        if not order.get("items"):
            return False, "No items in order"
        return True, "Valid"
    
    def process_orders(self, orders, max_errors=3):
        """Process orders with break, continue, pass"""
        error_count = 0
        
        for order in orders:
            order_id = order.get("id", "Unknown")
            print(f"\\n📦 Processing Order #{order_id}")
            
            # PASS: Skip cancelled orders silently
            if order.get("status") == "cancelled":
                self.skipped.append(order_id)
                pass  # Log for records but no processing needed
                continue  # Move to next order
            
            # CONTINUE: Skip already processed orders
            if order.get("status") == "completed":
                print(f"  ⏭️ Already processed, skipping")
                self.skipped.append(order_id)
                continue
            
            # Validate order
            is_valid, message = self.validate_order(order)
            
            # CONTINUE: Skip invalid orders
            if not is_valid:
                print(f"  ❌ Invalid: {message}")
                self.failed.append((order_id, message))
                error_count += 1
                
                # BREAK: Stop if too many errors
                if error_count >= max_errors:
                    print(f"\\n🛑 Too many errors ({error_count})! Stopping.")
                    break
                
                continue
            
            # Process valid order
            print(f"  ✅ Processing: {len(order['items'])} items, ₹{order['amount']}")
            self.processed.append(order_id)
            order["status"] = "completed"
        
        # Summary
        print("\\n" + "=" * 50)
        print("📊 PROCESSING SUMMARY")
        print(f"   ✅ Processed: {len(self.processed)}")
        print(f"   ❌ Failed: {len(self.failed)}")
        print(f"   ⏭️ Skipped: {len(self.skipped)}")
        print("=" * 50)

# Sample orders
orders = [
    {"id": 1, "customer_id": 101, "amount": 500, "items": ["Phone"], "status": "pending"},
    {"id": 2, "customer_id": None, "amount": 300, "items": ["Book"], "status": "pending"},
    {"id": 3, "status": "cancelled"},
    {"id": 4, "customer_id": 102, "amount": 0, "items": ["Laptop"], "status": "pending"},
    {"id": 5, "customer_id": 103, "amount": 1500, "items": ["Watch", "Shoes"], "status": "pending"},
    {"id": 6, "status": "completed"},
    {"id": 7, "customer_id": 104, "amount": -100, "items": [], "status": "pending"},
]

processor = OrderProcessor()
processor.process_orders(orders, max_errors=2)</code></pre>

<p><strong>What happens:</strong> Order 1 processes successfully. Order 2 fails (no customer_id). Order 3 is skipped (cancelled). Order 4 fails (invalid amount). Since we hit 2 errors, the system stops processing remaining orders using <code>break</code>!</p>

<div class="tip-box">
<strong>💡 Best Practices:</strong>
<ul>
<li>Use <code>break</code> when you find what you're looking for - no need to keep searching!</li>
<li>Use <code>continue</code> to skip unwanted items cleanly instead of nested if-else</li>
<li>Use <code>pass</code> only as a placeholder - replace it with real code later</li>
<li>Document why you're using <code>pass</code> or silent <code>except: pass</code></li>
<li>Consider extracting complex loop bodies with multiple continue/break into functions</li>
</ul>
</div>

<div class="warning-box">
<strong>⚠️ Common Mistakes:</strong>
<ul>
<li>Using <code>break</code> in nested loops - it only exits the innermost loop!</li>
<li>Using <code>except: pass</code> to silently ignore all errors - dangerous!</li>
<li>Putting code after <code>break</code>/<code>continue</code> in the same block - it won't execute!</li>
<li>Confusing <code>pass</code> with <code>continue</code> - pass does nothing, continue skips to next iteration</li>
<li>Forgetting that <code>break</code> prevents the loop's <code>else</code> clause from running</li>
</ul>
</div>`,
                video: "https://www.youtube.com/embed/yCZBnjF4ELo"
            },
            {
                name: "Match-Case (Python 3.10+)",
                notes: `<h3>🎯 Understanding Match-Case (Structural Pattern Matching)</h3>
<p>Python 3.10 introduced the powerful <strong>match-case</strong> statement, similar to switch-case in other languages but much more powerful! It's called "structural pattern matching" because it can match not just values, but the <em>structure</em> of data - like tuples, lists, dictionaries, and even class instances.</p>

<p>Think of it like a smart sorting machine at a post office: it looks at each package, checks its shape, size, and labels, then sends it to the right destination. Match-case does exactly that with your data!</p>

<h3>📚 Match-Case Examples - 10 Detailed Examples</h3>
<pre><code># Example 1: Basic Value Matching (like switch-case)
def get_day_type(day):
    match day.lower():
        case "saturday" | "sunday":
            return "Weekend 🌴"
        case "monday":
            return "Start of week 😴"
        case "friday":
            return "Almost weekend! 🎉"
        case _:  # Default case (underscore = wildcard)
            return "Regular weekday 💼"

print(get_day_type("Saturday"))  # Weekend 🌴
print(get_day_type("Tuesday"))   # Regular weekday 💼

# Example 2: HTTP Status Codes
def http_status_message(code):
    match code:
        case 200:
            return "✅ OK - Request successful"
        case 201:
            return "✅ Created - Resource created"
        case 400:
            return "❌ Bad Request - Invalid syntax"
        case 401:
            return "🔒 Unauthorized - Authentication required"
        case 403:
            return "🚫 Forbidden - Access denied"
        case 404:
            return "🔍 Not Found - Resource doesn't exist"
        case 500:
            return "💥 Internal Server Error"
        case 502 | 503 | 504:
            return "⚠️ Server temporarily unavailable"
        case _:
            return f"Unknown status code: {code}"

print(http_status_message(404))  # 🔍 Not Found

# Example 3: Tuple Pattern Matching
def describe_point(point):
    match point:
        case (0, 0):
            return "Origin point"
        case (x, 0):
            return f"On X-axis at x={x}"
        case (0, y):
            return f"On Y-axis at y={y}"
        case (x, y) if x == y:
            return f"On diagonal at ({x}, {y})"
        case (x, y):
            return f"Point at ({x}, {y})"

print(describe_point((0, 0)))    # Origin point
print(describe_point((5, 0)))    # On X-axis at x=5
print(describe_point((3, 3)))    # On diagonal at (3, 3)
print(describe_point((2, 7)))    # Point at (2, 7)

# Example 4: List Pattern Matching
def analyze_list(data):
    match data:
        case []:
            return "Empty list"
        case [single]:
            return f"Single element: {single}"
        case [first, second]:
            return f"Two elements: {first} and {second}"
        case [first, *middle, last]:
            return f"First: {first}, Middle: {middle}, Last: {last}"

print(analyze_list([]))              # Empty list
print(analyze_list([42]))            # Single element: 42
print(analyze_list([1, 2]))          # Two elements: 1 and 2
print(analyze_list([1, 2, 3, 4, 5])) # First: 1, Middle: [2, 3, 4], Last: 5

# Example 5: Dictionary Pattern Matching
def process_user_action(action):
    match action:
        case {"type": "login", "user": username}:
            return f"User {username} is logging in"
        case {"type": "logout", "user": username}:
            return f"User {username} is logging out"
        case {"type": "purchase", "item": item, "price": price}:
            return f"Purchasing {item} for ₹{price}"
        case {"type": action_type}:
            return f"Unknown action: {action_type}"
        case _:
            return "Invalid action format"

print(process_user_action({"type": "login", "user": "rahul"}))
# User rahul is logging in
print(process_user_action({"type": "purchase", "item": "Phone", "price": 25000}))
# Purchasing Phone for ₹25000

# Example 6: Class Pattern Matching
from dataclasses import dataclass

@dataclass
class Point:
    x: int
    y: int

@dataclass
class Circle:
    center: Point
    radius: int

@dataclass
class Rectangle:
    top_left: Point
    width: int
    height: int

def describe_shape(shape):
    match shape:
        case Circle(center=Point(x=0, y=0), radius=r):
            return f"Circle at origin with radius {r}"
        case Circle(center=Point(x=x, y=y), radius=r):
            return f"Circle at ({x}, {y}) with radius {r}"
        case Rectangle(width=w, height=h) if w == h:
            return f"Square with side {w}"
        case Rectangle(width=w, height=h):
            return f"Rectangle {w}x{h}"
        case _:
            return "Unknown shape"

print(describe_shape(Circle(Point(0, 0), 5)))  # Circle at origin with radius 5
print(describe_shape(Rectangle(Point(0, 0), 10, 10)))  # Square with side 10

# Example 7: Guard Clauses (if conditions)
def categorize_number(num):
    match num:
        case n if n < 0:
            return "Negative"
        case 0:
            return "Zero"
        case n if n < 10:
            return "Single digit"
        case n if n < 100:
            return "Two digits"
        case n if n < 1000:
            return "Three digits"
        case _:
            return "Large number"

print(categorize_number(-5))   # Negative
print(categorize_number(7))    # Single digit
print(categorize_number(42))   # Two digits

# Example 8: Command Parser
def execute_command(command):
    match command.split():
        case ["quit" | "exit" | "bye"]:
            return "Goodbye! 👋"
        case ["hello" | "hi", name]:
            return f"Hello, {name}! How are you?"
        case ["add", *numbers] if all(n.isdigit() for n in numbers):
            return f"Sum: {sum(int(n) for n in numbers)}"
        case ["search", *words]:
            query = " ".join(words)
            return f"Searching for: {query}"
        case ["help"]:
            return "Available commands: quit, hello, add, search"
        case _:
            return "Unknown command. Type 'help' for options."

print(execute_command("hello Rahul"))     # Hello, Rahul!
print(execute_command("add 10 20 30"))    # Sum: 60
print(execute_command("search Python tutorial"))  # Searching for: Python tutorial

# Example 9: JSON-like Data Processing
def process_api_response(response):
    match response:
        case {"status": "success", "data": {"users": users}}:
            return f"Found {len(users)} users"
        case {"status": "success", "data": data}:
            return f"Success with data: {data}"
        case {"status": "error", "message": msg, "code": code}:
            return f"Error {code}: {msg}"
        case {"status": "error", "message": msg}:
            return f"Error: {msg}"
        case _:
            return "Invalid response format"

print(process_api_response({
    "status": "success", 
    "data": {"users": ["Rahul", "Priya", "Amit"]}
}))  # Found 3 users

# Example 10: Type Checking with Match
def process_data(data):
    match data:
        case str() as s:
            return f"String of length {len(s)}"
        case int() | float() as n:
            return f"Number: {n}"
        case list() as lst:
            return f"List with {len(lst)} items"
        case dict() as d:
            return f"Dict with keys: {list(d.keys())}"
        case None:
            return "No data"
        case _:
            return f"Unknown type: {type(data)}"

print(process_data("Hello"))      # String of length 5
print(process_data([1, 2, 3]))    # List with 3 items
print(process_data({"a": 1}))     # Dict with keys: ['a']</code></pre>

<h3>📋 Pattern Types Reference</h3>
<table>
<tr><th>Pattern Type</th><th>Syntax</th><th>Example</th></tr>
<tr><td><strong>Literal</strong></td><td><code>case 42:</code></td><td>Match exact value</td></tr>
<tr><td><strong>Capture</strong></td><td><code>case x:</code></td><td>Match anything, bind to x</td></tr>
<tr><td><strong>Wildcard</strong></td><td><code>case _:</code></td><td>Match anything, don't bind</td></tr>
<tr><td><strong>OR</strong></td><td><code>case 1 | 2 | 3:</code></td><td>Match any of these</td></tr>
<tr><td><strong>Sequence</strong></td><td><code>case [a, b, c]:</code></td><td>Match list/tuple structure</td></tr>
<tr><td><strong>Star</strong></td><td><code>case [first, *rest]:</code></td><td>Match with variable length</td></tr>
<tr><td><strong>Mapping</strong></td><td><code>case {"key": value}:</code></td><td>Match dictionary structure</td></tr>
<tr><td><strong>Class</strong></td><td><code>case Point(x=0, y=y):</code></td><td>Match class instances</td></tr>
<tr><td><strong>Guard</strong></td><td><code>case x if x > 0:</code></td><td>Match with condition</td></tr>
<tr><td><strong>AS</strong></td><td><code>case [x, y] as point:</code></td><td>Bind entire match</td></tr>
</table>

<h3>🌟 Real-Life Story: Building a Chatbot Command Handler</h3>
<p><em>Imagine you're building a customer service chatbot. Match-case makes handling different message types elegant:</em></p>

<pre><code># Customer Service Chatbot with Match-Case
class ChatBot:
    def __init__(self, name="PyBot"):
        self.name = name
        self.user_data = {}
    
    def respond(self, message):
        """Process user message and return response"""
        words = message.lower().strip().split()
        
        match words:
            # Greetings
            case ["hi" | "hello" | "hey"]:
                return f"Hello! I'm {self.name} 🤖 How can I help you today?"
            
            case ["hi" | "hello" | "hey", name]:
                self.user_data["name"] = name.title()
                return f"Nice to meet you, {name.title()}!"
            
            # Order queries
            case ["track", "order", order_id] if order_id.isdigit():
                return f"📦 Order #{order_id}: Shipped! Arriving in 2 days."
            
            case ["track", "order", *_]:
                return "Please provide a valid order ID (numbers only)."
            
            case ["cancel", "order", order_id]:
                return f"❌ Order #{order_id} cancellation request submitted."
            
            # Product queries
            case ["price", "of", *product_words]:
                product = " ".join(product_words)
                return f"💰 {product.title()}: ₹999 (10% off today!)"
            
            case ["search", *query_words]:
                query = " ".join(query_words)
                return f"🔍 Showing results for: '{query}'"
            
            # Support
            case ["help"]:
                return self._get_help_message()
            
            case ["speak", "to", "agent" | "human"]:
                return "👤 Connecting you to a human agent... Please wait."
            
            case ["complaint", *words]:
                complaint = " ".join(words)
                return f"📝 Complaint registered: '{complaint}'. Ticket #12345"
            
            # Goodbye
            case ["bye" | "goodbye" | "quit" | "exit"]:
                name = self.user_data.get("name", "friend")
                return f"Goodbye, {name}! Have a great day! 👋"
            
            # Default
            case _:
                return "I didn't understand that. Type 'help' for options."
    
    def _get_help_message(self):
        return \"\"\"
🤖 {self.name} Help Menu:
━━━━━━━━━━━━━━━━━━━━━━
• hello [name] - Greet the bot
• track order [id] - Track your order
• cancel order [id] - Cancel order
• price of [product] - Check price
• search [query] - Search products
• complaint [text] - File complaint
• speak to agent - Talk to human
• bye - End conversation
\"\"\"

# Usage
bot = ChatBot("ShopBot")
print(bot.respond("Hello"))
print(bot.respond("hello Rahul"))
print(bot.respond("track order 12345"))
print(bot.respond("price of wireless headphones"))
print(bot.respond("complaint product arrived damaged"))
print(bot.respond("bye"))</code></pre>

<p><strong>Why match-case is perfect here:</strong> Each user message type has a different structure. Match-case handles greetings with/without names, order IDs with validation, multi-word searches, and more - all with clean, readable code!</p>

<div class="tip-box">
<strong>💡 Best Practices:</strong>
<ul>
<li>Put most specific patterns first, wildcards (<code>_</code>) last</li>
<li>Use guard clauses (<code>if</code>) for additional conditions</li>
<li>Use <code>|</code> (OR) to combine similar cases</li>
<li>Use <code>*rest</code> to capture variable-length sequences</li>
<li>Use <code>as</code> to bind the entire matched value</li>
<li>Match-case works great with dataclasses!</li>
</ul>
</div>

<div class="warning-box">
<strong>⚠️ Common Mistakes:</strong>
<ul>
<li>Forgetting <code>case _:</code> as default - unmatched values cause no action</li>
<li>Wrong pattern order - first match wins, so specific before general</li>
<li>Using match-case in Python < 3.10 - it won't work!</li>
<li>Confusing <code>|</code> (OR pattern) with <code>or</code> (logical operator)</li>
<li>Forgetting that match-case is NOT the same as equality check - it's pattern matching</li>
</ul>
</div>`,
                video: "https://www.youtube.com/embed/0IvXAwxfjWE"
            }
        ]
    },
    {
        id: 3,
        title: "Functions",
        icon: "⚡",
        time: "Week 3-4",
        subtopics: [
            {
                name: "Defining Functions",
                notes: `<h3>⚡ Understanding Functions in Python</h3>
<p>A <strong>function</strong> is a reusable block of code that performs a specific task. Functions help you organize your code, avoid repetition, and make your programs easier to understand and maintain.</p>

<p>Think of a function like a recipe: you define the steps once, and then you can use that recipe anytime you want to make that dish. The ingredients you put in are <strong>parameters</strong>, and what you get out is the <strong>return value</strong>!</p>

<h3>📚 Function Examples - 12 Detailed Examples</h3>
<pre><code># Example 1: Basic Function (No parameters, no return)
def greet():
    print("Hello, World! 🌍")
    print("Welcome to Python!")

greet()  # Call the function

# Example 2: Function with Parameters
def greet_person(name):
    print(f"Hello, {name}! 👋")

greet_person("Rahul")  # Hello, Rahul! 👋
greet_person("Priya")  # Hello, Priya! 👋

# Example 3: Function with Return Value
def add(a, b):
    result = a + b
    return result

sum_result = add(5, 3)
print(sum_result)  # 8

# Can use directly
print(add(10, 20))  # 30

# Example 4: Multiple Return Values
def get_stats(numbers):
    minimum = min(numbers)
    maximum = max(numbers)
    average = sum(numbers) / len(numbers)
    return minimum, maximum, average

data = [10, 20, 30, 40, 50]
low, high, avg = get_stats(data)
print(f"Min: {low}, Max: {high}, Avg: {avg}")

# Example 5: Default Parameters
def greet(name, greeting="Hello", emoji="👋"):
    print(f"{greeting}, {name}! {emoji}")

greet("Rahul")                    # Hello, Rahul! 👋
greet("Priya", "Hi")              # Hi, Priya! 👋
greet("Amit", "Hey", "🎉")        # Hey, Amit! 🎉

# Example 6: Keyword Arguments
def create_profile(name, age, city, profession):
    return {
        "name": name,
        "age": age,
        "city": city,
        "profession": profession
    }

# Order doesn't matter with keyword arguments
profile = create_profile(
    profession="Developer",
    age=25,
    name="Rahul",
    city="Mumbai"
)
print(profile)

# Example 7: *args - Variable Positional Arguments
def calculate_sum(*numbers):
    \"\"\"Sum any number of arguments\"\"\"
    total = 0
    for num in numbers:
        total += num
    return total

print(calculate_sum(1, 2))           # 3
print(calculate_sum(1, 2, 3, 4, 5))  # 15
print(calculate_sum(10))             # 10

# Example 8: **kwargs - Variable Keyword Arguments
def print_info(**details):
    \"\"\"Print any key-value pairs\"\"\"
    for key, value in details.items():
        print(f"{key}: {value}")

print_info(name="Rahul", age=25, city="Mumbai")
# name: Rahul
# age: 25
# city: Mumbai

# Example 9: Combining All Argument Types
def complex_function(required, optional="default", *args, **kwargs):
    print(f"Required: {required}")
    print(f"Optional: {optional}")
    print(f"Args: {args}")
    print(f"Kwargs: {kwargs}")

complex_function("must", "custom", 1, 2, 3, name="Rahul", age=25)

# Example 10: Function as Return Value
def get_multiplier(factor):
    def multiply(number):
        return number * factor
    return multiply

double = get_multiplier(2)
triple = get_multiplier(3)

print(double(5))   # 10
print(triple(5))   # 15

# Example 11: Function Documentation (Docstrings)
def calculate_bmi(weight, height):
    \"\"\"
    Calculate Body Mass Index (BMI).
    
    Parameters:
        weight (float): Weight in kilograms
        height (float): Height in meters
    
    Returns:
        float: BMI value
    
    Example:
        >>> calculate_bmi(70, 1.75)
        22.86
    \"\"\"
    bmi = weight / (height ** 2)
    return round(bmi, 2)

# Access docstring
print(calculate_bmi.__doc__)
help(calculate_bmi)

# Example 12: Type Hints (Python 3.5+)
def greet_typed(name: str, times: int = 1) -> str:
    \"\"\"Greet someone with type hints\"\"\"
    return (f"Hello, {name}! " * times).strip()

def calculate_area(length: float, width: float) -> float:
    \"\"\"Calculate rectangle area\"\"\"
    return length * width

# Type hints don't enforce types, but help with documentation
result: str = greet_typed("Rahul", 3)
area: float = calculate_area(5.0, 3.0)</code></pre>

<h3>📋 Function Concepts Table</h3>
<table>
<tr><th>Concept</th><th>Description</th><th>Example</th></tr>
<tr><td><strong>Parameter</strong></td><td>Variable in function definition</td><td><code>def func(name):</code></td></tr>
<tr><td><strong>Argument</strong></td><td>Value passed to function</td><td><code>func("Rahul")</code></td></tr>
<tr><td><strong>Return</strong></td><td>Send value back</td><td><code>return result</code></td></tr>
<tr><td><strong>Default</strong></td><td>Optional parameter value</td><td><code>def func(x=10)</code></td></tr>
<tr><td><strong>*args</strong></td><td>Variable positional args</td><td><code>def func(*args)</code></td></tr>
<tr><td><strong>**kwargs</strong></td><td>Variable keyword args</td><td><code>def func(**kwargs)</code></td></tr>
<tr><td><strong>Docstring</strong></td><td>Function documentation</td><td><code>\"\"\"Description\"\"\"</code></td></tr>
<tr><td><strong>Type Hints</strong></td><td>Parameter/return types</td><td><code>def func(x: int) -> int</code></td></tr>
</table>

<h3>🌟 Real-Life Story: Building a Calculator Application</h3>
<p><em>Imagine you're building a calculator app. Functions make each operation reusable and organized:</em></p>

<pre><code># Complete Calculator Application
class Calculator:
    def __init__(self):
        self.history = []
    
    def add(self, *numbers):
        \"\"\"Add any number of values\"\"\"
        result = sum(numbers)
        self._log("ADD", numbers, result)
        return result
    
    def subtract(self, a, b):
        \"\"\"Subtract b from a\"\"\"
        result = a - b
        self._log("SUB", (a, b), result)
        return result
    
    def multiply(self, *numbers):
        \"\"\"Multiply any number of values\"\"\"
        result = 1
        for num in numbers:
            result *= num
        self._log("MUL", numbers, result)
        return result
    
    def divide(self, a, b):
        \"\"\"Divide a by b\"\"\"
        if b == 0:
            raise ValueError("❌ Cannot divide by zero!")
        result = a / b
        self._log("DIV", (a, b), result)
        return result
    
    def power(self, base, exponent=2):
        \"\"\"Calculate power (default: square)\"\"\"
        result = base ** exponent
        self._log("POW", (base, exponent), result)
        return result
    
    def percentage(self, value, percent):
        \"\"\"Calculate percentage of value\"\"\"
        result = (value * percent) / 100
        self._log("PCT", (value, percent), result)
        return result
    
    def _log(self, operation, inputs, result):
        \"\"\"Internal: Log operation to history\"\"\"
        entry = {
            "operation": operation,
            "inputs": inputs,
            "result": result
        }
        self.history.append(entry)
    
    def show_history(self, last_n=5):
        \"\"\"Show last n operations\"\"\"
        print("\\n📜 CALCULATION HISTORY")
        print("-" * 40)
        
        for entry in self.history[-last_n:]:
            op = entry["operation"]
            inputs = entry["inputs"]
            result = entry["result"]
            print(f"{op} {inputs} = {result}")
        
        print("-" * 40)
    
    def clear_history(self):
        \"\"\"Clear calculation history\"\"\"
        self.history = []
        print("🗑️ History cleared!")

# Usage
calc = Calculator()

# Basic operations
print(calc.add(5, 3, 2))        # 10
print(calc.subtract(10, 4))      # 6
print(calc.multiply(2, 3, 4))    # 24
print(calc.divide(20, 4))        # 5.0
print(calc.power(5))             # 25 (5²)
print(calc.power(2, 10))         # 1024 (2¹⁰)
print(calc.percentage(200, 15))  # 30.0 (15% of 200)

# Show history
calc.show_history()</code></pre>

<div class="tip-box">
<strong>💡 Best Practices:</strong>
<ul>
<li>Use descriptive function names (verb_noun format): <code>calculate_total</code>, <code>get_user</code></li>
<li>Keep functions small and focused (do one thing well)</li>
<li>Always add docstrings to document your functions</li>
<li>Use type hints for better code documentation</li>
<li>Return values instead of printing (more flexible)</li>
</ul>
</div>

<div class="warning-box">
<strong>⚠️ Common Mistakes:</strong>
<ul>
<li>Forgetting to call the function: <code>greet</code> vs <code>greet()</code></li>
<li>Forgetting <code>return</code> - function returns <code>None</code> by default</li>
<li>Mutable default arguments (use <code>None</code> instead of <code>[]</code>)</li>
<li>Too many parameters - consider using a class or dict</li>
</ul>
</div>`,
                video: "https://www.youtube.com/embed/qHJjMvHLJdg"
            },
            {
                name: "Arguments & Parameters",
                notes: `<h3>🎯 Understanding Arguments & Parameters</h3>
<p><strong>Parameters</strong> are the variables listed in a function definition. <strong>Arguments</strong> are the actual values passed when calling the function. Python offers incredible flexibility in how you pass arguments - from simple positional arguments to powerful *args and **kwargs!</p>

<p>Think of parameters like form fields on a job application. Some fields are required (positional), some have default values (default parameters), and some accept any additional information you want to provide (*args, **kwargs).</p>

<h3>📚 Parameter Types - 15 Detailed Examples</h3>
<pre><code># Example 1: Positional Arguments (Order Matters!)
def describe_pet(animal_type, pet_name):
    print(f"I have a {animal_type} named {pet_name}.")

describe_pet("dog", "Tommy")     # Correct order
describe_pet("Tommy", "dog")     # Wrong! Tommy is animal_type now

# Example 2: Keyword Arguments (Order Doesn't Matter)
def describe_pet(animal_type, pet_name):
    print(f"I have a {animal_type} named {pet_name}.")

# These are all equivalent:
describe_pet(animal_type="cat", pet_name="Whiskers")
describe_pet(pet_name="Whiskers", animal_type="cat")

# Mix positional and keyword (positional MUST come first)
describe_pet("parrot", pet_name="Polly")

# Example 3: Default Parameter Values
def greet(name, greeting="Hello", punctuation="!"):
    return f"{greeting}, {name}{punctuation}"

print(greet("Rahul"))                    # Hello, Rahul!
print(greet("Priya", "Hi"))              # Hi, Priya!
print(greet("Amit", "Hey", "!!!"))       # Hey, Amit!!!
print(greet("Sneha", punctuation="?"))   # Hello, Sneha?

# Example 4: The Mutable Default Argument Trap!
# ❌ WRONG - mutable default is shared between calls!
def add_item_wrong(item, items=[]):
    items.append(item)
    return items

print(add_item_wrong("apple"))   # ['apple']
print(add_item_wrong("banana"))  # ['apple', 'banana'] - Oops!

# ✅ CORRECT - use None as default
def add_item_correct(item, items=None):
    if items is None:
        items = []
    items.append(item)
    return items

print(add_item_correct("apple"))   # ['apple']
print(add_item_correct("banana"))  # ['banana'] - Correct!

# Example 5: *args - Variable Positional Arguments
def calculate_sum(*args):
    """Accept any number of arguments"""
    print(f"Received {len(args)} arguments: {args}")
    return sum(args)

print(calculate_sum(1, 2, 3))           # 6
print(calculate_sum(10, 20, 30, 40))    # 100
print(calculate_sum())                   # 0

# Example 6: *args with Regular Parameters
def greet_all(greeting, *names):
    """Greet multiple people"""
    for name in names:
        print(f"{greeting}, {name}!")

greet_all("Hello", "Rahul", "Priya", "Amit")
# Hello, Rahul!
# Hello, Priya!
# Hello, Amit!

# Example 7: **kwargs - Variable Keyword Arguments
def print_info(**kwargs):
    """Accept any keyword arguments"""
    print("User Information:")
    for key, value in kwargs.items():
        print(f"  {key}: {value}")

print_info(name="Rahul", age=25, city="Mumbai", job="Developer")
# User Information:
#   name: Rahul
#   age: 25
#   city: Mumbai
#   job: Developer

# Example 8: **kwargs with Default Values
def create_user(username, password, **extra_info):
    """Create user with optional extra info"""
    user = {
        "username": username,
        "password": password,
        "created": True
    }
    user.update(extra_info)  # Add any extra fields
    return user

user1 = create_user("rahul123", "secret")
user2 = create_user("priya456", "pass", email="priya@email.com", age=25)
print(user2)
# {'username': 'priya456', 'password': 'pass', 'created': True, 'email': 'priya@email.com', 'age': 25}

# Example 9: Combining *args and **kwargs
def super_function(*args, **kwargs):
    """Accept absolutely anything!"""
    print(f"Positional: {args}")
    print(f"Keyword: {kwargs}")

super_function(1, 2, 3, name="Rahul", age=25)
# Positional: (1, 2, 3)
# Keyword: {'name': 'Rahul', 'age': 25}

# Order must be: regular, *args, defaults, **kwargs
def complete_example(a, b, *args, option="default", **kwargs):
    print(f"a={a}, b={b}")
    print(f"args={args}")
    print(f"option={option}")
    print(f"kwargs={kwargs}")

complete_example(1, 2, 3, 4, 5, option="custom", x=10, y=20)

# Example 10: Unpacking Arguments with * and **
def add_three(a, b, c):
    return a + b + c

# Unpack list/tuple with *
numbers = [1, 2, 3]
print(add_three(*numbers))  # Same as add_three(1, 2, 3)

# Unpack dictionary with **
data = {"a": 10, "b": 20, "c": 30}
print(add_three(**data))    # Same as add_three(a=10, b=20, c=30)

# Example 11: Positional-Only Parameters (Python 3.8+)
def greet(name, /, greeting="Hello"):
    """name MUST be passed positionally"""
    return f"{greeting}, {name}!"

print(greet("Rahul"))           # ✅ Works
print(greet("Rahul", "Hi"))     # ✅ Works
# print(greet(name="Rahul"))    # ❌ Error! name must be positional

# Example 12: Keyword-Only Parameters
def search(query, *, case_sensitive=False, limit=10):
    """Parameters after * must be keyword-only"""
    print(f"Search: {query}, case={case_sensitive}, limit={limit}")

search("Python")                         # ✅ Works
search("Python", case_sensitive=True)    # ✅ Works
# search("Python", True, 20)             # ❌ Error! Must use keywords

# Example 13: Complete Parameter Ordering
def full_example(
    pos1, pos2,           # Positional or keyword
    /,                    # Everything before is positional-only
    standard1, standard2, # Normal parameters
    *args,                # Variable positional
    kw_only1,            # Keyword-only (after *)
    kw_only2="default",  # Keyword-only with default
    **kwargs             # Variable keyword
):
    pass

# Example 14: Function Signature Best Practices
def process_order(
    order_id: int,
    customer_name: str,
    *items: str,
    discount: float = 0.0,
    rush_delivery: bool = False,
    **metadata
) -> dict:
    """
    Process an order with flexible options.
    
    Args:
        order_id: Unique order identifier
        customer_name: Name of customer
        *items: Items to order (variable)
        discount: Discount percentage (0-100)
        rush_delivery: Enable rush delivery
        **metadata: Any additional order metadata
    
    Returns:
        Order confirmation dictionary
    """
    return {
        "order_id": order_id,
        "customer": customer_name,
        "items": list(items),
        "discount": discount,
        "rush": rush_delivery,
        "extra": metadata
    }

order = process_order(
    12345,
    "Rahul Sharma",
    "Phone", "Case", "Charger",
    discount=10.0,
    rush_delivery=True,
    gift_wrap=True,
    note="Handle with care"
)

# Example 15: Forwarding Arguments (Wrapper Functions)
def log_call(func):
    """Decorator that logs function calls"""
    def wrapper(*args, **kwargs):
        print(f"Calling {func.__name__}")
        print(f"  args: {args}")
        print(f"  kwargs: {kwargs}")
        result = func(*args, **kwargs)
        print(f"  result: {result}")
        return result
    return wrapper

@log_call
def multiply(a, b):
    return a * b

multiply(5, 3)
# Calling multiply
#   args: (5, 3)
#   kwargs: {}
#   result: 15</code></pre>

<h3>📋 Parameter Types Reference</h3>
<table>
<tr><th>Type</th><th>Syntax</th><th>Description</th><th>Example Call</th></tr>
<tr><td><strong>Positional</strong></td><td><code>def f(a, b)</code></td><td>Passed by position</td><td><code>f(1, 2)</code></td></tr>
<tr><td><strong>Keyword</strong></td><td><code>def f(a, b)</code></td><td>Passed by name</td><td><code>f(a=1, b=2)</code></td></tr>
<tr><td><strong>Default</strong></td><td><code>def f(a, b=10)</code></td><td>Has default value</td><td><code>f(1)</code></td></tr>
<tr><td><strong>*args</strong></td><td><code>def f(*args)</code></td><td>Variable positional</td><td><code>f(1, 2, 3)</code></td></tr>
<tr><td><strong>**kwargs</strong></td><td><code>def f(**kwargs)</code></td><td>Variable keyword</td><td><code>f(x=1, y=2)</code></td></tr>
<tr><td><strong>Positional-only</strong></td><td><code>def f(a, /)</code></td><td>Must be positional</td><td><code>f(1)</code></td></tr>
<tr><td><strong>Keyword-only</strong></td><td><code>def f(*, a)</code></td><td>Must be keyword</td><td><code>f(a=1)</code></td></tr>
</table>

<h3>🌟 Real-Life Story: Building a Flexible API Client</h3>
<p><em>Imagine you're building a REST API client library. You need to handle various HTTP methods with different parameters:</em></p>

<pre><code># Flexible API Client using *args and **kwargs
import json

class APIClient:
    def __init__(self, base_url, api_key=None, timeout=30):
        self.base_url = base_url.rstrip("/")
        self.api_key = api_key
        self.timeout = timeout
        self.session_id = None
    
    def request(self, method, endpoint, *path_params, 
                data=None, headers=None, **query_params):
        """
        Make an API request with flexible parameters.
        
        Args:
            method: HTTP method (GET, POST, etc.)
            endpoint: API endpoint template
            *path_params: Path parameters (for /users/{id})
            data: Request body data
            headers: Custom headers
            **query_params: Query parameters (?key=value)
        """
        # Build URL with path parameters
        if path_params:
            endpoint = endpoint.format(*path_params)
        
        url = f"{self.base_url}{endpoint}"
        
        # Add query parameters
        if query_params:
            query_string = "&".join(f"{k}={v}" for k, v in query_params.items())
            url = f"{url}?{query_string}"
        
        # Build headers
        final_headers = {"Content-Type": "application/json"}
        if self.api_key:
            final_headers["Authorization"] = f"Bearer {self.api_key}"
        if headers:
            final_headers.update(headers)
        
        # Log the request
        print(f"📡 {method} {url}")
        if data:
            print(f"   Body: {json.dumps(data)}")
        print(f"   Headers: {final_headers}")
        
        # In real code, you'd use requests library here
        return {"status": 200, "url": url}
    
    # Convenience methods using the flexible request()
    def get(self, endpoint, *path_params, **query_params):
        return self.request("GET", endpoint, *path_params, **query_params)
    
    def post(self, endpoint, data, *path_params, **query_params):
        return self.request("POST", endpoint, *path_params, data=data, **query_params)
    
    def put(self, endpoint, data, *path_params, **query_params):
        return self.request("PUT", endpoint, *path_params, data=data, **query_params)
    
    def delete(self, endpoint, *path_params, **query_params):
        return self.request("DELETE", endpoint, *path_params, **query_params)

# Usage examples
api = APIClient("https://api.example.com", api_key="secret123")

# GET request with query params
api.get("/users", page=1, limit=10, sort="name")
# 📡 GET https://api.example.com/users?page=1&limit=10&sort=name

# GET with path parameter
api.get("/users/{}", 123)
# 📡 GET https://api.example.com/users/123

# POST with data
api.post("/users", {"name": "Rahul", "email": "rahul@email.com"})
# 📡 POST https://api.example.com/users
#    Body: {"name": "Rahul", "email": "rahul@email.com"}

# PUT with path param and data
api.put("/users/{}", {"name": "Rahul Updated"}, 123)
# 📡 PUT https://api.example.com/users/123

# DELETE with multiple path params
api.delete("/users/{}/posts/{}", 123, 456)
# 📡 DELETE https://api.example.com/users/123/posts/456</code></pre>

<p><strong>Why *args and **kwargs are perfect here:</strong> The <code>request()</code> method handles any combination of path parameters, query parameters, and optional settings. The convenience methods (get, post, etc.) simply forward arguments to the main method. This is exactly how popular libraries like <code>requests</code> work!</p>

<div class="tip-box">
<strong>💡 Best Practices:</strong>
<ul>
<li>Use keyword arguments for optional parameters - more readable</li>
<li>Always use <code>None</code> as default for mutable types (list, dict)</li>
<li>Put *args before **kwargs in function signatures</li>
<li>Use keyword-only arguments (<code>*,</code>) for important flags like <code>dry_run=True</code></li>
<li>Document your *args and **kwargs clearly in docstrings</li>
<li>Use type hints even with *args: <code>*args: int</code></li>
</ul>
</div>

<div class="warning-box">
<strong>⚠️ Common Mistakes:</strong>
<ul>
<li>Mutable default arguments - they're shared between calls!</li>
<li>Putting positional arguments after keyword arguments</li>
<li>Forgetting that *args gives you a tuple, not a list</li>
<li>Using *args when you actually need specific parameters</li>
<li>Not validating **kwargs - any key can be passed!</li>
</ul>
</div>`,
                video: "https://www.youtube.com/embed/9Os0o3wzS_I"
            },
            {
                name: "Lambda Functions",
                notes: `<h3>⚡ Understanding Lambda Functions</h3>
<p>A <strong>lambda</strong> is an anonymous (nameless) function defined in a single line. They're perfect for short, throwaway functions - especially when passing functions as arguments to other functions like <code>map()</code>, <code>filter()</code>, and <code>sorted()</code>.</p>

<p>Think of lambda as a "mini function" - when you need a quick function but don't want to formally define one with <code>def</code>.</p>

<h3>📚 Lambda Examples - 10 Detailed Examples</h3>
<pre><code># Example 1: Basic Lambda vs Regular Function
# Regular function
def square(x):
    return x * x

# Lambda equivalent (one line!)
square_lambda = lambda x: x * x

print(square(5))         # 25
print(square_lambda(5))  # 25

# Example 2: Multiple Arguments
add = lambda a, b: a + b
multiply = lambda a, b: a * b
power = lambda base, exp: base ** exp

print(add(3, 5))       # 8
print(multiply(4, 6))  # 24
print(power(2, 10))    # 1024

# Example 3: Lambda with map()
numbers = [1, 2, 3, 4, 5]

# Square all numbers
squares = list(map(lambda x: x**2, numbers))
print(squares)  # [1, 4, 9, 16, 25]

# Double all numbers
doubled = list(map(lambda x: x * 2, numbers))
print(doubled)  # [2, 4, 6, 8, 10]

# Convert to strings
strings = list(map(lambda x: str(x), numbers))
print(strings)  # ['1', '2', '3', '4', '5']

# Example 4: Lambda with filter()
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

# Get even numbers
evens = list(filter(lambda x: x % 2 == 0, numbers))
print(evens)  # [2, 4, 6, 8, 10]

# Get numbers > 5
greater = list(filter(lambda x: x > 5, numbers))
print(greater)  # [6, 7, 8, 9, 10]

# Get multiples of 3
threes = list(filter(lambda x: x % 3 == 0, numbers))
print(threes)  # [3, 6, 9]

# Example 5: Lambda with sorted()
students = [
    {"name": "Rahul", "marks": 85, "age": 20},
    {"name": "Priya", "marks": 92, "age": 19},
    {"name": "Amit", "marks": 78, "age": 21},
    {"name": "Sneha", "marks": 88, "age": 20}
]

# Sort by marks (highest first)
by_marks = sorted(students, key=lambda s: s["marks"], reverse=True)
print([s["name"] for s in by_marks])  # ['Priya', 'Sneha', 'Rahul', 'Amit']

# Sort by name (alphabetical)
by_name = sorted(students, key=lambda s: s["name"])
print([s["name"] for s in by_name])  # ['Amit', 'Priya', 'Rahul', 'Sneha']

# Sort by age
by_age = sorted(students, key=lambda s: s["age"])

# Sort by multiple criteria (age, then marks)
by_multiple = sorted(students, key=lambda s: (s["age"], -s["marks"]))

# Example 6: Lambda with reduce()
from functools import reduce

numbers = [1, 2, 3, 4, 5]

# Sum all
total = reduce(lambda a, b: a + b, numbers)
print(total)  # 15

# Product of all
product = reduce(lambda a, b: a * b, numbers)
print(product)  # 120

# Find maximum
maximum = reduce(lambda a, b: a if a > b else b, numbers)
print(maximum)  # 5

# Example 7: Lambda with Conditional (Ternary)
# Simple condition
check = lambda x: "Even" if x % 2 == 0 else "Odd"
print(check(4))  # Even
print(check(7))  # Odd

# Grade assignment
grade = lambda marks: "A" if marks >= 90 else "B" if marks >= 80 else "C" if marks >= 70 else "D"
print(grade(92))  # A
print(grade(75))  # C

# Example 8: Lambda in GUI/Event Handling
# Common in Tkinter buttons
# button = Button(root, command=lambda: print("Clicked!"))

# With parameters
def handle_click(name):
    print(f"Hello, {name}!")

# button = Button(root, command=lambda: handle_click("Rahul"))

# Example 9: Lambda with min/max
students = [
    ("Rahul", 85),
    ("Priya", 92),
    ("Amit", 78)
]

# Get student with highest marks
topper = max(students, key=lambda s: s[1])
print(topper)  # ('Priya', 92)

# Get student with lowest marks
lowest = min(students, key=lambda s: s[1])
print(lowest)  # ('Amit', 78)

# Example 10: Lambda in Dictionary
# Calculator operations
operations = {
    "add": lambda a, b: a + b,
    "subtract": lambda a, b: a - b,
    "multiply": lambda a, b: a * b,
    "divide": lambda a, b: a / b if b != 0 else "Error"
}

print(operations["add"](10, 5))       # 15
print(operations["multiply"](4, 7))    # 28
print(operations["divide"](10, 0))     # Error

# Dynamic function selection
def calculate(operation, a, b):
    return operations.get(operation, lambda a, b: "Unknown")(a, b)

print(calculate("add", 5, 3))  # 8</code></pre>

<h3>📋 Lambda vs Regular Function</h3>
<table>
<tr><th>Feature</th><th>Lambda</th><th>Regular Function</th></tr>
<tr><td><strong>Syntax</strong></td><td><code>lambda x: x*2</code></td><td><code>def func(x): return x*2</code></td></tr>
<tr><td><strong>Name</strong></td><td>Anonymous</td><td>Named</td></tr>
<tr><td><strong>Lines</strong></td><td>Single expression</td><td>Multiple lines</td></tr>
<tr><td><strong>Return</strong></td><td>Implicit</td><td>Explicit <code>return</code></td></tr>
<tr><td><strong>Docstring</strong></td><td>Not supported</td><td>Supported</td></tr>
<tr><td><strong>Use Case</strong></td><td>Short, one-time use</td><td>Reusable, complex</td></tr>
</table>

<h3>🌟 Real-Life Story: Data Sorting & Filtering System</h3>
<p><em>Imagine you're building a product listing page with sorting and filtering. Lambda functions make it clean:</em></p>

<pre><code># E-Commerce Product Sorting with Lambda
class ProductCatalog:
    def __init__(self):
        self.products = []
        
        # Sorting strategies using lambda
        self.sort_strategies = {
            "price_low": lambda p: p["price"],
            "price_high": lambda p: -p["price"],
            "name": lambda p: p["name"].lower(),
            "rating": lambda p: -p["rating"],
            "newest": lambda p: -p["id"],
            "popularity": lambda p: -p["sold"]
        }
        
        # Filter strategies
        self.filter_strategies = {
            "in_stock": lambda p: p["stock"] > 0,
            "on_sale": lambda p: p.get("discount", 0) > 0,
            "high_rated": lambda p: p["rating"] >= 4.0,
            "under_1000": lambda p: p["price"] < 1000,
            "under_5000": lambda p: p["price"] < 5000
        }
    
    def add_product(self, name, price, rating, stock, sold=0, discount=0):
        product = {
            "id": len(self.products) + 1,
            "name": name,
            "price": price,
            "rating": rating,
            "stock": stock,
            "sold": sold,
            "discount": discount
        }
        self.products.append(product)
    
    def get_products(self, sort_by="name", filters=None):
        \"\"\"Get products with sorting and filtering\"\"\"
        # Start with all products
        result = self.products.copy()
        
        # Apply filters
        if filters:
            for filter_name in filters:
                if filter_name in self.filter_strategies:
                    result = list(filter(
                        self.filter_strategies[filter_name], 
                        result
                    ))
        
        # Apply sorting
        if sort_by in self.sort_strategies:
            result = sorted(result, key=self.sort_strategies[sort_by])
        
        return result
    
    def display(self, products):
        \"\"\"Display products\"\"\"
        print("\\n" + "=" * 60)
        print(f"{'Name':<25} {'Price':>10} {'Rating':>8} {'Stock':>8}")
        print("-" * 60)
        
        for p in products:
            sale = " 🏷️" if p.get("discount", 0) > 0 else ""
            print(f"{p['name']:<25} ₹{p['price']:>8} ⭐{p['rating']:.1f}    {p['stock']:>5}{sale}")
        
        print("=" * 60)

# Usage
catalog = ProductCatalog()

# Add products
catalog.add_product("iPhone 15", 79999, 4.8, 50, 1200)
catalog.add_product("Samsung S24", 69999, 4.6, 30, 800)
catalog.add_product("OnePlus 12", 59999, 4.5, 45, 600, discount=10)
catalog.add_product("Pixel 8", 64999, 4.7, 0, 400)  # Out of stock
catalog.add_product("Xiaomi 14", 49999, 4.3, 100, 1500, discount=15)
catalog.add_product("Nothing Phone", 39999, 4.4, 25, 300)

# Get all products sorted by price (low to high)
print("\\n📱 All Products (Price: Low to High)")
catalog.display(catalog.get_products(sort_by="price_low"))

# Get in-stock products sorted by rating
print("\\n📱 In Stock (By Rating)")
catalog.display(catalog.get_products(
    sort_by="rating", 
    filters=["in_stock"]
))

# Get products under ₹50,000 that are on sale
print("\\n📱 Under ₹50,000 + On Sale")
catalog.display(catalog.get_products(
    sort_by="price_low",
    filters=["under_5000", "on_sale"]
))</code></pre>

<div class="tip-box">
<strong>💡 Best Practices:</strong>
<ul>
<li>Use lambda for simple, one-line operations</li>
<li>Use regular functions for complex logic or when you need documentation</li>
<li>Lambda is great with <code>map()</code>, <code>filter()</code>, <code>sorted()</code></li>
<li>Consider list comprehensions as alternative to <code>map()</code>/<code>filter()</code></li>
<li>Store lambdas in dictionaries for strategy patterns</li>
</ul>
</div>

<div class="warning-box">
<strong>⚠️ Common Mistakes:</strong>
<ul>
<li>Making lambda too complex - use regular function instead</li>
<li>Forgetting that lambda can only have ONE expression</li>
<li>Not using <code>list()</code> around <code>map()</code>/<code>filter()</code> (they return iterators)</li>
<li>Using lambda when a simple function reference works: <code>map(str, nums)</code></li>
</ul>
</div>`,
                video: "https://www.youtube.com/embed/qHJjMvHLJdg"
            },
            {
                name: "Decorators",
                notes: `<h3>Basic Decorator</h3>
<pre><code>def my_decorator(func):
    def wrapper():
        print("Before function")
        func()
        print("After function")
    return wrapper

@my_decorator
def say_hello():
    print("Hello!")

say_hello()
# Output:
# Before function
# Hello!
# After function</code></pre>

<h3>Decorator with Arguments</h3>
<pre><code>def repeat(times):
    def decorator(func):
        def wrapper(*args, **kwargs):
            for _ in range(times):
                func(*args, **kwargs)
        return wrapper
    return decorator

@repeat(3)
def greet(name):
    print(f"Hello, {name}!")

greet("Alice")  # Prints 3 times</code></pre>

<h3>Common Built-in Decorators</h3>
<pre><code>class MyClass:
    @staticmethod
    def static_method():
        print("Static method")
    
    @classmethod
    def class_method(cls):
        print(f"Class method of {cls}")
    
    @property
    def my_property(self):
        return self._value</code></pre>`,
                video: "https://www.youtube.com/embed/qHJjMvHLJdg"
            },
            {
                name: "Scope & Closures",
                notes: `<h3>Variable Scope</h3>
<pre><code># Global scope
x = "global"

def my_func():
    # Local scope
    y = "local"
    print(x)  # Can access global
    print(y)  # Can access local

my_func()
print(x)  # Works
# print(y)  # Error! y is local</code></pre>

<h3>Global Keyword</h3>
<pre><code>count = 0

def increment():
    global count
    count += 1

increment()
print(count)  # 1</code></pre>

<h3>Closures</h3>
<pre><code>def outer(x):
    def inner(y):
        return x + y
    return inner

add_5 = outer(5)
print(add_5(3))  # 8

# Closure remembers x = 5</code></pre>`,
                video: "https://www.youtube.com/embed/swU3c34d2NQ"
            }
        ]
    },
    {
        id: 4,
        title: "Data Structures",
        icon: "📊",
        time: "Week 4-5",
        subtopics: [
            {
                name: "Lists",
                notes: `<h3>📋 Understanding Lists in Python</h3>
<p>A <strong>list</strong> is an ordered, mutable (changeable) collection that can hold items of any type. Lists are one of the most versatile and commonly used data structures in Python. They're like arrays in other languages but much more powerful!</p>

<p>Think of a list like a shopping list: you can add items, remove items, reorder them, and check what's on the list. That's exactly how Python lists work!</p>

<h3>📚 List Examples - 15 Detailed Examples</h3>
<pre><code># Example 1: Creating Lists
fruits = ["🍎 Apple", "🍌 Banana", "🍒 Cherry"]
numbers = [1, 2, 3, 4, 5]
mixed = [1, "hello", True, 3.14, None]
nested = [[1, 2], [3, 4], [5, 6]]
empty = []

# From other types
from_string = list("Python")  # ['P', 'y', 't', 'h', 'o', 'n']
from_range = list(range(1, 6))  # [1, 2, 3, 4, 5]

# Example 2: Accessing Elements
fruits = ["Apple", "Banana", "Cherry", "Date", "Elderberry"]
print(fruits[0])     # Apple (first)
print(fruits[-1])    # Elderberry (last)
print(fruits[2])     # Cherry (middle)

# Example 3: Slicing Lists
print(fruits[1:4])   # ['Banana', 'Cherry', 'Date']
print(fruits[:3])    # ['Apple', 'Banana', 'Cherry']
print(fruits[2:])    # ['Cherry', 'Date', 'Elderberry']
print(fruits[::2])   # ['Apple', 'Cherry', 'Elderberry'] (every 2nd)
print(fruits[::-1])  # Reversed list

# Example 4: Adding Elements
shopping = ["Milk", "Bread"]

shopping.append("Eggs")           # Add to end
print(shopping)  # ['Milk', 'Bread', 'Eggs']

shopping.insert(0, "Water")       # Add at specific index
print(shopping)  # ['Water', 'Milk', 'Bread', 'Eggs']

shopping.extend(["Butter", "Cheese"])  # Add multiple items
print(shopping)  # ['Water', 'Milk', 'Bread', 'Eggs', 'Butter', 'Cheese']

# Using + operator (creates new list)
new_list = shopping + ["Juice", "Cookies"]

# Example 5: Removing Elements
items = ["A", "B", "C", "D", "E"]

items.remove("C")        # Remove by value
print(items)  # ['A', 'B', 'D', 'E']

popped = items.pop()     # Remove last, return it
print(popped)  # 'E'
print(items)   # ['A', 'B', 'D']

popped = items.pop(0)    # Remove at index, return it
print(popped)  # 'A'

del items[0]             # Delete at index (no return)
print(items)  # ['D']

items.clear()            # Remove all
print(items)  # []

# Example 6: Finding Elements
nums = [10, 20, 30, 20, 40, 20]

print(nums.index(30))      # 2 (first occurrence)
print(nums.count(20))      # 3 (how many times)
print(20 in nums)          # True
print(50 not in nums)      # True

# Example 7: Sorting Lists
numbers = [3, 1, 4, 1, 5, 9, 2, 6]

# Sort in place
numbers.sort()
print(numbers)  # [1, 1, 2, 3, 4, 5, 6, 9]

numbers.sort(reverse=True)
print(numbers)  # [9, 6, 5, 4, 3, 2, 1, 1]

# Create new sorted list
original = [3, 1, 4]
sorted_list = sorted(original)
print(original)     # [3, 1, 4] (unchanged)
print(sorted_list)  # [1, 3, 4]

# Sort by custom key
names = ["Rahul", "Priya", "Amit"]
names.sort(key=len)  # Sort by length
print(names)  # ['Amit', 'Priya', 'Rahul']

# Example 8: Sorting Complex Data
students = [
    {"name": "Rahul", "marks": 85},
    {"name": "Priya", "marks": 92},
    {"name": "Amit", "marks": 78}
]

# Sort by marks
students.sort(key=lambda s: s["marks"], reverse=True)
for s in students:
    print(f"{s['name']}: {s['marks']}")
# Priya: 92, Rahul: 85, Amit: 78

# Example 9: List Comprehension
# Create squares
squares = [x**2 for x in range(1, 6)]
print(squares)  # [1, 4, 9, 16, 25]

# With condition
evens = [x for x in range(10) if x % 2 == 0]
print(evens)  # [0, 2, 4, 6, 8]

# Transform strings
names = ["alice", "bob", "charlie"]
upper = [name.upper() for name in names]
print(upper)  # ['ALICE', 'BOB', 'CHARLIE']

# Example 10: Copying Lists
original = [1, 2, 3]

# Different ways to copy
copy1 = original.copy()
copy2 = list(original)
copy3 = original[:]

# Why copy matters
wrong = original  # Same reference!
wrong.append(4)
print(original)  # [1, 2, 3, 4] - Original changed!

# Deep copy for nested lists
import copy
nested = [[1, 2], [3, 4]]
deep = copy.deepcopy(nested)

# Example 11: Useful List Methods
nums = [1, 2, 3]

# Reverse in place
nums.reverse()
print(nums)  # [3, 2, 1]

# Length, min, max, sum
print(len(nums))  # 3
print(min(nums))  # 1
print(max(nums))  # 3
print(sum(nums))  # 6

# Example 12: Unpacking Lists
first, second, third = [1, 2, 3]
print(first, second, third)  # 1 2 3

# Extended unpacking
first, *rest = [1, 2, 3, 4, 5]
print(first)  # 1
print(rest)   # [2, 3, 4, 5]

*start, last = [1, 2, 3, 4, 5]
print(start)  # [1, 2, 3, 4]
print(last)   # 5

# Example 13: List as Stack (LIFO)
stack = []
stack.append("A")  # Push
stack.append("B")
stack.append("C")
print(stack)  # ['A', 'B', 'C']

top = stack.pop()  # Pop
print(top)    # 'C'
print(stack)  # ['A', 'B']

# Example 14: List as Queue (FIFO)
from collections import deque
queue = deque(["A", "B", "C"])

queue.append("D")      # Add to right
first = queue.popleft()  # Remove from left
print(first)  # 'A'
print(queue)  # deque(['B', 'C', 'D'])

# Example 15: Zip Lists Together
names = ["Rahul", "Priya", "Amit"]
ages = [25, 22, 28]
cities = ["Mumbai", "Delhi", "Pune"]

combined = list(zip(names, ages, cities))
print(combined)
# [('Rahul', 25, 'Mumbai'), ('Priya', 22, 'Delhi'), ('Amit', 28, 'Pune')]</code></pre>

<h3>📋 List Methods Reference</h3>
<table>
<tr><th>Method</th><th>Description</th><th>Example</th></tr>
<tr><td><code>append(x)</code></td><td>Add item to end</td><td><code>lst.append(5)</code></td></tr>
<tr><td><code>insert(i, x)</code></td><td>Add at index</td><td><code>lst.insert(0, 5)</code></td></tr>
<tr><td><code>extend(iter)</code></td><td>Add multiple</td><td><code>lst.extend([1,2])</code></td></tr>
<tr><td><code>remove(x)</code></td><td>Remove first x</td><td><code>lst.remove(5)</code></td></tr>
<tr><td><code>pop(i)</code></td><td>Remove at index</td><td><code>lst.pop()</code> or <code>lst.pop(0)</code></td></tr>
<tr><td><code>clear()</code></td><td>Remove all</td><td><code>lst.clear()</code></td></tr>
<tr><td><code>index(x)</code></td><td>Find index of x</td><td><code>lst.index(5)</code></td></tr>
<tr><td><code>count(x)</code></td><td>Count occurrences</td><td><code>lst.count(5)</code></td></tr>
<tr><td><code>sort()</code></td><td>Sort in place</td><td><code>lst.sort(reverse=True)</code></td></tr>
<tr><td><code>reverse()</code></td><td>Reverse in place</td><td><code>lst.reverse()</code></td></tr>
<tr><td><code>copy()</code></td><td>Shallow copy</td><td><code>new = lst.copy()</code></td></tr>
</table>

<h3>🌟 Real-Life Story: Building an E-Commerce Shopping Cart</h3>
<p><em>Imagine you're building a shopping cart for an e-commerce website. Lists are perfect for managing cart items:</em></p>

<pre><code># Complete Shopping Cart System
class ShoppingCart:
    def __init__(self):
        self.items = []
        self.discount_code = None
    
    def add_item(self, name, price, quantity=1):
        \"\"\"Add item to cart\"\"\"
        # Check if item exists
        for item in self.items:
            if item["name"] == name:
                item["quantity"] += quantity
                print(f"✅ Updated {name} quantity to {item['quantity']}")
                return
        
        # Add new item
        self.items.append({
            "name": name,
            "price": price,
            "quantity": quantity
        })
        print(f"✅ Added {quantity}x {name} to cart")
    
    def remove_item(self, name):
        \"\"\"Remove item from cart\"\"\"
        for i, item in enumerate(self.items):
            if item["name"] == name:
                removed = self.items.pop(i)
                print(f"❌ Removed {removed['name']} from cart")
                return
        print(f"⚠️ {name} not in cart")
    
    def update_quantity(self, name, quantity):
        \"\"\"Update item quantity\"\"\"
        for item in self.items:
            if item["name"] == name:
                if quantity <= 0:
                    self.remove_item(name)
                else:
                    item["quantity"] = quantity
                    print(f"✅ Updated {name} to {quantity}")
                return
        print(f"⚠️ {name} not in cart")
    
    def apply_discount(self, code):
        \"\"\"Apply discount code\"\"\"
        discounts = {"SAVE10": 0.10, "SAVE20": 0.20}
        if code in discounts:
            self.discount_code = code
            print(f"🎉 Discount {code} applied!")
        else:
            print("❌ Invalid discount code")
    
    def get_subtotal(self):
        return sum(item["price"] * item["quantity"] for item in self.items)
    
    def get_discount(self):
        if self.discount_code:
            discounts = {"SAVE10": 0.10, "SAVE20": 0.20}
            return self.get_subtotal() * discounts[self.discount_code]
        return 0
    
    def get_total(self):
        return self.get_subtotal() - self.get_discount()
    
    def show_cart(self):
        \"\"\"Display cart contents\"\"\"
        print("\\n" + "=" * 50)
        print("🛒 YOUR SHOPPING CART")
        print("=" * 50)
        
        if not self.items:
            print("Cart is empty!")
            return
        
        for i, item in enumerate(self.items, 1):
            total = item["price"] * item["quantity"]
            print(f"{i}. {item['name']}")
            print(f"   ₹{item['price']} × {item['quantity']} = ₹{total}")
        
        print("-" * 50)
        print(f"Subtotal: ₹{self.get_subtotal():.2f}")
        
        if self.discount_code:
            print(f"Discount ({self.discount_code}): -₹{self.get_discount():.2f}")
        
        print(f"Total: ₹{self.get_total():.2f}")
        print("=" * 50)

# Usage
cart = ShoppingCart()
cart.add_item("iPhone 15", 79999)
cart.add_item("AirPods Pro", 24999)
cart.add_item("Phone Case", 999, 2)
cart.apply_discount("SAVE10")
cart.show_cart()</code></pre>

<div class="tip-box">
<strong>💡 Best Practices:</strong>
<ul>
<li>Use list comprehensions for simple transformations</li>
<li>Use <code>enumerate()</code> when you need both index and value</li>
<li>Use <code>.copy()</code> when you need a copy, not a reference</li>
<li>Use <code>in</code> operator to check membership: <code>if x in list</code></li>
<li>Consider <code>deque</code> for queue operations (faster)</li>
</ul>
</div>

<div class="warning-box">
<strong>⚠️ Common Mistakes:</strong>
<ul>
<li>Modifying list while iterating (causes skipped items)</li>
<li>Using <code>=</code> instead of <code>.copy()</code> (creates reference, not copy)</li>
<li>Forgetting that <code>sort()</code> returns None (it sorts in place)</li>
<li>Using <code>list.index(x)</code> without checking if x exists (raises error)</li>
</ul>
</div>`,
                video: "https://www.youtube.com/embed/o04i16v-aN4"
            },
            {
                name: "Tuples",
                notes: `<h3>📦 Understanding Tuples in Python</h3>
<p>A <strong>tuple</strong> is an ordered, <strong>immutable</strong> (unchangeable) collection. Once created, you cannot add, remove, or modify elements. Tuples are perfect for data that should remain constant!</p>

<p>Think of a tuple like a sealed package: once you pack it, you can't change what's inside. Use tuples for coordinates, RGB colors, database records, or any fixed data.</p>

<h3>📚 Tuple Examples - 10 Detailed Examples</h3>
<pre><code># Example 1: Creating Tuples
# Using parentheses
point = (3, 4)
colors = ("red", "green", "blue")
mixed = (1, "hello", True, 3.14)

# Without parentheses (tuple packing)
coordinates = 10, 20, 30

# Single element tuple (MUST have comma!)
single = (42,)       # This is a tuple
not_tuple = (42)     # This is just number 42!

# Empty tuple
empty = ()
also_empty = tuple()

# From list
from_list = tuple([1, 2, 3])

# From string
from_string = tuple("Python")  # ('P', 'y', 't', 'h', 'o', 'n')

# Example 2: Accessing Elements
point = (10, 20, 30, 40, 50)

print(point[0])     # 10 (first)
print(point[-1])    # 50 (last)
print(point[2])     # 30 (middle)

# Slicing (returns new tuple)
print(point[1:4])   # (20, 30, 40)
print(point[:3])    # (10, 20, 30)
print(point[::2])   # (10, 30, 50) every 2nd
print(point[::-1])  # (50, 40, 30, 20, 10) reversed

# Example 3: Tuple Unpacking
# Basic unpacking
x, y, z = (10, 20, 30)
print(f"x={x}, y={y}, z={z}")

# Swap variables (Python elegance!)
a, b = 5, 10
a, b = b, a  # Swap!
print(f"a={a}, b={b}")  # a=10, b=5

# Extended unpacking with *
first, *middle, last = (1, 2, 3, 4, 5)
print(first)   # 1
print(middle)  # [2, 3, 4]
print(last)    # 5

# Ignore values with _
name, _, age = ("Rahul", "unnecessary", 25)
print(name, age)  # Rahul 25

# Example 4: Nested Tuples
matrix = (
    (1, 2, 3),
    (4, 5, 6),
    (7, 8, 9)
)

print(matrix[0])      # (1, 2, 3)
print(matrix[1][2])   # 6
print(matrix[2][0])   # 7

# Example 5: Tuple Methods (Only 2!)
numbers = (1, 2, 3, 2, 4, 2, 5)

# count() - how many times element appears
print(numbers.count(2))  # 3

# index() - find first occurrence
print(numbers.index(4))  # 4

# Example 6: Tuples in Functions
def get_user_info(user_id):
    \"\"\"Return multiple values as tuple\"\"\"
    # Simulate database lookup
    return ("Rahul", 25, "rahul@email.com")

# Unpack return values
name, age, email = get_user_info(1)
print(f"{name} ({age}) - {email}")

def calculate(a, b):
    \"\"\"Return multiple calculations\"\"\"
    return a + b, a - b, a * b, a / b

add, sub, mul, div = calculate(10, 5)
print(f"Add: {add}, Sub: {sub}, Mul: {mul}, Div: {div}")

# Example 7: Tuples as Dictionary Keys
# Lists can't be dict keys (mutable), but tuples can!
locations = {
    (28.6139, 77.2090): "Delhi",
    (19.0760, 72.8777): "Mumbai",
    (13.0827, 80.2707): "Chennai"
}

print(locations[(19.0760, 72.8777)])  # "Mumbai"

# Example 8: Named Tuples (Better Readability)
from collections import namedtuple

# Define a named tuple type
Person = namedtuple("Person", ["name", "age", "city"])

# Create instances
rahul = Person("Rahul", 25, "Mumbai")
priya = Person(name="Priya", age=22, city="Delhi")

# Access by name or index
print(rahul.name)    # Rahul
print(rahul[0])      # Rahul
print(priya.city)    # Delhi

# Convert to dict
print(rahul._asdict())  # {'name': 'Rahul', 'age': 25, 'city': 'Mumbai'}

# Example 9: Tuple Comparison
t1 = (1, 2, 3)
t2 = (1, 2, 4)
t3 = (1, 2, 3)

print(t1 == t3)   # True
print(t1 < t2)    # True (compares element by element)
print(t1 != t2)   # True

# Sorting list of tuples
students = [("Rahul", 85), ("Priya", 92), ("Amit", 78)]
students.sort(key=lambda x: x[1], reverse=True)
print(students)  # [("Priya", 92), ("Rahul", 85), ("Amit", 78)]

# Example 10: Tuple Concatenation & Repetition
t1 = (1, 2, 3)
t2 = (4, 5, 6)

# Concatenation (creates new tuple)
combined = t1 + t2
print(combined)  # (1, 2, 3, 4, 5, 6)

# Repetition
repeated = t1 * 3
print(repeated)  # (1, 2, 3, 1, 2, 3, 1, 2, 3)

# Membership
print(2 in t1)      # True
print(10 not in t1) # True</code></pre>

<h3>📋 Tuple vs List Comparison</h3>
<table>
<tr><th>Feature</th><th>List</th><th>Tuple</th></tr>
<tr><td><strong>Syntax</strong></td><td><code>[1, 2, 3]</code></td><td><code>(1, 2, 3)</code></td></tr>
<tr><td><strong>Mutability</strong></td><td>Mutable (can change)</td><td>Immutable (fixed)</td></tr>
<tr><td><strong>Performance</strong></td><td>Slower</td><td>Faster</td></tr>
<tr><td><strong>Memory</strong></td><td>More memory</td><td>Less memory</td></tr>
<tr><td><strong>Dict Key</strong></td><td>Cannot be key</td><td>Can be key</td></tr>
<tr><td><strong>Use When</strong></td><td>Data changes</td><td>Data is fixed</td></tr>
</table>

<h3>🌟 Real-Life Story: RGB Color System</h3>
<p><em>Imagine you're building a graphics application. RGB colors are perfect tuples - each color has exactly 3 fixed values (Red, Green, Blue):</em></p>

<pre><code># RGB Color System using Tuples
from collections import namedtuple

# Define RGB as named tuple
RGB = namedtuple("RGB", ["red", "green", "blue"])

class ColorPalette:
    # Predefined colors (immutable = safe!)
    COLORS = {
        "red": RGB(255, 0, 0),
        "green": RGB(0, 255, 0),
        "blue": RGB(0, 0, 255),
        "white": RGB(255, 255, 255),
        "black": RGB(0, 0, 0),
        "yellow": RGB(255, 255, 0),
        "cyan": RGB(0, 255, 255),
        "magenta": RGB(255, 0, 255),
        "orange": RGB(255, 165, 0),
        "purple": RGB(128, 0, 128)
    }
    
    @staticmethod
    def to_hex(rgb):
        \"\"\"Convert RGB tuple to hex string\"\"\"
        return f"#{rgb.red:02x}{rgb.green:02x}{rgb.blue:02x}"
    
    @staticmethod
    def from_hex(hex_string):
        \"\"\"Convert hex string to RGB tuple\"\"\"
        hex_string = hex_string.lstrip("#")
        r = int(hex_string[0:2], 16)
        g = int(hex_string[2:4], 16)
        b = int(hex_string[4:6], 16)
        return RGB(r, g, b)
    
    @staticmethod
    def blend(color1, color2, ratio=0.5):
        \"\"\"Blend two colors\"\"\"
        r = int(color1.red * (1-ratio) + color2.red * ratio)
        g = int(color1.green * (1-ratio) + color2.green * ratio)
        b = int(color1.blue * (1-ratio) + color2.blue * ratio)
        return RGB(r, g, b)
    
    @staticmethod
    def brightness(rgb):
        \"\"\"Calculate brightness (0-255)\"\"\"
        return (rgb.red + rgb.green + rgb.blue) // 3
    
    @staticmethod
    def is_dark(rgb):
        \"\"\"Check if color is dark\"\"\"
        return ColorPalette.brightness(rgb) < 128

# Usage
palette = ColorPalette()

# Get colors
red = palette.COLORS["red"]
blue = palette.COLORS["blue"]

print(f"Red: {red}")  # RGB(red=255, green=0, blue=0)
print(f"Hex: {palette.to_hex(red)}")  # #ff0000

# Blend colors
purple = palette.blend(red, blue)
print(f"Red + Blue = {purple}")  # RGB(red=127, green=0, blue=127)

# From hex
custom = palette.from_hex("#FF6B35")
print(f"Custom color: {custom}")

# Check brightness
print(f"Is black dark? {palette.is_dark(palette.COLORS['black'])}")  # True
print(f"Is white dark? {palette.is_dark(palette.COLORS['white'])}")  # False</code></pre>

<div class="tip-box">
<strong>💡 Best Practices:</strong>
<ul>
<li>Use tuples for fixed data (coordinates, colors, configs)</li>
<li>Use named tuples for better readability</li>
<li>Return multiple values from functions as tuples</li>
<li>Use tuples as dictionary keys (lists can't be keys)</li>
<li>Use tuple unpacking for cleaner code</li>
</ul>
</div>

<div class="warning-box">
<strong>⚠️ Common Mistakes:</strong>
<ul>
<li>Forgetting comma in single-element tuple: <code>(42,)</code> not <code>(42)</code></li>
<li>Trying to modify tuple elements (immutable!)</li>
<li>Confusing tuple unpacking order</li>
<li>Using index() without checking if element exists</li>
</ul>
</div>`,
                video: "https://www.youtube.com/embed/sI2zE-w8N-8"
            },
            {
                name: "Dictionaries",
                notes: `<h3>📚 Understanding Dictionaries in Python</h3>
<p>A <strong>dictionary</strong> is a collection of <strong>key-value pairs</strong>. Each key is unique and maps to a specific value. Dictionaries are incredibly useful for storing related data together - like a real dictionary where words (keys) map to definitions (values)!</p>

<p>Think of a dictionary like a phone book: the person's name is the <strong>key</strong>, and their phone number is the <strong>value</strong>. You look up the name to find the number!</p>

<h3>📚 Dictionary Examples - 12 Detailed Examples</h3>
<pre><code># Example 1: Creating Dictionaries
# Using curly braces
student = {
    "name": "Rahul Sharma",
    "age": 20,
    "grade": "A",
    "subjects": ["Math", "Science", "English"]
}

# Using dict() constructor
person = dict(name="Priya", age=25, city="Mumbai")

# Empty dictionary
empty = {}
also_empty = dict()

# From list of tuples
pairs = [("a", 1), ("b", 2), ("c", 3)]
letters = dict(pairs)  # {'a': 1, 'b': 2, 'c': 3}

# Example 2: Accessing Values
student = {"name": "Rahul", "age": 20, "grade": "A"}

# Using brackets (raises error if not found)
print(student["name"])  # "Rahul"

# Using get() (returns None or default if not found)
print(student.get("email"))  # None
print(student.get("email", "N/A"))  # "N/A"

# Access nested data
profile = {
    "user": {"name": "Rahul", "age": 20},
    "settings": {"theme": "dark", "language": "en"}
}
print(profile["user"]["name"])  # "Rahul"

# Example 3: Adding and Updating
user = {"name": "Rahul"}

# Add new key-value
user["email"] = "rahul@email.com"
user["age"] = 25
print(user)  # {'name': 'Rahul', 'email': 'rahul@email.com', 'age': 25}

# Update existing value
user["age"] = 26

# Update multiple at once
user.update({"city": "Mumbai", "phone": "9876543210"})

# Using setdefault (add only if not exists)
user.setdefault("country", "India")  # Added
user.setdefault("name", "Test")  # NOT changed (already exists)

# Example 4: Removing Items
data = {"a": 1, "b": 2, "c": 3, "d": 4}

# Using del
del data["a"]
print(data)  # {'b': 2, 'c': 3, 'd': 4}

# Using pop (returns the value)
value = data.pop("b")
print(value)  # 2
print(data)  # {'c': 3, 'd': 4}

# Using pop with default (no error if missing)
value = data.pop("x", "not found")
print(value)  # "not found"

# Remove last item (Python 3.7+)
last = data.popitem()
print(last)  # ('d', 4)

# Clear all
data.clear()
print(data)  # {}

# Example 5: Iterating Over Dictionaries
student = {"name": "Rahul", "age": 20, "grade": "A"}

# Keys only
for key in student:
    print(key)  # name, age, grade

# Using .keys() explicitly
for key in student.keys():
    print(key)

# Values only
for value in student.values():
    print(value)  # Rahul, 20, A

# Both key and value
for key, value in student.items():
    print(f"{key}: {value}")
# name: Rahul
# age: 20
# grade: A

# Example 6: Checking Existence
user = {"name": "Rahul", "email": "rahul@email.com"}

# Check if key exists
if "name" in user:
    print("Name exists!")

if "phone" not in user:
    print("Phone not found!")

# Check if value exists
if "Rahul" in user.values():
    print("Rahul is a value!")

# Example 7: Dictionary Comprehension
# Create from list
numbers = [1, 2, 3, 4, 5]
squares = {x: x**2 for x in numbers}
print(squares)  # {1: 1, 2: 4, 3: 9, 4: 16, 5: 25}

# With condition
even_squares = {x: x**2 for x in numbers if x % 2 == 0}
print(even_squares)  # {2: 4, 4: 16}

# Transform existing dictionary
grades = {"Rahul": 85, "Priya": 92, "Amit": 78}
passed = {name: grade for name, grade in grades.items() if grade >= 80}
print(passed)  # {'Rahul': 85, 'Priya': 92}

# Example 8: Merging Dictionaries
dict1 = {"a": 1, "b": 2}
dict2 = {"c": 3, "d": 4}

# Python 3.9+ using |
merged = dict1 | dict2
print(merged)  # {'a': 1, 'b': 2, 'c': 3, 'd': 4}

# Using ** unpacking (works in older Python)
merged = {**dict1, **dict2}

# Using update (modifies original)
dict1.update(dict2)

# Example 9: Nested Dictionaries
school = {
    "class_10": {
        "students": 45,
        "subjects": ["Math", "Science", "English"],
        "topper": {"name": "Priya", "marks": 98}
    },
    "class_12": {
        "students": 40,
        "subjects": ["Physics", "Chemistry", "Math"],
        "topper": {"name": "Rahul", "marks": 95}
    }
}

# Access nested data
print(school["class_10"]["topper"]["name"])  # "Priya"

# Example 10: Default Values with defaultdict
from collections import defaultdict

# Regular dict - KeyError if missing
regular = {}
# regular["missing"]  # KeyError!

# defaultdict - returns default for missing keys
word_count = defaultdict(int)  # Default is 0
word_count["hello"] += 1
word_count["world"] += 1
word_count["hello"] += 1
print(dict(word_count))  # {'hello': 2, 'world': 1}

# defaultdict with list
groups = defaultdict(list)
groups["fruits"].append("apple")
groups["fruits"].append("banana")
groups["vegetables"].append("carrot")
print(dict(groups))

# Example 11: Counting with Counter
from collections import Counter

text = "hello world"
letter_count = Counter(text)
print(letter_count)  # Counter({'l': 3, 'o': 2, ...})
print(letter_count.most_common(3))  # Top 3 most common

votes = ["A", "B", "A", "C", "A", "B"]
vote_count = Counter(votes)
print(vote_count)  # Counter({'A': 3, 'B': 2, 'C': 1})

# Example 12: Sorting Dictionaries
scores = {"Rahul": 85, "Priya": 92, "Amit": 78, "Sneha": 88}

# Sort by keys
sorted_by_key = dict(sorted(scores.items()))
print(sorted_by_key)

# Sort by values
sorted_by_value = dict(sorted(scores.items(), key=lambda x: x[1]))
print(sorted_by_value)

# Sort by values descending (highest first)
top_scores = dict(sorted(scores.items(), key=lambda x: x[1], reverse=True))
print(top_scores)  # {'Priya': 92, 'Sneha': 88, 'Rahul': 85, 'Amit': 78}</code></pre>

<h3>📋 Dictionary Methods Reference</h3>
<table>
<tr><th>Method</th><th>Description</th><th>Example</th></tr>
<tr><td><code>get(key, default)</code></td><td>Get value safely</td><td><code>d.get("name", "N/A")</code></td></tr>
<tr><td><code>keys()</code></td><td>Get all keys</td><td><code>list(d.keys())</code></td></tr>
<tr><td><code>values()</code></td><td>Get all values</td><td><code>list(d.values())</code></td></tr>
<tr><td><code>items()</code></td><td>Get key-value pairs</td><td><code>for k,v in d.items()</code></td></tr>
<tr><td><code>update(dict2)</code></td><td>Merge dictionaries</td><td><code>d.update({"a": 1})</code></td></tr>
<tr><td><code>pop(key)</code></td><td>Remove and return</td><td><code>d.pop("name")</code></td></tr>
<tr><td><code>setdefault()</code></td><td>Set if missing</td><td><code>d.setdefault("x", 0)</code></td></tr>
<tr><td><code>clear()</code></td><td>Remove all items</td><td><code>d.clear()</code></td></tr>
<tr><td><code>copy()</code></td><td>Shallow copy</td><td><code>new = d.copy()</code></td></tr>
</table>

<h3>🌟 Real-Life Story: Building a Student Database</h3>
<p><em>Imagine you're building a student information system for a school. Dictionaries are perfect for storing student records:</em></p>

<pre><code># Complete Student Database System
class StudentDatabase:
    def __init__(self):
        self.students = {}
        self.next_id = 1
    
    def add_student(self, name, age, grade, subjects):
        \"\"\"Add a new student\"\"\"
        student_id = f"STU{self.next_id:04d}"
        self.students[student_id] = {
            "name": name,
            "age": age,
            "grade": grade,
            "subjects": subjects,
            "marks": {},
            "attendance": 0
        }
        self.next_id += 1
        print(f"✅ Added student: {name} (ID: {student_id})")
        return student_id
    
    def add_marks(self, student_id, subject, marks):
        \"\"\"Add marks for a student\"\"\"
        if student_id not in self.students:
            print(f"❌ Student {student_id} not found!")
            return
        
        student = self.students[student_id]
        if subject not in student["subjects"]:
            print(f"❌ {subject} is not enrolled!")
            return
        
        student["marks"][subject] = marks
        print(f"✅ Added {marks} marks in {subject}")
    
    def get_student(self, student_id):
        \"\"\"Get student details\"\"\"
        return self.students.get(student_id)
    
    def search_by_name(self, name):
        \"\"\"Search students by name\"\"\"
        results = []
        for sid, data in self.students.items():
            if name.lower() in data["name"].lower():
                results.append((sid, data))
        return results
    
    def get_toppers(self, n=3):
        \"\"\"Get top n students by average marks\"\"\"
        averages = {}
        
        for sid, data in self.students.items():
            if data["marks"]:
                avg = sum(data["marks"].values()) / len(data["marks"])
                averages[sid] = avg
        
        sorted_students = sorted(averages.items(), 
                                key=lambda x: x[1], 
                                reverse=True)[:n]
        
        toppers = []
        for sid, avg in sorted_students:
            toppers.append({
                "id": sid,
                "name": self.students[sid]["name"],
                "average": avg
            })
        return toppers
    
    def print_report(self, student_id):
        \"\"\"Print student report card\"\"\"
        student = self.students.get(student_id)
        if not student:
            print(f"❌ Student not found!")
            return
        
        print("\\n" + "=" * 50)
        print(f"📋 STUDENT REPORT CARD")
        print("=" * 50)
        print(f"ID: {student_id}")
        print(f"Name: {student['name']}")
        print(f"Age: {student['age']}")
        print(f"Grade: {student['grade']}")
        print("-" * 50)
        print("MARKS:")
        
        total = 0
        for subject, marks in student["marks"].items():
            status = "✅" if marks >= 40 else "❌"
            print(f"  {status} {subject}: {marks}/100")
            total += marks
        
        if student["marks"]:
            avg = total / len(student["marks"])
            print("-" * 50)
            print(f"Total: {total}")
            print(f"Average: {avg:.1f}%")
            
            if avg >= 90:
                print("🏆 Grade: A+ (Outstanding!)")
            elif avg >= 80:
                print("⭐ Grade: A (Excellent!)")
            elif avg >= 70:
                print("📚 Grade: B (Very Good)")
            elif avg >= 60:
                print("👍 Grade: C (Good)")
            else:
                print("📖 Grade: D (Need Improvement)")
        
        print("=" * 50)

# Usage
db = StudentDatabase()

# Add students
id1 = db.add_student("Rahul Sharma", 16, "10th", ["Math", "Science", "English"])
id2 = db.add_student("Priya Patel", 16, "10th", ["Math", "Science", "Hindi"])

# Add marks
db.add_marks(id1, "Math", 92)
db.add_marks(id1, "Science", 88)
db.add_marks(id1, "English", 85)

db.add_marks(id2, "Math", 95)
db.add_marks(id2, "Science", 91)
db.add_marks(id2, "Hindi", 89)

# Print report
db.print_report(id1)

# Get toppers
print("\\n🏆 Top Students:")
for topper in db.get_toppers():
    print(f"  {topper['name']}: {topper['average']:.1f}%")</code></pre>

<div class="tip-box">
<strong>💡 Best Practices:</strong>
<ul>
<li>Use <code>.get()</code> instead of <code>[]</code> to avoid KeyError</li>
<li>Use <code>defaultdict</code> when you need default values</li>
<li>Use <code>Counter</code> for counting occurrences</li>
<li>Use dictionary comprehensions for transformations</li>
<li>Remember: keys must be immutable (strings, numbers, tuples)</li>
</ul>
</div>

<div class="warning-box">
<strong>⚠️ Common Mistakes:</strong>
<ul>
<li>Using <code>[]</code> on missing key (raises KeyError) - use <code>.get()</code></li>
<li>Using mutable objects (lists, dicts) as keys - not allowed!</li>
<li>Modifying dict while iterating - make a copy first</li>
<li>Forgetting that dict order is preserved only in Python 3.7+</li>
</ul>
</div>`,
                video: "https://www.youtube.com/embed/yW6dJ9YvI4c"
            },
            {
                name: "Sets",
                notes: `<h3>🎯 Understanding Sets in Python</h3>
<p>A <strong>set</strong> is an unordered collection of <strong>unique elements</strong>. Sets automatically remove duplicates and are perfect for membership testing, removing duplicates from lists, and mathematical set operations (union, intersection, etc.).</p>

<p>Think of a set like a bag of unique marbles: no matter how many times you try to add the same color, you'll only have one of each color in the bag!</p>

<h3>📚 Set Examples - 10 Detailed Examples</h3>
<pre><code># Example 1: Creating Sets
# Using curly braces
fruits = {"apple", "banana", "cherry"}
numbers = {1, 2, 3, 4, 5}

# Duplicates are automatically removed!
duplicates = {1, 2, 2, 3, 3, 3, 4}
print(duplicates)  # {1, 2, 3, 4}

# From list (removes duplicates)
my_list = [1, 2, 2, 3, 3, 3]
unique = set(my_list)
print(unique)  # {1, 2, 3}

# Empty set (NOT {} - that's a dict!)
empty = set()

# From string (each character)
chars = set("hello")
print(chars)  # {'h', 'e', 'l', 'o'}

# Example 2: Adding and Removing Elements
colors = {"red", "green", "blue"}

# Add single element
colors.add("yellow")
print(colors)  # {'red', 'green', 'blue', 'yellow'}

# Add multiple elements
colors.update(["purple", "orange"])
colors.update({"pink", "cyan"})

# Remove element (raises error if not found)
colors.remove("red")

# Discard (no error if not found - SAFER!)
colors.discard("purple")
colors.discard("nonexistent")  # No error

# Pop (remove random element)
random_color = colors.pop()
print(f"Removed: {random_color}")

# Clear all
# colors.clear()

# Example 3: Set Operations (Mathematical)
a = {1, 2, 3, 4, 5}
b = {4, 5, 6, 7, 8}

# Union (all elements from both) - A ∪ B
union = a | b
union2 = a.union(b)
print(union)  # {1, 2, 3, 4, 5, 6, 7, 8}

# Intersection (common elements) - A ∩ B
intersection = a & b
intersection2 = a.intersection(b)
print(intersection)  # {4, 5}

# Difference (in a but not in b) - A - B
difference = a - b
difference2 = a.difference(b)
print(difference)  # {1, 2, 3}

# Symmetric Difference (in a or b but not both) - A △ B
sym_diff = a ^ b
sym_diff2 = a.symmetric_difference(b)
print(sym_diff)  # {1, 2, 3, 6, 7, 8}

# Example 4: Set Comparisons
a = {1, 2, 3}
b = {1, 2, 3, 4, 5}
c = {1, 2, 3}
d = {10, 20}

# Subset (all elements of a are in b)
print(a.issubset(b))     # True
print(a <= b)            # True

# Superset (a contains all elements of c)
print(b.issuperset(a))   # True
print(b >= a)            # True

# Disjoint (no common elements)
print(a.isdisjoint(d))   # True

# Equality
print(a == c)            # True

# Example 5: Membership Testing (Super Fast!)
# Sets use hash tables - O(1) lookup!
huge_set = set(range(1000000))
huge_list = list(range(1000000))

# Set lookup is INSTANT
print(999999 in huge_set)   # True (very fast!)

# List lookup is SLOW
# print(999999 in huge_list)  # True (but much slower)

# Example 6: Remove Duplicates from List
names = ["Rahul", "Priya", "Amit", "Rahul", "Priya", "Sneha"]

# Remove duplicates (order not preserved)
unique_names = list(set(names))
print(unique_names)  # ['Rahul', 'Priya', 'Amit', 'Sneha']

# Remove duplicates (preserve order - Python 3.7+)
unique_ordered = list(dict.fromkeys(names))
print(unique_ordered)  # ['Rahul', 'Priya', 'Amit', 'Sneha']

# Example 7: Frozen Sets (Immutable Sets)
# Can be used as dict keys or in other sets
frozen = frozenset([1, 2, 3])
# frozen.add(4)  # Error! Can't modify

# Use as dict key
permissions = {
    frozenset(["read"]): "Guest",
    frozenset(["read", "write"]): "User",
    frozenset(["read", "write", "admin"]): "Admin"
}

user_perms = frozenset(["read", "write"])
print(permissions[user_perms])  # "User"

# Example 8: Set Comprehension
# Create set of squares
squares = {x**2 for x in range(10)}
print(squares)  # {0, 1, 4, 9, 16, 25, 36, 49, 64, 81}

# With condition
even_squares = {x**2 for x in range(10) if x % 2 == 0}
print(even_squares)  # {0, 4, 16, 36, 64}

# Unique first letters
names = ["Alice", "Bob", "Anna", "Charlie", "Carol"]
first_letters = {name[0] for name in names}
print(first_letters)  # {'A', 'B', 'C'}

# Example 9: Practical - Find Common/Different
# Student enrollments
math_students = {"Rahul", "Priya", "Amit", "Sneha"}
science_students = {"Priya", "Amit", "Vijay", "Riya"}
english_students = {"Rahul", "Sneha", "Riya", "Kavita"}

# Students in all three
all_three = math_students & science_students & english_students
print(f"All 3 subjects: {all_three}")

# Students only in math
only_math = math_students - science_students - english_students
print(f"Only Math: {only_math}")

# Students in at least one
at_least_one = math_students | science_students | english_students
print(f"At least one: {at_least_one}")

# Example 10: Update Operations (In-Place)
a = {1, 2, 3}
b = {3, 4, 5}

# Update (union in-place)
a_copy = a.copy()
a_copy.update(b)  # Same as a_copy |= b
print(a_copy)  # {1, 2, 3, 4, 5}

# Intersection update
a_copy = a.copy()
a_copy.intersection_update(b)  # Same as a_copy &= b
print(a_copy)  # {3}

# Difference update
a_copy = a.copy()
a_copy.difference_update(b)  # Same as a_copy -= b
print(a_copy)  # {1, 2}</code></pre>

<h3>📋 Set Operations Reference</h3>
<table>
<tr><th>Operation</th><th>Operator</th><th>Method</th><th>Description</th></tr>
<tr><td>Union</td><td><code>a | b</code></td><td><code>a.union(b)</code></td><td>All elements from both</td></tr>
<tr><td>Intersection</td><td><code>a & b</code></td><td><code>a.intersection(b)</code></td><td>Common elements</td></tr>
<tr><td>Difference</td><td><code>a - b</code></td><td><code>a.difference(b)</code></td><td>In a but not b</td></tr>
<tr><td>Symmetric Diff</td><td><code>a ^ b</code></td><td><code>a.symmetric_difference(b)</code></td><td>In a or b, not both</td></tr>
<tr><td>Subset</td><td><code>a <= b</code></td><td><code>a.issubset(b)</code></td><td>All of a in b?</td></tr>
<tr><td>Superset</td><td><code>a >= b</code></td><td><code>a.issuperset(b)</code></td><td>All of b in a?</td></tr>
<tr><td>Disjoint</td><td>-</td><td><code>a.isdisjoint(b)</code></td><td>No common elements?</td></tr>
</table>

<h3>🌟 Real-Life Story: Website Visitor Analytics</h3>
<p><em>Imagine you're building an analytics system to track unique website visitors. Sets are perfect for this:</em></p>

<pre><code># Website Visitor Analytics using Sets
from datetime import datetime, timedelta

class VisitorAnalytics:
    def __init__(self):
        self.daily_visitors = {}  # {date: set of IPs}
        self.page_visitors = {}   # {page: set of IPs}
    
    def log_visit(self, ip, page, date=None):
        \"\"\"Log a visitor\"\"\"
        date = date or datetime.now().date()
        
        # Track daily visitors
        if date not in self.daily_visitors:
            self.daily_visitors[date] = set()
        self.daily_visitors[date].add(ip)
        
        # Track page visitors
        if page not in self.page_visitors:
            self.page_visitors[page] = set()
        self.page_visitors[page].add(ip)
    
    def unique_visitors(self, date):
        \"\"\"Get unique visitors for a date\"\"\"
        return len(self.daily_visitors.get(date, set()))
    
    def total_unique_visitors(self):
        \"\"\"Get all-time unique visitors\"\"\"
        all_visitors = set()
        for visitors in self.daily_visitors.values():
            all_visitors |= visitors  # Union
        return len(all_visitors)
    
    def common_visitors(self, page1, page2):
        \"\"\"Find visitors who visited both pages\"\"\"
        v1 = self.page_visitors.get(page1, set())
        v2 = self.page_visitors.get(page2, set())
        return v1 & v2  # Intersection
    
    def only_visited(self, target_page, other_pages):
        \"\"\"Find visitors who only visited target page\"\"\"
        target = self.page_visitors.get(target_page, set())
        others = set()
        for page in other_pages:
            others |= self.page_visitors.get(page, set())
        return target - others  # Difference
    
    def retention_rate(self, date1, date2):
        \"\"\"Calculate visitor retention between dates\"\"\"
        v1 = self.daily_visitors.get(date1, set())
        v2 = self.daily_visitors.get(date2, set())
        
        if not v1:
            return 0
        
        retained = v1 & v2
        return len(retained) / len(v1) * 100
    
    def report(self):
        \"\"\"Generate analytics report\"\"\"
        print("\\n" + "=" * 50)
        print("📊 VISITOR ANALYTICS REPORT")
        print("=" * 50)
        
        print(f"\\n📅 Daily Unique Visitors:")
        for date, visitors in sorted(self.daily_visitors.items()):
            print(f"  {date}: {len(visitors)} visitors")
        
        print(f"\\n📄 Page Unique Visitors:")
        for page, visitors in self.page_visitors.items():
            print(f"  {page}: {len(visitors)} visitors")
        
        print(f"\\n🌐 Total Unique Visitors: {self.total_unique_visitors()}")
        print("=" * 50)

# Usage
analytics = VisitorAnalytics()

# Simulate visitor logs
from datetime import date
today = date.today()
yesterday = today - timedelta(days=1)

# Yesterday's visitors
analytics.log_visit("192.168.1.1", "/home", yesterday)
analytics.log_visit("192.168.1.2", "/home", yesterday)
analytics.log_visit("192.168.1.1", "/about", yesterday)
analytics.log_visit("192.168.1.3", "/products", yesterday)

# Today's visitors
analytics.log_visit("192.168.1.1", "/home", today)  # Returning visitor
analytics.log_visit("192.168.1.4", "/home", today)  # New visitor
analytics.log_visit("192.168.1.2", "/products", today)

# Generate report
analytics.report()

# Analytics queries
print(f"\\nRetention: {analytics.retention_rate(yesterday, today):.1f}%")
print(f"Common (home & products): {analytics.common_visitors('/home', '/products')}")</code></pre>

<div class="tip-box">
<strong>💡 Best Practices:</strong>
<ul>
<li>Use sets for membership testing (O(1) lookup - very fast!)</li>
<li>Use sets to remove duplicates from lists</li>
<li>Use <code>discard()</code> instead of <code>remove()</code> to avoid errors</li>
<li>Use frozenset for immutable sets (can be dict keys)</li>
<li>Use set operations for comparing collections</li>
</ul>
</div>

<div class="warning-box">
<strong>⚠️ Common Mistakes:</strong>
<ul>
<li>Using <code>{}</code> for empty set (that's a dict!) - use <code>set()</code></li>
<li>Expecting sets to be ordered (they're not!)</li>
<li>Using <code>remove()</code> on missing element (raises KeyError)</li>
<li>Trying to add mutable items (lists, dicts) to sets</li>
</ul>
</div>`,
                video: "https://www.youtube.com/embed/qHJjMvHLJdg"
            },
            {
                name: "List Comprehensions",
                notes: `<h3>⚡ Understanding Comprehensions in Python</h3>
<p>A <strong>comprehension</strong> is a concise, elegant way to create lists, sets, or dictionaries in a single line. They're one of Python's most powerful features - more readable than loops and often faster!</p>

<p>Think of comprehensions as a formula: "Give me [this expression] for [each item] in [this collection] if [condition is met]"</p>

<h3>📚 Comprehension Examples - 12 Detailed Examples</h3>
<pre><code># Example 1: Basic List Comprehension
# Traditional for loop
squares = []
for x in range(10):
    squares.append(x ** 2)

# Comprehension (SAME result, ONE line!)
squares = [x ** 2 for x in range(10)]
print(squares)  # [0, 1, 4, 9, 16, 25, 36, 49, 64, 81]

# Example 2: With Condition (Filter)
# Only even numbers
evens = [x for x in range(20) if x % 2 == 0]
print(evens)  # [0, 2, 4, 6, 8, 10, 12, 14, 16, 18]

# Numbers greater than 5
filtered = [x for x in range(10) if x > 5]
print(filtered)  # [6, 7, 8, 9]

# Even squares
even_squares = [x**2 for x in range(10) if x % 2 == 0]
print(even_squares)  # [0, 4, 16, 36, 64]

# Example 3: If-Else in Comprehension
# Classify numbers
labels = ["Even" if x % 2 == 0 else "Odd" for x in range(5)]
print(labels)  # ['Even', 'Odd', 'Even', 'Odd', 'Even']

# Replace negative with 0
nums = [-5, 3, -2, 8, -1, 7]
positive = [x if x > 0 else 0 for x in nums]
print(positive)  # [0, 3, 0, 8, 0, 7]

# Grade classification
marks = [45, 78, 92, 33, 67, 88]
grades = ["Pass" if m >= 40 else "Fail" for m in marks]
print(grades)  # ['Pass', 'Pass', 'Pass', 'Fail', 'Pass', 'Pass']

# Example 4: Working with Strings
names = ["Rahul", "Priya", "Amit", "Sneha"]

# Uppercase all
upper = [name.upper() for name in names]
print(upper)  # ['RAHUL', 'PRIYA', 'AMIT', 'SNEHA']

# Get lengths
lengths = [len(name) for name in names]
print(lengths)  # [5, 5, 4, 5]

# First letter
initials = [name[0] for name in names]
print(initials)  # ['R', 'P', 'A', 'S']

# Names starting with 'A'
a_names = [name for name in names if name.startswith('A')]
print(a_names)  # ['Amit']

# Example 5: Nested Loops
# Flatten 2D list
matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
flat = [num for row in matrix for num in row]
print(flat)  # [1, 2, 3, 4, 5, 6, 7, 8, 9]

# All combinations
colors = ["red", "green"]
sizes = ["S", "M", "L"]
combos = [(c, s) for c in colors for s in sizes]
print(combos)
# [('red', 'S'), ('red', 'M'), ('red', 'L'), ('green', 'S'), ...]

# Multiplication table
table = [[i * j for j in range(1, 6)] for i in range(1, 6)]
for row in table:
    print(row)
# [1, 2, 3, 4, 5]
# [2, 4, 6, 8, 10]
# ...

# Example 6: Dictionary Comprehension
# Squares dict
squares_dict = {x: x**2 for x in range(6)}
print(squares_dict)  # {0: 0, 1: 1, 2: 4, 3: 9, 4: 16, 5: 25}

# From two lists
names = ["Rahul", "Priya", "Amit"]
ages = [25, 22, 28]
name_age = {name: age for name, age in zip(names, ages)}
print(name_age)  # {'Rahul': 25, 'Priya': 22, 'Amit': 28}

# Swap keys and values
original = {"a": 1, "b": 2, "c": 3}
swapped = {v: k for k, v in original.items()}
print(swapped)  # {1: 'a', 2: 'b', 3: 'c'}

# Filter dict
scores = {"Rahul": 85, "Priya": 92, "Amit": 45, "Sneha": 78}
passed = {name: score for name, score in scores.items() if score >= 50}
print(passed)  # {'Rahul': 85, 'Priya': 92, 'Sneha': 78}

# Example 7: Set Comprehension
# Unique squares
squares_set = {x**2 for x in [-3, -2, -1, 0, 1, 2, 3]}
print(squares_set)  # {0, 1, 4, 9}

# Unique first characters
words = ["apple", "banana", "apricot", "blueberry"]
first_chars = {word[0] for word in words}
print(first_chars)  # {'a', 'b'}

# Example 8: Generator Expression (Memory Efficient)
# List comprehension - stores all in memory
list_squares = [x**2 for x in range(1000000)]

# Generator - computes on-demand (lazy)
gen_squares = (x**2 for x in range(1000000))

# Use in functions directly
total = sum(x**2 for x in range(100))
print(total)  # 328350

# Example 9: Multiple Conditions
nums = range(100)

# Multiple AND conditions
filtered = [x for x in nums if x % 2 == 0 if x % 5 == 0]
print(filtered)  # [0, 10, 20, 30, 40, 50, 60, 70, 80, 90]

# Using and/or
filtered = [x for x in nums if x % 2 == 0 and x > 50]
print(filtered)  # [52, 54, 56, 58, 60, ...]

# Example 10: Practical - Data Processing
students = [
    {"name": "Rahul", "marks": 85, "subject": "Math"},
    {"name": "Priya", "marks": 92, "subject": "Science"},
    {"name": "Amit", "marks": 78, "subject": "Math"},
    {"name": "Sneha", "marks": 88, "subject": "Science"},
]

# Extract all names
names = [s["name"] for s in students]

# Get high scorers
toppers = [s["name"] for s in students if s["marks"] >= 85]

# Group by subject
math_students = [s for s in students if s["subject"] == "Math"]

# Calculate average
avg = sum(s["marks"] for s in students) / len(students)

# Example 11: Walrus Operator (Python 3.8+)
# Avoid computing twice
data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
results = [y for x in data if (y := x * 2) > 10]
print(results)  # [12, 14, 16, 18, 20]

# Example 12: Real-World - API Response Processing
users = [
    {"id": 1, "name": "Rahul", "active": True, "age": 25},
    {"id": 2, "name": "Priya", "active": False, "age": 22},
    {"id": 3, "name": "Amit", "active": True, "age": 30},
]

# Get active user IDs
active_ids = [u["id"] for u in users if u["active"]]

# Create display names
display = [f"{u['name']} ({u['age']})" for u in users]

# Convert to dict keyed by ID
by_id = {u["id"]: u for u in users}</code></pre>

<h3>📋 Comprehension Syntax Reference</h3>
<table>
<tr><th>Type</th><th>Syntax</th><th>Example</th></tr>
<tr><td><strong>List</strong></td><td><code>[expr for x in iter]</code></td><td><code>[x**2 for x in range(5)]</code></td></tr>
<tr><td><strong>List + Filter</strong></td><td><code>[expr for x in iter if cond]</code></td><td><code>[x for x in nums if x > 0]</code></td></tr>
<tr><td><strong>List + If-Else</strong></td><td><code>[a if cond else b for x]</code></td><td><code>["Yes" if x else "No" for x in items]</code></td></tr>
<tr><td><strong>Dict</strong></td><td><code>{k: v for x in iter}</code></td><td><code>{x: x**2 for x in range(5)}</code></td></tr>
<tr><td><strong>Set</strong></td><td><code>{expr for x in iter}</code></td><td><code>{x%10 for x in nums}</code></td></tr>
<tr><td><strong>Generator</strong></td><td><code>(expr for x in iter)</code></td><td><code>(x**2 for x in range(5))</code></td></tr>
</table>

<h3>🌟 Real-Life Story: Data Processing Pipeline</h3>
<p><em>Imagine you're processing e-commerce order data. Comprehensions make data transformations clean and fast:</em></p>

<pre><code># E-Commerce Data Processing with Comprehensions
from datetime import datetime, timedelta

# Sample order data
orders = [
    {"id": "ORD001", "customer": "Rahul", "amount": 2500, "status": "delivered", "date": "2024-01-15"},
    {"id": "ORD002", "customer": "Priya", "amount": 1800, "status": "pending", "date": "2024-01-16"},
    {"id": "ORD003", "customer": "Amit", "amount": 3200, "status": "delivered", "date": "2024-01-14"},
    {"id": "ORD004", "customer": "Sneha", "amount": 950, "status": "cancelled", "date": "2024-01-17"},
    {"id": "ORD005", "customer": "Rahul", "amount": 4500, "status": "delivered", "date": "2024-01-18"},
    {"id": "ORD006", "customer": "Vijay", "amount": 2100, "status": "pending", "date": "2024-01-19"},
]

# 1. Get all delivered orders
delivered = [o for o in orders if o["status"] == "delivered"]
print(f"Delivered: {len(delivered)} orders")

# 2. Get total revenue (only delivered)
revenue = sum(o["amount"] for o in orders if o["status"] == "delivered")
print(f"Revenue: ₹{revenue}")

# 3. Get unique customers
customers = {o["customer"] for o in orders}
print(f"Unique customers: {customers}")

# 4. Revenue by customer
by_customer = {}
for customer in customers:
    total = sum(o["amount"] for o in orders 
                if o["customer"] == customer and o["status"] == "delivered")
    by_customer[customer] = total
print(f"By customer: {by_customer}")

# 5. Order summary (dict comprehension)
summary = {
    o["id"]: {"customer": o["customer"], "amount": o["amount"]}
    for o in orders
    if o["status"] != "cancelled"
}

# 6. Categorize orders
categories = [
    "Small" if o["amount"] < 1500 else 
    "Medium" if o["amount"] < 3000 else 
    "Large" 
    for o in orders
]
print(f"Categories: {categories}")

# 7. High value orders
high_value = [
    f"{o['id']} - {o['customer']} - ₹{o['amount']}"
    for o in orders
    if o["amount"] > 2000 and o["status"] == "delivered"
]
print("High value orders:")
for order in high_value:
    print(f"  {order}")

# 8. Order count by status
status_counts = {
    status: len([o for o in orders if o["status"] == status])
    for status in {o["status"] for o in orders}
}
print(f"Status counts: {status_counts}")</code></pre>

<div class="tip-box">
<strong>💡 Best Practices:</strong>
<ul>
<li>Keep comprehensions simple - if it's hard to read, use a loop</li>
<li>Use generator expressions <code>()</code> for large datasets (memory efficient)</li>
<li>Break complex comprehensions into multiple steps</li>
<li>Use meaningful variable names even in comprehensions</li>
<li>Comprehensions are often faster than equivalent loops</li>
</ul>
</div>

<div class="warning-box">
<strong>⚠️ Common Mistakes:</strong>
<ul>
<li>Making comprehensions too complex (hard to read)</li>
<li>Forgetting that if-else goes BEFORE for, filter goes AFTER</li>
<li>Using list comprehension when generator is better (memory)</li>
<li>Nested comprehensions that are confusing - use loops instead</li>
</ul>
</div>`,
                video: "https://www.youtube.com/embed/qHJjMvHLJdg"
            }
        ]
    },
    {
        id: 5,
        title: "Object-Oriented Programming",
        icon: "🏗️",
        time: "Week 5-6",
        subtopics: [
            {
                name: "Classes & Objects",
                notes: `<h3>🏗️ Understanding Object-Oriented Programming (OOP)</h3>
<p>Object-Oriented Programming is a programming paradigm that organizes code around "objects" rather than functions and logic. Think of it like this: in the real world, everything is an object - your phone, your car, your bank account. Each object has properties (attributes) and behaviors (methods). OOP allows us to model real-world entities in our code in a natural, intuitive way.</p>

<p>The four pillars of OOP are: <strong>Encapsulation</strong> (bundling data and methods), <strong>Abstraction</strong> (hiding complex details), <strong>Inheritance</strong> (creating new classes from existing ones), and <strong>Polymorphism</strong> (using a single interface for different types). Mastering these concepts will make you a significantly better programmer.</p>

<h3>📦 Classes and Objects - The Blueprint Analogy</h3>
<p>A <strong>class</strong> is like a blueprint or template. It defines what properties and behaviors an object will have. An <strong>object</strong> is an instance of a class - the actual thing built from the blueprint. For example, "Car" is a class, but "my red Honda Civic with license plate MH-12-AB-1234" is an object.</p>

<h3>🔨 Creating Classes - 10 Detailed Examples</h3>
<pre><code># Example 1: Basic Class with Constructor
class Student:
    def __init__(self, name, roll_number):
        self.name = name
        self.roll_number = roll_number
    
    def introduce(self):
        return f"Hi, I'm {self.name}, Roll No: {self.roll_number}"

# Creating objects
rahul = Student("Rahul Sharma", 101)
priya = Student("Priya Singh", 102)
print(rahul.introduce())  # Hi, I'm Rahul Sharma, Roll No: 101

# Example 2: Class with Multiple Methods
class Calculator:
    def __init__(self):
        self.result = 0
    
    def add(self, num):
        self.result += num
        return self
    
    def subtract(self, num):
        self.result -= num
        return self
    
    def multiply(self, num):
        self.result *= num
        return self
    
    def get_result(self):
        return self.result

calc = Calculator()
calc.add(10).add(5).multiply(2)  # Method chaining!
print(calc.get_result())  # 30

# Example 3: Class Attributes vs Instance Attributes
class Employee:
    # Class attribute - shared by all instances
    company_name = "TechCorp India"
    employee_count = 0
    
    def __init__(self, name, salary):
        # Instance attributes - unique to each object
        self.name = name
        self.salary = salary
        Employee.employee_count += 1
    
    def get_info(self):
        return f"{self.name} works at {Employee.company_name}"

emp1 = Employee("Amit", 50000)
emp2 = Employee("Sneha", 60000)
print(Employee.employee_count)  # 2 (class attribute)
print(emp1.company_name)  # TechCorp India

# Example 4: Class with Default Values
class Product:
    def __init__(self, name, price, quantity=1, discount=0):
        self.name = name
        self.price = price
        self.quantity = quantity
        self.discount = discount
    
    def get_total(self):
        total = self.price * self.quantity
        return total - (total * self.discount / 100)

laptop = Product("MacBook Pro", 150000, 1, 10)
print(laptop.get_total())  # 135000.0

# Example 5: String Representation Methods
class Book:
    def __init__(self, title, author, pages):
        self.title = title
        self.author = author
        self.pages = pages
    
    def __str__(self):  # For users (print)
        return f"'{self.title}' by {self.author}"
    
    def __repr__(self):  # For developers (debugging)
        return f"Book('{self.title}', '{self.author}', {self.pages})"

book = Book("Python Crash Course", "Eric Matthes", 544)
print(book)       # 'Python Crash Course' by Eric Matthes
print(repr(book)) # Book('Python Crash Course', 'Eric Matthes', 544)

# Example 6: Class with Validation
class Age:
    def __init__(self, years):
        if years < 0:
            raise ValueError("Age cannot be negative!")
        if years > 150:
            raise ValueError("Age seems unrealistic!")
        self.years = years
    
    def is_adult(self):
        return self.years >= 18

person_age = Age(25)
print(person_age.is_adult())  # True

# Example 7: Class with Class Methods
class BankAccount:
    interest_rate = 0.04  # 4% annual interest
    
    def __init__(self, holder_name, balance=0):
        self.holder_name = holder_name
        self.balance = balance
    
    @classmethod
    def set_interest_rate(cls, rate):
        cls.interest_rate = rate
    
    @classmethod
    def from_string(cls, data_string):
        # Alternative constructor
        name, balance = data_string.split(",")
        return cls(name, float(balance))

# Using class method
BankAccount.set_interest_rate(0.05)  # Change for all accounts
acc = BankAccount.from_string("Rahul,50000")
print(acc.holder_name, acc.balance)  # Rahul 50000.0

# Example 8: Static Methods
class MathUtils:
    @staticmethod
    def is_prime(n):
        if n < 2:
            return False
        for i in range(2, int(n**0.5) + 1):
            if n % i == 0:
                return False
        return True
    
    @staticmethod
    def factorial(n):
        if n <= 1:
            return 1
        return n * MathUtils.factorial(n - 1)

print(MathUtils.is_prime(17))  # True
print(MathUtils.factorial(5))  # 120

# Example 9: Comparing Objects
class Point:
    def __init__(self, x, y):
        self.x = x
        self.y = y
    
    def __eq__(self, other):
        return self.x == other.x and self.y == other.y
    
    def __lt__(self, other):
        # Compare by distance from origin
        return (self.x**2 + self.y**2) < (other.x**2 + other.y**2)

p1 = Point(3, 4)
p2 = Point(3, 4)
p3 = Point(5, 5)
print(p1 == p2)  # True
print(p1 < p3)   # True (5 < 7.07)

# Example 10: Complete Real-World Class
class ShoppingCart:
    def __init__(self, customer_name):
        self.customer_name = customer_name
        self.items = []
        self.discount_code = None
    
    def add_item(self, name, price, quantity=1):
        self.items.append({
            "name": name,
            "price": price,
            "quantity": quantity
        })
    
    def remove_item(self, name):
        self.items = [item for item in self.items if item["name"] != name]
    
    def apply_discount(self, code):
        valid_codes = {"SAVE10": 10, "SAVE20": 20, "SAVE50": 50}
        if code in valid_codes:
            self.discount_code = code
            return f"Discount applied: {valid_codes[code]}% off!"
        return "Invalid discount code"
    
    def get_subtotal(self):
        return sum(item["price"] * item["quantity"] for item in self.items)
    
    def get_total(self):
        subtotal = self.get_subtotal()
        if self.discount_code:
            discounts = {"SAVE10": 10, "SAVE20": 20, "SAVE50": 50}
            discount_percent = discounts[self.discount_code]
            return subtotal * (1 - discount_percent / 100)
        return subtotal
    
    def __str__(self):
        return f"Cart for {self.customer_name}: {len(self.items)} items, Total: ₹{self.get_total():.2f}"

cart = ShoppingCart("Priya")
cart.add_item("Phone", 25000)
cart.add_item("Case", 500, 2)
cart.apply_discount("SAVE10")
print(cart)  # Cart for Priya: 2 items, Total: ₹23400.00</code></pre>

<h3>🌟 Real-Life Story: Building a Banking System</h3>
<p><em>Let's see how a real bank might use OOP to manage customer accounts:</em></p>

<p>Meet Vikram, a software developer at a digital bank. His task is to create a system that manages customer accounts. Here's how he uses classes:</p>

<pre><code># Real Banking System Using OOP

class BankAccount:
    # Class attribute - same for all accounts
    bank_name = "Digital Bank of India"
    total_accounts = 0
    
    def __init__(self, holder_name, initial_deposit=0, account_type="Savings"):
        # Generate unique account number
        BankAccount.total_accounts += 1
        self.account_number = f"DBI{BankAccount.total_accounts:06d}"
        
        # Instance attributes
        self.holder_name = holder_name
        self.balance = initial_deposit
        self.account_type = account_type
        self.transactions = []
        self.is_active = True
        
        # Record opening transaction
        if initial_deposit > 0:
            self._record_transaction("DEPOSIT", initial_deposit, "Account Opening")
    
    def deposit(self, amount, description="Cash Deposit"):
        if amount <= 0:
            return "❌ Invalid amount! Must be positive."
        
        self.balance += amount
        self._record_transaction("DEPOSIT", amount, description)
        return f"✅ ₹{amount} deposited. New balance: ₹{self.balance}"
    
    def withdraw(self, amount, description="Cash Withdrawal"):
        if amount <= 0:
            return "❌ Invalid amount!"
        if amount > self.balance:
            return f"❌ Insufficient funds! Available: ₹{self.balance}"
        
        self.balance -= amount
        self._record_transaction("WITHDRAW", amount, description)
        return f"✅ ₹{amount} withdrawn. New balance: ₹{self.balance}"
    
    def transfer(self, recipient_account, amount):
        if amount > self.balance:
            return "❌ Insufficient funds for transfer!"
        
        self.withdraw(amount, f"Transfer to {recipient_account.account_number}")
        recipient_account.deposit(amount, f"Transfer from {self.account_number}")
        return f"✅ ₹{amount} transferred to {recipient_account.holder_name}"
    
    def _record_transaction(self, trans_type, amount, description):
        from datetime import datetime
        self.transactions.append({
            "type": trans_type,
            "amount": amount,
            "description": description,
            "balance_after": self.balance,
            "timestamp": datetime.now().strftime("%Y-%m-%d %H:%M:%S")
        })
    
    def get_statement(self, last_n=5):
        print(f"\\n{'='*50}")
        print(f"Account Statement - {self.bank_name}")
        print(f"Account: {self.account_number} | Holder: {self.holder_name}")
        print(f"{'='*50}")
        
        for trans in self.transactions[-last_n:]:
            symbol = "+" if trans["type"] == "DEPOSIT" else "-"
            print(f"{trans['timestamp']} | {symbol}₹{trans['amount']} | {trans['description']}")
        
        print(f"{'='*50}")
        print(f"Current Balance: ₹{self.balance}")
    
    def __str__(self):
        return f"Account {self.account_number} | {self.holder_name} | Balance: ₹{self.balance}"

# Using the Banking System
print("=== Digital Bank of India ===\\n")

# Create accounts
rahul_acc = BankAccount("Rahul Sharma", 50000, "Savings")
priya_acc = BankAccount("Priya Singh", 75000, "Savings")

print(rahul_acc)  # Account DBI000001 | Rahul Sharma | Balance: ₹50000
print(priya_acc)  # Account DBI000002 | Priya Singh | Balance: ₹75000

# Perform transactions
print(rahul_acc.deposit(10000, "Salary Credit"))
print(rahul_acc.withdraw(5000, "ATM Withdrawal"))
print(rahul_acc.transfer(priya_acc, 15000))

# Get statement
rahul_acc.get_statement()</code></pre>

<p><strong>What Vikram learned:</strong> OOP allowed him to model real-world banking concepts naturally. Each account is an object with its own data (balance, transactions) and behaviors (deposit, withdraw, transfer). The class acts as a template, and he can create as many account objects as needed. This is exactly how real banking software works!</p>

<div class="tip-box">
<strong>💡 Understanding self:</strong>
<p><code>self</code> is a reference to the current instance of the class. When you call <code>rahul.deposit(1000)</code>, Python automatically passes <code>rahul</code> as the first argument (<code>self</code>) to the <code>deposit</code> method. This is how the method knows which object's balance to update!</p>
</div>

<div class="warning-box">
<strong>⚠️ Common OOP Mistakes:</strong>
<ul>
<li>Forgetting <code>self</code> as the first parameter in methods</li>
<li>Confusing class attributes (shared) with instance attributes (unique)</li>
<li>Not calling <code>__init__</code> when creating objects (Python does it automatically)</li>
<li>Modifying class attributes through an instance (creates a new instance attribute instead)</li>
</ul>
</div>`,
                video: "https://www.youtube.com/embed/hQ_T97aC16I"
            },
            {
                name: "Inheritance",
                notes: `<h3>🧬 Understanding Inheritance</h3>
<p>Inheritance is one of the most powerful features of OOP. It allows you to create a new class (child/derived class) based on an existing class (parent/base class). The child class inherits all the attributes and methods of the parent class and can add its own or override the parent's behavior. Think of it like genetics - a child inherits traits from parents but can also have unique characteristics.</p>

<p>Inheritance promotes code reuse and establishes a natural hierarchy between classes. For example, "Vehicle" can be a parent class, and "Car", "Motorcycle", "Truck" can be child classes that inherit common vehicle properties while adding their specific features.</p>

<h3>👨‍👩‍👧 Types of Inheritance</h3>
<ul>
<li><strong>Single Inheritance:</strong> Child inherits from one parent</li>
<li><strong>Multiple Inheritance:</strong> Child inherits from multiple parents</li>
<li><strong>Multilevel Inheritance:</strong> Child inherits from parent, which inherits from grandparent</li>
<li><strong>Hierarchical Inheritance:</strong> Multiple children inherit from one parent</li>
</ul>

<h3>🔨 Inheritance Examples - 10 Detailed Examples</h3>
<pre><code># Example 1: Basic Single Inheritance
class Animal:
    def __init__(self, name, age):
        self.name = name
        self.age = age
    
    def eat(self):
        return f"{self.name} is eating"
    
    def sleep(self):
        return f"{self.name} is sleeping"

class Dog(Animal):
    def bark(self):
        return f"{self.name} says Woof!"

# Dog inherits name, age, eat(), sleep() from Animal
tommy = Dog("Tommy", 3)
print(tommy.eat())   # Tommy is eating
print(tommy.bark())  # Tommy says Woof!

# Example 2: Method Overriding
class Bird(Animal):
    def __init__(self, name, age, can_fly=True):
        super().__init__(name, age)  # Call parent's __init__
        self.can_fly = can_fly
    
    def eat(self):  # Override parent's method
        return f"{self.name} is pecking at food"

sparrow = Bird("Sparrow", 1)
print(sparrow.eat())  # Sparrow is pecking at food (overridden)

# Example 3: Using super() Properly
class Vehicle:
    def __init__(self, brand, model, year):
        self.brand = brand
        self.model = model
        self.year = year
    
    def start(self):
        return "Vehicle starting..."

class Car(Vehicle):
    def __init__(self, brand, model, year, num_doors):
        super().__init__(brand, model, year)  # Call parent constructor
        self.num_doors = num_doors
    
    def start(self):
        parent_msg = super().start()  # Call parent's method
        return f"{parent_msg} {self.brand} {self.model} engine running!"

my_car = Car("Honda", "City", 2023, 4)
print(my_car.start())  # Vehicle starting... Honda City engine running!

# Example 4: Multilevel Inheritance
class LivingThing:
    def breathe(self):
        return "Breathing..."

class Animal2(LivingThing):
    def move(self):
        return "Moving..."

class Mammal(Animal2):
    def feed_milk(self):
        return "Feeding milk to young ones"

class Dog2(Mammal):
    def bark(self):
        return "Barking!"

# Dog2 has access to all methods from the chain
dog = Dog2()
print(dog.breathe())   # From LivingThing
print(dog.move())      # From Animal2
print(dog.feed_milk()) # From Mammal
print(dog.bark())      # Own method

# Example 5: Multiple Inheritance
class Flyable:
    def fly(self):
        return "Flying high!"
    
    def land(self):
        return "Landing safely"

class Swimmable:
    def swim(self):
        return "Swimming gracefully"
    
    def dive(self):
        return "Diving deep"

class Duck(Animal, Flyable, Swimmable):
    def quack(self):
        return "Quack quack!"

duck = Duck("Donald", 2)
print(duck.eat())   # From Animal
print(duck.fly())   # From Flyable
print(duck.swim())  # From Swimmable
print(duck.quack()) # Own method

# Example 6: Method Resolution Order (MRO)
class A:
    def greet(self):
        return "Hello from A"

class B(A):
    def greet(self):
        return "Hello from B"

class C(A):
    def greet(self):
        return "Hello from C"

class D(B, C):
    pass

d = D()
print(d.greet())  # Hello from B (follows MRO: D -> B -> C -> A)
print(D.__mro__)  # Shows the order Python searches for methods

# Example 7: Abstract Base Class
from abc import ABC, abstractmethod

class Shape(ABC):
    @abstractmethod
    def area(self):
        pass
    
    @abstractmethod
    def perimeter(self):
        pass

class Rectangle(Shape):
    def __init__(self, width, height):
        self.width = width
        self.height = height
    
    def area(self):
        return self.width * self.height
    
    def perimeter(self):
        return 2 * (self.width + self.height)

# shape = Shape()  # Error! Cannot instantiate abstract class
rect = Rectangle(5, 3)
print(rect.area())       # 15
print(rect.perimeter())  # 16

# Example 8: Checking Inheritance
print(isinstance(tommy, Dog))     # True
print(isinstance(tommy, Animal))  # True (Dog inherits from Animal)
print(issubclass(Dog, Animal))    # True
print(issubclass(Dog, object))    # True (all classes inherit from object)

# Example 9: Protected and Private in Inheritance
class BankAccount:
    def __init__(self, balance):
        self._balance = balance        # Protected - accessible in child
        self.__secret_code = "XYZ123"  # Private - not directly accessible
    
    def _internal_method(self):  # Protected method
        return "Internal processing"

class SavingsAccount(BankAccount):
    def __init__(self, balance, interest_rate):
        super().__init__(balance)
        self.interest_rate = interest_rate
    
    def add_interest(self):
        interest = self._balance * self.interest_rate  # Can access protected
        self._balance += interest
        return f"Interest added. New balance: {self._balance}"

savings = SavingsAccount(10000, 0.05)
print(savings.add_interest())  # Interest added. New balance: 10500.0

# Example 10: Composition vs Inheritance
# Sometimes "has-a" relationship is better than "is-a"

class Engine:
    def __init__(self, horsepower):
        self.horsepower = horsepower
    
    def start(self):
        return f"Engine with {self.horsepower}HP starting"

class Wheels:
    def __init__(self, count):
        self.count = count

# Composition: Car HAS an engine and wheels
class CarComposition:
    def __init__(self, brand, engine_hp):
        self.brand = brand
        self.engine = Engine(engine_hp)  # Has-a relationship
        self.wheels = Wheels(4)
    
    def start(self):
        return f"{self.brand}: {self.engine.start()}"

car = CarComposition("BMW", 300)
print(car.start())  # BMW: Engine with 300HP starting</code></pre>

<h3>🌟 Real-Life Story: Company Employee Hierarchy</h3>
<p><em>Let's see how a real company might use inheritance to model their employee structure:</em></p>

<pre><code># Company Employee Management System

class Employee:
    company_name = "TechCorp India"
    
    def __init__(self, emp_id, name, email, salary):
        self.emp_id = emp_id
        self.name = name
        self.email = email
        self.salary = salary
        self.is_active = True
    
    def get_details(self):
        return f"ID: {self.emp_id} | {self.name} | {self.email}"
    
    def get_annual_salary(self):
        return self.salary * 12
    
    def __str__(self):
        return f"{self.name} ({self.emp_id})"

class Developer(Employee):
    def __init__(self, emp_id, name, email, salary, programming_languages):
        super().__init__(emp_id, name, email, salary)
        self.programming_languages = programming_languages
        self.projects = []
    
    def add_project(self, project_name):
        self.projects.append(project_name)
        return f"{self.name} assigned to {project_name}"
    
    def code(self):
        return f"{self.name} is coding in {', '.join(self.programming_languages)}"

class Manager(Employee):
    def __init__(self, emp_id, name, email, salary, department):
        super().__init__(emp_id, name, email, salary)
        self.department = department
        self.team = []
    
    def add_team_member(self, employee):
        self.team.append(employee)
        return f"{employee.name} added to {self.name}'s team"
    
    def get_annual_salary(self):
        # Managers get 20% bonus
        base = super().get_annual_salary()
        return base * 1.20
    
    def hold_meeting(self):
        return f"{self.name} is holding a meeting with {len(self.team)} team members"

class TechLead(Developer, Manager):
    """Tech Lead is both a Developer and a Manager"""
    def __init__(self, emp_id, name, email, salary, programming_languages, department):
        # Initialize Developer (which initializes Employee)
        Developer.__init__(self, emp_id, name, email, salary, programming_languages)
        self.department = department
        self.team = []
    
    def code_review(self):
        return f"{self.name} is reviewing code for {len(self.team)} developers"

# Create employees
dev1 = Developer("D001", "Rahul Sharma", "rahul@techcorp.com", 80000, ["Python", "JavaScript"])
dev2 = Developer("D002", "Priya Singh", "priya@techcorp.com", 75000, ["Java", "Kotlin"])
mgr = Manager("M001", "Vikram Patel", "vikram@techcorp.com", 120000, "Engineering")
tech_lead = TechLead("T001", "Sneha Gupta", "sneha@techcorp.com", 150000, ["Python", "Go"], "Backend")

# Use inheritance features
print(dev1.code())  # Rahul Sharma is coding in Python, JavaScript
print(mgr.add_team_member(dev1))  # Rahul Sharma added to Vikram Patel's team
print(mgr.add_team_member(dev2))
print(mgr.hold_meeting())  # Vikram Patel is holding a meeting with 2 team members

# Manager's overridden method
print(f"Developer Annual: ₹{dev1.get_annual_salary()}")  # ₹960000
print(f"Manager Annual: ₹{mgr.get_annual_salary()}")     # ₹1728000 (with bonus)

# Tech Lead has abilities of both Developer and Manager
print(tech_lead.code())  # From Developer
tech_lead.add_team_member(dev1)  # From Manager
print(tech_lead.code_review())  # Own method

# Check inheritance
print(isinstance(tech_lead, Developer))  # True
print(isinstance(tech_lead, Manager))    # True
print(isinstance(tech_lead, Employee))   # True</code></pre>

<p><strong>What we learned:</strong> The company uses inheritance to model the natural hierarchy of employees. A Developer IS-A Employee, a Manager IS-A Employee, and a TechLead IS-BOTH a Developer and Manager. This allows code reuse (all employees have common properties) while enabling specialized behavior (only managers can hold meetings, only developers can code).</p>

<div class="tip-box">
<strong>💡 When to Use Inheritance:</strong>
<ul>
<li>When there's a clear "IS-A" relationship (Dog IS-A Animal)</li>
<li>When child classes share common behavior from parent</li>
<li>When you want to reuse and extend existing code</li>
<li>When you need polymorphism (same interface, different implementations)</li>
</ul>
</div>

<div class="warning-box">
<strong>⚠️ Inheritance Pitfalls:</strong>
<ul>
<li><strong>Diamond Problem:</strong> With multiple inheritance, methods can be inherited from multiple paths. Python uses MRO to resolve this.</li>
<li><strong>Deep Hierarchies:</strong> Too many levels of inheritance make code hard to follow. Keep it shallow.</li>
<li><strong>Tight Coupling:</strong> Child classes depend heavily on parent implementation. Changes to parent can break children.</li>
<li><strong>Favor Composition:</strong> Sometimes "has-a" (composition) is better than "is-a" (inheritance).</li>
</ul>
</div>`,
                video: "https://www.youtube.com/embed/E_L_K3c0WdE"
            },
            {
                name: "Encapsulation",
                notes: `<h3>🔒 Understanding Encapsulation</h3>
<p><strong>Encapsulation</strong> is the practice of hiding internal implementation details and protecting data from direct external access. It bundles data (attributes) and the methods that operate on them into a single unit (class), and controls access through public interfaces.</p>

<p>Think of encapsulation like a TV remote: you press buttons (public methods) to control the TV, but you don't need to know the internal circuits (private data). The TV protects its internals while providing a simple interface!</p>

<h3>📚 Encapsulation Examples - 10 Detailed Examples</h3>
<pre><code># Example 1: Public, Protected, and Private Attributes
class Employee:
    def __init__(self, name, salary, ssn):
        self.name = name           # Public - accessible anywhere
        self._salary = salary      # Protected - convention, use with care
        self.__ssn = ssn           # Private - name mangling applied
    
    def get_info(self):
        return f"{self.name} (SSN hidden for security)"

emp = Employee("Rahul", 50000, "123-45-6789")
print(emp.name)       # ✅ Works: Rahul
print(emp._salary)    # ⚠️ Works but not recommended: 50000
# print(emp.__ssn)    # ❌ AttributeError!
print(emp._Employee__ssn)  # Works but DON'T do this: 123-45-6789

# Example 2: Getter and Setter Methods (Traditional Way)
class BankAccount:
    def __init__(self, account_number, balance):
        self.__account_number = account_number
        self.__balance = balance
        self.__transactions = []
    
    # Getter
    def get_balance(self):
        return self.__balance
    
    # Setter with validation
    def deposit(self, amount):
        if amount > 0:
            self.__balance += amount
            self.__transactions.append(f"+₹{amount}")
            return True
        return False
    
    def withdraw(self, amount):
        if 0 < amount <= self.__balance:
            self.__balance -= amount
            self.__transactions.append(f"-₹{amount}")
            return amount
        return 0

account = BankAccount("ACC001", 10000)
account.deposit(5000)
# account.__balance = 1000000  # ❌ Won't work as expected!
print(account.get_balance())   # ✅ 15000

# Example 3: Property Decorator (Pythonic Way)
class Temperature:
    def __init__(self, celsius=0):
        self._celsius = celsius
    
    @property
    def celsius(self):
        """Getter for celsius"""
        return self._celsius
    
    @celsius.setter
    def celsius(self, value):
        """Setter with validation"""
        if value < -273.15:
            raise ValueError("Temperature below absolute zero!")
        self._celsius = value
    
    @property
    def fahrenheit(self):
        """Computed property (read-only)"""
        return self._celsius * 9/5 + 32
    
    @fahrenheit.setter
    def fahrenheit(self, value):
        """Set via fahrenheit, stored as celsius"""
        self._celsius = (value - 32) * 5/9

temp = Temperature(25)
print(temp.celsius)     # 25
print(temp.fahrenheit)  # 77.0
temp.fahrenheit = 100   # Sets celsius to 37.78
print(temp.celsius)     # 37.78

# Example 4: Read-Only Property (No Setter)
class Circle:
    def __init__(self, radius):
        self._radius = radius
    
    @property
    def radius(self):
        return self._radius
    
    @radius.setter
    def radius(self, value):
        if value > 0:
            self._radius = value
        else:
            raise ValueError("Radius must be positive")
    
    @property
    def area(self):
        """Read-only computed property"""
        return 3.14159 * self._radius ** 2
    
    @property
    def circumference(self):
        """Read-only computed property"""
        return 2 * 3.14159 * self._radius

circle = Circle(5)
print(f"Area: {circle.area:.2f}")  # 78.54
# circle.area = 100  # ❌ AttributeError: can't set attribute

# Example 5: Property with Deleter
class User:
    def __init__(self, name, email):
        self._name = name
        self._email = email
    
    @property
    def email(self):
        return self._email
    
    @email.setter
    def email(self, value):
        if "@" not in value:
            raise ValueError("Invalid email")
        self._email = value
    
    @email.deleter
    def email(self):
        print("Removing email...")
        self._email = None

user = User("Rahul", "rahul@email.com")
del user.email  # Calls deleter
print(user.email)  # None

# Example 6: Encapsulated Data Validation
class Product:
    def __init__(self, name, price, quantity):
        self.name = name
        self.price = price      # Uses setter
        self.quantity = quantity  # Uses setter
    
    @property
    def price(self):
        return self._price
    
    @price.setter
    def price(self, value):
        if value < 0:
            raise ValueError("Price cannot be negative")
        self._price = round(value, 2)
    
    @property
    def quantity(self):
        return self._quantity
    
    @quantity.setter
    def quantity(self, value):
        if not isinstance(value, int) or value < 0:
            raise ValueError("Quantity must be non-negative integer")
        self._quantity = value
    
    @property
    def total_value(self):
        return self._price * self._quantity

# Example 7: Encapsulation with Slots (Memory Optimization)
class Point:
    __slots__ = ['_x', '_y']  # Only allow these attributes
    
    def __init__(self, x, y):
        self._x = x
        self._y = y
    
    @property
    def x(self):
        return self._x
    
    @property
    def y(self):
        return self._y
    
    def distance_from_origin(self):
        return (self._x**2 + self._y**2)**0.5

point = Point(3, 4)
# point.z = 5  # ❌ AttributeError: 'Point' object has no attribute 'z'

# Example 8: Private Methods
class PaymentProcessor:
    def __init__(self, api_key):
        self.__api_key = api_key
    
    def process_payment(self, amount, card_number):
        """Public interface"""
        if not self.__validate_card(card_number):
            raise ValueError("Invalid card")
        
        encrypted = self.__encrypt_card(card_number)
        return self.__send_to_gateway(encrypted, amount)
    
    def __validate_card(self, card_number):
        """Private: Luhn algorithm validation"""
        return len(card_number) == 16 and card_number.isdigit()
    
    def __encrypt_card(self, card_number):
        """Private: Encrypt sensitive data"""
        return f"***{card_number[-4:]}"
    
    def __send_to_gateway(self, encrypted_card, amount):
        """Private: API communication"""
        return {"status": "success", "card": encrypted_card}

# Example 9: Encapsulation with descriptors
class PositiveNumber:
    """Descriptor for positive number validation"""
    def __init__(self, name):
        self.name = name
    
    def __get__(self, obj, objtype=None):
        return obj.__dict__.get(self.name, 0)
    
    def __set__(self, obj, value):
        if value < 0:
            raise ValueError(f"{self.name} must be positive")
        obj.__dict__[self.name] = value

class Rectangle:
    width = PositiveNumber('width')
    height = PositiveNumber('height')
    
    def __init__(self, width, height):
        self.width = width
        self.height = height
    
    @property
    def area(self):
        return self.width * self.height

# Example 10: Full Encapsulation Pattern
class SecureConfig:
    """Fully encapsulated configuration manager"""
    
    _instance = None
    
    def __new__(cls):
        if cls._instance is None:
            cls._instance = super().__new__(cls)
            cls._instance.__config = {}
        return cls._instance
    
    def set(self, key, value, encrypted=False):
        """Set config value"""
        if encrypted:
            value = self.__encrypt(value)
        self.__config[key] = {"value": value, "encrypted": encrypted}
    
    def get(self, key, default=None):
        """Get config value"""
        item = self.__config.get(key)
        if item is None:
            return default
        if item["encrypted"]:
            return self.__decrypt(item["value"])
        return item["value"]
    
    def __encrypt(self, value):
        # Simple example - use proper encryption in production!
        return f"ENC:{value[::-1]}"
    
    def __decrypt(self, value):
        return value[4:][::-1]

config = SecureConfig()
config.set("api_key", "secret123", encrypted=True)
print(config.get("api_key"))  # secret123</code></pre>

<h3>📋 Access Modifiers Comparison</h3>
<table>
<tr><th>Type</th><th>Syntax</th><th>Access</th><th>Example</th></tr>
<tr><td><strong>Public</strong></td><td><code>self.name</code></td><td>Anywhere</td><td><code>obj.name</code></td></tr>
<tr><td><strong>Protected</strong></td><td><code>self._name</code></td><td>Class + Subclasses</td><td>Convention only</td></tr>
<tr><td><strong>Private</strong></td><td><code>self.__name</code></td><td>Class only</td><td>Name mangling</td></tr>
</table>

<h3>🌟 Real-Life Story: Banking System Security</h3>
<p><em>Building a secure banking system with proper encapsulation:</em></p>

<pre><code># Secure Banking System with Encapsulation
from datetime import datetime
from typing import Optional

class Transaction:
    def __init__(self, type_: str, amount: float, balance_after: float):
        self._type = type_
        self._amount = amount
        self._balance_after = balance_after
        self._timestamp = datetime.now()
    
    def __str__(self):
        return f"{self._timestamp:%Y-%m-%d %H:%M} | {self._type:10} | ₹{self._amount:>10,.2f} | Balance: ₹{self._balance_after:>10,.2f}"

class BankAccount:
    __total_accounts = 0
    
    def __init__(self, holder_name: str, initial_deposit: float, pin: str):
        BankAccount.__total_accounts += 1
        
        # Private attributes
        self.__account_number = f"ACC{BankAccount.__total_accounts:06d}"
        self.__holder_name = holder_name
        self.__balance = 0
        self.__pin = self.__hash_pin(pin)
        self.__transactions = []
        self.__is_locked = False
        self.__failed_attempts = 0
        
        # Initial deposit
        if initial_deposit > 0:
            self.__balance = initial_deposit
            self.__log_transaction("DEPOSIT", initial_deposit)
    
    # Public interface
    @property
    def account_number(self) -> str:
        """Read-only account number"""
        return self.__account_number
    
    @property
    def holder_name(self) -> str:
        return self.__holder_name
    
    @property
    def balance(self) -> float:
        """Balance is read-only externally"""
        return self.__balance
    
    def deposit(self, amount: float) -> bool:
        """Deposit money - no PIN required"""
        if amount <= 0:
            print("❌ Invalid amount")
            return False
        
        self.__balance += amount
        self.__log_transaction("DEPOSIT", amount)
        print(f"✅ Deposited ₹{amount:,.2f}. New balance: ₹{self.__balance:,.2f}")
        return True
    
    def withdraw(self, amount: float, pin: str) -> float:
        """Withdraw money - requires PIN verification"""
        if self.__is_locked:
            print("❌ Account is locked. Please visit the branch.")
            return 0
        
        if not self.__verify_pin(pin):
            self.__failed_attempts += 1
            if self.__failed_attempts >= 3:
                self.__is_locked = True
                print("❌ Too many failed attempts. Account locked!")
            else:
                print(f"❌ Wrong PIN. {3 - self.__failed_attempts} attempts remaining.")
            return 0
        
        self.__failed_attempts = 0
        
        if amount <= 0:
            print("❌ Invalid amount")
            return 0
        
        if amount > self.__balance:
            print(f"❌ Insufficient balance. Available: ₹{self.__balance:,.2f}")
            return 0
        
        self.__balance -= amount
        self.__log_transaction("WITHDRAWAL", amount)
        print(f"✅ Withdrew ₹{amount:,.2f}. New balance: ₹{self.__balance:,.2f}")
        return amount
    
    def change_pin(self, old_pin: str, new_pin: str) -> bool:
        """Change PIN with verification"""
        if not self.__verify_pin(old_pin):
            print("❌ Current PIN is incorrect")
            return False
        
        if len(new_pin) != 4 or not new_pin.isdigit():
            print("❌ PIN must be 4 digits")
            return False
        
        self.__pin = self.__hash_pin(new_pin)
        print("✅ PIN changed successfully")
        return True
    
    def get_statement(self, pin: str) -> Optional[str]:
        """Get transaction history"""
        if not self.__verify_pin(pin):
            print("❌ Wrong PIN")
            return None
        
        lines = [f"\\n{'='*60}",
                f"Account Statement: {self.__account_number}",
                f"Holder: {self.__holder_name}",
                f"{'='*60}"]
        
        for t in self.__transactions[-10:]:  # Last 10 transactions
            lines.append(str(t))
        
        lines.append(f"{'='*60}")
        lines.append(f"Current Balance: ₹{self.__balance:,.2f}")
        lines.append(f"{'='*60}\\n")
        
        return "\\n".join(lines)
    
    # Private methods
    def __verify_pin(self, pin: str) -> bool:
        return self.__hash_pin(pin) == self.__pin
    
    def __hash_pin(self, pin: str) -> str:
        # Simple hash - use proper hashing in production!
        return str(hash(pin + "salt"))
    
    def __log_transaction(self, type_: str, amount: float):
        self.__transactions.append(
            Transaction(type_, amount, self.__balance)
        )

# Usage
account = BankAccount("Rahul Sharma", 10000, "1234")

# Public interface works
print(f"Account: {account.account_number}")  # ACC000001
print(f"Holder: {account.holder_name}")      # Rahul Sharma
print(f"Balance: ₹{account.balance:,.2f}")   # ₹10,000.00

# Deposit - no PIN required
account.deposit(5000)

# Withdraw - requires PIN
account.withdraw(2000, "1234")  # ✅ Works
account.withdraw(1000, "0000")  # ❌ Wrong PIN

# Statement
print(account.get_statement("1234"))

# Private data is protected
# account.__balance = 1000000  # ❌ Creates new attribute, doesn't modify!
# print(account.__pin)         # ❌ AttributeError</code></pre>

<div class="tip-box">
<strong>💡 Best Practices:</strong>
<ul>
<li>Use <code>@property</code> for controlled attribute access</li>
<li>Keep public interface minimal - expose only what's needed</li>
<li>Validate all inputs in setters</li>
<li>Use private (<code>__</code>) for sensitive data</li>
<li>Document your public API clearly</li>
</ul>
</div>

<div class="warning-box">
<strong>⚠️ Common Mistakes:</strong>
<ul>
<li>Exposing internal data structures directly</li>
<li>Not validating setter inputs</li>
<li>Making everything public "for convenience"</li>
<li>Relying on name mangling for security (it's not real security!)</li>
</ul>
</div>`,
                video: "https://www.youtube.com/embed/hQ_T97aC16I"
            },
            {
                name: "Polymorphism",
                notes: `<h3>🎭 Understanding Polymorphism</h3>
<p><strong>Polymorphism</strong> means "many forms" - it allows objects of different classes to be treated as objects of a common base class. The same method name can behave differently depending on which object calls it. This is the heart of flexible, extensible code!</p>

<p>Think of polymorphism like a universal remote: the "power" button works on any TV, AC, or sound system - same button, different behavior depending on the device!</p>

<h3>📚 Polymorphism Examples - 10 Detailed Examples</h3>
<pre><code># Example 1: Method Overriding (Runtime Polymorphism)
class Animal:
    def speak(self):
        return "Some sound"
    
    def move(self):
        return "Moving..."

class Dog(Animal):
    def speak(self):  # Override
        return "Woof! 🐕"
    
    def move(self):
        return "Running on 4 legs 🏃"

class Cat(Animal):
    def speak(self):  # Override
        return "Meow! 🐱"

class Bird(Animal):
    def speak(self):
        return "Chirp! 🐦"
    
    def move(self):
        return "Flying in the sky ✈️"

# Polymorphic behavior
animals = [Dog(), Cat(), Bird()]
for animal in animals:
    print(f"{animal.__class__.__name__}: {animal.speak()}")
# Dog: Woof! 🐕
# Cat: Meow! 🐱
# Bird: Chirp! 🐦

# Example 2: Duck Typing (Pythonic Polymorphism)
class Duck:
    def swim(self):
        return "Duck swimming 🦆"
    
    def fly(self):
        return "Duck flying"

class Penguin:
    def swim(self):
        return "Penguin swimming 🐧"
    
    def fly(self):
        return "Cannot fly! 😢"

class Airplane:
    def fly(self):
        return "Airplane flying ✈️"

def make_it_swim(obj):
    """Works with ANY object that has swim() method"""
    return obj.swim()

def make_it_fly(obj):
    """Works with ANY object that has fly() method"""
    return obj.fly()

# Duck typing in action
print(make_it_swim(Duck()))     # Duck swimming 🦆
print(make_it_swim(Penguin()))  # Penguin swimming 🐧
print(make_it_fly(Airplane()))  # Airplane flying ✈️

# Example 3: Operator Overloading (Polymorphism with Operators)
class Vector:
    def __init__(self, x, y):
        self.x = x
        self.y = y
    
    def __add__(self, other):
        """+ operator"""
        return Vector(self.x + other.x, self.y + other.y)
    
    def __sub__(self, other):
        """- operator"""
        return Vector(self.x - other.x, self.y - other.y)
    
    def __mul__(self, scalar):
        """* operator (with number)"""
        return Vector(self.x * scalar, self.y * scalar)
    
    def __str__(self):
        return f"Vector({self.x}, {self.y})"

v1 = Vector(3, 4)
v2 = Vector(1, 2)
print(v1 + v2)  # Vector(4, 6)
print(v1 - v2)  # Vector(2, 2)
print(v1 * 3)   # Vector(9, 12)

# Example 4: Abstract Base Class (Enforcing Polymorphism)
from abc import ABC, abstractmethod

class Shape(ABC):
    @abstractmethod
    def area(self):
        """Must be implemented by subclasses"""
        pass
    
    @abstractmethod
    def perimeter(self):
        pass

class Rectangle(Shape):
    def __init__(self, width, height):
        self.width = width
        self.height = height
    
    def area(self):
        return self.width * self.height
    
    def perimeter(self):
        return 2 * (self.width + self.height)

class Circle(Shape):
    def __init__(self, radius):
        self.radius = radius
    
    def area(self):
        return 3.14159 * self.radius ** 2
    
    def perimeter(self):
        return 2 * 3.14159 * self.radius

# shape = Shape()  # ❌ TypeError: Can't instantiate abstract class
shapes = [Rectangle(4, 5), Circle(3)]
for shape in shapes:
    print(f"Area: {shape.area():.2f}, Perimeter: {shape.perimeter():.2f}")

# Example 5: Method Overloading (via default parameters)
class Calculator:
    def add(self, a, b=0, c=0, d=0):
        """Python doesn't have true overloading, use defaults"""
        return a + b + c + d

calc = Calculator()
print(calc.add(5))           # 5
print(calc.add(5, 10))       # 15
print(calc.add(5, 10, 15))   # 30

# Example 6: Polymorphism with *args
class MathOperations:
    def multiply(self, *args):
        result = 1
        for num in args:
            result *= num
        return result

math = MathOperations()
print(math.multiply(2, 3))           # 6
print(math.multiply(2, 3, 4))        # 24
print(math.multiply(2, 3, 4, 5))     # 120

# Example 7: Interface-like Polymorphism (Protocol)
from typing import Protocol

class Drawable(Protocol):
    def draw(self) -> str:
        ...

class Rectangle:
    def draw(self) -> str:
        return "Drawing rectangle 🟦"

class Circle:
    def draw(self) -> str:
        return "Drawing circle 🔵"

class Text:
    def draw(self) -> str:
        return "Drawing text 📝"

def render(items: list[Drawable]):
    for item in items:
        print(item.draw())

render([Rectangle(), Circle(), Text()])

# Example 8: Polymorphism with isinstance()
class Employee:
    def __init__(self, name, salary):
        self.name = name
        self.salary = salary
    
    def get_bonus(self):
        return self.salary * 0.1

class Manager(Employee):
    def get_bonus(self):
        return self.salary * 0.2  # 20% for managers

class Developer(Employee):
    def __init__(self, name, salary, language):
        super().__init__(name, salary)
        self.language = language
    
    def get_bonus(self):
        return self.salary * 0.15  # 15% for developers

def process_bonuses(employees):
    for emp in employees:
        bonus = emp.get_bonus()  # Polymorphic call
        print(f"{emp.name}: ₹{bonus:,.2f}")

employees = [
    Manager("Vikram", 100000),
    Developer("Rahul", 80000, "Python"),
    Employee("Priya", 50000)
]
process_bonuses(employees)

# Example 9: Polymorphism with Callable Objects
class Multiplier:
    def __init__(self, factor):
        self.factor = factor
    
    def __call__(self, value):
        return value * self.factor

double = Multiplier(2)
triple = Multiplier(3)

print(double(5))   # 10
print(triple(5))   # 15

# All these work the same way!
functions = [double, triple, lambda x: x * 4]
for func in functions:
    print(func(10))  # 20, 30, 40

# Example 10: Polymorphic Factory Pattern
class Button:
    def render(self):
        return "Generic button"

class WindowsButton(Button):
    def render(self):
        return "[ Windows Button ]"

class MacButton(Button):
    def render(self):
        return "( Mac Button )"

class LinuxButton(Button):
    def render(self):
        return "< Linux Button >"

def create_button(os_type):
    """Factory - returns polymorphic Button"""
    buttons = {
        "windows": WindowsButton,
        "mac": MacButton,
        "linux": LinuxButton
    }
    return buttons.get(os_type, Button)()

# Same interface, different implementations
for os_type in ["windows", "mac", "linux"]:
    button = create_button(os_type)
    print(button.render())</code></pre>

<h3>📋 Types of Polymorphism</h3>
<table>
<tr><th>Type</th><th>Description</th><th>Example</th></tr>
<tr><td><strong>Method Overriding</strong></td><td>Subclass redefines parent method</td><td>Dog.speak() vs Cat.speak()</td></tr>
<tr><td><strong>Duck Typing</strong></td><td>If it walks like a duck...</td><td>Any object with required method</td></tr>
<tr><td><strong>Operator Overloading</strong></td><td>Customize operator behavior</td><td>__add__, __eq__, __lt__</td></tr>
<tr><td><strong>Function Overloading</strong></td><td>Same function, different params</td><td>Default params, *args</td></tr>
</table>

<h3>🌟 Real-Life Story: Payment Gateway System</h3>
<p><em>Building a polymorphic payment system that supports multiple providers:</em></p>

<pre><code># Polymorphic Payment Gateway System
from abc import ABC, abstractmethod
from datetime import datetime
from typing import Dict, Optional

class PaymentResult:
    def __init__(self, success: bool, transaction_id: str, message: str):
        self.success = success
        self.transaction_id = transaction_id
        self.message = message
        self.timestamp = datetime.now()

class PaymentGateway(ABC):
    """Abstract base for all payment gateways"""
    
    @property
    @abstractmethod
    def name(self) -> str:
        pass
    
    @abstractmethod
    def process_payment(self, amount: float, card_info: Dict) -> PaymentResult:
        pass
    
    @abstractmethod
    def refund(self, transaction_id: str, amount: float) -> PaymentResult:
        pass
    
    def validate_card(self, card_info: Dict) -> bool:
        """Common validation - can be overridden"""
        card_number = card_info.get("number", "")
        return len(card_number) == 16 and card_number.isdigit()

class RazorpayGateway(PaymentGateway):
    """Razorpay implementation"""
    
    @property
    def name(self) -> str:
        return "Razorpay"
    
    def process_payment(self, amount: float, card_info: Dict) -> PaymentResult:
        if not self.validate_card(card_info):
            return PaymentResult(False, "", "Invalid card")
        
        # Razorpay-specific processing
        txn_id = f"rzp_{datetime.now().strftime('%Y%m%d%H%M%S')}"
        print(f"🔵 Razorpay: Processing ₹{amount}")
        return PaymentResult(True, txn_id, "Payment successful via Razorpay")
    
    def refund(self, transaction_id: str, amount: float) -> PaymentResult:
        print(f"🔵 Razorpay: Refunding ₹{amount}")
        return PaymentResult(True, f"rfnd_{transaction_id}", "Refund initiated")

class PaytmGateway(PaymentGateway):
    """Paytm implementation"""
    
    @property
    def name(self) -> str:
        return "Paytm"
    
    def process_payment(self, amount: float, card_info: Dict) -> PaymentResult:
        if not self.validate_card(card_info):
            return PaymentResult(False, "", "Invalid card")
        
        # Paytm-specific processing (maybe different API)
        txn_id = f"ptm_{datetime.now().strftime('%Y%m%d%H%M%S')}"
        print(f"🟢 Paytm: Processing ₹{amount}")
        return PaymentResult(True, txn_id, "Payment successful via Paytm")
    
    def refund(self, transaction_id: str, amount: float) -> PaymentResult:
        print(f"🟢 Paytm: Refunding ₹{amount}")
        return PaymentResult(True, f"rfnd_{transaction_id}", "Refund processed")

class StripeGateway(PaymentGateway):
    """Stripe implementation (international)"""
    
    @property
    def name(self) -> str:
        return "Stripe"
    
    def process_payment(self, amount: float, card_info: Dict) -> PaymentResult:
        if not self.validate_card(card_info):
            return PaymentResult(False, "", "Invalid card")
        
        txn_id = f"ch_{datetime.now().strftime('%Y%m%d%H%M%S')}"
        print(f"🟣 Stripe: Processing \${amount}")  # Stripe uses USD
        return PaymentResult(True, txn_id, "Payment successful via Stripe")
    
    def refund(self, transaction_id: str, amount: float) -> PaymentResult:
        print(f"🟣 Stripe: Refunding \${amount}")
        return PaymentResult(True, f"re_{transaction_id}", "Refund created")

class PaymentProcessor:
    """Uses polymorphism to work with any gateway"""
    
    def __init__(self):
        self.gateways: Dict[str, PaymentGateway] = {}
        self.default_gateway: Optional[str] = None
    
    def register_gateway(self, key: str, gateway: PaymentGateway):
        self.gateways[key] = gateway
        if self.default_gateway is None:
            self.default_gateway = key
    
    def process(self, amount: float, card_info: Dict, gateway_key: str = None) -> PaymentResult:
        key = gateway_key or self.default_gateway
        gateway = self.gateways.get(key)
        
        if gateway is None:
            return PaymentResult(False, "", f"Gateway '{key}' not found")
        
        print(f"\\n💳 Using {gateway.name} gateway...")
        return gateway.process_payment(amount, card_info)  # Polymorphic call!
    
    def refund(self, transaction_id: str, amount: float, gateway_key: str) -> PaymentResult:
        gateway = self.gateways.get(gateway_key)
        if gateway:
            return gateway.refund(transaction_id, amount)  # Polymorphic call!
        return PaymentResult(False, "", "Gateway not found")

# Usage - Polymorphism in action!
processor = PaymentProcessor()
processor.register_gateway("razorpay", RazorpayGateway())
processor.register_gateway("paytm", PaytmGateway())
processor.register_gateway("stripe", StripeGateway())

card = {"number": "4111111111111111", "expiry": "12/25", "cvv": "123"}

# Same interface, different implementations!
result1 = processor.process(999, card, "razorpay")
result2 = processor.process(1499, card, "paytm")
result3 = processor.process(49.99, card, "stripe")

print(f"\\nResults:")
print(f"1. {result1.message} (ID: {result1.transaction_id})")
print(f"2. {result2.message} (ID: {result2.transaction_id})")
print(f"3. {result3.message} (ID: {result3.transaction_id})")</code></pre>

<div class="tip-box">
<strong>💡 Best Practices:</strong>
<ul>
<li>Use abstract base classes to enforce interface contracts</li>
<li>Leverage duck typing for flexible, Pythonic code</li>
<li>Design for polymorphism when you expect multiple implementations</li>
<li>Use <code>isinstance()</code> sparingly - prefer polymorphic calls</li>
<li>Keep polymorphic methods' signatures consistent</li>
</ul>
</div>

<div class="warning-box">
<strong>⚠️ Common Mistakes:</strong>
<ul>
<li>Using <code>isinstance()</code> checks instead of polymorphism</li>
<li>Forgetting to call parent method with <code>super()</code></li>
<li>Breaking Liskov Substitution Principle (child can't replace parent)</li>
<li>Over-engineering with too many abstract classes</li>
</ul>
</div>`,
                video: "https://www.youtube.com/embed/E_L_K3c0WdE"
            },
            {
                name: "Magic Methods",
                notes: `<h3>✨ Understanding Magic Methods (Dunder Methods)</h3>
<p><strong>Magic methods</strong> (also called dunder methods for "double underscore") are special methods that Python calls automatically in certain situations. They let you customize how your objects behave with built-in operations like <code>+</code>, <code>len()</code>, <code>print()</code>, and more!</p>

<p>Think of magic methods as hooks into Python's behavior: when someone writes <code>a + b</code>, Python secretly calls <code>a.__add__(b)</code>. By defining these methods, you control how your objects interact with Python's syntax!</p>

<h3>📚 Magic Methods Examples - 10 Detailed Examples</h3>
<pre><code># Example 1: __init__ and __del__ (Construction & Destruction)
class FileHandler:
    def __init__(self, filename):
        """Called when object is created"""
        print(f"📂 Opening {filename}")
        self.filename = filename
        self.file = open(filename, 'w')
    
    def write(self, text):
        self.file.write(text)
    
    def __del__(self):
        """Called when object is garbage collected"""
        print(f"📁 Closing {self.filename}")
        self.file.close()

# Example 2: __str__ vs __repr__ (String Representation)
class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age
    
    def __str__(self):
        """Human-readable, for print()"""
        return f"{self.name}, {self.age} years old"
    
    def __repr__(self):
        """Unambiguous, for debugging"""
        return f"Person('{self.name}', {self.age})"

p = Person("Rahul", 25)
print(p)        # Rahul, 25 years old (__str__)
print(repr(p))  # Person('Rahul', 25) (__repr__)
print([p])      # [Person('Rahul', 25)] (uses __repr__ in collections)

# Example 3: Arithmetic Operators
class Vector:
    def __init__(self, x, y):
        self.x = x
        self.y = y
    
    def __add__(self, other):
        """self + other"""
        return Vector(self.x + other.x, self.y + other.y)
    
    def __sub__(self, other):
        """self - other"""
        return Vector(self.x - other.x, self.y - other.y)
    
    def __mul__(self, scalar):
        """self * scalar"""
        return Vector(self.x * scalar, self.y * scalar)
    
    def __rmul__(self, scalar):
        """scalar * self (reversed)"""
        return self.__mul__(scalar)
    
    def __neg__(self):
        """-self"""
        return Vector(-self.x, -self.y)
    
    def __str__(self):
        return f"Vector({self.x}, {self.y})"

v1 = Vector(3, 4)
v2 = Vector(1, 2)
print(v1 + v2)    # Vector(4, 6)
print(v1 - v2)    # Vector(2, 2)
print(v1 * 3)     # Vector(9, 12)
print(3 * v1)     # Vector(9, 12) (__rmul__)
print(-v1)        # Vector(-3, -4)

# Example 4: Comparison Operators
from functools import total_ordering

@total_ordering  # Generates other comparisons from __eq__ and __lt__
class Student:
    def __init__(self, name, grade):
        self.name = name
        self.grade = grade
    
    def __eq__(self, other):
        """self == other"""
        return self.grade == other.grade
    
    def __lt__(self, other):
        """self < other"""
        return self.grade < other.grade
    
    def __repr__(self):
        return f"{self.name}: {self.grade}"

students = [
    Student("Rahul", 85),
    Student("Priya", 92),
    Student("Amit", 78)
]

print(sorted(students))  # [Amit: 78, Rahul: 85, Priya: 92]
print(max(students))     # Priya: 92

# Example 5: Container Methods (__len__, __getitem__, __setitem__)
class Playlist:
    def __init__(self, name):
        self.name = name
        self._songs = []
    
    def __len__(self):
        """len(playlist)"""
        return len(self._songs)
    
    def __getitem__(self, index):
        """playlist[index] or playlist[start:stop]"""
        return self._songs[index]
    
    def __setitem__(self, index, value):
        """playlist[index] = value"""
        self._songs[index] = value
    
    def __delitem__(self, index):
        """del playlist[index]"""
        del self._songs[index]
    
    def __contains__(self, item):
        """item in playlist"""
        return item in self._songs
    
    def __iter__(self):
        """for song in playlist"""
        return iter(self._songs)
    
    def add(self, song):
        self._songs.append(song)

playlist = Playlist("My Favorites")
playlist.add("Shape of You")
playlist.add("Blinding Lights")
playlist.add("Kesariya")

print(len(playlist))         # 3
print(playlist[0])           # Shape of You
print(playlist[-1])          # Kesariya
print("Kesariya" in playlist)  # True

for song in playlist:
    print(f"🎵 {song}")

# Example 6: Callable Objects (__call__)
class Counter:
    def __init__(self):
        self.count = 0
    
    def __call__(self, increment=1):
        """Make object callable like a function"""
        self.count += increment
        return self.count

counter = Counter()
print(counter())    # 1
print(counter())    # 2
print(counter(5))   # 7

# Example 7: Context Manager (__enter__, __exit__)
class Timer:
    def __enter__(self):
        import time
        self.start = time.time()
        print("⏱️ Timer started")
        return self
    
    def __exit__(self, exc_type, exc_val, exc_tb):
        import time
        elapsed = time.time() - self.start
        print(f"⏱️ Elapsed: {elapsed:.4f} seconds")
        return False  # Don't suppress exceptions

with Timer():
    total = sum(range(1000000))

# Example 8: Attribute Access (__getattr__, __setattr__)
class FlexibleObject:
    def __init__(self):
        self._data = {}
    
    def __getattr__(self, name):
        """Called when attribute not found normally"""
        if name.startswith('_'):
            raise AttributeError(f"Cannot access private: {name}")
        return self._data.get(name, f"<{name} not set>")
    
    def __setattr__(self, name, value):
        """Called for every attribute assignment"""
        if name.startswith('_'):
            super().__setattr__(name, value)
        else:
            self._data[name] = value

obj = FlexibleObject()
obj.name = "Rahul"
obj.age = 25
print(obj.name)    # Rahul
print(obj.city)    # <city not set>

# Example 9: Hash and Equality (for dict keys/sets)
class Point:
    def __init__(self, x, y):
        self.x = x
        self.y = y
    
    def __eq__(self, other):
        return self.x == other.x and self.y == other.y
    
    def __hash__(self):
        """Required for use in sets/dict keys"""
        return hash((self.x, self.y))
    
    def __repr__(self):
        return f"Point({self.x}, {self.y})"

# Now Point can be used in sets and as dict keys
points = {Point(0, 0), Point(1, 1), Point(0, 0)}  # Duplicate removed!
print(points)  # {Point(0, 0), Point(1, 1)}

distances = {Point(0, 0): "Origin", Point(1, 1): "Unit"}
print(distances[Point(0, 0)])  # Origin

# Example 10: Boolean Conversion (__bool__)
class ShoppingCart:
    def __init__(self):
        self.items = []
    
    def add(self, item):
        self.items.append(item)
    
    def __bool__(self):
        """bool(cart) - True if cart has items"""
        return len(self.items) > 0
    
    def __len__(self):
        return len(self.items)

cart = ShoppingCart()
if not cart:  # __bool__ called
    print("Cart is empty!")
cart.add("iPhone")
if cart:  # __bool__ called
    print("Cart has items!")</code></pre>

<h3>📋 Magic Methods Reference Table</h3>
<table>
<tr><th>Category</th><th>Method</th><th>Triggered By</th></tr>
<tr><td><strong>Creation</strong></td><td><code>__init__(self)</code></td><td><code>MyClass()</code></td></tr>
<tr><td><strong>String</strong></td><td><code>__str__(self)</code></td><td><code>print(obj)</code>, <code>str(obj)</code></td></tr>
<tr><td><strong>String</strong></td><td><code>__repr__(self)</code></td><td><code>repr(obj)</code>, debugger</td></tr>
<tr><td><strong>Math</strong></td><td><code>__add__(self, other)</code></td><td><code>a + b</code></td></tr>
<tr><td><strong>Math</strong></td><td><code>__sub__(self, other)</code></td><td><code>a - b</code></td></tr>
<tr><td><strong>Math</strong></td><td><code>__mul__(self, other)</code></td><td><code>a * b</code></td></tr>
<tr><td><strong>Compare</strong></td><td><code>__eq__(self, other)</code></td><td><code>a == b</code></td></tr>
<tr><td><strong>Compare</strong></td><td><code>__lt__(self, other)</code></td><td><code>a < b</code>, sorting</td></tr>
<tr><td><strong>Container</strong></td><td><code>__len__(self)</code></td><td><code>len(obj)</code></td></tr>
<tr><td><strong>Container</strong></td><td><code>__getitem__(self, key)</code></td><td><code>obj[key]</code></td></tr>
<tr><td><strong>Container</strong></td><td><code>__contains__(self, item)</code></td><td><code>item in obj</code></td></tr>
<tr><td><strong>Callable</strong></td><td><code>__call__(self, ...)</code></td><td><code>obj()</code></td></tr>
<tr><td><strong>Context</strong></td><td><code>__enter__, __exit__</code></td><td><code>with obj:</code></td></tr>
<tr><td><strong>Iterator</strong></td><td><code>__iter__, __next__</code></td><td><code>for x in obj:</code></td></tr>
<tr><td><strong>Hash</strong></td><td><code>__hash__(self)</code></td><td><code>hash(obj)</code>, sets, dicts</td></tr>
<tr><td><strong>Bool</strong></td><td><code>__bool__(self)</code></td><td><code>if obj:</code></td></tr>
</table>

<h3>🌟 Real-Life Story: Money Class with Full Operators</h3>
<p><em>Building a Money class that works like a built-in type:</em></p>

<pre><code># Complete Money Class with Magic Methods
from functools import total_ordering

@total_ordering
class Money:
    """Money class that behaves like a number"""
    
    exchange_rates = {
        "INR": 1.0,
        "USD": 83.0,
        "EUR": 90.0,
        "GBP": 105.0
    }
    
    def __init__(self, amount, currency="INR"):
        self._amount = round(float(amount), 2)
        self._currency = currency.upper()
    
    # String representations
    def __str__(self):
        symbols = {"INR": "₹", "USD": "$", "EUR": "€", "GBP": "£"}
        symbol = symbols.get(self._currency, self._currency)
        return f"{symbol}{self._amount:,.2f}"
    
    def __repr__(self):
        return f"Money({self._amount}, '{self._currency}')"
    
    # Conversion
    def to_currency(self, target_currency):
        """Convert to another currency"""
        target = target_currency.upper()
        if target == self._currency:
            return Money(self._amount, self._currency)
        
        # Convert to INR first, then to target
        inr_amount = self._amount * self.exchange_rates[self._currency]
        target_amount = inr_amount / self.exchange_rates[target]
        return Money(target_amount, target)
    
    def _to_inr(self):
        """Internal: convert to INR for comparison"""
        return self._amount * self.exchange_rates[self._currency]
    
    # Arithmetic operators
    def __add__(self, other):
        if isinstance(other, Money):
            # Convert other to same currency
            converted = other.to_currency(self._currency)
            return Money(self._amount + converted._amount, self._currency)
        return Money(self._amount + other, self._currency)
    
    def __radd__(self, other):
        return self.__add__(other)
    
    def __sub__(self, other):
        if isinstance(other, Money):
            converted = other.to_currency(self._currency)
            return Money(self._amount - converted._amount, self._currency)
        return Money(self._amount - other, self._currency)
    
    def __mul__(self, factor):
        return Money(self._amount * factor, self._currency)
    
    def __rmul__(self, factor):
        return self.__mul__(factor)
    
    def __truediv__(self, divisor):
        if isinstance(divisor, Money):
            # Money / Money = ratio
            return self._to_inr() / divisor._to_inr()
        return Money(self._amount / divisor, self._currency)
    
    def __neg__(self):
        return Money(-self._amount, self._currency)
    
    def __abs__(self):
        return Money(abs(self._amount), self._currency)
    
    # Comparison operators
    def __eq__(self, other):
        if isinstance(other, Money):
            return abs(self._to_inr() - other._to_inr()) < 0.01
        return self._amount == other
    
    def __lt__(self, other):
        if isinstance(other, Money):
            return self._to_inr() < other._to_inr()
        return self._amount < other
    
    # Container-like
    def __hash__(self):
        return hash((round(self._to_inr(), 2), "INR"))
    
    def __bool__(self):
        return self._amount != 0
    
    # Properties
    @property
    def amount(self):
        return self._amount
    
    @property
    def currency(self):
        return self._currency

# Usage - Money behaves like a built-in type!
price = Money(999, "INR")
discount = Money(100, "INR")
quantity = 3

# Arithmetic
total = price * quantity
print(f"Total: {total}")        # ₹2,997.00

final = total - discount
print(f"After discount: {final}")  # ₹2,897.00

# Currency conversion
usd_price = Money(49.99, "USD")
inr_price = usd_price.to_currency("INR")
print(f"$49.99 = {inr_price}")  # ₹4,149.17

# Comparison across currencies
print(usd_price > price)  # True (USD 49.99 > INR 999)

# Sum of multiple Money objects
items = [Money(500), Money(300), Money(200)]
total = sum(items, Money(0))
print(f"Total: {total}")  # ₹1,000.00

# Sorted by value
prices = [Money(1000, "INR"), Money(10, "USD"), Money(5, "EUR")]
sorted_prices = sorted(prices)
for p in sorted_prices:
    print(f"  {p} = {p.to_currency('INR')}")</code></pre>

<div class="tip-box">
<strong>💡 Best Practices:</strong>
<ul>
<li>Always implement <code>__repr__</code> for debugging</li>
<li>If you implement <code>__eq__</code>, also implement <code>__hash__</code> (or set to None)</li>
<li>Use <code>@total_ordering</code> to auto-generate comparison methods</li>
<li>Implement <code>__rmul__</code> if you want <code>3 * obj</code> to work</li>
<li>Return <code>NotImplemented</code> for unsupported operations</li>
</ul>
</div>

<div class="warning-box">
<strong>⚠️ Common Mistakes:</strong>
<ul>
<li>Forgetting <code>__repr__</code> - makes debugging painful</li>
<li>Implementing <code>__eq__</code> without <code>__hash__</code> - breaks sets/dicts</li>
<li>Returning wrong type from operators (e.g., returning <code>None</code> from <code>__add__</code>)</li>
<li>Not handling type mismatches in operators</li>
</ul>
</div>`,
                video: "https://www.youtube.com/embed/E_L_K3c0WdE"
            }
        ]
    },
    {
        id: 6,
        title: "File Handling",
        icon: "📁",
        time: "Week 6-7",
        subtopics: [
            {
                name: "Reading Files",
                notes: `<h3>📁 Understanding File Handling in Python</h3>
<p>File handling is one of the most important skills in programming. Almost every real application needs to read or write files - whether it's configuration files, user data, logs, or exported reports. Python makes file handling simple and intuitive with the <code>open()</code> function and the powerful <code>with</code> statement.</p>

<p>Think of a file like a book in a library. To read it, you first need to <strong>open</strong> it, then <strong>read</strong> its contents, and finally <strong>close</strong> it when done. Python handles this elegantly!</p>

<h3>📖 File Reading Methods - 10 Detailed Examples</h3>
<pre><code># Example 1: Read Entire File at Once
with open("data.txt", "r") as file:
    content = file.read()  # Returns entire file as string
    print(content)
# File automatically closed after 'with' block

# Example 2: Read Line by Line (Memory Efficient)
with open("large_file.txt", "r") as file:
    for line in file:
        print(line.strip())  # strip() removes \\n
# Best for large files - only one line in memory at a time

# Example 3: Read All Lines into List
with open("data.txt", "r") as file:
    lines = file.readlines()  # Returns list of lines
    print(f"Total lines: {len(lines)}")
    print(f"First line: {lines[0]}")

# Example 4: Read Specific Number of Characters
with open("data.txt", "r") as file:
    first_100_chars = file.read(100)  # Read first 100 characters
    next_50_chars = file.read(50)     # Continue reading next 50

# Example 5: Read Single Line
with open("data.txt", "r") as file:
    first_line = file.readline()   # Read first line
    second_line = file.readline()  # Read second line

# Example 6: File Pointer Position
with open("data.txt", "r") as file:
    print(file.tell())  # Current position: 0
    file.read(10)
    print(file.tell())  # Position: 10
    file.seek(0)        # Go back to beginning
    print(file.tell())  # Position: 0

# Example 7: Reading with Encoding (Important for Hindi/Unicode)
with open("hindi_text.txt", "r", encoding="utf-8") as file:
    content = file.read()
    print(content)  # Properly displays हिंदी text

# Example 8: Check if File Exists Before Reading
from pathlib import Path

file_path = Path("config.txt")
if file_path.exists():
    content = file_path.read_text()
else:
    print("File not found!")

# Example 9: Read Binary File (Images, PDFs)
with open("image.png", "rb") as file:
    binary_data = file.read()
    print(f"File size: {len(binary_data)} bytes")

# Example 10: Reading Large Files in Chunks
def read_in_chunks(file_path, chunk_size=1024):
    with open(file_path, "r") as file:
        while True:
            chunk = file.read(chunk_size)
            if not chunk:
                break
            yield chunk

for chunk in read_in_chunks("very_large_file.txt"):
    process(chunk)  # Process each chunk</code></pre>

<h3>📋 File Modes Explained</h3>
<table>
<tr><th>Mode</th><th>Description</th><th>File Exists?</th><th>Creates New?</th></tr>
<tr><td><code>"r"</code></td><td>Read only (default)</td><td>Required</td><td>No</td></tr>
<tr><td><code>"w"</code></td><td>Write (overwrites)</td><td>Optional</td><td>Yes</td></tr>
<tr><td><code>"a"</code></td><td>Append (adds to end)</td><td>Optional</td><td>Yes</td></tr>
<tr><td><code>"x"</code></td><td>Create (fails if exists)</td><td>Must NOT exist</td><td>Yes</td></tr>
<tr><td><code>"r+"</code></td><td>Read and write</td><td>Required</td><td>No</td></tr>
<tr><td><code>"rb"</code></td><td>Read binary</td><td>Required</td><td>No</td></tr>
</table>

<h3>🌟 Real-Life Story: Building a Log Analyzer</h3>
<p><em>Imagine you're a DevOps engineer at a startup. Your servers generate gigabytes of log files daily, and you need to find errors quickly:</em></p>

<pre><code># Production Log Analyzer
def analyze_server_logs(log_file_path):
    error_count = 0
    warning_count = 0
    errors = []
    
    with open(log_file_path, "r", encoding="utf-8") as log_file:
        for line_num, line in enumerate(log_file, 1):
            if "[ERROR]" in line:
                error_count += 1
                errors.append((line_num, line.strip()))
            elif "[WARNING]" in line:
                warning_count += 1
    
    print(f"📊 Log Analysis Report")
    print(f"Total Errors: {error_count}")
    print(f"Total Warnings: {warning_count}")
    print(f"\\n🔴 Recent Errors:")
    for line_num, error in errors[-5:]:  # Last 5 errors
        print(f"  Line {line_num}: {error[:80]}...")
    
    return errors

# Usage
errors = analyze_server_logs("server.log")
# This processes a 2GB file using only ~10KB memory!</code></pre>

<div class="tip-box">
<strong>💡 Best Practices:</strong>
<ul>
<li>Always use <code>with</code> statement - it automatically closes files even if errors occur</li>
<li>Use <code>encoding="utf-8"</code> for text files to support all languages</li>
<li>Read line by line for large files to save memory</li>
<li>Use <code>pathlib.Path</code> for modern, cross-platform file operations</li>
</ul>
</div>

<div class="warning-box">
<strong>⚠️ Common Mistakes:</strong>
<ul>
<li>Forgetting to close files (always use <code>with</code>!)</li>
<li>Not handling FileNotFoundError</li>
<li>Reading entire large files into memory</li>
<li>Not specifying encoding for non-ASCII text</li>
</ul>
</div>`,
                video: "https://www.youtube.com/embed/l_Qx1Bf3a74"
            },
            {
                name: "Writing Files",
                notes: `<h3>✍️ Writing Files in Python</h3>
<p>Writing to files is essential for saving data, creating logs, generating reports, and much more. Python provides simple yet powerful methods to create and modify files. The key is understanding the different write modes and when to use each one.</p>

<p>Think of file writing like using a notebook: sometimes you want a fresh page (overwrite), sometimes you want to add to existing notes (append), and sometimes you need to erase specific parts (read+write).</p>

<h3>📚 Writing Files - 10 Detailed Examples</h3>
<pre><code># Example 1: Basic Write (Overwrites Existing)
with open("output.txt", "w") as file:
    file.write("Hello, World!\\n")
    file.write("This is the second line.\\n")
    file.write("Python is awesome!")
# If file exists, it's completely replaced
# If file doesn't exist, it's created

# Example 2: Write Multiple Lines at Once
lines = [
    "Line 1: Introduction\\n",
    "Line 2: Main content\\n",
    "Line 3: Conclusion\\n"
]

with open("multiline.txt", "w") as file:
    file.writelines(lines)  # Writes all lines at once

# Example 3: Append Mode - Add to Existing File
with open("log.txt", "a") as file:
    file.write("New log entry added!\\n")
# Adds to end without deleting existing content

# Example 4: Write with Automatic Newlines
data = ["Apple", "Banana", "Cherry", "Date", "Elderberry"]

with open("fruits.txt", "w") as file:
    for fruit in data:
        file.write(fruit + "\\n")  # Manual newline

# Or use print() with file parameter
with open("fruits2.txt", "w") as file:
    for fruit in data:
        print(fruit, file=file)  # Automatic newline

# Example 5: Write Numbers and Other Data Types
numbers = [10, 20, 30, 40, 50]
pi = 3.14159
name = "Rahul"
is_active = True

with open("data.txt", "w") as file:
    # Everything must be converted to string!
    file.write(f"Name: {name}\\n")
    file.write(f"PI: {pi}\\n")
    file.write(f"Active: {is_active}\\n")
    file.write(f"Numbers: {numbers}\\n")

# Example 6: Exclusive Creation - Fail if Exists
try:
    with open("new_file.txt", "x") as file:  # "x" = exclusive create
        file.write("This is a brand new file!")
except FileExistsError:
    print("File already exists! Won't overwrite.")

# Example 7: Read-Write Mode (Careful!)
# "r+" - Read and write, file must exist
with open("existing.txt", "r+") as file:
    content = file.read()  # Read existing content
    file.write("\\nAppended text")  # Write at current position (end)

# "w+" - Write and read, creates new file (overwrites!)
with open("new_readwrite.txt", "w+") as file:
    file.write("Some content")
    file.seek(0)  # Go back to beginning
    print(file.read())  # Read what we wrote

# Example 8: Binary Write Mode
# Writing binary data (images, PDFs, etc.)
binary_data = bytes([0x89, 0x50, 0x4E, 0x47])  # PNG header bytes

with open("data.bin", "wb") as file:
    file.write(binary_data)

# Copy a binary file
with open("source.png", "rb") as src:
    with open("copy.png", "wb") as dst:
        dst.write(src.read())

# Example 9: Writing with Encoding (Hindi/Unicode)
hindi_text = "नमस्ते दुनिया! Python सीखो।"

with open("hindi.txt", "w", encoding="utf-8") as file:
    file.write(hindi_text)
# Always use encoding="utf-8" for non-ASCII text!

# Example 10: Buffered Writing for Performance
import io

# BufferedWriter for better performance with large data
with open("large_file.txt", "w", buffering=8192) as file:
    for i in range(100000):
        file.write(f"Line {i}: Some data here\\n")
# buffering=8192 means 8KB buffer size

# Using StringIO for in-memory file-like object
output = io.StringIO()
output.write("This goes to memory, not disk\\n")
output.write("Useful for testing\\n")
content = output.getvalue()  # Get all written content
print(content)</code></pre>

<h3>📋 File Write Modes Reference</h3>
<table>
<tr><th>Mode</th><th>Description</th><th>File Exists?</th><th>Creates?</th><th>Truncates?</th></tr>
<tr><td><code>"w"</code></td><td>Write only</td><td>Optional</td><td>Yes</td><td>Yes (erases all)</td></tr>
<tr><td><code>"a"</code></td><td>Append only</td><td>Optional</td><td>Yes</td><td>No</td></tr>
<tr><td><code>"x"</code></td><td>Exclusive create</td><td>Must NOT</td><td>Yes</td><td>N/A</td></tr>
<tr><td><code>"r+"</code></td><td>Read & write</td><td>Must exist</td><td>No</td><td>No</td></tr>
<tr><td><code>"w+"</code></td><td>Write & read</td><td>Optional</td><td>Yes</td><td>Yes</td></tr>
<tr><td><code>"a+"</code></td><td>Append & read</td><td>Optional</td><td>Yes</td><td>No</td></tr>
<tr><td><code>"wb"</code></td><td>Write binary</td><td>Optional</td><td>Yes</td><td>Yes</td></tr>
</table>

<h3>🌟 Real-Life Story: Building a Data Export System</h3>
<p><em>Imagine you're building an e-commerce system that needs to export order reports:</em></p>

<pre><code># Complete Order Report Generator
from datetime import datetime
from pathlib import Path

class ReportGenerator:
    def __init__(self, output_dir="reports"):
        self.output_dir = Path(output_dir)
        self.output_dir.mkdir(exist_ok=True)
    
    def generate_order_report(self, orders, format="txt"):
        """Generate order report in specified format"""
        timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
        filename = f"orders_{timestamp}.{format}"
        filepath = self.output_dir / filename
        
        if format == "txt":
            self._write_txt_report(orders, filepath)
        elif format == "csv":
            self._write_csv_report(orders, filepath)
        
        return filepath
    
    def _write_txt_report(self, orders, filepath):
        """Write plain text report"""
        with open(filepath, "w", encoding="utf-8") as f:
            # Header
            f.write("=" * 60 + "\\n")
            f.write("ORDER REPORT\\n")
            f.write(f"Generated: {datetime.now()}\\n")
            f.write("=" * 60 + "\\n\\n")
            
            total_revenue = 0
            
            # Order details
            for order in orders:
                f.write(f"Order #{order['id']}\\n")
                f.write(f"  Customer: {order['customer']}\\n")
                f.write(f"  Items: {', '.join(order['items'])}\\n")
                f.write(f"  Amount: ₹{order['amount']}\\n")
                f.write(f"  Status: {order['status']}\\n")
                f.write("-" * 40 + "\\n")
                total_revenue += order['amount']
            
            # Summary
            f.write(f"\\nTOTAL ORDERS: {len(orders)}\\n")
            f.write(f"TOTAL REVENUE: ₹{total_revenue}\\n")
        
        print(f"✅ Report saved: {filepath}")
    
    def _write_csv_report(self, orders, filepath):
        """Write CSV report"""
        import csv
        
        with open(filepath, "w", newline="", encoding="utf-8") as f:
            writer = csv.DictWriter(f, fieldnames=["id", "customer", "items", "amount", "status"])
            writer.writeheader()
            
            for order in orders:
                order_copy = order.copy()
                order_copy["items"] = ", ".join(order["items"])
                writer.writerow(order_copy)
        
        print(f"✅ CSV saved: {filepath}")
    
    def append_log(self, message):
        """Append to activity log"""
        log_file = self.output_dir / "activity.log"
        
        with open(log_file, "a", encoding="utf-8") as f:
            timestamp = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
            f.write(f"[{timestamp}] {message}\\n")

# Usage
generator = ReportGenerator()

orders = [
    {"id": 1001, "customer": "Rahul", "items": ["Phone", "Case"], "amount": 25000, "status": "Delivered"},
    {"id": 1002, "customer": "Priya", "items": ["Laptop"], "amount": 65000, "status": "Shipped"},
    {"id": 1003, "customer": "Amit", "items": ["Headphones", "Charger"], "amount": 3500, "status": "Processing"},
]

# Generate reports
generator.generate_order_report(orders, format="txt")
generator.generate_order_report(orders, format="csv")
generator.append_log("Generated daily order reports")</code></pre>

<div class="tip-box">
<strong>💡 Best Practices:</strong>
<ul>
<li>Always use <code>with</code> statement - ensures file is closed properly</li>
<li>Use <code>encoding="utf-8"</code> for text files to support all characters</li>
<li>Use <code>"a"</code> mode for logs to prevent accidental data loss</li>
<li>Use <code>"x"</code> mode when you don't want to overwrite existing files</li>
<li>Use <code>newline=""</code> with CSV to prevent blank rows on Windows</li>
</ul>
</div>

<div class="warning-box">
<strong>⚠️ Common Mistakes:</strong>
<ul>
<li>Using <code>"w"</code> mode accidentally erases existing file content!</li>
<li>Forgetting to convert non-strings before writing</li>
<li>Not handling UnicodeEncodeError for special characters</li>
<li>Forgetting <code>\\n</code> for newlines (write() doesn't add them)</li>
<li>Writing to a file opened in read-only mode</li>
</ul>
</div>`,
                video: "https://www.youtube.com/embed/l_Qx1Bf3a74"
            },
            {
                name: "Working with JSON",
                notes: `<h3>📄 Understanding JSON in Python</h3>
<p><strong>JSON</strong> (JavaScript Object Notation) is the most popular data format for APIs, configuration files, and data exchange. Python's built-in <code>json</code> module makes it incredibly easy to work with JSON data. It's the universal language that lets your Python code talk to web services, save settings, and share data!</p>

<p>Think of JSON as a universal translator: it takes Python data structures and converts them to text that any programming language can understand, and vice versa.</p>

<h3>📚 JSON Operations - 10 Detailed Examples</h3>
<pre><code># Example 1: Reading JSON from File
import json

with open("config.json", "r") as file:
    config = json.load(file)  # Returns Python dict
    
print(config["database"]["host"])
print(config["settings"]["debug"])

# Example 2: Reading JSON from String (API Response)
json_string = '{"name": "Rahul", "age": 25, "skills": ["Python", "JavaScript"]}'

data = json.loads(json_string)  # loads = load string
print(data["name"])        # Rahul
print(data["skills"][0])   # Python
print(type(data))          # <class 'dict'>

# Example 3: Writing Python Dict to JSON File
user_data = {
    "id": 1,
    "name": "Rahul Sharma",
    "email": "rahul@example.com",
    "is_active": True,
    "roles": ["admin", "developer"],
    "profile": {
        "age": 25,
        "city": "Mumbai"
    }
}

with open("user.json", "w") as file:
    json.dump(user_data, file, indent=4)  # Pretty print

# Example 4: Converting Python to JSON String
json_output = json.dumps(user_data, indent=2)
print(json_output)  # Nicely formatted JSON string

# Example 5: Handling Non-Serializable Types (datetime)
from datetime import datetime

data = {
    "event": "Meeting",
    "timestamp": datetime.now()  # This will cause error!
}

# Custom encoder for datetime
def json_encoder(obj):
    if isinstance(obj, datetime):
        return obj.isoformat()
    raise TypeError(f"Object of type {type(obj)} is not JSON serializable")

json_string = json.dumps(data, default=json_encoder)
print(json_string)  # {"event": "Meeting", "timestamp": "2024-01-15T10:30:00"}

# Example 6: Reading JSON with Custom Decoder
json_with_date = '{"event": "Meeting", "date": "2024-01-15T10:30:00"}'

def json_decoder(dct):
    for key, value in dct.items():
        if "date" in key.lower() or "time" in key.lower():
            try:
                dct[key] = datetime.fromisoformat(value)
            except (ValueError, TypeError):
                pass
    return dct

result = json.loads(json_with_date, object_hook=json_decoder)
print(result["date"])         # 2024-01-15 10:30:00
print(type(result["date"]))   # <class 'datetime.datetime'>

# Example 7: Handling JSON Errors
invalid_json = '{"name": "Rahul", age: 25}'  # Missing quotes around age

try:
    data = json.loads(invalid_json)
except json.JSONDecodeError as e:
    print(f"JSON Error: {e.msg}")
    print(f"Position: {e.pos}")
    print(f"Line: {e.lineno}, Column: {e.colno}")

# Example 8: Pretty Print vs Compact JSON
compact = json.dumps(user_data, separators=(",", ":"))  # Most compact
pretty = json.dumps(user_data, indent=4, sort_keys=True)  # Readable

print(f"Compact: {len(compact)} bytes")  # Smaller file size
print(f"Pretty: {len(pretty)} bytes")    # Larger but readable

# Example 9: Working with Nested JSON
api_response = {
    "status": "success",
    "data": {
        "users": [
            {"id": 1, "name": "Rahul", "orders": [101, 102]},
            {"id": 2, "name": "Priya", "orders": [103]}
        ],
        "total": 2
    }
}

# Access nested data safely
def safe_get(data, *keys, default=None):
    for key in keys:
        if isinstance(data, dict):
            data = data.get(key, default)
        elif isinstance(data, list) and isinstance(key, int):
            data = data[key] if key < len(data) else default
        else:
            return default
    return data

print(safe_get(api_response, "data", "users", 0, "name"))  # Rahul
print(safe_get(api_response, "data", "missing", default="Not found"))

# Example 10: JSON Lines (JSONL) - Multiple JSON Objects
# Great for logging and streaming data
logs = [
    {"timestamp": "2024-01-15T10:00:00", "level": "INFO", "message": "Started"},
    {"timestamp": "2024-01-15T10:00:01", "level": "DEBUG", "message": "Loading config"},
    {"timestamp": "2024-01-15T10:00:02", "level": "ERROR", "message": "Connection failed"}
]

# Write JSONL (one JSON object per line)
with open("logs.jsonl", "w") as file:
    for log in logs:
        file.write(json.dumps(log) + "\\n")

# Read JSONL
with open("logs.jsonl", "r") as file:
    for line in file:
        if line.strip():
            log = json.loads(line)
            print(f"[{log['level']}] {log['message']}")</code></pre>

<h3>📋 Python ↔ JSON Type Mapping</h3>
<table>
<tr><th>Python Type</th><th>JSON Type</th><th>Example</th></tr>
<tr><td><code>dict</code></td><td>object</td><td><code>{"key": "value"}</code></td></tr>
<tr><td><code>list, tuple</code></td><td>array</td><td><code>[1, 2, 3]</code></td></tr>
<tr><td><code>str</code></td><td>string</td><td><code>"hello"</code></td></tr>
<tr><td><code>int, float</code></td><td>number</td><td><code>42, 3.14</code></td></tr>
<tr><td><code>True</code></td><td>true</td><td><code>true</code></td></tr>
<tr><td><code>False</code></td><td>false</td><td><code>false</code></td></tr>
<tr><td><code>None</code></td><td>null</td><td><code>null</code></td></tr>
</table>

<h3>🌟 Real-Life Story: Building an API Client</h3>
<p><em>Imagine you're building a weather app that fetches data from an API:</em></p>

<pre><code># Weather API Client with JSON
import json
import urllib.request

class WeatherAPI:
    def __init__(self, api_key):
        self.api_key = api_key
        self.base_url = "https://api.weatherapi.com/v1"
        self.cache_file = "weather_cache.json"
    
    def get_weather(self, city):
        """Fetch weather for a city"""
        url = f"{self.base_url}/current.json?key={self.api_key}&q={city}"
        
        try:
            with urllib.request.urlopen(url) as response:
                json_data = response.read().decode("utf-8")
                data = json.loads(json_data)
                
                # Save to cache
                self._save_cache(city, data)
                
                return self._format_weather(data)
        except Exception as e:
            print(f"API Error: {e}")
            # Try loading from cache
            return self._load_cache(city)
    
    def _format_weather(self, data):
        """Format weather data into readable dict"""
        return {
            "city": data["location"]["name"],
            "country": data["location"]["country"],
            "temp_c": data["current"]["temp_c"],
            "condition": data["current"]["condition"]["text"],
            "humidity": data["current"]["humidity"],
            "wind_kph": data["current"]["wind_kph"]
        }
    
    def _save_cache(self, city, data):
        """Save to local JSON cache"""
        cache = self._load_all_cache()
        cache[city.lower()] = {
            "data": data,
            "timestamp": datetime.now().isoformat()
        }
        
        with open(self.cache_file, "w") as f:
            json.dump(cache, f, indent=2)
    
    def _load_cache(self, city):
        """Load from cache if available"""
        cache = self._load_all_cache()
        if city.lower() in cache:
            return self._format_weather(cache[city.lower()]["data"])
        return None
    
    def _load_all_cache(self):
        """Load entire cache file"""
        try:
            with open(self.cache_file, "r") as f:
                return json.load(f)
        except FileNotFoundError:
            return {}

# Usage
api = WeatherAPI("your_api_key")
weather = api.get_weather("Mumbai")
print(f"🌡️ {weather['city']}: {weather['temp_c']}°C, {weather['condition']}")</code></pre>

<div class="tip-box">
<strong>💡 Best Practices:</strong>
<ul>
<li>Use <code>json.load()</code> for files, <code>json.loads()</code> for strings</li>
<li>Always use <code>indent=4</code> for human-readable files</li>
<li>Use <code>sort_keys=True</code> for consistent output</li>
<li>Handle <code>JSONDecodeError</code> for invalid JSON</li>
<li>Use custom encoders for non-serializable types (datetime, sets, etc.)</li>
</ul>
</div>

<div class="warning-box">
<strong>⚠️ Common Mistakes:</strong>
<ul>
<li>Confusing <code>load/dump</code> (files) with <code>loads/dumps</code> (strings)</li>
<li>Trying to serialize non-JSON types (datetime, set, custom objects)</li>
<li>Not using <code>encoding="utf-8"</code> for non-ASCII characters</li>
<li>Using single quotes in JSON (only double quotes are valid!)</li>
</ul>
</div>`,
                video: "https://www.youtube.com/embed/DuQxARZH4x4"
            },
            {
                name: "Working with CSV",
                notes: `<h3>Reading CSV</h3>
<pre><code>import csv

# As list of lists
with open("data.csv", "r") as f:
    reader = csv.reader(f)
    for row in reader:
        print(row)

# As list of dicts
with open("data.csv", "r") as f:
    reader = csv.DictReader(f)
    for row in reader:
        print(row["name"], row["age"])</code></pre>

<h3>Writing CSV</h3>
<pre><code>import csv

# Write list of lists
data = [["Name", "Age"], ["Alice", 25], ["Bob", 30]]
with open("output.csv", "w", newline="") as f:
    writer = csv.writer(f)
    writer.writerows(data)

# Write list of dicts
data = [{"name": "Alice", "age": 25}, {"name": "Bob", "age": 30}]
with open("output.csv", "w", newline="") as f:
    writer = csv.DictWriter(f, fieldnames=["name", "age"])
    writer.writeheader()
    writer.writerows(data)</code></pre>`,
                video: "https://www.youtube.com/embed/l_Qx1Bf3a74"
            },
            {
                name: "Path Operations",
                notes: `<h3>Using pathlib (Modern Way)</h3>
<pre><code>from pathlib import Path

# Create path
path = Path("folder/file.txt")

# Path operations
print(path.exists())      # Check if exists
print(path.is_file())     # Is it a file?
print(path.is_dir())      # Is it a directory?
print(path.name)          # "file.txt"
print(path.stem)          # "file"
print(path.suffix)        # ".txt"
print(path.parent)        # "folder"

# Read/Write
content = path.read_text()
path.write_text("Hello!")

# List directory
for file in Path(".").iterdir():
    print(file)

# Glob pattern
for py_file in Path(".").glob("**/*.py"):
    print(py_file)</code></pre>

<h3>Creating Directories</h3>
<pre><code>from pathlib import Path

path = Path("new_folder/subfolder")
path.mkdir(parents=True, exist_ok=True)</code></pre>`,
                video: "https://www.youtube.com/embed/l_Qx1Bf3a74"
            }
        ]
    },
    {
        id: 7,
        title: "Error Handling",
        icon: "🛡️",
        time: "Week 7",
        subtopics: [
            {
                name: "Try-Except Blocks",
                notes: `<h3>🛡️ Understanding Exception Handling</h3>
<p>Exception handling is how we deal with errors gracefully in our programs. Instead of letting our program crash when something goes wrong, we can <strong>catch</strong> errors and handle them properly. This is crucial for building robust, user-friendly applications.</p>

<p>Think of it like this: when you drive a car, you don't just hope nothing goes wrong. You have seatbelts, airbags, and insurance - these are your "exception handlers" that protect you when the unexpected happens!</p>

<h3>🔧 The Try-Except Structure</h3>
<pre><code># Basic Structure
try:
    # Code that might cause an error (risky code)
    result = risky_operation()
except ErrorType:
    # Handle the error if it occurs
    handle_error()
else:
    # Runs ONLY if no exception occurred
    success_code()
finally:
    # ALWAYS runs, error or not (cleanup code)
    cleanup()</code></pre>

<h3>📚 Exception Handling - 10 Detailed Examples</h3>
<pre><code># Example 1: Basic Exception Handling
try:
    number = int(input("Enter a number: "))
    result = 100 / number
    print(f"Result: {result}")
except ValueError:
    print("❌ Please enter a valid number!")
except ZeroDivisionError:
    print("❌ Cannot divide by zero!")

# Example 2: Catching Multiple Exceptions in One Line
try:
    data = json.loads(user_input)
    value = data["key"]
except (json.JSONDecodeError, KeyError, TypeError) as e:
    print(f"❌ Data error: {e}")

# Example 3: Getting Exception Information
try:
    file = open("missing_file.txt")
except FileNotFoundError as error:
    print(f"Error type: {type(error).__name__}")  # FileNotFoundError
    print(f"Error message: {error}")              # No such file...
    print(f"Error args: {error.args}")            # ('missing_file.txt',)

# Example 4: The else Clause (runs if NO exception)
try:
    age = int(input("Enter age: "))
except ValueError:
    print("Invalid age!")
else:
    # Only runs if no exception occurred
    if age >= 18:
        print("You are an adult!")
    else:
        print("You are a minor.")

# Example 5: The finally Clause (ALWAYS runs)
connection = None
try:
    connection = database.connect()
    data = connection.fetch_all()
except DatabaseError as e:
    print(f"Database error: {e}")
finally:
    # This runs whether or not an exception occurred
    if connection:
        connection.close()
        print("Connection closed.")

# Example 6: Nested Try-Except
try:
    with open("config.json") as f:
        try:
            config = json.load(f)
        except json.JSONDecodeError:
            print("Invalid JSON! Using defaults.")
            config = {"debug": False}
except FileNotFoundError:
    print("Config not found! Creating new one.")
    config = {"debug": True}

# Example 7: Exception with Context Information
try:
    for i, item in enumerate(items):
        process(item)
except ProcessingError as e:
    print(f"Error processing item {i}: {e}")
    # Now we know WHICH item caused the error!

# Example 8: Catch All Exceptions (Use Sparingly!)
try:
    result = complex_operation()
except Exception as e:
    # Catches ANY exception
    print(f"Unexpected error: {type(e).__name__}: {e}")
    # Log for debugging
    import traceback
    traceback.print_exc()

# Example 9: Ignoring Specific Exceptions
try:
    os.remove("temp_file.txt")
except FileNotFoundError:
    pass  # It's okay if file doesn't exist

# Example 10: Combining All Parts
def safe_divide(a, b):
    try:
        result = a / b
    except ZeroDivisionError:
        print("Warning: Division by zero!")
        return None
    except TypeError:
        print("Warning: Invalid types for division!")
        return None
    else:
        print(f"Division successful: {a} / {b} = {result}")
        return result
    finally:
        print("Division operation completed.")

print(safe_divide(10, 2))   # Success!
print(safe_divide(10, 0))   # Handles zero
print(safe_divide("10", 2)) # Handles type error</code></pre>

<h3>📋 Common Built-in Exceptions</h3>
<table>
<tr><th>Exception</th><th>When It Occurs</th></tr>
<tr><td><code>ValueError</code></td><td>Wrong value (e.g., int("abc"))</td></tr>
<tr><td><code>TypeError</code></td><td>Wrong type (e.g., "2" + 2)</td></tr>
<tr><td><code>ZeroDivisionError</code></td><td>Division by zero</td></tr>
<tr><td><code>FileNotFoundError</code></td><td>File doesn't exist</td></tr>
<tr><td><code>KeyError</code></td><td>Dictionary key not found</td></tr>
<tr><td><code>IndexError</code></td><td>List index out of range</td></tr>
<tr><td><code>AttributeError</code></td><td>Object doesn't have attribute</td></tr>
<tr><td><code>ImportError</code></td><td>Module import failed</td></tr>
</table>

<h3>🌟 Real-Life Story: E-Commerce Payment System</h3>
<p><em>Imagine you're building a payment system for an e-commerce website. Robust error handling is CRITICAL here - you can't afford to lose money or confuse customers!</em></p>

<pre><code># E-Commerce Payment Processor
class PaymentProcessor:
    def process_payment(self, user_id, amount, card_details):
        transaction_id = None
        
        try:
            # Step 1: Validate input
            self._validate_payment(amount, card_details)
            
            # Step 2: Check user balance/credit
            self._check_credit_limit(user_id, amount)
            
            # Step 3: Process with payment gateway
            transaction_id = self._charge_card(card_details, amount)
            
            # Step 4: Update database
            self._record_transaction(user_id, transaction_id, amount)
            
        except InvalidCardError as e:
            return {"success": False, "error": f"Card error: {e}"}
        
        except InsufficientFundsError as e:
            return {"success": False, "error": "Insufficient funds"}
        
        except PaymentGatewayError as e:
            # Log for investigation, show generic message to user
            self._log_error(f"Gateway failed: {e}")
            return {"success": False, "error": "Payment service unavailable. Please try again."}
        
        except DatabaseError as e:
            # CRITICAL: Payment charged but not recorded!
            self._alert_admin(f"URGENT: Transaction {transaction_id} not recorded!")
            self._log_error(f"DB Error: {e}")
            # Still return success to user - we'll fix manually
            return {"success": True, "transaction_id": transaction_id, "warning": "Please check email"}
        
        except Exception as e:
            # Unexpected error - log everything
            self._log_error(f"Unexpected: {type(e).__name__}: {e}")
            return {"success": False, "error": "An error occurred. Please contact support."}
        
        else:
            # Everything worked!
            self._send_receipt(user_id, transaction_id)
            return {"success": True, "transaction_id": transaction_id}
        
        finally:
            # Always cleanup
            self._close_gateway_connection()

# This structure ensures:
# 1. User always gets a response
# 2. Errors are properly logged
# 3. Critical issues alert admins
# 4. Resources are always cleaned up</code></pre>

<div class="tip-box">
<strong>💡 Best Practices:</strong>
<ul>
<li>Catch <em>specific</em> exceptions, not generic <code>Exception</code></li>
<li>Use <code>finally</code> for cleanup (closing files, connections)</li>
<li>Log errors for debugging, show user-friendly messages</li>
<li>Don't hide errors - handle them appropriately</li>
<li>Use <code>else</code> for code that should only run on success</li>
</ul>
</div>

<div class="warning-box">
<strong>⚠️ Common Mistakes:</strong>
<ul>
<li>Catching <code>Exception</code> too broadly - hides real bugs</li>
<li>Using empty <code>except:</code> - never do this!</li>
<li>Putting too much code in <code>try</code> block</li>
<li>Not logging exceptions for debugging</li>
</ul>
</div>`,
                video: "https://www.youtube.com/embed/vLqO_F_R_gQ"
            },
            {
                name: "Raising Exceptions",
                notes: `<h3>🚨 Understanding raise Statement</h3>
<p>The <code>raise</code> statement lets you <strong>intentionally trigger exceptions</strong> when something goes wrong in your code. This is how you tell calling code "Hey, something bad happened that I can't handle!" - it's essential for input validation, enforcing rules, and creating robust APIs.</p>

<p>Think of <code>raise</code> like a fire alarm: when conditions are dangerous, you pull the alarm (raise exception) to alert everyone (calling code) about the problem!</p>

<h3>📚 Raising Exceptions - 10 Detailed Examples</h3>
<pre><code># Example 1: Basic raise with Built-in Exception
def divide(a, b):
    if b == 0:
        raise ZeroDivisionError("Cannot divide by zero!")
    return a / b

try:
    result = divide(10, 0)
except ZeroDivisionError as e:
    print(f"Error: {e}")  # Error: Cannot divide by zero!

# Example 2: Input Validation with ValueError
def validate_age(age):
    if not isinstance(age, int):
        raise TypeError(f"Age must be int, got {type(age).__name__}")
    if age < 0:
        raise ValueError("Age cannot be negative")
    if age > 150:
        raise ValueError("Age seems unrealistic (max 150)")
    return age

try:
    validate_age(-5)
except ValueError as e:
    print(f"Validation failed: {e}")

# Example 3: Multiple Validations
def create_user(username, email, password):
    # Username validation
    if not username:
        raise ValueError("Username cannot be empty")
    if len(username) < 3:
        raise ValueError("Username must be at least 3 characters")
    if not username.isalnum():
        raise ValueError("Username must be alphanumeric")
    
    # Email validation
    if "@" not in email or "." not in email:
        raise ValueError("Invalid email format")
    
    # Password validation
    if len(password) < 8:
        raise ValueError("Password must be at least 8 characters")
    if not any(c.isupper() for c in password):
        raise ValueError("Password must contain uppercase letter")
    if not any(c.isdigit() for c in password):
        raise ValueError("Password must contain a number")
    
    return {"username": username, "email": email}

# Example 4: Re-raising Exceptions (raise without argument)
def process_file(filename):
    try:
        with open(filename) as f:
            data = f.read()
            return process_data(data)
    except FileNotFoundError:
        print(f"⚠️ File not found: {filename}")
        raise  # Re-raise the same exception to caller!

# Example 5: Exception Chaining (from)
def load_config(filename):
    try:
        with open(filename) as f:
            import json
            return json.load(f)
    except FileNotFoundError as e:
        # New exception with original as cause
        raise RuntimeError(f"Config file missing: {filename}") from e
    except json.JSONDecodeError as e:
        raise RuntimeError(f"Invalid JSON in {filename}") from e

try:
    config = load_config("missing.json")
except RuntimeError as e:
    print(f"Error: {e}")
    print(f"Caused by: {e.__cause__}")  # Original exception

# Example 6: Conditional raise with assert
def calculate_discount(price, discount_percent):
    # assert raises AssertionError if condition is False
    assert price > 0, "Price must be positive"
    assert 0 <= discount_percent <= 100, "Discount must be 0-100%"
    
    return price * (1 - discount_percent / 100)

# Example 7: Raising in Properties (Getters/Setters)
class Temperature:
    def __init__(self, celsius=0):
        self.celsius = celsius  # Uses setter
    
    @property
    def celsius(self):
        return self._celsius
    
    @celsius.setter
    def celsius(self, value):
        if value < -273.15:
            raise ValueError("Temperature below absolute zero!")
        self._celsius = value

try:
    temp = Temperature(-300)
except ValueError as e:
    print(f"Invalid: {e}")

# Example 8: Raising in Context Managers
class DatabaseTransaction:
    def __init__(self, connection):
        self.connection = connection
        self.committed = False
    
    def __enter__(self):
        return self
    
    def __exit__(self, exc_type, exc_val, exc_tb):
        if not self.committed:
            self.connection.rollback()
            if exc_type is None:
                raise RuntimeError("Transaction not committed!")
        return False
    
    def commit(self):
        self.connection.commit()
        self.committed = True

# Example 9: Raising with Traceback Preservation
import sys

def risky_operation():
    try:
        return 1 / 0
    except ZeroDivisionError:
        # Get current exception info
        exc_info = sys.exc_info()
        # Do some logging...
        raise  # Re-raise preserving original traceback

# Example 10: raise from None (Hide original exception)
def connect_to_api(url):
    try:
        # Attempt connection with credentials
        internal_connection(url, secret_key="ABC123")
    except AuthError as e:
        # Hide internal details from users
        raise ConnectionError("Failed to connect") from None
        # 'from None' hides the AuthError (with secret key) from traceback</code></pre>

<h3>📋 When to Raise vs When to Return</h3>
<table>
<tr><th>Scenario</th><th>Approach</th><th>Example</th></tr>
<tr><td><strong>Invalid input</strong></td><td>raise ValueError</td><td><code>raise ValueError("Age must be positive")</code></td></tr>
<tr><td><strong>Wrong type</strong></td><td>raise TypeError</td><td><code>raise TypeError("Expected str")</code></td></tr>
<tr><td><strong>Not found (optional)</strong></td><td>Return None</td><td><code>return users.get(id)</code></td></tr>
<tr><td><strong>Not found (required)</strong></td><td>raise KeyError/LookupError</td><td><code>raise KeyError(f"User {id} not found")</code></td></tr>
<tr><td><strong>Permission denied</strong></td><td>raise PermissionError</td><td><code>raise PermissionError("Admin only")</code></td></tr>
<tr><td><strong>Impossible state</strong></td><td>raise RuntimeError</td><td><code>raise RuntimeError("Should never happen")</code></td></tr>
</table>

<h3>🌟 Real-Life Story: Form Validation System</h3>
<p><em>Building a robust user registration form with proper validation:</em></p>

<pre><code># Complete Form Validation with Custom Exceptions
class ValidationError(Exception):
    """Base validation error"""
    def __init__(self, field, message):
        self.field = field
        self.message = message
        super().__init__(f"{field}: {message}")

class RequiredFieldError(ValidationError):
    """Field is required but empty"""
    pass

class FormatError(ValidationError):
    """Field has wrong format"""
    pass

class RangeError(ValidationError):
    """Value out of valid range"""
    pass

class FormValidator:
    def __init__(self):
        self.errors = []
    
    def validate_required(self, field, value):
        if not value or (isinstance(value, str) and not value.strip()):
            raise RequiredFieldError(field, "This field is required")
    
    def validate_email(self, email):
        self.validate_required("email", email)
        if "@" not in email or "." not in email.split("@")[-1]:
            raise FormatError("email", "Invalid email format")
    
    def validate_password(self, password):
        self.validate_required("password", password)
        
        if len(password) < 8:
            raise RangeError("password", "Minimum 8 characters required")
        if not any(c.isupper() for c in password):
            raise FormatError("password", "Must contain uppercase letter")
        if not any(c.isdigit() for c in password):
            raise FormatError("password", "Must contain a number")
    
    def validate_age(self, age):
        if age is None:
            return  # Optional field
        
        if not isinstance(age, int):
            raise FormatError("age", "Must be a number")
        if age < 13:
            raise RangeError("age", "Must be at least 13 years old")
        if age > 120:
            raise RangeError("age", "Please enter a valid age")
    
    def validate_form(self, data):
        """Validate entire form, collect all errors"""
        self.errors = []
        
        # Validate each field
        validations = [
            ("email", lambda: self.validate_email(data.get("email"))),
            ("password", lambda: self.validate_password(data.get("password"))),
            ("age", lambda: self.validate_age(data.get("age")))
        ]
        
        for field, validate in validations:
            try:
                validate()
            except ValidationError as e:
                self.errors.append({"field": e.field, "message": e.message})
        
        if self.errors:
            raise ValidationError("form", f"{len(self.errors)} validation errors")
        
        return True

# Usage
validator = FormValidator()

form_data = {
    "email": "invalid-email",
    "password": "weak",
    "age": 10
}

try:
    validator.validate_form(form_data)
    print("✅ Form is valid!")
except ValidationError:
    print("❌ Validation failed:")
    for error in validator.errors:
        print(f"  • {error['field']}: {error['message']}")

# Output:
# ❌ Validation failed:
#   • email: Invalid email format
#   • password: Minimum 8 characters required
#   • age: Must be at least 13 years old</code></pre>

<div class="tip-box">
<strong>💡 Best Practices:</strong>
<ul>
<li>Use specific exception types (<code>ValueError</code>, not generic <code>Exception</code>)</li>
<li>Include helpful error messages explaining what went wrong</li>
<li>Use <code>raise from e</code> to chain exceptions and preserve context</li>
<li>Validate early (fail fast) - check inputs at the start of functions</li>
<li>Document which exceptions a function can raise in docstrings</li>
</ul>
</div>

<div class="warning-box">
<strong>⚠️ Common Mistakes:</strong>
<ul>
<li>Raising generic <code>Exception</code> - makes catching specific errors impossible</li>
<li>Raising exceptions for expected conditions (use return None instead)</li>
<li>Not including the original exception when chaining (<code>from e</code>)</li>
<li>Exposing sensitive information in exception messages</li>
</ul>
</div>`,
                video: "https://www.youtube.com/embed/vLqO_F_R_gQ"
            },
            {
                name: "Custom Exceptions",
                notes: `<h3>🎯 Creating Custom Exceptions</h3>
<p><strong>Custom exceptions</strong> let you create your own error types that are specific to your application's domain. Instead of generic errors, you have meaningful exception names like <code>InsufficientFundsError</code> or <code>InvalidProductError</code> that make your code more readable and errors easier to handle.</p>

<p>Think of custom exceptions like custom error codes: instead of a generic "Error 500", you get specific messages like "Insufficient Balance" or "Product Out of Stock" that tell you exactly what went wrong!</p>

<h3>📚 Custom Exceptions - 10 Detailed Examples</h3>
<pre><code># Example 1: Basic Custom Exception
class ValidationError(Exception):
    """Raised when input validation fails"""
    pass

def validate_email(email):
    if "@" not in email:
        raise ValidationError("Email must contain @")
    return True

try:
    validate_email("invalid-email")
except ValidationError as e:
    print(f"Validation failed: {e}")

# Example 2: Custom Exception with Extra Attributes
class InsufficientFundsError(Exception):
    """Raised when account has insufficient balance"""
    def __init__(self, balance, amount, currency="₹"):
        self.balance = balance
        self.amount = amount
        self.deficit = amount - balance
        self.currency = currency
        message = f"Cannot withdraw {currency}{amount}. Balance: {currency}{balance}. Deficit: {currency}{self.deficit}"
        super().__init__(message)

try:
    raise InsufficientFundsError(1000, 1500)
except InsufficientFundsError as e:
    print(e)  # Cannot withdraw ₹1500. Balance: ₹1000. Deficit: ₹500
    print(f"You need ₹{e.deficit} more!")

# Example 3: Exception Hierarchy
class AppError(Exception):
    """Base exception for our application"""
    pass

class DatabaseError(AppError):
    """Database-related errors"""
    pass

class ConnectionError(DatabaseError):
    """Database connection errors"""
    pass

class QueryError(DatabaseError):
    """Query execution errors"""
    pass

class AuthError(AppError):
    """Authentication errors"""
    pass

class LoginError(AuthError):
    """Login failed"""
    pass

class PermissionError(AuthError):
    """Permission denied"""
    pass

# Now you can catch specific or broad errors:
try:
    raise ConnectionError("Failed to connect to database")
except DatabaseError as e:  # Catches ConnectionError and QueryError
    print(f"DB Error: {e}")
except AppError as e:  # Catches ALL app errors
    print(f"App Error: {e}")

# Example 4: Exception with Error Codes
class APIError(Exception):
    """API error with HTTP-like status codes"""
    def __init__(self, code, message, details=None):
        self.code = code
        self.message = message
        self.details = details or {}
        super().__init__(f"[{code}] {message}")
    
    def to_dict(self):
        return {
            "error": True,
            "code": self.code,
            "message": self.message,
            "details": self.details
        }

class NotFoundError(APIError):
    def __init__(self, resource, resource_id):
        super().__init__(
            code=404,
            message=f"{resource} not found",
            details={"resource": resource, "id": resource_id}
        )

class BadRequestError(APIError):
    def __init__(self, message, field=None):
        details = {"field": field} if field else {}
        super().__init__(code=400, message=message, details=details)

try:
    raise NotFoundError("User", 12345)
except APIError as e:
    print(e.to_dict())
    # {'error': True, 'code': 404, 'message': 'User not found', 'details': {'resource': 'User', 'id': 12345}}

# Example 5: Exception with Custom String Representation
class FileProcessingError(Exception):
    def __init__(self, filename, line_number, message):
        self.filename = filename
        self.line_number = line_number
        self.message = message
        super().__init__(self.__str__())
    
    def __str__(self):
        return f"{self.filename}:{self.line_number}: {self.message}"
    
    def __repr__(self):
        return f"FileProcessingError('{self.filename}', {self.line_number}, '{self.message}')"

try:
    raise FileProcessingError("data.csv", 42, "Invalid date format")
except FileProcessingError as e:
    print(e)  # data.csv:42: Invalid date format

# Example 6: Retryable vs Non-Retryable Exceptions
class RetryableError(Exception):
    """Errors that can be retried"""
    pass

class PermanentError(Exception):
    """Errors that should not be retried"""
    pass

class TemporaryNetworkError(RetryableError):
    pass

class InvalidCredentialsError(PermanentError):
    pass

def api_call_with_retry(func, max_retries=3):
    for attempt in range(max_retries):
        try:
            return func()
        except RetryableError:
            print(f"Attempt {attempt + 1} failed, retrying...")
        except PermanentError as e:
            print(f"Permanent error, not retrying: {e}")
            raise
    raise Exception("Max retries exceeded")

# Example 7: Exception with Suggested Fix
class ConfigError(Exception):
    """Configuration error with suggestion"""
    def __init__(self, key, message, suggestion=None):
        self.key = key
        self.suggestion = suggestion
        full_message = f"Config error for '{key}': {message}"
        if suggestion:
            full_message += f"\\nSuggestion: {suggestion}"
        super().__init__(full_message)

try:
    raise ConfigError(
        "database_url",
        "Missing required configuration",
        suggestion="Add DATABASE_URL to your .env file"
    )
except ConfigError as e:
    print(e)

# Example 8: Exception Groups (Python 3.11+)
# For handling multiple exceptions at once
class MultipleValidationErrors(Exception):
    def __init__(self, errors):
        self.errors = errors
        super().__init__(f"{len(errors)} validation errors occurred")
    
    def __iter__(self):
        return iter(self.errors)

errors = [
    ValidationError("Email is required"),
    ValidationError("Password too short")
]
try:
    raise MultipleValidationErrors(errors)
except MultipleValidationErrors as e:
    for error in e:
        print(f"  - {error}")

# Example 9: Exception for Business Rules
class BusinessRuleError(Exception):
    """Violation of business rules"""
    def __init__(self, rule_name, message, context=None):
        self.rule_name = rule_name
        self.context = context or {}
        super().__init__(f"Rule '{rule_name}' violated: {message}")

class OrderLimitExceeded(BusinessRuleError):
    def __init__(self, current, limit):
        super().__init__(
            rule_name="MAX_ORDER_PER_DAY",
            message=f"Daily order limit exceeded ({current}/{limit})",
            context={"current": current, "limit": limit}
        )

# Example 10: Deprecated Feature Exception
class DeprecatedFeatureError(Exception):
    def __init__(self, old_feature, new_feature, removal_version):
        self.old_feature = old_feature
        self.new_feature = new_feature
        self.removal_version = removal_version
        super().__init__(
            f"'{old_feature}' is deprecated. Use '{new_feature}' instead. "
            f"Will be removed in version {removal_version}."
        )</code></pre>

<h3>📋 Exception Hierarchy Design</h3>
<table>
<tr><th>Level</th><th>Purpose</th><th>Example</th></tr>
<tr><td><strong>Base</strong></td><td>Application-wide errors</td><td><code>class AppError(Exception)</code></td></tr>
<tr><td><strong>Category</strong></td><td>Error categories</td><td><code>class DatabaseError(AppError)</code></td></tr>
<tr><td><strong>Specific</strong></td><td>Specific error types</td><td><code>class ConnectionError(DatabaseError)</code></td></tr>
</table>

<h3>🌟 Real-Life Story: E-Commerce Exception System</h3>
<p><em>Building a complete exception hierarchy for an e-commerce platform:</em></p>

<pre><code># E-Commerce Exception Hierarchy
class ECommerceError(Exception):
    """Base exception for e-commerce operations"""
    error_code = "ECM000"
    
    def __init__(self, message, details=None):
        self.details = details or {}
        super().__init__(message)
    
    def to_response(self):
        return {
            "success": False,
            "error": {
                "code": self.error_code,
                "message": str(self),
                "details": self.details
            }
        }

# Product Errors
class ProductError(ECommerceError):
    error_code = "PRD000"

class ProductNotFoundError(ProductError):
    error_code = "PRD001"
    
    def __init__(self, product_id):
        super().__init__(
            f"Product not found: {product_id}",
            details={"product_id": product_id}
        )

class OutOfStockError(ProductError):
    error_code = "PRD002"
    
    def __init__(self, product_id, requested, available):
        self.product_id = product_id
        self.requested = requested
        self.available = available
        super().__init__(
            f"Insufficient stock for product {product_id}",
            details={
                "product_id": product_id,
                "requested": requested,
                "available": available
            }
        )

# Order Errors
class OrderError(ECommerceError):
    error_code = "ORD000"

class EmptyCartError(OrderError):
    error_code = "ORD001"
    
    def __init__(self):
        super().__init__("Cannot place order with empty cart")

class PaymentError(OrderError):
    error_code = "ORD002"
    
    def __init__(self, reason, transaction_id=None):
        super().__init__(
            f"Payment failed: {reason}",
            details={"transaction_id": transaction_id}
        )

# User Errors
class UserError(ECommerceError):
    error_code = "USR000"

class AddressNotFoundError(UserError):
    error_code = "USR001"
    
    def __init__(self, address_id):
        super().__init__(f"Delivery address not found: {address_id}")

# Usage in Shopping Cart
class ShoppingCart:
    def __init__(self, user_id):
        self.user_id = user_id
        self.items = []
    
    def add_item(self, product_id, quantity):
        product = self._get_product(product_id)
        
        if product is None:
            raise ProductNotFoundError(product_id)
        
        if product["stock"] < quantity:
            raise OutOfStockError(product_id, quantity, product["stock"])
        
        self.items.append({"product": product, "quantity": quantity})
    
    def checkout(self, address_id, payment_method):
        if not self.items:
            raise EmptyCartError()
        
        address = self._get_address(address_id)
        if address is None:
            raise AddressNotFoundError(address_id)
        
        try:
            transaction = self._process_payment(payment_method)
        except Exception as e:
            raise PaymentError(str(e)) from e
        
        return {"order_id": "ORD12345", "total": self._calculate_total()}
    
    def _get_product(self, product_id):
        # Simulated product lookup
        return {"id": product_id, "name": "iPhone", "stock": 10, "price": 79999}
    
    def _get_address(self, address_id):
        return {"id": address_id, "city": "Mumbai"}
    
    def _process_payment(self, method):
        return {"transaction_id": "TXN123"}
    
    def _calculate_total(self):
        return sum(item["product"]["price"] * item["quantity"] for item in self.items)

# API endpoint usage
def place_order(cart, address_id, payment_method):
    try:
        order = cart.checkout(address_id, payment_method)
        return {"success": True, "order": order}
    except ECommerceError as e:
        return e.to_response()

# Test
cart = ShoppingCart("user123")
try:
    cart.add_item("PROD999", 100)  # More than stock
except OutOfStockError as e:
    print(e.to_response())
    # {'success': False, 'error': {'code': 'PRD002', 'message': 'Insufficient stock...', ...}}</code></pre>

<div class="tip-box">
<strong>💡 Best Practices:</strong>
<ul>
<li>Create a base exception for your app/module</li>
<li>Build a clear hierarchy (Base → Category → Specific)</li>
<li>Include useful attributes (error_code, details, etc.)</li>
<li>Add methods like <code>to_dict()</code> for API responses</li>
<li>Document your exceptions in docstrings</li>
</ul>
</div>

<div class="warning-box">
<strong>⚠️ Common Mistakes:</strong>
<ul>
<li>Making every exception inherit directly from <code>Exception</code></li>
<li>Not calling <code>super().__init__()</code> in custom exceptions</li>
<li>Including sensitive data in exception messages</li>
<li>Creating too many exception types (keep it manageable!)</li>
</ul>
</div>`,
                video: "https://www.youtube.com/embed/vLqO_F_R_gQ"
            },
            {
                name: "Logging",
                notes: `<h3>📝 Understanding Python Logging</h3>
<p><strong>Logging</strong> is the practice of recording events that happen during your program's execution. Unlike <code>print()</code> statements, logging provides structured output with timestamps, severity levels, and the ability to write to files. It's essential for debugging, monitoring, and auditing production applications.</p>

<p>Think of logging like a flight recorder (black box): it captures everything that happens so you can investigate issues later, even after the program has crashed!</p>

<h3>📚 Logging Examples - 10 Detailed Examples</h3>
<pre><code># Example 1: Basic Logging Setup
import logging

# Configure root logger
logging.basicConfig(
    level=logging.DEBUG,
    format='%(asctime)s - %(levelname)s - %(message)s'
)

# Log at different levels
logging.debug("🔍 Debug: Detailed information for debugging")
logging.info("ℹ️ Info: General information about program execution")
logging.warning("⚠️ Warning: Something unexpected happened")
logging.error("❌ Error: A serious problem occurred")
logging.critical("🔴 Critical: Program may not be able to continue")

# Example 2: Logging to Both Console and File
import logging

# Create logger
logger = logging.getLogger("MyApp")
logger.setLevel(logging.DEBUG)

# Console handler (INFO and above)
console_handler = logging.StreamHandler()
console_handler.setLevel(logging.INFO)
console_format = logging.Formatter('%(levelname)s: %(message)s')
console_handler.setFormatter(console_format)

# File handler (DEBUG and above)
file_handler = logging.FileHandler('app.log')
file_handler.setLevel(logging.DEBUG)
file_format = logging.Formatter('%(asctime)s - %(name)s - %(levelname)s - %(message)s')
file_handler.setFormatter(file_format)

# Add handlers to logger
logger.addHandler(console_handler)
logger.addHandler(file_handler)

logger.info("Starting application")  # Both console and file
logger.debug("Debug details")        # File only

# Example 3: Logging with Exception Traceback
import logging

logging.basicConfig(level=logging.DEBUG)

try:
    result = 10 / 0
except ZeroDivisionError:
    logging.error("Division failed!", exc_info=True)
    # exc_info=True includes full traceback in log

# Alternatively:
try:
    result = 10 / 0
except ZeroDivisionError:
    logging.exception("Division failed!")  # Same as error with exc_info=True

# Example 4: Named Loggers for Different Modules
# utils.py
import logging
logger = logging.getLogger("app.utils")

def helper_function():
    logger.debug("Helper function called")
    return "result"

# main.py
import logging
logger = logging.getLogger("app.main")

def main():
    logger.info("Application starting")
    result = helper_function()
    logger.info(f"Result: {result}")

# Example 5: Rotating File Handler (Prevent Huge Log Files)
import logging
from logging.handlers import RotatingFileHandler

logger = logging.getLogger("RotatingApp")
logger.setLevel(logging.DEBUG)

# Rotate when file reaches 5MB, keep 3 backup files
handler = RotatingFileHandler(
    'app.log',
    maxBytes=5*1024*1024,  # 5MB
    backupCount=3
)
handler.setFormatter(logging.Formatter('%(asctime)s - %(levelname)s - %(message)s'))
logger.addHandler(handler)

# app.log -> app.log.1 -> app.log.2 -> app.log.3 (oldest deleted)

# Example 6: Time-Based Rotating Handler
from logging.handlers import TimedRotatingFileHandler

handler = TimedRotatingFileHandler(
    'app.log',
    when='midnight',     # Rotate at midnight
    interval=1,          # Every 1 day
    backupCount=7        # Keep 7 days of logs
)

# when options: 'S', 'M', 'H', 'D', 'midnight', 'W0'-'W6' (weekday)

# Example 7: Custom Log Formatter with Colors
import logging

class ColorFormatter(logging.Formatter):
    COLORS = {
        'DEBUG': '\\033[36m',    # Cyan
        'INFO': '\\033[32m',     # Green
        'WARNING': '\\033[33m',  # Yellow
        'ERROR': '\\033[31m',    # Red
        'CRITICAL': '\\033[41m', # Red background
    }
    RESET = '\\033[0m'
    
    def format(self, record):
        color = self.COLORS.get(record.levelname, '')
        record.levelname = f"{color}{record.levelname}{self.RESET}"
        return super().format(record)

handler = logging.StreamHandler()
handler.setFormatter(ColorFormatter('%(levelname)s: %(message)s'))
logger = logging.getLogger("ColorApp")
logger.addHandler(handler)
logger.setLevel(logging.DEBUG)

# Example 8: Logging with Context (Extra Fields)
import logging

logging.basicConfig(
    level=logging.DEBUG,
    format='%(asctime)s - %(levelname)s - [%(user)s] %(message)s'
)

logger = logging.getLogger()

# Pass extra context
logger.info("User logged in", extra={"user": "rahul@email.com"})
logger.warning("Failed login attempt", extra={"user": "unknown"})

# Example 9: JSON Logging (for Log Aggregation)
import logging
import json
from datetime import datetime

class JSONFormatter(logging.Formatter):
    def format(self, record):
        log_data = {
            "timestamp": datetime.utcnow().isoformat(),
            "level": record.levelname,
            "message": record.getMessage(),
            "module": record.module,
            "function": record.funcName,
            "line": record.lineno
        }
        if record.exc_info:
            log_data["exception"] = self.formatException(record.exc_info)
        return json.dumps(log_data)

handler = logging.FileHandler('app.jsonl')
handler.setFormatter(JSONFormatter())
logger = logging.getLogger("JSONApp")
logger.addHandler(handler)

logger.info("Application started")
# Output: {"timestamp": "2024-01-15T10:30:00", "level": "INFO", "message": "Application started", ...}

# Example 10: Logging Configuration from File/Dict
import logging.config

config = {
    "version": 1,
    "disable_existing_loggers": False,
    "formatters": {
        "simple": {
            "format": "%(levelname)s - %(message)s"
        },
        "detailed": {
            "format": "%(asctime)s - %(name)s - %(levelname)s - %(message)s"
        }
    },
    "handlers": {
        "console": {
            "class": "logging.StreamHandler",
            "level": "INFO",
            "formatter": "simple"
        },
        "file": {
            "class": "logging.FileHandler",
            "filename": "app.log",
            "level": "DEBUG",
            "formatter": "detailed"
        }
    },
    "loggers": {
        "myapp": {
            "level": "DEBUG",
            "handlers": ["console", "file"]
        }
    }
}

logging.config.dictConfig(config)
logger = logging.getLogger("myapp")
logger.info("Configured via dict!")</code></pre>

<h3>📋 Logging Levels Reference</h3>
<table>
<tr><th>Level</th><th>Value</th><th>When to Use</th></tr>
<tr><td><code>DEBUG</code></td><td>10</td><td>Detailed debugging information</td></tr>
<tr><td><code>INFO</code></td><td>20</td><td>General operational events</td></tr>
<tr><td><code>WARNING</code></td><td>30</td><td>Something unexpected, but not an error</td></tr>
<tr><td><code>ERROR</code></td><td>40</td><td>Error occurred, operation failed</td></tr>
<tr><td><code>CRITICAL</code></td><td>50</td><td>Serious error, program may not continue</td></tr>
</table>

<h3>🌟 Real-Life Story: Production Application Logger</h3>
<p><em>Building a complete logging system for a web application:</em></p>

<pre><code># Complete Production Logging Setup
import logging
import logging.config
import os
from datetime import datetime

class AppLogger:
    """Production-ready logger with multiple outputs"""
    
    _instance = None
    
    def __new__(cls):
        if cls._instance is None:
            cls._instance = super().__new__(cls)
            cls._instance._setup_logging()
        return cls._instance
    
    def _setup_logging(self):
        # Create logs directory
        log_dir = "logs"
        os.makedirs(log_dir, exist_ok=True)
        
        # Configuration
        config = {
            "version": 1,
            "disable_existing_loggers": False,
            "formatters": {
                "console": {
                    "format": "%(levelname)s | %(name)s | %(message)s"
                },
                "file": {
                    "format": "%(asctime)s | %(levelname)s | %(name)s | %(funcName)s:%(lineno)d | %(message)s"
                }
            },
            "handlers": {
                "console": {
                    "class": "logging.StreamHandler",
                    "level": "INFO",
                    "formatter": "console",
                    "stream": "ext://sys.stdout"
                },
                "file": {
                    "class": "logging.handlers.RotatingFileHandler",
                    "level": "DEBUG",
                    "formatter": "file",
                    "filename": f"{log_dir}/app.log",
                    "maxBytes": 10485760,  # 10MB
                    "backupCount": 5
                },
                "error_file": {
                    "class": "logging.handlers.RotatingFileHandler",
                    "level": "ERROR",
                    "formatter": "file",
                    "filename": f"{log_dir}/error.log",
                    "maxBytes": 10485760,
                    "backupCount": 5
                }
            },
            "loggers": {
                "app": {
                    "level": "DEBUG",
                    "handlers": ["console", "file", "error_file"],
                    "propagate": False
                }
            }
        }
        
        logging.config.dictConfig(config)
        self.logger = logging.getLogger("app")
    
    def debug(self, message, **kwargs):
        self.logger.debug(message, extra=kwargs)
    
    def info(self, message, **kwargs):
        self.logger.info(message, extra=kwargs)
    
    def warning(self, message, **kwargs):
        self.logger.warning(message, extra=kwargs)
    
    def error(self, message, exc_info=False, **kwargs):
        self.logger.error(message, exc_info=exc_info, extra=kwargs)
    
    def critical(self, message, exc_info=False, **kwargs):
        self.logger.critical(message, exc_info=exc_info, extra=kwargs)

# Usage
logger = AppLogger()

# In your application
logger.info("Server starting on port 8000")
logger.debug("Database connection pool initialized")

try:
    # Some operation
    raise ValueError("Invalid user input")
except Exception as e:
    logger.error(f"Request failed: {e}", exc_info=True)

# Output to console:
# INFO | app | Server starting on port 8000
# 
# Output to app.log:
# 2024-01-15 10:30:00 | INFO | app | main:25 | Server starting on port 8000
# 2024-01-15 10:30:00 | DEBUG | app | main:26 | Database connection pool initialized</code></pre>

<div class="tip-box">
<strong>💡 Best Practices:</strong>
<ul>
<li>Use <code>getLogger(__name__)</code> for module-specific loggers</li>
<li>Never use <code>print()</code> for debugging - use <code>logging.debug()</code></li>
<li>Use <code>exc_info=True</code> to log full stack traces</li>
<li>Use RotatingFileHandler to prevent huge log files</li>
<li>Set different log levels for console (INFO) and file (DEBUG)</li>
</ul>
</div>

<div class="warning-box">
<strong>⚠️ Common Mistakes:</strong>
<ul>
<li>Logging sensitive data (passwords, API keys, personal info)</li>
<li>Calling <code>basicConfig()</code> multiple times (only first call works)</li>
<li>Not using lazy string formatting: <code>logger.debug("User: %s", user)</code></li>
<li>Forgetting to set log level (defaults to WARNING)</li>
</ul>
</div>`,
                video: "https://www.youtube.com/embed/vLqO_F_R_gQ"
            }
        ]
    },
    {
        id: 8,
        title: "Modules & Packages",
        icon: "📦",
        time: "Week 7-8",
        subtopics: [
            {
                name: "Importing Modules",
                notes: `<h3>📦 Understanding Modules in Python</h3>
<p>A <strong>module</strong> is simply a Python file (.py) that contains code - functions, classes, variables - that you can reuse in other programs. Think of modules like LEGO blocks: you write useful code once and snap it into any project that needs it!</p>

<p>Python comes with a huge <strong>Standard Library</strong> - hundreds of built-in modules for everything from math to web requests to file handling. This is why Python is called a "batteries included" language!</p>

<h3>📚 Import Methods - 10 Detailed Examples</h3>
<pre><code># Example 1: Basic Import
import math
print(math.sqrt(16))    # 4.0
print(math.pi)          # 3.141592653589793
print(math.ceil(4.2))   # 5
print(math.floor(4.8))  # 4

# Example 2: Import with Alias (Common for Long Names)
import datetime as dt
import numpy as np      # Very common in data science
import pandas as pd     # Very common in data science

today = dt.date.today()
print(f"Today: {today}")

# Example 3: Import Specific Items
from math import sqrt, pi, sin, cos
print(sqrt(25))  # 5.0 - No need for math. prefix!
print(pi)        # 3.14159...

# Example 4: Import with Alias for Specific Items
from datetime import datetime as dt
now = dt.now()
print(f"Current time: {now}")

# Example 5: Import All (NOT Recommended!)
from math import *  # Imports everything
# Why bad? You don't know what names are imported
# Can override your own variables accidentally!

# Example 6: Check What's in a Module
import json
print(dir(json))  # Lists all functions/classes
help(json.dumps)  # Shows documentation

# Example 7: Conditional Import (Version Compatibility)
try:
    import tomllib  # Python 3.11+
except ImportError:
    import tomli as tomllib  # Fallback for older versions

# Example 8: Lazy Import (Import When Needed)
def process_data(data):
    import pandas as pd  # Only imported when function is called
    df = pd.DataFrame(data)
    return df

# Example 9: Check if Module is Available
import importlib.util
spec = importlib.util.find_spec("numpy")
if spec is not None:
    import numpy as np
    print("NumPy is available!")
else:
    print("NumPy not installed!")

# Example 10: Relative Imports (Within Packages)
# In mypackage/utils.py:
from . import helpers           # From same package
from .helpers import format_date # Specific function
from .. import config           # From parent package</code></pre>

<h3>🛠️ Essential Built-in Modules</h3>
<table>
<tr><th>Module</th><th>Purpose</th><th>Common Uses</th></tr>
<tr><td><code>os</code></td><td>Operating System</td><td>File paths, directories, environment variables</td></tr>
<tr><td><code>sys</code></td><td>System</td><td>Command line args, Python path, exit</td></tr>
<tr><td><code>datetime</code></td><td>Date & Time</td><td>Dates, times, timedelta, formatting</td></tr>
<tr><td><code>json</code></td><td>JSON Handling</td><td>Parse JSON, create JSON</td></tr>
<tr><td><code>re</code></td><td>Regular Expressions</td><td>Pattern matching, text search</td></tr>
<tr><td><code>random</code></td><td>Randomness</td><td>Random numbers, shuffle, choices</td></tr>
<tr><td><code>pathlib</code></td><td>File Paths</td><td>Modern path handling</td></tr>
<tr><td><code>collections</code></td><td>Data Structures</td><td>Counter, defaultdict, namedtuple</td></tr>
</table>

<h3>🌟 Real-Life Story: Building a Web Scraper</h3>
<p><em>Imagine you're building a price tracker that monitors e-commerce websites. You'll use multiple modules together:</em></p>

<pre><code># Price Tracker using Multiple Modules
import requests           # For HTTP requests (external)
from bs4 import BeautifulSoup  # For HTML parsing (external)
import json               # For saving data
import datetime           # For timestamps
import time               # For delays
import smtplib            # For email alerts
from pathlib import Path  # For file paths

class PriceTracker:
    def __init__(self, products_file="products.json"):
        self.products_file = Path(products_file)
        self.products = self._load_products()
    
    def _load_products(self):
        if self.products_file.exists():
            with open(self.products_file) as f:
                return json.load(f)
        return []
    
    def check_price(self, url):
        response = requests.get(url, headers={"User-Agent": "Mozilla/5.0"})
        soup = BeautifulSoup(response.text, "html.parser")
        
        # Extract price (site-specific)
        price_elem = soup.select_one(".price-current")
        if price_elem:
            price = float(price_elem.text.replace("₹", "").replace(",", ""))
            return price
        return None
    
    def track_all(self):
        for product in self.products:
            current_price = self.check_price(product["url"])
            
            if current_price and current_price < product["target_price"]:
                self._send_alert(product, current_price)
            
            product["last_checked"] = datetime.datetime.now().isoformat()
            product["current_price"] = current_price
            
            time.sleep(2)  # Be nice to servers!
        
        self._save_products()
    
    def _send_alert(self, product, price):
        print(f"🎉 PRICE DROP! {product['name']} is now ₹{price}!")
        # Could send email/SMS here

# Usage
tracker = PriceTracker()
tracker.track_all()</code></pre>

<div class="tip-box">
<strong>💡 Best Practices:</strong>
<ul>
<li>Import modules at the top of your file</li>
<li>Use aliases for long module names (pd, np, dt)</li>
<li>Prefer specific imports over <code>import *</code></li>
<li>Group imports: standard library, third-party, local</li>
<li>Use <code>if __name__ == "__main__":</code> in modules</li>
</ul>
</div>

<div class="warning-box">
<strong>⚠️ Common Mistakes:</strong>
<ul>
<li>Circular imports (A imports B, B imports A)</li>
<li>Naming your file same as a module (e.g., json.py)</li>
<li>Using <code>from module import *</code></li>
<li>Not installing external modules (<code>pip install</code>)</li>
</ul>
</div>`,
                video: "https://www.youtube.com/embed/oU_fD8vE5d8"
            },
            {
                name: "Creating Modules",
                notes: `<h3>Create a Module (mymodule.py)</h3>
<pre><code># mymodule.py
def greet(name):
    return f"Hello, {name}!"

PI = 3.14159

class Calculator:
    def add(self, a, b):
        return a + b</code></pre>

<h3>Using Your Module</h3>
<pre><code># main.py
import mymodule

print(mymodule.greet("Alice"))
print(mymodule.PI)

calc = mymodule.Calculator()
print(calc.add(5, 3))</code></pre>

<h3>Module Name Check</h3>
<pre><code># mymodule.py
def main():
    print("Running as main script")

if __name__ == "__main__":
    # Only runs when executed directly
    main()</code></pre>`,
                video: "https://www.youtube.com/embed/oU_fD8vE5d8"
            },
            {
                name: "Packages & pip",
                notes: `<h3>📦 Understanding Packages</h3>
<p>A <strong>package</strong> is a way of organizing related modules into a directory hierarchy. It's essentially a folder containing an <code>__init__.py</code> file and multiple module files. <strong>pip</strong> is Python's package installer that lets you download and install third-party packages from PyPI (Python Package Index).</p>

<p>Think of packages like a well-organized library: each section (package) contains related books (modules), and pip is like Amazon - you can order any book you need!</p>

<h3>📚 Packages & pip - 10 Detailed Examples</h3>
<pre><code># Example 1: Package Structure
myproject/
├── main.py
└── mypackage/
    ├── __init__.py      # Makes folder a package
    ├── utils.py
    ├── database.py
    └── api/
        ├── __init__.py
        └── endpoints.py

# Example 2: __init__.py for Package Initialization
# mypackage/__init__.py
from .utils import helper_function
from .database import Database

# Now you can do:
# from mypackage import helper_function, Database

__version__ = "1.0.0"
__all__ = ["helper_function", "Database"]  # Controls * import

# Example 3: Relative Imports Within Package
# mypackage/api/endpoints.py
from ..database import Database      # Parent package
from ..utils import helper_function  # Sibling module
from . import some_module            # Same package

# Example 4: pip - Installing Packages
# Install from PyPI
pip install requests
pip install flask pandas numpy

# Install specific version
pip install requests==2.28.0
pip install "django>=4.0,<5.0"  # Version range

# Install latest
pip install --upgrade requests

# Install from Git repo
pip install git+https://github.com/user/repo.git

# Install in editable mode (for development)
pip install -e .

# Example 5: Managing Dependencies
# Create requirements.txt
pip freeze > requirements.txt

# Install from requirements.txt
pip install -r requirements.txt

# requirements.txt example:
# requests==2.28.0
# flask>=2.0.0
# pandas~=1.5.0  # Compatible release

# Example 6: pip Commands Reference
pip list                    # List installed packages
pip show requests           # Show package info
pip search flask            # Search PyPI (may be disabled)
pip uninstall requests      # Remove package
pip check                   # Check for broken dependencies
pip cache purge             # Clear pip cache

# Example 7: Creating Your Own Package
# setup.py (traditional)
from setuptools import setup, find_packages

setup(
    name="mypackage",
    version="1.0.0",
    author="Your Name",
    author_email="you@email.com",
    description="A useful package",
    packages=find_packages(),
    install_requires=[
        "requests>=2.25.0",
        "click>=8.0.0"
    ],
    python_requires=">=3.8",
    entry_points={
        "console_scripts": [
            "myapp=mypackage.cli:main"
        ]
    }
)

# Example 8: pyproject.toml (Modern Way)
# pyproject.toml
[build-system]
requires = ["setuptools>=61.0"]
build-backend = "setuptools.build_meta"

[project]
name = "mypackage"
version = "1.0.0"
description = "A useful package"
authors = [
    {name = "Your Name", email = "you@email.com"}
]
requires-python = ">=3.8"
dependencies = [
    "requests>=2.25.0",
    "click>=8.0.0"
]

[project.scripts]
myapp = "mypackage.cli:main"

# Example 9: Installing Local Package
# Install from current directory
pip install .

# Install in development mode
pip install -e .

# Build distribution
pip install build
python -m build  # Creates dist/ folder

# Upload to PyPI
pip install twine
twine upload dist/*

# Example 10: Requirements Best Practices
# requirements.txt - Production
requests==2.28.1
flask==2.2.2
gunicorn==20.1.0

# requirements-dev.txt - Development
-r requirements.txt
pytest==7.2.0
black==22.12.0
mypy==0.991

# Install dev dependencies
pip install -r requirements-dev.txt</code></pre>

<h3>📋 pip Commands Reference</h3>
<table>
<tr><th>Command</th><th>Description</th><th>Example</th></tr>
<tr><td><code>pip install</code></td><td>Install package</td><td><code>pip install requests</code></td></tr>
<tr><td><code>pip uninstall</code></td><td>Remove package</td><td><code>pip uninstall flask</code></td></tr>
<tr><td><code>pip list</code></td><td>List installed</td><td><code>pip list --outdated</code></td></tr>
<tr><td><code>pip show</code></td><td>Package info</td><td><code>pip show pandas</code></td></tr>
<tr><td><code>pip freeze</code></td><td>Output installed</td><td><code>pip freeze > req.txt</code></td></tr>
<tr><td><code>pip install -r</code></td><td>From requirements</td><td><code>pip install -r req.txt</code></td></tr>
<tr><td><code>pip install -e</code></td><td>Editable install</td><td><code>pip install -e .</code></td></tr>
</table>

<h3>🌟 Real-Life Story: Setting Up a Python Project</h3>
<p><em>Complete workflow for creating a professional Python package:</em></p>

<pre><code># Complete Project Setup Workflow

# 1. Create project structure
mkdir my_awesome_project
cd my_awesome_project

# Create package structure
mkdir -p src/mypackage
touch src/mypackage/__init__.py
touch src/mypackage/core.py
mkdir tests
touch tests/__init__.py
touch tests/test_core.py

# Final structure:
# my_awesome_project/
# ├── src/
# │   └── mypackage/
# │       ├── __init__.py
# │       └── core.py
# ├── tests/
# │   ├── __init__.py
# │   └── test_core.py
# ├── pyproject.toml
# ├── README.md
# └── .gitignore

# 2. Create pyproject.toml
cat > pyproject.toml << 'EOF'
[build-system]
requires = ["setuptools>=61.0"]
build-backend = "setuptools.build_meta"

[project]
name = "my-awesome-package"
version = "0.1.0"
description = "Does awesome things"
readme = "README.md"
requires-python = ">=3.8"
dependencies = [
    "requests>=2.25.0",
    "click>=8.0.0"
]

[project.optional-dependencies]
dev = [
    "pytest>=7.0.0",
    "black>=22.0.0",
    "mypy>=0.990"
]

[project.scripts]
awesome = "mypackage.cli:main"
EOF

# 3. Create virtual environment
python -m venv venv
source venv/bin/activate  # or venv\\Scripts\\activate on Windows

# 4. Install package in editable mode with dev dependencies
pip install -e ".[dev]"

# 5. Write your code
# src/mypackage/core.py
def awesome_function(name: str) -> str:
    \"\"\"Do something awesome\"\"\"
    return f"Hello, {name}! You're awesome!"

# src/mypackage/__init__.py
from .core import awesome_function
__version__ = "0.1.0"

# 6. Write tests
# tests/test_core.py
from mypackage import awesome_function

def test_awesome_function():
    result = awesome_function("Rahul")
    assert "Rahul" in result
    assert "awesome" in result.lower()

# 7. Run tests
pytest tests/

# 8. Build and publish (when ready)
python -m build
twine upload dist/*

# Now anyone can install your package:
# pip install my-awesome-package</code></pre>

<div class="tip-box">
<strong>💡 Best Practices:</strong>
<ul>
<li>Always use virtual environments for projects</li>
<li>Pin exact versions in production requirements</li>
<li>Use <code>pyproject.toml</code> for new projects</li>
<li>Separate dev requirements from production</li>
<li>Use <code>pip install -e .</code> during development</li>
</ul>
</div>

<div class="warning-box">
<strong>⚠️ Common Mistakes:</strong>
<ul>
<li>Installing packages globally - always use virtualenv!</li>
<li>Not pinning versions - leads to "works on my machine" issues</li>
<li>Forgetting <code>__init__.py</code> in package directories</li>
<li>Circular imports between modules</li>
</ul>
</div>`,
                video: "https://www.youtube.com/embed/U2ZN104hIcc"
            },
            {
                name: "Virtual Environments",
                notes: `<h3>🌐 Understanding Virtual Environments</h3>
<p>A <strong>virtual environment</strong> is an isolated Python installation with its own packages, separate from your system Python. It allows each project to have its own dependencies without conflicts. Imagine having Project A needing requests v2.25 and Project B needing requests v2.28 - virtual environments make this possible!</p>

<p>Think of virtual environments like separate apartments in a building - each has its own furniture (packages) and changes in one don't affect the others!</p>

<h3>📚 Virtual Environments - 10 Detailed Examples</h3>
<pre><code># Example 1: Creating Virtual Environment with venv (Built-in)
# Create new environment
python -m venv myenv

# What gets created:
# myenv/
# ├── Scripts/        # (Windows) or bin/ (Mac/Linux)
# │   ├── python.exe  # Isolated Python interpreter
# │   ├── pip.exe     # Isolated pip
# │   └── activate    # Activation script
# ├── Lib/            # Installed packages here
# └── pyvenv.cfg      # Configuration

# Example 2: Activating and Deactivating
# Windows (CMD)
myenv\\Scripts\\activate.bat

# Windows (PowerShell)
myenv\\Scripts\\Activate.ps1

# Mac/Linux
source myenv/bin/activate

# After activation, prompt changes:
# (myenv) C:\\project>

# Deactivate
deactivate

# Example 3: Using Different Python Versions
# Create with specific Python version
python3.11 -m venv py311env
python3.10 -m venv py310env

# Check Python version in env
python --version

# Example 4: Complete Project Setup Workflow
# Step 1: Create project folder
mkdir my_flask_app
cd my_flask_app

# Step 2: Create virtual environment
python -m venv venv

# Step 3: Activate it
# Windows:
venv\\Scripts\\activate
# Mac/Linux:
source venv/bin/activate

# Step 4: Install dependencies
pip install flask sqlalchemy requests

# Step 5: Freeze dependencies to file
pip freeze > requirements.txt

# Step 6: Add to .gitignore (IMPORTANT!)
echo "venv/" >> .gitignore

# Step 7: Share project - others can run:
git clone <your-repo>
cd my_flask_app
python -m venv venv
source venv/bin/activate  # or Windows equivalent
pip install -r requirements.txt

# Example 5: Using pip-tools for Better Dependency Management
# pip-tools separates direct dependencies from locked versions

# Install pip-tools
pip install pip-tools

# Create requirements.in (your direct dependencies)
# requirements.in:
flask
sqlalchemy
requests

# Compile to get locked versions
pip-compile requirements.in

# This creates requirements.txt with pinned versions:
# click==8.1.3       # via flask
# flask==2.2.2
# requests==2.28.1
# sqlalchemy==2.0.0
# ...

# Install locked requirements
pip-sync requirements.txt

# Example 6: Using virtualenv (More Features than venv)
# Install virtualenv
pip install virtualenv

# Create environment
virtualenv myenv

# Create with specific Python
virtualenv -p python3.10 myenv

# Copy system packages
virtualenv --system-site-packages myenv

# Example 7: Using Conda Environments
# Create conda environment
conda create --name myenv python=3.10

# Activate
conda activate myenv

# Install packages
conda install numpy pandas

# List environments
conda env list

# Export environment
conda env export > environment.yml

# Create from file
conda env create -f environment.yml

# Deactivate and remove
conda deactivate
conda env remove --name myenv

# Example 8: Using Poetry (Modern Alternative)
# Install Poetry
pip install poetry

# Create new project
poetry new my_project
cd my_project

# Add dependencies
poetry add flask requests

# Add dev dependencies  
poetry add --group dev pytest black

# Install all dependencies
poetry install

# Run in virtual environment
poetry run python my_script.py
poetry shell  # Activate shell

# Example 9: Environment Variables with dotenv
# Install
pip install python-dotenv

# Create .env file
# .env
DATABASE_URL=postgresql://localhost/mydb
SECRET_KEY=super_secret_key_123
DEBUG=True

# Load in Python
from dotenv import load_dotenv
import os

load_dotenv()

database_url = os.getenv("DATABASE_URL")
secret_key = os.getenv("SECRET_KEY")
debug = os.getenv("DEBUG", "False") == "True"

# Example 10: pyenv for Multiple Python Versions
# Install pyenv (Mac/Linux)
curl https://pyenv.run | bash

# List available versions
pyenv install --list

# Install Python versions
pyenv install 3.10.8
pyenv install 3.11.0

# Set global version
pyenv global 3.10.8

# Set local version (per project)
cd myproject
pyenv local 3.11.0

# Use with virtualenv
pyenv virtualenv 3.10.8 myproject-env
pyenv activate myproject-env</code></pre>

<h3>📋 Virtual Environment Tools Comparison</h3>
<table>
<tr><th>Tool</th><th>Built-in?</th><th>Best For</th><th>Features</th></tr>
<tr><td><code>venv</code></td><td>✅ Yes</td><td>Simple projects</td><td>Basic, lightweight</td></tr>
<tr><td><code>virtualenv</code></td><td>❌ No</td><td>More control</td><td>Faster, more options</td></tr>
<tr><td><code>conda</code></td><td>❌ No</td><td>Data science</td><td>Non-Python packages</td></tr>
<tr><td><code>poetry</code></td><td>❌ No</td><td>Modern projects</td><td>Dependency resolution</td></tr>
<tr><td><code>pipenv</code></td><td>❌ No</td><td>Pipfile workflow</td><td>Lock files, security</td></tr>
</table>

<h3>🌟 Real-Life Story: Managing Multiple Projects</h3>
<p><em>Handling multiple Python projects with different dependencies:</em></p>

<pre><code># Scenario: You work on 3 projects
# - Django 4.0 web app
# - Flask 2.0 API
# - Data science with older pandas

# Create separate environments for each
mkdir ~/projects
cd ~/projects

# Project 1: Django App
mkdir django_app && cd django_app
python -m venv venv
source venv/bin/activate
pip install django==4.0.0 djangorestframework
pip freeze > requirements.txt
deactivate
cd ..

# Project 2: Flask API
mkdir flask_api && cd flask_api
python -m venv venv
source venv/bin/activate
pip install flask==2.2.0 flask-restful redis
pip freeze > requirements.txt
deactivate
cd ..

# Project 3: Data Science
mkdir data_science && cd data_science
python -m venv venv
source venv/bin/activate
pip install pandas==1.4.0 numpy matplotlib jupyter
pip freeze > requirements.txt
deactivate
cd ..

# Quick switching between projects (add to ~/.bashrc or ~/.zshrc)
# Bash function for easy activation
activate_project() {
    cd ~/projects/$1
    source venv/bin/activate
    echo "Activated $1 environment"
}

# Usage:
# activate_project django_app
# activate_project flask_api
# activate_project data_science

# Each project is completely isolated!
# - django_app has Django 4.0
# - flask_api has Flask 2.2
# - data_science has pandas 1.4

# VS Code integration (settings.json)
{
    "python.defaultInterpreterPath": "./venv/bin/python",
    "python.terminal.activateEnvironment": true
}</code></pre>

<div class="tip-box">
<strong>💡 Best Practices:</strong>
<ul>
<li>Always create venv in project folder, name it <code>venv</code> or <code>.venv</code></li>
<li>Add <code>venv/</code> to <code>.gitignore</code> - never commit it!</li>
<li>Always commit <code>requirements.txt</code> to version control</li>
<li>Use pip-tools or poetry for better dependency management</li>
<li>Recreate venv if Python version changes</li>
</ul>
</div>

<div class="warning-box">
<strong>⚠️ Common Mistakes:</strong>
<ul>
<li>Installing packages globally instead of in venv</li>
<li>Committing venv folder to git (huge and platform-specific!)</li>
<li>Forgetting to activate before installing packages</li>
<li>Not updating requirements.txt after installing new packages</li>
<li>Using <code>pip</code> instead of <code>python -m pip</code> in scripts</li>
</ul>
</div>`,
                video: "https://www.youtube.com/embed/oU_fD8vE5d8"
            }
        ]
    },
    {
        id: 9,
        title: "Advanced Python",
        icon: "🚀",
        time: "Week 8-9",
        subtopics: [
            {
                name: "Generators & Iterators",
                notes: `<h3>🔄 Understanding Iterators and Generators</h3>
<p>In Python, an <strong>iterator</strong> is any object that can be iterated (looped) over. It implements two methods: <code>__iter__()</code> and <code>__next__()</code>. A <strong>generator</strong> is a special type of iterator that's easier to create - you just use the <code>yield</code> keyword instead of <code>return</code>.</p>

<p>The magic of generators is <strong>lazy evaluation</strong> - they don't generate all values at once but produce them one at a time, on demand. This makes them incredibly memory-efficient for large datasets. Imagine reading a 10GB log file - with a generator, you process one line at a time instead of loading the entire file into memory!</p>

<h3>🔨 Generators - 10 Detailed Examples</h3>
<pre><code># Example 1: Basic Generator Function
def count_up_to(n):
    """Generate numbers from 1 to n"""
    i = 1
    while i <= n:
        yield i  # yield pauses and returns value
        i += 1

# Using the generator
for num in count_up_to(5):
    print(num)  # 1, 2, 3, 4, 5

# Example 2: Generator vs List - Memory Comparison
import sys

# List - stores all values in memory
numbers_list = [x**2 for x in range(1000000)]
print(f"List size: {sys.getsizeof(numbers_list)} bytes")  # ~8MB

# Generator - stores only the formula
numbers_gen = (x**2 for x in range(1000000))
print(f"Generator size: {sys.getsizeof(numbers_gen)} bytes")  # ~120 bytes!

# Example 3: Infinite Generator
def infinite_counter(start=0):
    """Counts forever - be careful!"""
    n = start
    while True:
        yield n
        n += 1

counter = infinite_counter(100)
print(next(counter))  # 100
print(next(counter))  # 101
print(next(counter))  # 102
# Continues infinitely if you keep calling next()

# Example 4: Fibonacci Generator
def fibonacci():
    """Generate Fibonacci numbers infinitely"""
    a, b = 0, 1
    while True:
        yield a
        a, b = b, a + b

fib = fibonacci()
for _ in range(10):
    print(next(fib), end=" ")  # 0 1 1 2 3 5 8 13 21 34

# Example 5: Generator with send() method
def accumulator():
    """Receives values and accumulates them"""
    total = 0
    while True:
        value = yield total
        if value is not None:
            total += value

acc = accumulator()
next(acc)           # Start the generator
print(acc.send(10)) # 10
print(acc.send(20)) # 30
print(acc.send(5))  # 35

# Example 6: Generator Pipeline (chaining generators)
def read_lines(text):
    """Generate lines from text"""
    for line in text.split('\\n'):
        yield line

def filter_non_empty(lines):
    """Filter out empty lines"""
    for line in lines:
        if line.strip():
            yield line

def to_uppercase(lines):
    """Convert lines to uppercase"""
    for line in lines:
        yield line.upper()

# Chain the generators
text = """Hello World

Python is awesome

Generators rock!"""

pipeline = to_uppercase(filter_non_empty(read_lines(text)))
for line in pipeline:
    print(line)

# Example 7: Reading Large Files with Generator
def read_large_file(file_path):
    """Read a large file line by line without loading entirely"""
    with open(file_path, 'r') as f:
        for line in f:
            yield line.strip()

# Usage (won't run here but shows concept)
# for line in read_large_file("huge_10gb_file.txt"):
#     process(line)  # Processes one line at a time

# Example 8: Generator Expression vs List Comprehension
# List comprehension - creates entire list
sum_list = sum([x**2 for x in range(1000000)])

# Generator expression - more memory efficient
sum_gen = sum(x**2 for x in range(1000000))  # Note: no square brackets

# Example 9: yield from - Delegating to Sub-generator
def chain(*iterables):
    """Chain multiple iterables into one"""
    for iterable in iterables:
        yield from iterable  # Delegates to sub-generator

result = list(chain([1, 2], [3, 4], [5, 6]))
print(result)  # [1, 2, 3, 4, 5, 6]

# Example 10: Custom Iterator Class
class Range:
    """Custom range implementation"""
    def __init__(self, start, end, step=1):
        self.start = start
        self.end = end
        self.step = step
        self.current = start
    
    def __iter__(self):
        return self
    
    def __next__(self):
        if self.current >= self.end:
            raise StopIteration
        value = self.current
        self.current += self.step
        return value

for num in Range(0, 10, 2):
    print(num, end=" ")  # 0 2 4 6 8</code></pre>

<h3>🌟 Real-Life Story: Processing Server Logs</h3>
<p><em>Let's see how generators solve real-world big data problems:</em></p>

<pre><code># Real Log File Processor using Generators

import re
from datetime import datetime

def read_log_file(file_path):
    """Generator to read log file line by line"""
    with open(file_path, 'r', encoding='utf-8') as f:
        for line_num, line in enumerate(f, 1):
            yield line_num, line.strip()

def parse_log_entry(lines):
    """Parse each log line into structured data"""
    log_pattern = r'(\\d{4}-\\d{2}-\\d{2} \\d{2}:\\d{2}:\\d{2}) \\[(\\w+)\\] (.+)'
    
    for line_num, line in lines:
        match = re.match(log_pattern, line)
        if match:
            yield {
                'line_num': line_num,
                'timestamp': match.group(1),
                'level': match.group(2),
                'message': match.group(3)
            }

def filter_errors(entries):
    """Filter only ERROR level entries"""
    for entry in entries:
        if entry['level'] == 'ERROR':
            yield entry

def filter_by_date(entries, target_date):
    """Filter entries by specific date"""
    for entry in entries:
        if entry['timestamp'].startswith(target_date):
            yield entry

def analyze_logs(file_path, date_filter=None, errors_only=False):
    """Main analysis function using generator pipeline"""
    
    # Step 1: Read file (lazy - one line at a time)
    lines = read_log_file(file_path)
    
    # Step 2: Parse log entries
    entries = parse_log_entry(lines)
    
    # Step 3: Apply filters
    if errors_only:
        entries = filter_errors(entries)
    
    if date_filter:
        entries = filter_by_date(entries, date_filter)
    
    # Generate results one at a time
    for entry in entries:
        yield entry

# Example usage (simulated since we can't read actual file)
# Imagine this is processing a 50GB log file!

# for entry in analyze_logs("server.log", date_filter="2024-01-15", errors_only=True):
#     print(f"[Line {entry['line_num']}] {entry['timestamp']}: {entry['message']}")

# Memory usage stays constant regardless of file size!

# Demonstrating with sample data
sample_logs = """2024-01-15 10:30:45 [INFO] Server started
2024-01-15 10:31:00 [ERROR] Database connection failed
2024-01-15 10:31:15 [INFO] Retry successful
2024-01-15 10:32:00 [ERROR] API timeout on /users
2024-01-16 09:00:00 [INFO] New session started"""

# Simulate file reading
def simulate_file(content):
    for i, line in enumerate(content.split('\\n'), 1):
        yield i, line

lines = simulate_file(sample_logs)
entries = parse_log_entry(lines)
errors = filter_errors(entries)

print("Errors found:")
for error in errors:
    print(f"  Line {error['line_num']}: {error['message']}")

# Output:
# Errors found:
#   Line 2: Database connection failed
#   Line 4: API timeout on /users</code></pre>

<p><strong>Why this matters:</strong> A DevOps engineer at a company needed to analyze 50GB of server logs daily. Using traditional methods, this would require 50GB of RAM. With generators, the same analysis runs with just a few MB of memory! Each log line is processed and discarded before the next is loaded.</p>

<div class="tip-box">
<strong>💡 When to Use Generators:</strong>
<ul>
<li><strong>Large files:</strong> Reading files larger than available RAM</li>
<li><strong>Infinite sequences:</strong> Fibonacci numbers, sensor data streams</li>
<li><strong>Data pipelines:</strong> Chaining transformations efficiently</li>
<li><strong>Memory constraints:</strong> When you need to minimize memory usage</li>
<li><strong>Lazy evaluation:</strong> When you might not need all items</li>
</ul>
</div>

<div class="warning-box">
<strong>⚠️ Generator Gotchas:</strong>
<ul>
<li><strong>Single use:</strong> Once exhausted, you can't restart - create a new generator</li>
<li><strong>No indexing:</strong> You can't do generator[5] - must iterate</li>
<li><strong>Can't get length:</strong> len(generator) doesn't work</li>
<li><strong>Debugging harder:</strong> Values exist only during iteration</li>
</ul>
</div>`,
                video: "https://www.youtube.com/embed/IZaC7_Y_m24"
            },
            {
                name: "Context Managers",
                notes: `<h3>🔐 Understanding Context Managers</h3>
<p>A <strong>context manager</strong> is a Python object that properly manages resources - ensuring they're correctly set up, used, and cleaned up. The <code>with</code> statement uses context managers to handle resources like files, database connections, locks, and network sockets automatically.</p>

<p>Think of a context manager like a hotel room: you check in (enter), use the room (execute code), and check out (exit) - with housekeeping always cleaning up after you leave, no matter if you left normally or there was an emergency!</p>

<h3>📚 Context Manager Examples - 10 Detailed Examples</h3>
<pre><code># Example 1: Basic File Context Manager
with open("data.txt", "r") as file:
    content = file.read()
    print(content)
# File automatically closed after block, even if error occurs!

# Without context manager (bad practice)
file = open("data.txt", "r")
try:
    content = file.read()
finally:
    file.close()  # Must manually close!

# Example 2: Multiple Context Managers
with open("input.txt", "r") as f_in, open("output.txt", "w") as f_out:
    for line in f_in:
        f_out.write(line.upper())
# Both files properly closed!

# Example 3: Class-based Context Manager
class Timer:
    """Measure execution time of code block"""
    def __init__(self, name="Code"):
        self.name = name
    
    def __enter__(self):
        import time
        self.start = time.perf_counter()
        print(f"⏱️ {self.name} started...")
        return self  # Can return value to use in 'as' clause
    
    def __exit__(self, exc_type, exc_val, exc_tb):
        import time
        elapsed = time.perf_counter() - self.start
        print(f"⏱️ {self.name} finished in {elapsed:.4f}s")
        return False  # Don't suppress exceptions

with Timer("Data Processing"):
    total = sum(range(10000000))
# Output: ⏱️ Data Processing started...
#         ⏱️ Data Processing finished in 0.2341s

# Example 4: Context Manager with Return Value
class TempDirectory:
    """Create and automatically cleanup temp directory"""
    def __init__(self, prefix="temp_"):
        import tempfile
        self.prefix = prefix
    
    def __enter__(self):
        import tempfile
        self.path = tempfile.mkdtemp(prefix=self.prefix)
        print(f"📁 Created: {self.path}")
        return self.path  # Return path to use in 'as' clause
    
    def __exit__(self, exc_type, exc_val, exc_tb):
        import shutil
        shutil.rmtree(self.path)
        print(f"🗑️ Cleaned up: {self.path}")
        return False

with TempDirectory("my_app_") as temp_path:
    # Use temp_path for temporary files
    print(f"Working in: {temp_path}")
# Temp directory automatically deleted!

# Example 5: Decorator-based Context Manager
from contextlib import contextmanager

@contextmanager
def timer(name="Code"):
    import time
    start = time.perf_counter()
    print(f"⏱️ {name} started...")
    try:
        yield  # Everything before yield is __enter__, after is __exit__
    finally:
        elapsed = time.perf_counter() - start
        print(f"⏱️ {name} finished in {elapsed:.4f}s")

with timer("Sorting"):
    data = sorted(range(100000, 0, -1))

# Example 6: Context Manager for Changing Directory
from contextlib import contextmanager
import os

@contextmanager
def change_dir(path):
    """Temporarily change working directory"""
    original = os.getcwd()
    try:
        os.chdir(path)
        yield path
    finally:
        os.chdir(original)  # Always restore original!

with change_dir("/tmp"):
    print(f"Now in: {os.getcwd()}")
print(f"Back to: {os.getcwd()}")

# Example 7: Suppress Specific Exceptions
from contextlib import suppress

# Without suppress
try:
    os.remove("maybe_exists.txt")
except FileNotFoundError:
    pass

# With suppress (cleaner)
with suppress(FileNotFoundError):
    os.remove("maybe_exists.txt")
# No error even if file doesn't exist!

# Example 8: Redirect stdout/stderr
from contextlib import redirect_stdout, redirect_stderr
import io

# Capture print output
output = io.StringIO()
with redirect_stdout(output):
    print("This goes to StringIO, not console!")

captured = output.getvalue()
print(f"Captured: {captured}")

# Example 9: Context Manager for Locking (Thread Safety)
import threading

class ThreadSafeCounter:
    def __init__(self):
        self.value = 0
        self._lock = threading.Lock()
    
    def increment(self):
        with self._lock:  # Lock is a context manager!
            self.value += 1
            return self.value
    
    def get(self):
        with self._lock:
            return self.value

# Example 10: Nested Context Managers with ExitStack
from contextlib import ExitStack

# Open multiple files dynamically
filenames = ["file1.txt", "file2.txt", "file3.txt"]

with ExitStack() as stack:
    # Open all files at once
    files = [stack.enter_context(open(f, "w")) for f in filenames]
    
    for i, f in enumerate(files):
        f.write(f"Content for file {i}")
# All files properly closed!</code></pre>

<h3>📋 Context Manager Methods</h3>
<table>
<tr><th>Method</th><th>When Called</th><th>Purpose</th></tr>
<tr><td><code>__enter__()</code></td><td>At start of <code>with</code> block</td><td>Setup, return value for <code>as</code> clause</td></tr>
<tr><td><code>__exit__(exc_type, exc_val, exc_tb)</code></td><td>At end of <code>with</code> block</td><td>Cleanup, exception handling</td></tr>
</table>

<h3>🌟 Real-Life Story: Database Connection Manager</h3>
<p><em>Imagine you're building an app that needs reliable database connections:</em></p>

<pre><code># Production Database Connection Manager
import sqlite3
from contextlib import contextmanager

class DatabaseManager:
    """Robust database connection manager with transaction support"""
    
    def __init__(self, db_path):
        self.db_path = db_path
        self.connection = None
    
    def __enter__(self):
        self.connection = sqlite3.connect(self.db_path)
        self.connection.row_factory = sqlite3.Row
        print(f"📊 Connected to {self.db_path}")
        return self
    
    def __exit__(self, exc_type, exc_val, exc_tb):
        if exc_type is not None:
            # Error occurred - rollback!
            self.connection.rollback()
            print(f"❌ Error! Transaction rolled back: {exc_val}")
        else:
            # Success - commit!
            self.connection.commit()
            print("✅ Transaction committed")
        
        self.connection.close()
        print("🔌 Connection closed")
        return False  # Don't suppress exceptions
    
    def execute(self, query, params=()):
        cursor = self.connection.cursor()
        cursor.execute(query, params)
        return cursor
    
    def fetch_all(self, query, params=()):
        return self.execute(query, params).fetchall()
    
    @contextmanager
    def transaction(self):
        \"\"\"Nested transaction support\"\"\"
        try:
            yield self
            self.connection.commit()
        except Exception as e:
            self.connection.rollback()
            raise

# Usage - Safe database operations
with DatabaseManager("app.db") as db:
    # Create table
    db.execute(\"\"\"
        CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY,
            name TEXT NOT NULL,
            email TEXT UNIQUE
        )
    \"\"\")
    
    # Insert users (all or nothing!)
    db.execute("INSERT INTO users (name, email) VALUES (?, ?)", 
               ("Rahul", "rahul@email.com"))
    db.execute("INSERT INTO users (name, email) VALUES (?, ?)", 
               ("Priya", "priya@email.com"))
    
    # Query data
    users = db.fetch_all("SELECT * FROM users")
    for user in users:
        print(f"User: {user['name']} - {user['email']}")

# If any error occurs, ALL changes are rolled back!
# Connection is ALWAYS closed, even on error!</code></pre>

<p><strong>Why context managers are perfect here:</strong> Database connections are a precious resource. If you forget to close them, you get connection leaks. If errors occur during transactions, you need rollbacks. Context managers handle ALL of this automatically!</p>

<div class="tip-box">
<strong>💡 Best Practices:</strong>
<ul>
<li>Always use <code>with</code> for file operations - never manual open/close</li>
<li>Use <code>@contextmanager</code> for simple cases, class-based for complex ones</li>
<li>Return <code>False</code> from <code>__exit__</code> to let exceptions propagate</li>
<li>Use <code>ExitStack</code> when you need to manage dynamic number of resources</li>
<li>Context managers make your code exception-safe automatically!</li>
</ul>
</div>

<div class="warning-box">
<strong>⚠️ Common Mistakes:</strong>
<ul>
<li>Forgetting to return <code>False</code> from <code>__exit__</code> - returning <code>True</code> suppresses ALL exceptions!</li>
<li>Not using <code>try/finally</code> in decorator-based context managers</li>
<li>Using the resource after exiting the <code>with</code> block (file already closed!)</li>
<li>Not handling exceptions properly in <code>__exit__</code></li>
</ul>
</div>`,
                video: "https://www.youtube.com/embed/URBSvqib0xw"
            },
            {
                name: "Async Programming",
                notes: `<h3>⚡ Understanding Async Programming</h3>
<p><strong>Asynchronous programming</strong> lets your code do other things while waiting for slow operations like network requests, file I/O, or database queries. Instead of blocking and waiting, async code can switch to other tasks - making your programs much faster for I/O-bound operations!</p>

<p>Think of a restaurant: a synchronous waiter takes one order, waits in the kitchen until food is ready, serves it, then takes the next order. An async waiter takes multiple orders, sends them to the kitchen, and serves food as it becomes ready - much more efficient!</p>

<h3>📚 Async Examples - 10 Detailed Examples</h3>
<pre><code># Example 1: Basic Async Function
import asyncio

async def say_hello():
    """async def makes this a coroutine"""
    print("Hello...")
    await asyncio.sleep(1)  # Non-blocking wait
    print("World!")

# Run the async function
asyncio.run(say_hello())

# Example 2: Multiple Async Tasks (Sequential vs Concurrent)
async def fetch_data(name, delay):
    print(f"📡 Fetching {name}...")
    await asyncio.sleep(delay)  # Simulates network delay
    print(f"✅ {name} received!")
    return f"Data from {name}"

async def main_sequential():
    """Sequential - one after another (slow!)"""
    result1 = await fetch_data("API-1", 2)
    result2 = await fetch_data("API-2", 2)
    result3 = await fetch_data("API-3", 2)
    # Total time: 6 seconds!

async def main_concurrent():
    """Concurrent - all at once (fast!)"""
    results = await asyncio.gather(
        fetch_data("API-1", 2),
        fetch_data("API-2", 2),
        fetch_data("API-3", 2)
    )
    return results
    # Total time: 2 seconds!

asyncio.run(main_concurrent())

# Example 3: Creating Tasks for True Concurrency
async def main_with_tasks():
    # Create tasks - they start immediately!
    task1 = asyncio.create_task(fetch_data("Task-1", 2))
    task2 = asyncio.create_task(fetch_data("Task-2", 1))
    task3 = asyncio.create_task(fetch_data("Task-3", 3))
    
    # Do other work while tasks are running
    print("Tasks are running in background...")
    
    # Wait for all tasks to complete
    results = await asyncio.gather(task1, task2, task3)
    return results

asyncio.run(main_with_tasks())

# Example 4: Async with Timeout
async def slow_operation():
    await asyncio.sleep(10)
    return "Done"

async def main_with_timeout():
    try:
        # Wait max 2 seconds
        result = await asyncio.wait_for(slow_operation(), timeout=2.0)
    except asyncio.TimeoutError:
        print("⏰ Operation timed out!")

asyncio.run(main_with_timeout())

# Example 5: Async Context Manager (aiofiles)
# pip install aiofiles
import aiofiles

async def read_file_async(filename):
    async with aiofiles.open(filename, "r") as f:
        content = await f.read()
        return content

async def write_file_async(filename, content):
    async with aiofiles.open(filename, "w") as f:
        await f.write(content)

# Example 6: Async Generator
async def countdown(n):
    """Async generator - yields values asynchronously"""
    while n > 0:
        yield n
        await asyncio.sleep(0.5)
        n -= 1

async def main_generator():
    async for num in countdown(5):
        print(f"Countdown: {num}")

asyncio.run(main_generator())

# Example 7: Running in Thread Pool (for sync functions)
import asyncio

def blocking_io():
    """Simulates blocking I/O operation"""
    import time
    time.sleep(2)  # Blocking!
    return "Result from blocking operation"

async def main_with_thread():
    loop = asyncio.get_event_loop()
    
    # Run blocking function in thread pool
    result = await loop.run_in_executor(None, blocking_io)
    print(result)

asyncio.run(main_with_thread())

# Example 8: Semaphore - Limit Concurrent Operations
async def limited_fetch(semaphore, name, delay):
    async with semaphore:  # Only N tasks can enter at once
        print(f"🟢 {name} started")
        await asyncio.sleep(delay)
        print(f"🔴 {name} finished")
        return name

async def main_with_semaphore():
    # Allow max 2 concurrent operations
    semaphore = asyncio.Semaphore(2)
    
    tasks = [
        limited_fetch(semaphore, f"Task-{i}", 2)
        for i in range(5)
    ]
    
    results = await asyncio.gather(*tasks)
    print(f"All done: {results}")

asyncio.run(main_with_semaphore())

# Example 9: Producer-Consumer with Queue
async def producer(queue):
    for i in range(5):
        await asyncio.sleep(0.5)
        item = f"Item-{i}"
        await queue.put(item)
        print(f"📦 Produced: {item}")
    
    await queue.put(None)  # Signal end

async def consumer(queue):
    while True:
        item = await queue.get()
        if item is None:
            break
        print(f"🛒 Consumed: {item}")
        await asyncio.sleep(1)

async def main_queue():
    queue = asyncio.Queue()
    await asyncio.gather(
        producer(queue),
        consumer(queue)
    )

asyncio.run(main_queue())

# Example 10: Error Handling in Async
async def risky_operation(name, fail=False):
    await asyncio.sleep(0.5)
    if fail:
        raise ValueError(f"{name} failed!")
    return f"{name} succeeded"

async def main_error_handling():
    tasks = [
        risky_operation("Task-1"),
        risky_operation("Task-2", fail=True),
        risky_operation("Task-3")
    ]
    
    # gather with return_exceptions=True won't raise
    results = await asyncio.gather(*tasks, return_exceptions=True)
    
    for result in results:
        if isinstance(result, Exception):
            print(f"❌ Error: {result}")
        else:
            print(f"✅ Success: {result}")

asyncio.run(main_error_handling())</code></pre>

<h3>📋 Async Concepts Reference</h3>
<table>
<tr><th>Concept</th><th>Description</th><th>When to Use</th></tr>
<tr><td><code>async def</code></td><td>Defines a coroutine function</td><td>Any async function</td></tr>
<tr><td><code>await</code></td><td>Waits for async operation</td><td>Calling coroutines</td></tr>
<tr><td><code>asyncio.run()</code></td><td>Entry point for async code</td><td>Starting async from sync</td></tr>
<tr><td><code>asyncio.gather()</code></td><td>Run multiple coroutines concurrently</td><td>Parallel operations</td></tr>
<tr><td><code>asyncio.create_task()</code></td><td>Schedule coroutine to run</td><td>Fire-and-forget tasks</td></tr>
<tr><td><code>asyncio.wait_for()</code></td><td>Add timeout to operation</td><td>Prevent hanging</td></tr>
</table>

<h3>🌟 Real-Life Story: Async Web Scraper</h3>
<p><em>Imagine you need to scrape 100 web pages. Sequential: 100 seconds. Async: 10 seconds!</em></p>

<pre><code># Async Web Scraper with Rate Limiting
import asyncio
import aiohttp  # pip install aiohttp

class AsyncScraper:
    def __init__(self, max_concurrent=10):
        self.semaphore = asyncio.Semaphore(max_concurrent)
        self.results = []
        self.errors = []
    
    async def fetch_page(self, session, url):
        """Fetch single page with rate limiting"""
        async with self.semaphore:
            try:
                async with session.get(url, timeout=10) as response:
                    if response.status == 200:
                        html = await response.text()
                        print(f"✅ Fetched: {url[:50]}...")
                        return {"url": url, "content": html[:100], "status": "success"}
                    else:
                        return {"url": url, "error": f"Status {response.status}", "status": "error"}
            except Exception as e:
                self.errors.append({"url": url, "error": str(e)})
                return {"url": url, "error": str(e), "status": "error"}
    
    async def scrape_all(self, urls):
        """Scrape all URLs concurrently"""
        async with aiohttp.ClientSession() as session:
            tasks = [self.fetch_page(session, url) for url in urls]
            self.results = await asyncio.gather(*tasks)
        
        return self.results
    
    def get_summary(self):
        success = sum(1 for r in self.results if r["status"] == "success")
        errors = len(self.results) - success
        return f"✅ Success: {success} | ❌ Errors: {errors}"

# Usage
async def main():
    urls = [
        f"https://httpbin.org/delay/1?id={i}"
        for i in range(20)
    ]
    
    scraper = AsyncScraper(max_concurrent=5)
    
    import time
    start = time.time()
    results = await scraper.scrape_all(urls)
    elapsed = time.time() - start
    
    print(scraper.get_summary())
    print(f"⏱️ Total time: {elapsed:.2f}s")
    print(f"📊 Without async: ~{len(urls)}s")

asyncio.run(main())</code></pre>

<div class="tip-box">
<strong>💡 When to Use Async:</strong>
<ul>
<li><strong>I/O-bound tasks:</strong> Network requests, file operations, database queries</li>
<li><strong>Many concurrent operations:</strong> Web scraping, API calls, chat servers</li>
<li><strong>WebSockets:</strong> Real-time applications</li>
<li><strong>NOT for CPU-bound:</strong> Use multiprocessing for heavy calculations</li>
</ul>
</div>

<div class="warning-box">
<strong>⚠️ Common Mistakes:</strong>
<ul>
<li>Calling async function without <code>await</code> - returns coroutine, not result!</li>
<li>Using blocking <code>time.sleep()</code> instead of <code>asyncio.sleep()</code></li>
<li>Mixing sync and async incorrectly - use <code>run_in_executor()</code> for sync code</li>
<li>Not handling exceptions in gathered tasks</li>
</ul>
</div>`,
                video: "https://www.youtube.com/embed/t5Bo1Je9EmE"
            },
            {
                name: "Multithreading",
                notes: `<h3>🧵 Understanding Multithreading</h3>
<p><strong>Multithreading</strong> allows your program to run multiple tasks concurrently within a single process. Threads share the same memory space, making them lightweight but requiring careful handling of shared data. Perfect for I/O-bound tasks where you're waiting on external resources!</p>

<p>Think of threads like workers in an office sharing a single desk (memory). They can all work simultaneously, but need to coordinate when using shared resources to avoid chaos!</p>

<h3>📚 Threading Examples - 10 Detailed Examples</h3>
<pre><code># Example 1: Basic Thread Creation
import threading
import time

def worker(name, delay):
    print(f"🟢 {name} starting...")
    time.sleep(delay)
    print(f"✅ {name} finished!")

# Create and start threads
t1 = threading.Thread(target=worker, args=("Thread-1", 2))
t2 = threading.Thread(target=worker, args=("Thread-2", 1))

t1.start()
t2.start()

# Wait for both to complete
t1.join()
t2.join()
print("All threads done!")

# Example 2: Thread with Return Value (using queue)
from queue import Queue

def worker_with_result(name, result_queue):
    result = f"Result from {name}"
    result_queue.put(result)

results = Queue()
threads = []

for i in range(3):
    t = threading.Thread(target=worker_with_result, args=(f"Worker-{i}", results))
    threads.append(t)
    t.start()

for t in threads:
    t.join()

while not results.empty():
    print(results.get())

# Example 3: Thread Class (OOP approach)
class DownloadThread(threading.Thread):
    def __init__(self, url, filename):
        super().__init__()
        self.url = url
        self.filename = filename
        self.result = None
    
    def run(self):
        print(f"📥 Downloading {self.url}...")
        time.sleep(2)  # Simulate download
        self.result = f"Downloaded to {self.filename}"
        print(f"✅ {self.filename} complete!")

threads = [
    DownloadThread("url1.com", "file1.zip"),
    DownloadThread("url2.com", "file2.zip")
]

for t in threads:
    t.start()
for t in threads:
    t.join()
for t in threads:
    print(t.result)

# Example 4: Thread Synchronization with Lock
counter = 0
lock = threading.Lock()

def increment(times):
    global counter
    for _ in range(times):
        with lock:  # Thread-safe!
            counter += 1

threads = [threading.Thread(target=increment, args=(100000,)) for _ in range(5)]
for t in threads:
    t.start()
for t in threads:
    t.join()
print(f"Counter: {counter}")  # 500000 (correct with lock!)

# Example 5: Daemon Threads (background tasks)
def background_task():
    while True:
        print("🔄 Background task running...")
        time.sleep(1)

daemon = threading.Thread(target=background_task, daemon=True)
daemon.start()

# Main thread continues
time.sleep(3)
print("Main thread exits - daemon dies automatically!")

# Example 6: Thread Pool Executor (Modern Way)
from concurrent.futures import ThreadPoolExecutor, as_completed

def process_item(item):
    time.sleep(0.5)
    return f"Processed: {item}"

items = ["A", "B", "C", "D", "E"]

with ThreadPoolExecutor(max_workers=3) as executor:
    # submit() returns Future objects
    futures = {executor.submit(process_item, item): item for item in items}
    
    for future in as_completed(futures):
        item = futures[future]
        result = future.result()
        print(result)

# Example 7: Thread Pool with map() - Simpler
with ThreadPoolExecutor(max_workers=4) as executor:
    results = list(executor.map(process_item, items))
    print(results)

# Example 8: Condition Variable (Producer-Consumer)
import threading
from collections import deque

class Buffer:
    def __init__(self, max_size=5):
        self.buffer = deque()
        self.max_size = max_size
        self.condition = threading.Condition()
    
    def produce(self, item):
        with self.condition:
            while len(self.buffer) >= self.max_size:
                self.condition.wait()  # Wait if buffer full
            self.buffer.append(item)
            print(f"📦 Produced: {item}")
            self.condition.notify_all()
    
    def consume(self):
        with self.condition:
            while len(self.buffer) == 0:
                self.condition.wait()  # Wait if buffer empty
            item = self.buffer.popleft()
            print(f"🛒 Consumed: {item}")
            self.condition.notify_all()
            return item

# Example 9: Semaphore - Limit Resource Access
semaphore = threading.Semaphore(3)  # Max 3 concurrent

def limited_resource(name):
    with semaphore:
        print(f"🟢 {name} acquired resource")
        time.sleep(2)
        print(f"🔴 {name} released resource")

threads = [threading.Thread(target=limited_resource, args=(f"Worker-{i}",)) for i in range(10)]
for t in threads:
    t.start()
for t in threads:
    t.join()

# Example 10: RLock (Reentrant Lock) - Same thread can acquire multiple times
rlock = threading.RLock()

def recursive_function(n):
    with rlock:
        print(f"Level {n}")
        if n > 0:
            recursive_function(n - 1)

recursive_function(3)  # Would deadlock with regular Lock!</code></pre>

<h3>📋 Threading vs Async vs Multiprocessing</h3>
<table>
<tr><th>Approach</th><th>Best For</th><th>Parallelism</th><th>Memory</th></tr>
<tr><td><strong>Threading</strong></td><td>I/O-bound (simple)</td><td>Concurrent (not parallel)</td><td>Shared</td></tr>
<tr><td><strong>Async</strong></td><td>I/O-bound (many tasks)</td><td>Cooperative</td><td>Shared</td></tr>
<tr><td><strong>Multiprocessing</strong></td><td>CPU-bound</td><td>True parallel</td><td>Separate</td></tr>
</table>

<h3>🌟 Real-Life Story: Download Manager</h3>
<p><em>Build a multi-threaded download manager that downloads multiple files simultaneously:</em></p>

<pre><code># Multi-threaded Download Manager
import threading
from concurrent.futures import ThreadPoolExecutor, as_completed
from pathlib import Path
import time

class DownloadManager:
    def __init__(self, max_concurrent=4):
        self.max_concurrent = max_concurrent
        self.progress = {}
        self.lock = threading.Lock()
    
    def download_file(self, url, filename):
        """Simulate file download with progress"""
        file_size = 100  # Simulated size
        downloaded = 0
        
        with self.lock:
            self.progress[filename] = 0
        
        while downloaded < file_size:
            time.sleep(0.1)  # Simulate download time
            chunk = min(10, file_size - downloaded)
            downloaded += chunk
            
            with self.lock:
                self.progress[filename] = (downloaded / file_size) * 100
        
        return {"url": url, "filename": filename, "status": "completed"}
    
    def download_all(self, downloads):
        """Download multiple files with thread pool"""
        results = []
        
        with ThreadPoolExecutor(max_workers=self.max_concurrent) as executor:
            futures = {
                executor.submit(self.download_file, url, filename): filename
                for url, filename in downloads
            }
            
            for future in as_completed(futures):
                filename = futures[future]
                try:
                    result = future.result()
                    results.append(result)
                    print(f"✅ {filename} downloaded!")
                except Exception as e:
                    results.append({"filename": filename, "error": str(e)})
                    print(f"❌ {filename} failed: {e}")
        
        return results
    
    def get_progress(self):
        with self.lock:
            return dict(self.progress)

# Usage
manager = DownloadManager(max_concurrent=3)

downloads = [
    ("https://example.com/file1.zip", "file1.zip"),
    ("https://example.com/file2.zip", "file2.zip"),
    ("https://example.com/file3.zip", "file3.zip"),
    ("https://example.com/file4.zip", "file4.zip"),
]

# Start downloads in background thread
download_thread = threading.Thread(
    target=manager.download_all,
    args=(downloads,)
)
download_thread.start()

# Monitor progress
while download_thread.is_alive():
    print(f"Progress: {manager.get_progress()}")
    time.sleep(0.5)

download_thread.join()
print("All downloads complete!")</code></pre>

<div class="tip-box">
<strong>💡 Best Practices:</strong>
<ul>
<li>Use <code>ThreadPoolExecutor</code> - cleaner than manual thread management</li>
<li>Always use locks when accessing shared data</li>
<li>Use <code>daemon=True</code> for background tasks that should die with main thread</li>
<li>Prefer <code>with lock:</code> over <code>lock.acquire()/release()</code></li>
</ul>
</div>

<div class="warning-box">
<strong>⚠️ GIL and Common Mistakes:</strong>
<ul>
<li><strong>GIL (Global Interpreter Lock):</strong> Python threads don't run truly parallel for CPU-bound tasks. Use <code>multiprocessing</code> for CPU-intensive work!</li>
<li>Race conditions without proper locking</li>
<li>Deadlocks from improper lock ordering</li>
<li>Not joining threads before accessing their results</li>
</ul>
</div>`,
                video: "https://www.youtube.com/embed/IEEhzQoKtQU"
            },
            {
                name: "Type Hints",
                notes: `<h3>📝 Understanding Type Hints</h3>
<p><strong>Type hints</strong> are optional annotations that specify the expected types of variables, function parameters, and return values. While Python doesn't enforce them at runtime, they make your code more readable, enable IDE auto-completion, and allow static type checkers like <code>mypy</code> to catch bugs before running!</p>

<p>Think of type hints as documentation that never gets outdated - they show exactly what types your code expects and produces, making it easier for others (and future you!) to understand and maintain.</p>

<h3>📚 Type Hints Examples - 10 Detailed Examples</h3>
<pre><code># Example 1: Basic Function Type Hints
def greet(name: str) -> str:
    """Parameter type: str, Return type: str"""
    return f"Hello, {name}!"

def add(a: int, b: int) -> int:
    return a + b

def is_adult(age: int) -> bool:
    return age >= 18

# These work - just hints, not enforced at runtime!
greet(123)  # No error, but mypy will warn

# Example 2: Variable Annotations
name: str = "Rahul"
age: int = 25
price: float = 99.99
is_active: bool = True

# Type without initial value
user_id: int  # Declared but not assigned yet

# Example 3: Collection Types (Python 3.9+)
names: list[str] = ["Rahul", "Priya", "Amit"]
scores: dict[str, int] = {"Rahul": 95, "Priya": 88}
coordinates: tuple[float, float] = (3.14, 2.71)
unique_ids: set[int] = {1, 2, 3}

# Before Python 3.9, use typing module:
from typing import List, Dict, Tuple, Set
old_style: List[str] = ["a", "b", "c"]

# Example 4: Optional Types (can be None)
from typing import Optional

def find_user(user_id: int) -> Optional[str]:
    """Returns username or None if not found"""
    users = {1: "Rahul", 2: "Priya"}
    return users.get(user_id)

# Python 3.10+ alternative:
def find_user_new(user_id: int) -> str | None:
    return None

# Example 5: Union Types (multiple possible types)
from typing import Union

def parse_value(value: Union[int, str]) -> str:
    """Accepts int or str, returns str"""
    return str(value)

# Python 3.10+ syntax:
def parse_value_new(value: int | str) -> str:
    return str(value)

# Example 6: Callable Types (functions as arguments)
from typing import Callable

def apply_operation(
    x: int, 
    y: int, 
    operation: Callable[[int, int], int]
) -> int:
    """operation is a function that takes 2 ints and returns int"""
    return operation(x, y)

def add(a: int, b: int) -> int:
    return a + b

result = apply_operation(5, 3, add)  # 8

# Example 7: TypeVar for Generic Functions
from typing import TypeVar

T = TypeVar("T")  # Generic type

def first_item(items: list[T]) -> T:
    """Returns first item of any list type"""
    return items[0]

first_item([1, 2, 3])      # Returns int
first_item(["a", "b"])     # Returns str

# Example 8: Type Aliases (cleaner complex types)
from typing import TypeAlias

UserId: TypeAlias = int
UserData: TypeAlias = dict[str, str | int | list[str]]

def get_user(user_id: UserId) -> UserData:
    return {
        "id": user_id,
        "name": "Rahul",
        "roles": ["admin", "developer"]
    }

# Example 9: Class Type Hints
class User:
    def __init__(self, name: str, age: int) -> None:
        self.name: str = name
        self.age: int = age
        self.friends: list["User"] = []  # Forward reference
    
    def add_friend(self, friend: "User") -> None:
        self.friends.append(friend)
    
    @classmethod
    def from_dict(cls, data: dict[str, str | int]) -> "User":
        return cls(str(data["name"]), int(data["age"]))
    
    def __repr__(self) -> str:
        return f"User(name='{self.name}', age={self.age})"

# Example 10: Dataclass with Type Hints
from dataclasses import dataclass
from datetime import datetime

@dataclass
class Order:
    order_id: int
    customer_name: str
    items: list[str]
    total: float
    created_at: datetime
    is_shipped: bool = False  # Default value
    
    def ship(self) -> None:
        self.is_shipped = True

order = Order(
    order_id=12345,
    customer_name="Rahul",
    items=["Phone", "Case"],
    total=25999.99,
    created_at=datetime.now()
)

# Automatic __init__, __repr__, __eq__ generated!</code></pre>

<h3>📋 Common Type Hints Reference</h3>
<table>
<tr><th>Type</th><th>Syntax</th><th>Example</th></tr>
<tr><td><strong>Basic</strong></td><td><code>int, str, float, bool</code></td><td><code>age: int = 25</code></td></tr>
<tr><td><strong>List</strong></td><td><code>list[T]</code></td><td><code>names: list[str]</code></td></tr>
<tr><td><strong>Dict</strong></td><td><code>dict[K, V]</code></td><td><code>scores: dict[str, int]</code></td></tr>
<tr><td><strong>Optional</strong></td><td><code>T | None</code></td><td><code>user: str | None</code></td></tr>
<tr><td><strong>Union</strong></td><td><code>T1 | T2</code></td><td><code>id: int | str</code></td></tr>
<tr><td><strong>Any</strong></td><td><code>Any</code></td><td><code>data: Any</code></td></tr>
<tr><td><strong>Callable</strong></td><td><code>Callable[[args], ret]</code></td><td><code>fn: Callable[[int], str]</code></td></tr>
<tr><td><strong>Self</strong></td><td><code>Self</code></td><td>Method returning own type</td></tr>
</table>

<h3>🌟 Real-Life Story: Type-Safe API Response Handling</h3>
<p><em>Type hints make working with APIs much safer:</em></p>

<pre><code># Type-Safe API Client with Validation
from dataclasses import dataclass
from typing import TypeAlias, Optional
from datetime import datetime

# Type aliases for clarity
UserId: TypeAlias = int
Email: TypeAlias = str

@dataclass
class User:
    id: UserId
    name: str
    email: Email
    created_at: datetime
    is_premium: bool = False
    
    @classmethod
    def from_api_response(cls, data: dict) -> "User":
        return cls(
            id=data["id"],
            name=data["name"],
            email=data["email"],
            created_at=datetime.fromisoformat(data["created_at"]),
            is_premium=data.get("is_premium", False)
        )

@dataclass
class APIResponse:
    success: bool
    data: Optional[User]
    error: Optional[str] = None

def fetch_user(user_id: UserId) -> APIResponse:
    """Fetch user with proper typing"""
    # Simulated API call
    api_data = {
        "id": user_id,
        "name": "Rahul Sharma",
        "email": "rahul@example.com",
        "created_at": "2024-01-15T10:30:00",
        "is_premium": True
    }
    
    try:
        user = User.from_api_response(api_data)
        return APIResponse(success=True, data=user)
    except KeyError as e:
        return APIResponse(success=False, data=None, error=f"Missing field: {e}")

def process_user(response: APIResponse) -> str:
    """Process API response with type safety"""
    if not response.success:
        return f"Error: {response.error}"
    
    user = response.data
    if user is None:
        return "No user data"
    
    # IDE knows user is User type here!
    status = "Premium 👑" if user.is_premium else "Standard"
    return f"{user.name} ({user.email}) - {status}"

# Usage
response = fetch_user(123)
print(process_user(response))

# Run mypy for static type checking:
# $ mypy your_script.py
# Success: no issues found in 1 source file</code></pre>

<h3>🔧 Using mypy for Type Checking</h3>
<pre><code># Install mypy
pip install mypy

# Check a file
mypy your_script.py

# Check with strict mode (catch more issues)
mypy --strict your_script.py

# Generate type stubs for libraries
mypy --install-types

# Common mypy.ini configuration
[mypy]
python_version = 3.10
warn_return_any = True
warn_unused_configs = True
disallow_untyped_defs = True</code></pre>

<div class="tip-box">
<strong>💡 Best Practices:</strong>
<ul>
<li>Use Python 3.10+ syntax (<code>int | str</code>) when possible</li>
<li>Use <code>@dataclass</code> for data containers - free type hints!</li>
<li>Add return type <code>-> None</code> for functions that don't return</li>
<li>Use <code>TypeAlias</code> for complex types to improve readability</li>
<li>Run mypy in CI/CD to catch type errors early</li>
</ul>
</div>

<div class="warning-box">
<strong>⚠️ Common Mistakes:</strong>
<ul>
<li>Type hints don't enforce types at runtime - they're just hints!</li>
<li>Mutable default values in dataclass (<code>list</code>) - use <code>field(default_factory=list)</code></li>
<li>Forgetting forward references for classes referencing themselves</li>
<li>Using old <code>typing.List</code> on Python 3.9+ (use <code>list[T]</code>)</li>
</ul>
</div>`,
                video: "https://www.youtube.com/embed/QORvB-_mbZ0"
            }
        ]
    },
    {
        id: 10,
        title: "Projects & Practice",
        icon: "💪",
        time: "Week 9-10",
        subtopics: [
            {
                name: "Project: Expense Tracker App",
                notes: `<h3>🎯 Project Overview: Personal Expense Tracker</h3>
<p>Build a complete expense tracking application that helps users manage their finances. This project teaches you file handling, data structures, date manipulation, and creating an interactive CLI application.</p>

<h3>📋 Project Requirements</h3>
<ul>
<li>Add/Edit/Delete expenses with categories</li>
<li>View expenses by date range, category, or month</li>
<li>Generate spending reports and summaries</li>
<li>Save data to JSON file (persistent storage)</li>
<li>Budget alerts when spending exceeds limits</li>
</ul>

<h3>🛠️ Step-by-Step Implementation</h3>

<h4>Step 1: Project Setup</h4>
<ol>
<li>Create a new folder: <code>expense_tracker/</code></li>
<li>Create files: <code>main.py</code>, <code>expense.py</code>, <code>storage.py</code>, <code>reports.py</code></li>
<li>Create <code>data/</code> folder for JSON files</li>
</ol>

<h4>Step 2: Create the Expense Class (expense.py)</h4>
<ol>
<li>Define an <code>Expense</code> class with attributes: id, amount, category, description, date</li>
<li>Add a <code>__init__</code> method to initialize all attributes</li>
<li>Add <code>to_dict()</code> method to convert expense to dictionary</li>
<li>Add <code>from_dict()</code> class method to create expense from dictionary</li>
<li>Add <code>__str__</code> for nice display format</li>
</ol>

<h4>Step 3: Build Storage Module (storage.py)</h4>
<ol>
<li>Create <code>load_expenses()</code> function to read from JSON file</li>
<li>Create <code>save_expenses()</code> function to write to JSON file</li>
<li>Create <code>get_next_id()</code> function for auto-incrementing IDs</li>
<li>Handle file not found errors gracefully</li>
<li>Use <code>pathlib.Path</code> for cross-platform file paths</li>
</ol>

<h4>Step 4: Implement CRUD Operations (main.py)</h4>
<ol>
<li>Create <code>add_expense()</code> - prompt user for details, validate input</li>
<li>Create <code>view_expenses()</code> - display all expenses in table format</li>
<li>Create <code>edit_expense()</code> - find by ID and update fields</li>
<li>Create <code>delete_expense()</code> - remove expense by ID with confirmation</li>
<li>Create <code>search_expenses()</code> - filter by category, date range, or keyword</li>
</ol>

<h4>Step 5: Create Reports Module (reports.py)</h4>
<ol>
<li>Create <code>monthly_summary()</code> - group expenses by month</li>
<li>Create <code>category_breakdown()</code> - total spending per category</li>
<li>Create <code>daily_average()</code> - calculate average daily spending</li>
<li>Create <code>export_to_csv()</code> - generate CSV report</li>
</ol>

<h4>Step 6: Build Interactive Menu</h4>
<ol>
<li>Create main menu with numbered options</li>
<li>Use while loop for continuous operation</li>
<li>Handle invalid input gracefully</li>
<li>Add quit option to exit program</li>
</ol>

<h4>Step 7: Add Budget Alerts</h4>
<ol>
<li>Create <code>settings.json</code> to store budget limits per category</li>
<li>Check spending against budget after each expense</li>
<li>Display warning when approaching/exceeding budget</li>
</ol>

<h3>🏆 Learning Outcomes</h3>
<ul>
<li>Object-Oriented Programming (classes, methods)</li>
<li>File I/O with JSON</li>
<li>Date and time manipulation</li>
<li>Data validation and error handling</li>
<li>Modular code organization</li>
</ul>

<div class="tip-box">
<strong>💡 Extension Ideas:</strong>
<ul>
<li>Add data visualization with matplotlib charts</li>
<li>Create a web interface using Flask</li>
<li>Add recurring expense support</li>
<li>Implement data export to Excel</li>
</ul>
</div>`,
                video: "https://www.youtube.com/embed/HTD86h69PtE"
            },
            {
                name: "Project: Weather Dashboard",
                notes: `<h3>🌤️ Project Overview: Weather Dashboard App</h3>
<p>Build a weather application that fetches real-time weather data from an API and displays it beautifully. This project teaches you API integration, JSON parsing, and working with external services.</p>

<h3>📋 Project Requirements</h3>
<ul>
<li>Fetch current weather for any city</li>
<li>Display temperature, humidity, wind speed, conditions</li>
<li>5-day weather forecast</li>
<li>Save favorite cities</li>
<li>Handle API errors gracefully</li>
</ul>

<h3>🛠️ Step-by-Step Implementation</h3>

<h4>Step 1: API Setup</h4>
<ol>
<li>Go to <a href="https://openweathermap.org/api" target="_blank">OpenWeatherMap</a> and create free account</li>
<li>Get your API key from the dashboard</li>
<li>Create <code>config.py</code> file to store API key securely</li>
<li>Read the API documentation to understand endpoints</li>
</ol>

<h4>Step 2: Project Structure</h4>
<ol>
<li>Create folder: <code>weather_app/</code></li>
<li>Create files: <code>main.py</code>, <code>weather_api.py</code>, <code>display.py</code>, <code>config.py</code></li>
<li>Create virtual environment: <code>python -m venv venv</code></li>
<li>Install required package: <code>pip install requests</code></li>
</ol>

<h4>Step 3: Build API Module (weather_api.py)</h4>
<ol>
<li>Create <code>get_current_weather(city)</code> function</li>
<li>Construct API URL with city name and API key</li>
<li>Use <code>requests.get()</code> to fetch data</li>
<li>Parse JSON response into Python dictionary</li>
<li>Handle HTTP errors (404 city not found, 401 invalid API key)</li>
</ol>

<h4>Step 4: Create Weather Data Parser</h4>
<ol>
<li>Extract temperature from response (convert Kelvin to Celsius)</li>
<li>Extract humidity, wind speed, weather description</li>
<li>Extract weather icon code for display</li>
<li>Create <code>WeatherData</code> dataclass to store parsed data</li>
</ol>

<h4>Step 5: Build Display Module (display.py)</h4>
<ol>
<li>Create <code>display_current_weather()</code> with formatted output</li>
<li>Use ASCII art or emojis for weather conditions (☀️ 🌧️ ⛈️ 🌨️)</li>
<li>Create table format for forecast data</li>
<li>Add colors using ANSI codes or colorama library</li>
</ol>

<h4>Step 6: Implement 5-Day Forecast</h4>
<ol>
<li>Use forecast endpoint: <code>/forecast</code></li>
<li>Parse multiple forecast entries</li>
<li>Group by date and calculate daily highs/lows</li>
<li>Display forecast in readable format</li>
</ol>

<h4>Step 7: Add Favorite Cities</h4>
<ol>
<li>Create <code>favorites.json</code> to store city list</li>
<li>Add functions to add/remove favorites</li>
<li>Create "View all favorites" option</li>
<li>Show weather for all favorites at once</li>
</ol>

<h3>🏆 Learning Outcomes</h3>
<ul>
<li>Working with REST APIs</li>
<li>HTTP requests and responses</li>
<li>JSON parsing</li>
<li>Error handling for network operations</li>
<li>Data formatting and display</li>
</ul>

<div class="tip-box">
<strong>💡 Extension Ideas:</strong>
<ul>
<li>Create GUI using Tkinter or PyQt</li>
<li>Add location detection using IP geolocation</li>
<li>Create weather alerts for extreme conditions</li>
<li>Build a web version with Flask</li>
</ul>
</div>`,
                video: "https://www.youtube.com/embed/baWzHKfrvqw"
            },
            {
                name: "Project: Blog System",
                notes: `<h3>📝 Project Overview: Blog Management System</h3>
<p>Build a complete blog system with posts, categories, and a simple web interface. This project teaches you web development basics, database concepts, and full-stack thinking.</p>

<h3>📋 Project Requirements</h3>
<ul>
<li>Create, edit, delete blog posts</li>
<li>Categorize posts with tags</li>
<li>Search and filter posts</li>
<li>Simple web interface (Flask)</li>
<li>Markdown support for content</li>
</ul>

<h3>🛠️ Step-by-Step Implementation</h3>

<h4>Step 1: Environment Setup</h4>
<ol>
<li>Create project folder: <code>blog_system/</code></li>
<li>Create virtual environment: <code>python -m venv venv</code></li>
<li>Activate venv: <code>venv\\Scripts\\activate</code> (Windows)</li>
<li>Install Flask: <code>pip install flask flask-sqlalchemy markdown</code></li>
<li>Create folder structure:</li>
</ol>
<pre><code>blog_system/
├── app.py
├── models.py
├── templates/
│   ├── base.html
│   ├── index.html
│   ├── post.html
│   └── create.html
├── static/
│   └── style.css
└── blog.db</code></pre>

<h4>Step 2: Create Database Models (models.py)</h4>
<ol>
<li>Define <code>Post</code> model with fields: id, title, content, date_posted, category</li>
<li>Define <code>Category</code> model with fields: id, name</li>
<li>Create relationship between Post and Category</li>
<li>Add methods: <code>save()</code>, <code>delete()</code></li>
</ol>

<h4>Step 3: Build Flask Application (app.py)</h4>
<ol>
<li>Create Flask app instance</li>
<li>Configure SQLAlchemy database URI</li>
<li>Initialize database with <code>db.create_all()</code></li>
<li>Create routes for each page</li>
</ol>

<h4>Step 4: Implement Routes</h4>
<ol>
<li><code>@app.route('/')</code> - Home page showing all posts</li>
<li><code>@app.route('/post/&lt;id&gt;')</code> - Single post view</li>
<li><code>@app.route('/create')</code> - Create new post form</li>
<li><code>@app.route('/edit/&lt;id&gt;')</code> - Edit existing post</li>
<li><code>@app.route('/delete/&lt;id&gt;')</code> - Delete post</li>
<li><code>@app.route('/category/&lt;name&gt;')</code> - Filter by category</li>
</ol>

<h4>Step 5: Create HTML Templates</h4>
<ol>
<li>Create <code>base.html</code> with navigation and footer</li>
<li>Use Jinja2 template inheritance in other templates</li>
<li>Create forms for post creation/editing</li>
<li>Add styling with CSS for professional look</li>
</ol>

<h4>Step 6: Add Markdown Support</h4>
<ol>
<li>Import markdown library</li>
<li>Create custom Jinja2 filter for markdown conversion</li>
<li>Apply filter to post content in templates</li>
<li>Add code syntax highlighting</li>
</ol>

<h4>Step 7: Implement Search</h4>
<ol>
<li>Create search form in navigation</li>
<li>Create <code>@app.route('/search')</code> route</li>
<li>Use SQLAlchemy filter with <code>like</code> for text search</li>
<li>Display search results on separate page</li>
</ol>

<h3>🏆 Learning Outcomes</h3>
<ul>
<li>Flask web framework basics</li>
<li>SQLAlchemy ORM</li>
<li>HTML templates with Jinja2</li>
<li>CRUD operations</li>
<li>Form handling and validation</li>
</ul>

<div class="tip-box">
<strong>💡 Extension Ideas:</strong>
<ul>
<li>Add user authentication (Flask-Login)</li>
<li>Add comments system</li>
<li>Implement RSS feed</li>
<li>Add image upload for posts</li>
</ul>
</div>`,
                video: "https://www.youtube.com/embed/Z1RJmh_OqeA"
            },
            {
                name: "Project: Quiz Application",
                notes: `<h3>🧠 Project Overview: Interactive Quiz Application</h3>
<p>Build a quiz application with multiple categories, scoring, and a leaderboard. This project teaches you data management, game logic, and creating engaging user experiences.</p>

<h3>📋 Project Requirements</h3>
<ul>
<li>Multiple quiz categories</li>
<li>Randomized questions</li>
<li>Timer for each question</li>
<li>Score tracking with leaderboard</li>
<li>Progress saving</li>
</ul>

<h3>🛠️ Step-by-Step Implementation</h3>

<h4>Step 1: Design Quiz Data Structure</h4>
<ol>
<li>Create <code>questions.json</code> with quiz data structure:</li>
</ol>
<pre><code>{
  "categories": [
    {
      "name": "Python Basics",
      "questions": [
        {
          "question": "What keyword defines a function?",
          "options": ["function", "def", "func", "define"],
          "correct": 1,
          "explanation": "In Python, 'def' is used to define functions"
        }
      ]
    }
  ]
}</code></pre>

<h4>Step 2: Create Question Manager</h4>
<ol>
<li>Create <code>QuestionManager</code> class</li>
<li>Add <code>load_questions()</code> to read from JSON</li>
<li>Add <code>get_categories()</code> to list available categories</li>
<li>Add <code>get_random_questions(category, count)</code> for quiz selection</li>
<li>Use <code>random.shuffle()</code> to randomize order</li>
</ol>

<h4>Step 3: Build Quiz Engine</h4>
<ol>
<li>Create <code>Quiz</code> class with attributes: questions, score, current_index</li>
<li>Add <code>start_quiz()</code> method to initialize quiz state</li>
<li>Add <code>get_current_question()</code> to return current question</li>
<li>Add <code>submit_answer(answer_index)</code> to check answer and update score</li>
<li>Add <code>next_question()</code> to advance to next question</li>
<li>Add <code>is_finished()</code> to check if quiz is complete</li>
<li>Add <code>get_results()</code> to return final score and statistics</li>
</ol>

<h4>Step 4: Implement Timer System</h4>
<ol>
<li>Use <code>threading.Timer</code> or <code>time</code> module for countdown</li>
<li>Set time limit per question (e.g., 30 seconds)</li>
<li>Auto-submit when time runs out</li>
<li>Display remaining time to user</li>
</ol>

<h4>Step 5: Create User Interface</h4>
<ol>
<li>Display category selection menu</li>
<li>Show question with numbered options (1, 2, 3, 4)</li>
<li>Accept numeric input for answers</li>
<li>Show immediate feedback (Correct! / Wrong!)</li>
<li>Display explanation after each answer</li>
<li>Show running score</li>
</ol>

<h4>Step 6: Build Leaderboard System</h4>
<ol>
<li>Create <code>leaderboard.json</code> to store scores</li>
<li>Structure: [{name, score, category, date}]</li>
<li>Add <code>save_score()</code> function</li>
<li>Add <code>get_top_scores(n)</code> function</li>
<li>Display top 10 after quiz completion</li>
</ol>

<h4>Step 7: Add Progress Features</h4>
<ol>
<li>Track questions answered per category</li>
<li>Show completion percentage</li>
<li>Implement "resume quiz" feature</li>
<li>Save progress to file</li>
</ol>

<h3>🏆 Learning Outcomes</h3>
<ul>
<li>JSON data handling</li>
<li>Game state management</li>
<li>Timer implementation</li>
<li>Score tracking and persistence</li>
<li>User input validation</li>
</ul>

<div class="tip-box">
<strong>💡 Extension Ideas:</strong>
<ul>
<li>Add difficulty levels (Easy, Medium, Hard)</li>
<li>Create GUI with Tkinter or PyGame</li>
<li>Add multiplayer mode</li>
<li>Generate PDF certificates for high scores</li>
</ul>
</div>`,
                video: "https://www.youtube.com/embed/VR1nyDzEMf8"
            },
            {
                name: "Project: Portfolio Website Generator",
                notes: `<h3>🌐 Project Overview: Portfolio Website Generator</h3>
<p>Build a Python tool that generates a professional portfolio website from a simple configuration file. This project teaches you file generation, templating, and automation.</p>

<h3>📋 Project Requirements</h3>
<ul>
<li>Read portfolio data from YAML/JSON config</li>
<li>Generate complete HTML/CSS website</li>
<li>Multiple theme support</li>
<li>Responsive design output</li>
<li>Deploy-ready output folder</li>
</ul>

<h3>🛠️ Step-by-Step Implementation</h3>

<h4>Step 1: Design Configuration Format</h4>
<ol>
<li>Create <code>portfolio.yaml</code> structure:</li>
</ol>
<pre><code>name: "Your Name"
title: "Full Stack Developer"
about: "Brief description about yourself..."

contact:
  email: "email@example.com"
  github: "username"
  linkedin: "username"

skills:
  - name: "Python"
    level: 90
  - name: "JavaScript"
    level: 85

projects:
  - title: "Project Name"
    description: "What it does"
    technologies: ["Python", "Flask"]
    github: "repo-url"
    live: "live-demo-url"

experience:
  - company: "Company Name"
    role: "Developer"
    period: "2020-Present"
    description: "What you did"</code></pre>

<h4>Step 2: Create Template Engine</h4>
<ol>
<li>Install Jinja2: <code>pip install jinja2 pyyaml</code></li>
<li>Create <code>templates/</code> folder for HTML templates</li>
<li>Create <code>base.html</code> with header, nav, footer</li>
<li>Create sections: hero, about, skills, projects, experience, contact</li>
<li>Use Jinja2 for loops and variables</li>
</ol>

<h4>Step 3: Build Configuration Parser</h4>
<ol>
<li>Create <code>config_parser.py</code></li>
<li>Add <code>load_config(file_path)</code> to read YAML/JSON</li>
<li>Validate required fields are present</li>
<li>Set default values for optional fields</li>
<li>Return structured dictionary</li>
</ol>

<h4>Step 4: Create HTML Generator</h4>
<ol>
<li>Create <code>generator.py</code></li>
<li>Load Jinja2 environment with templates folder</li>
<li>Load configuration from YAML</li>
<li>Render template with config data</li>
<li>Write output to <code>dist/index.html</code></li>
</ol>

<h4>Step 5: Add CSS Generation</h4>
<ol>
<li>Create <code>themes/</code> folder with CSS files</li>
<li>Support multiple themes: modern, minimal, dark</li>
<li>Read theme choice from config</li>
<li>Copy appropriate CSS to output folder</li>
<li>Include responsive breakpoints</li>
</ol>

<h4>Step 6: Handle Assets</h4>
<ol>
<li>Create <code>assets/</code> folder in config for images</li>
<li>Copy profile photo to output</li>
<li>Optimize images if possible</li>
<li>Copy any additional files (resume PDF, etc.)</li>
</ol>

<h4>Step 7: Add Build Script</h4>
<ol>
<li>Create <code>build.py</code> as main entry point</li>
<li>Clean output directory before build</li>
<li>Generate all HTML files</li>
<li>Copy CSS and assets</li>
<li>Print success message with output location</li>
<li>Optionally start local server to preview</li>
</ol>

<h3>🏆 Learning Outcomes</h3>
<ul>
<li>Template engine usage (Jinja2)</li>
<li>YAML/JSON configuration parsing</li>
<li>File/folder manipulation</li>
<li>Code generation concepts</li>
<li>Build automation</li>
</ul>

<div class="tip-box">
<strong>💡 Extension Ideas:</strong>
<ul>
<li>Add blog post support with Markdown</li>
<li>Auto-deploy to GitHub Pages</li>
<li>Add SEO meta tags generation</li>
<li>Create interactive theme customizer</li>
</ul>
</div>`,
                video: "https://www.youtube.com/embed/M4HkA7GfQjE"
            },
            {
                name: "Best Practices & Next Steps",
                notes: `<h3>🎯 Coding Best Practices</h3>

<h4>1. Code Organization</h4>
<ul>
<li><strong>Single Responsibility:</strong> Each function/class should do ONE thing well</li>
<li><strong>DRY (Don't Repeat Yourself):</strong> Extract common code into functions</li>
<li><strong>Meaningful Names:</strong> Use descriptive variable and function names</li>
<li><strong>Comments:</strong> Explain WHY, not WHAT (code should be self-documenting)</li>
<li><strong>Consistent Style:</strong> Follow PEP 8 guidelines</li>
</ul>

<h4>2. Project Structure</h4>
<pre><code>my_project/
├── README.md           # Project description
├── requirements.txt    # Dependencies
├── setup.py           # Package configuration
├── .gitignore         # Git ignore rules
├── src/               # Source code
│   ├── __init__.py
│   ├── main.py
│   └── utils/
├── tests/             # Test files
│   ├── __init__.py
│   └── test_main.py
└── docs/              # Documentation</code></pre>

<h4>3. Version Control</h4>
<ul>
<li>Use Git for all projects</li>
<li>Write meaningful commit messages</li>
<li>Create branches for features</li>
<li>Push to GitHub/GitLab regularly</li>
</ul>

<h4>4. Testing</h4>
<ul>
<li>Write unit tests with <code>pytest</code></li>
<li>Test edge cases and error conditions</li>
<li>Aim for good code coverage</li>
<li>Run tests before committing</li>
</ul>

<h3>🚀 Next Steps in Your Python Journey</h3>

<h4>Web Development Path:</h4>
<ol>
<li>Learn Flask/Django frameworks</li>
<li>Study HTML, CSS, JavaScript basics</li>
<li>Build REST APIs</li>
<li>Learn database design (PostgreSQL, MongoDB)</li>
<li>Deploy to cloud (Heroku, AWS, DigitalOcean)</li>
</ol>

<h4>Data Science Path:</h4>
<ol>
<li>Master NumPy and Pandas</li>
<li>Learn data visualization (Matplotlib, Seaborn)</li>
<li>Study statistics and probability</li>
<li>Learn Machine Learning with scikit-learn</li>
<li>Explore Deep Learning with TensorFlow/PyTorch</li>
</ol>

<h4>Automation Path:</h4>
<ol>
<li>Learn web scraping (BeautifulSoup, Selenium)</li>
<li>Study system automation (os, subprocess)</li>
<li>Create desktop apps (Tkinter, PyQt)</li>
<li>Build bots (Discord, Telegram, Slack)</li>
<li>Learn CI/CD and DevOps basics</li>
</ol>

<h3>📚 Resources for Continued Learning</h3>
<ul>
<li><strong>Documentation:</strong> docs.python.org</li>
<li><strong>Practice:</strong> LeetCode, HackerRank, Codewars</li>
<li><strong>Projects:</strong> Build something every week</li>
<li><strong>Community:</strong> Reddit r/learnpython, Python Discord</li>
<li><strong>Books:</strong> "Fluent Python", "Python Crash Course"</li>
</ul>

<div class="tip-box">
<strong>🎉 Congratulations!</strong>
<p>You've completed the Python fundamentals course! The best way to learn now is to BUILD. Pick a project you're passionate about and start coding. Remember: every expert was once a beginner. Keep learning, keep building, keep growing!</p>
</div>`,
                video: "https://www.youtube.com/embed/hk-Mz-R3W8c"
            }
        ]
    }
];

// ==================== ACHIEVEMENTS DATA ====================
const achievements = [
    { id: 1, icon: "🌟", title: "First Step", desc: "Complete your first topic", required: 1, type: "topics" },
    { id: 2, icon: "🔥", title: "On Fire", desc: "Complete 5 topics", required: 5, type: "topics" },
    { id: 3, icon: "💪", title: "Dedicated", desc: "Complete 10 topics", required: 10, type: "topics" },
    { id: 4, icon: "🚀", title: "Rising Star", desc: "Complete 20 topics", required: 20, type: "topics" },
    { id: 5, icon: "🏆", title: "Champion", desc: "Complete 30 topics", required: 30, type: "topics" },
    { id: 6, icon: "👑", title: "Python Master", desc: "Complete all topics", required: 50, type: "topics" },
    { id: 7, icon: "📅", title: "Consistent", desc: "Maintain a 7-day streak", required: 7, type: "streak" },
    { id: 8, icon: "🧠", title: "Quiz Whiz", desc: "Score 90%+ in quiz", required: 90, type: "quiz" }
];

// ==================== QUIZ LEVELS DATA (200 Questions - 50 per level) ====================
const quizLevels = {
    basics: {
        name: "Basics",
        icon: "🟢",
        description: "Python fundamentals - syntax, variables, operators, strings",
        color: "#22c55e",
        questions: [
            // Variables & Data Types (Questions 1-15)
            { question: "What is the correct way to create a variable in Python?", options: ["var x = 5", "x = 5", "int x = 5", "let x = 5"], correct: 1 },
            { question: "Which symbol is used for comments in Python?", options: ["//", "/*", "#", "--"], correct: 2 },
            { question: "What is the output of: print(type(5))?", options: ["&lt;class 'int'&gt;", "&lt;class 'float'&gt;", "int", "number"], correct: 0 },
            { question: "Which data type stores decimal numbers?", options: ["int", "float", "decimal", "double"], correct: 1 },
            { question: "What is the output of: print(type('Hello'))?", options: ["&lt;class 'text'&gt;", "&lt;class 'str'&gt;", "&lt;class 'string'&gt;", "str"], correct: 1 },
            { question: "How do you create a boolean variable?", options: ["bool x = true", "x = True", "x = true", "boolean x = True"], correct: 1 },
            { question: "What is None in Python?", options: ["Zero", "Empty string", "Absence of value", "False"], correct: 2 },
            { question: "Which is a valid variable name?", options: ["2name", "my-name", "my_name", "my name"], correct: 2 },
            { question: "What is the output of: print(10 / 3)?", options: ["3", "3.33", "3.3333333333333335", "3.0"], correct: 2 },
            { question: "What is the output of: print(10 // 3)?", options: ["3", "3.33", "4", "3.0"], correct: 0 },
            { question: "What does ** operator do?", options: ["Multiplication", "Division", "Exponentiation", "Modulus"], correct: 2 },
            { question: "What is the output of: print(10 % 3)?", options: ["3", "1", "0", "3.33"], correct: 1 },
            { question: "How do you convert string '5' to integer?", options: ["integer('5')", "int('5')", "str_to_int('5')", "parse('5')"], correct: 1 },
            { question: "What is the output of: print(bool(0))?", options: ["True", "False", "0", "Error"], correct: 1 },
            { question: "What is the output of: print(bool('Hello'))?", options: ["True", "False", "Hello", "Error"], correct: 0 },

            // Strings (Questions 16-30)
            { question: "How do you create a multi-line string?", options: ["'line1\\nline2'", "'''multi line'''", "Both a and b", "\"line1\" + \"line2\""], correct: 2 },
            { question: "What is the output of: 'Python'[0]?", options: ["P", "y", "Python", "Error"], correct: 0 },
            { question: "What is the output of: 'Python'[-1]?", options: ["P", "n", "o", "Error"], correct: 1 },
            { question: "How do you get the length of a string?", options: ["length('hello')", "len('hello')", "'hello'.length", "size('hello')"], correct: 1 },
            { question: "What is the output of: 'hello'.upper()?", options: ["Hello", "HELLO", "hello", "hELLO"], correct: 1 },
            { question: "What is the output of: 'HELLO'.lower()?", options: ["Hello", "HELLO", "hello", "hELLO"], correct: 2 },
            { question: "How do you concatenate two strings?", options: ["'a' + 'b'", "'a' & 'b'", "'a'.add('b')", "concat('a', 'b')"], correct: 0 },
            { question: "What is the output of: 'ab' * 3?", options: ["ab3", "ababab", "abbb", "Error"], correct: 1 },
            { question: "What is the output of: '  hello  '.strip()?", options: ["'  hello  '", "'hello  '", "'  hello'", "'hello'"], correct: 3 },
            { question: "How do you check if a string starts with 'Py'?", options: ["'Python'.starts('Py')", "'Python'.startswith('Py')", "'Python'.begin('Py')", "'Python'.first('Py')"], correct: 1 },
            { question: "What is the output of: 'hello world'.split()?", options: ["['hello world']", "['hello', 'world']", "'hello' 'world'", "Error"], correct: 1 },
            { question: "How do you replace 'a' with 'b' in a string?", options: ["'cat'.swap('a', 'b')", "'cat'.replace('a', 'b')", "'cat'.change('a', 'b')", "'cat'.sub('a', 'b')"], correct: 1 },
            { question: "What is the output of: 'python'.capitalize()?", options: ["Python", "PYTHON", "python", "pYTHON"], correct: 0 },
            { question: "How do you format a string with variable?", options: ["'Hello %s' % name", "f'Hello {name}'", "'Hello ' + name", "All of these"], correct: 3 },
            { question: "What is the output of: 'python'.count('p')?", options: ["0", "1", "2", "Error"], correct: 1 },

            // Basic Operators (Questions 31-40)
            { question: "What is the output of: 5 + 3 * 2?", options: ["16", "11", "13", "10"], correct: 1 },
            { question: "What is the output of: (5 + 3) * 2?", options: ["16", "11", "13", "10"], correct: 0 },
            { question: "Which operator checks equality?", options: ["=", "==", "===", "equals"], correct: 1 },
            { question: "Which operator checks not equal?", options: ["<>", "!=", "=/=", "not="], correct: 1 },
            { question: "What is the output of: 5 > 3?", options: ["True", "False", "1", "Error"], correct: 0 },
            { question: "What is the output of: 5 >= 5?", options: ["True", "False", "1", "Error"], correct: 0 },
            { question: "What is the output of: True and False?", options: ["True", "False", "Error", "None"], correct: 1 },
            { question: "What is the output of: True or False?", options: ["True", "False", "Error", "None"], correct: 0 },
            { question: "What is the output of: not True?", options: ["True", "False", "Error", "None"], correct: 1 },
            { question: "What does += operator do?", options: ["Adds and assigns", "Compares", "Increments by 1", "Concatenates only"], correct: 0 },

            // Input/Output (Questions 41-50)
            { question: "How do you print in Python?", options: ["console.log('hi')", "print('hi')", "System.out.print('hi')", "echo 'hi'"], correct: 1 },
            { question: "How do you take user input?", options: ["scanf()", "input()", "read()", "get()"], correct: 1 },
            { question: "What does input() return?", options: ["Integer", "Float", "String", "Boolean"], correct: 2 },
            { question: "How do you print without newline?", options: ["print('hi', end='')", "print('hi', nl=False)", "println('hi')", "print('hi')"], correct: 0 },
            { question: "What is the output of: print('a', 'b', sep='-')?", options: ["ab", "a b", "a-b", "a,b"], correct: 2 },
            { question: "How do you print a number and string together?", options: ["print('Age: ' + 25)", "print('Age:', 25)", "print('Age: ' + str(25))", "Both b and c"], correct: 3 },
            { question: "What is an f-string?", options: ["Function string", "Formatted string literal", "Float string", "Final string"], correct: 1 },
            { question: "What is the output of: print(f'{5 + 3}')?", options: ["5 + 3", "8", "{5 + 3}", "Error"], correct: 1 },
            { question: "How do you print multiple values?", options: ["print(a, b, c)", "print(a + b + c)", "print([a, b, c])", "All of these work"], correct: 3 },
            { question: "Which escape character creates a new line?", options: ["\\\\t", "\\\\n", "\\\\r", "\\\\b"], correct: 1 }
        ]
    },

    medium: {
        name: "Medium",
        icon: "🟡",
        description: "Control flow, functions, lists, dictionaries, tuples",
        color: "#eab308",
        questions: [
            // Conditionals (Questions 1-12)
            { question: "Which keyword starts a conditional statement?", options: ["when", "if", "case", "switch"], correct: 1 },
            { question: "What keyword is used for else-if in Python?", options: ["else if", "elseif", "elif", "elsif"], correct: 2 },
            { question: "What is the output of: 'Yes' if True else 'No'?", options: ["Yes", "No", "True", "Error"], correct: 0 },
            { question: "Which operator checks if both conditions are true?", options: ["&&", "and", "AND", "&"], correct: 1 },
            { question: "Which operator checks if at least one condition is true?", options: ["||", "or", "OR", "|"], correct: 1 },
            { question: "What is the output of: 5 if 5 > 3 else 3?", options: ["5", "3", "True", "Error"], correct: 0 },
            { question: "How do you check if x is between 1 and 10?", options: ["1 < x < 10", "x > 1 and x < 10", "x in range(1, 10)", "All of these"], correct: 3 },
            { question: "What is the output of: 'a' in 'apple'?", options: ["True", "False", "0", "Error"], correct: 0 },
            { question: "Which keyword is used to check membership?", options: ["has", "contains", "in", "member"], correct: 2 },
            { question: "What does 'is' operator check?", options: ["Value equality", "Identity (same object)", "Type equality", "None of these"], correct: 1 },
            { question: "What is the output of: [] == []?", options: ["True", "False", "Error", "None"], correct: 0 },
            { question: "What is the output of: [] is []?", options: ["True", "False", "Error", "None"], correct: 1 },

            // Loops (Questions 13-25)
            { question: "Which loop is used when iterations are known?", options: ["while", "for", "do-while", "repeat"], correct: 1 },
            { question: "What does range(5) generate?", options: ["1,2,3,4,5", "0,1,2,3,4", "0,1,2,3,4,5", "1,2,3,4"], correct: 1 },
            { question: "What does range(1, 5) generate?", options: ["1,2,3,4,5", "0,1,2,3,4", "1,2,3,4", "0,1,2,3,4,5"], correct: 2 },
            { question: "What does range(0, 10, 2) generate?", options: ["0,2,4,6,8", "0,2,4,6,8,10", "2,4,6,8,10", "1,3,5,7,9"], correct: 0 },
            { question: "What does 'break' do in a loop?", options: ["Skips iteration", "Exits loop", "Restarts loop", "Pauses loop"], correct: 1 },
            { question: "What does 'continue' do in a loop?", options: ["Skips iteration", "Exits loop", "Restarts loop", "Pauses loop"], correct: 0 },
            { question: "What does 'pass' do?", options: ["Skips iteration", "Does nothing", "Exits loop", "Returns None"], correct: 1 },
            { question: "What is the output of: for i in 'abc': print(i)?", options: ["abc", "a b c", "a\\nb\\nc", "['a','b','c']"], correct: 2 },
            { question: "How do you loop with index and value?", options: ["for i, v in list", "enumerate(list)", "for i in range(len(list))", "Both b and c"], correct: 3 },
            { question: "What is a nested loop?", options: ["Loop inside loop", "Infinite loop", "Reverse loop", "Empty loop"], correct: 0 },
            { question: "When is 'else' executed in a for loop?", options: ["When break occurs", "When loop completes normally", "After each iteration", "Never"], correct: 1 },
            { question: "What creates an infinite loop?", options: ["for i in range(0)", "while True", "for i in []", "None of these"], correct: 1 },
            { question: "How do you iterate over dictionary keys?", options: ["for k in dict", "for k in dict.keys()", "Both a and b", "for k in dict.items()"], correct: 2 },

            // Functions (Questions 26-38)
            { question: "Which keyword defines a function?", options: ["function", "def", "func", "define"], correct: 1 },
            { question: "What is a function without return called?", options: ["Void function", "Returns None", "Empty function", "Procedure"], correct: 1 },
            { question: "What is a default argument?", options: ["First argument", "Argument with default value", "Required argument", "Last argument"], correct: 1 },
            { question: "What does *args do?", options: ["Multiplies arguments", "Variable positional arguments", "Required arguments", "Keyword arguments"], correct: 1 },
            { question: "What does **kwargs do?", options: ["Double multiplication", "Variable keyword arguments", "Power arguments", "Dictionary arguments"], correct: 1 },
            { question: "What is a lambda function?", options: ["Named function", "Anonymous function", "Class method", "Generator"], correct: 1 },
            { question: "What is the output of: (lambda x: x*2)(5)?", options: ["5", "10", "25", "Error"], correct: 1 },
            { question: "What is function scope?", options: ["Function name", "Variable visibility", "Function type", "Return type"], correct: 1 },
            { question: "What keyword makes variable global inside function?", options: ["public", "global", "outer", "nonlocal"], correct: 1 },
            { question: "What is recursion?", options: ["Loop inside function", "Function calling itself", "Nested function", "Function in class"], correct: 1 },
            { question: "What is a docstring?", options: ["Comment", "Documentation string", "Error message", "Print statement"], correct: 1 },
            { question: "How do you access a docstring?", options: ["func.doc", "func.__doc__", "func.docstring", "doc(func)"], correct: 1 },
            { question: "What is a higher-order function?", options: ["Complex function", "Function taking/returning function", "Main function", "Class method"], correct: 1 },

            // Lists (Questions 39-50)
            { question: "How do you create an empty list?", options: ["list()", "[]", "Both a and b", "{}"], correct: 2 },
            { question: "How do you add element to end of list?", options: ["list.add(x)", "list.append(x)", "list.push(x)", "list.insert(x)"], correct: 1 },
            { question: "How do you add element at index 0?", options: ["list.add(0, x)", "list.insert(0, x)", "list.push(0, x)", "list.prepend(x)"], correct: 1 },
            { question: "What is the output of: [1,2,3][-1]?", options: ["1", "2", "3", "Error"], correct: 2 },
            { question: "What is the output of: [1,2,3][1:3]?", options: ["[1,2]", "[2,3]", "[1,2,3]", "[2]"], correct: 1 },
            { question: "How do you remove element by value?", options: ["list.delete(x)", "list.remove(x)", "list.pop(x)", "list.discard(x)"], correct: 1 },
            { question: "How do you remove element by index?", options: ["list.remove(i)", "list.pop(i)", "list.delete(i)", "del list[i]"], correct: 1 },
            { question: "What does list.pop() return?", options: ["None", "First element", "Last element", "Length"], correct: 2 },
            { question: "How do you sort a list in place?", options: ["sort(list)", "list.sort()", "sorted(list)", "list.order()"], correct: 1 },
            { question: "What does sorted() return?", options: ["None", "New sorted list", "Boolean", "Original list"], correct: 1 },
            { question: "What is list comprehension?", options: ["List explanation", "Concise list creation", "List compression", "List documentation"], correct: 1 },
            { question: "What is the output of: [x*2 for x in [1,2,3]]?", options: ["[1,2,3]", "[2,4,6]", "[1,4,9]", "[3,6,9]"], correct: 1 }
        ]
    },

    hard: {
        name: "Hard",
        icon: "🟠",
        description: "OOP, file handling, modules, exceptions, comprehensions",
        color: "#f97316",
        questions: [
            // OOP (Questions 1-15)
            { question: "What does __init__ method do?", options: ["Destroys object", "Initializes object", "Returns type", "Copies object"], correct: 1 },
            { question: "What does 'self' refer to?", options: ["Class itself", "Current instance", "Parent class", "Global variable"], correct: 1 },
            { question: "What is inheritance?", options: ["Creating copies", "Deriving from parent class", "Hiding data", "Method calling"], correct: 1 },
            { question: "What is the correct inheritance syntax?", options: ["class Child extends Parent", "class Child(Parent)", "class Child inherits Parent", "class Child : Parent"], correct: 1 },
            { question: "What is method overriding?", options: ["Creating new method", "Replacing parent method", "Calling parent method", "Hiding method"], correct: 1 },
            { question: "How do you call parent's __init__?", options: ["parent.__init__()", "super().__init__()", "base.__init__()", "Parent.__init__()"], correct: 1 },
            { question: "What is encapsulation?", options: ["Inheritance", "Hiding internal details", "Method overriding", "Polymorphism"], correct: 1 },
            { question: "What does __ prefix mean for attribute?", options: ["Protected", "Private (name mangling)", "Public", "Static"], correct: 1 },
            { question: "What does _ prefix mean for attribute?", options: ["Private", "Protected (convention)", "Public", "Constant"], correct: 1 },
            { question: "What is polymorphism?", options: ["Many classes", "Same interface different behavior", "Multiple inheritance", "Encapsulation"], correct: 1 },
            { question: "What is a class method?", options: ["Method with self", "Method with cls", "Static method", "Instance method"], correct: 1 },
            { question: "What decorator creates class method?", options: ["@static", "@classmethod", "@class", "@method"], correct: 1 },
            { question: "What is a static method?", options: ["Method needing instance", "Method with no self/cls", "Class variable", "Constant method"], correct: 1 },
            { question: "What is @property decorator used for?", options: ["Creating property", "Getter method", "Making attribute read-only", "All of these"], correct: 3 },
            { question: "What is MRO in Python?", options: ["Method Return Order", "Method Resolution Order", "Multiple Return Output", "Method Repair Operation"], correct: 1 },

            // Exception Handling (Questions 16-28)
            { question: "Which keyword starts exception handling?", options: ["catch", "try", "handle", "except"], correct: 1 },
            { question: "Which keyword catches exceptions?", options: ["catch", "try", "handle", "except"], correct: 3 },
            { question: "What does 'finally' block do?", options: ["Catches errors", "Always executes", "Raises error", "Returns value"], correct: 1 },
            { question: "How do you raise an exception?", options: ["throw Exception()", "raise Exception()", "error Exception()", "except Exception()"], correct: 1 },
            { question: "What is the base class for all exceptions?", options: ["Error", "Exception", "BaseException", "Throwable"], correct: 2 },
            { question: "What does 'else' do in try-except?", options: ["Catches else errors", "Runs if no exception", "Always runs", "Handles else case"], correct: 1 },
            { question: "How do you catch multiple exceptions?", options: ["except (E1, E2)", "except E1, E2", "except E1 or E2", "except E1 | E2"], correct: 0 },
            { question: "What is a custom exception?", options: ["Built-in exception", "User-defined exception class", "System exception", "Warning"], correct: 1 },
            { question: "How do you access exception message?", options: ["e.msg", "str(e)", "e.message", "Both b and c"], correct: 1 },
            { question: "What does 'raise from' do?", options: ["Raises new error", "Chains exceptions", "Ignores error", "Logs error"], correct: 1 },
            { question: "What is assert statement?", options: ["Print statement", "Debug check that raises AssertionError", "Return statement", "Import statement"], correct: 1 },
            { question: "When should you use assertions?", options: ["User input validation", "Debugging/testing", "Production error handling", "File operations"], correct: 1 },
            { question: "What happens if assert fails?", options: ["Returns False", "Raises AssertionError", "Prints warning", "Continues execution"], correct: 1 },

            // File Handling (Questions 29-40)
            { question: "How do you open a file for reading?", options: ["open('f', 'r')", "file('f', 'read')", "open('f').read()", "read('f')"], correct: 0 },
            { question: "What mode opens file for writing (overwrites)?", options: ["'r'", "'w'", "'a'", "'x'"], correct: 1 },
            { question: "What mode opens file for appending?", options: ["'r'", "'w'", "'a'", "'x'"], correct: 2 },
            { question: "What does 'with' statement ensure?", options: ["File is opened", "File is closed automatically", "File is readable", "File exists"], correct: 1 },
            { question: "How do you read entire file content?", options: ["file.read()", "file.readall()", "file.content()", "file.text()"], correct: 0 },
            { question: "How do you read file line by line?", options: ["file.readlines()", "file.readline()", "for line in file", "All of these"], correct: 3 },
            { question: "What does readlines() return?", options: ["String", "List of lines", "Generator", "Iterator"], correct: 1 },
            { question: "How do you write to a file?", options: ["file.write('text')", "file.print('text')", "file.add('text')", "file.insert('text')"], correct: 0 },
            { question: "What module is used for JSON?", options: ["json", "JSON", "jsonlib", "simplejson"], correct: 0 },
            { question: "How do you read JSON file?", options: ["json.read(f)", "json.load(f)", "json.parse(f)", "json.decode(f)"], correct: 1 },
            { question: "How do you write Python dict to JSON file?", options: ["json.write(dict)", "json.dump(dict, f)", "json.encode(dict)", "json.save(dict, f)"], correct: 1 },
            { question: "What module is used for CSV files?", options: ["csv", "csvfile", "comma", "spreadsheet"], correct: 0 },

            // Modules & Comprehensions (Questions 41-50)
            { question: "How do you import specific function from module?", options: ["import func from mod", "from mod import func", "import mod.func", "mod.import(func)"], correct: 1 },
            { question: "What does 'import module as m' do?", options: ["Renames module", "Creates alias", "Copies module", "Both a and b"], correct: 3 },
            { question: "What is __name__ when script runs directly?", options: ["''", "'__main__'", "'script'", "None"], correct: 1 },
            { question: "What does 'from module import *' do?", options: ["Imports all public names", "Imports module", "Creates copy", "Raises error"], correct: 0 },
            { question: "What is pip?", options: ["Python IDE", "Package installer", "Python interpreter", "File format"], correct: 1 },
            { question: "What is a virtual environment?", options: ["Virtual machine", "Isolated Python environment", "Cloud Python", "Docker container"], correct: 1 },
            { question: "What is dict comprehension syntax?", options: ["{k:v for k,v in items}", "[k:v for k,v in items]", "(k:v for k,v in items)", "<k:v for k,v in items>"], correct: 0 },
            { question: "What is set comprehension syntax?", options: ["{x for x in items}", "[x for x in items]", "(x for x in items)", "<x for x in items>"], correct: 0 },
            { question: "What is generator expression?", options: ["{x for x in items}", "[x for x in items]", "(x for x in items)", "gen(x for x in items)"], correct: 2 },
            { question: "What is the advantage of generators?", options: ["Faster execution", "Memory efficient", "Easier syntax", "Better debugging"], correct: 1 }
        ]
    },

    advanced: {
        name: "Advanced",
        icon: "🔴",
        description: "TCS NQT / Cognizant level - logical reasoning & tricky questions",
        color: "#ef4444",
        questions: [
            // Tricky Output Questions (Questions 1-15)
            { question: "What is the output of: print(0.1 + 0.2 == 0.3)?", options: ["True", "False", "0.3", "Error"], correct: 1 },
            { question: "What is the output of: print(bool('False'))?", options: ["True", "False", "Error", "'False'"], correct: 0 },
            { question: "What is the output of: print([1,2] + [3,4])?", options: ["[1,2,3,4]", "[[1,2],[3,4]]", "[4,6]", "Error"], correct: 0 },
            { question: "What is the output of: print([1,2] * 2)?", options: ["[2,4]", "[1,2,1,2]", "[[1,2],[1,2]]", "Error"], correct: 1 },
            { question: "What is the output of: print('ab' == 'a' + 'b')?", options: ["True", "False", "Error", "'ab'"], correct: 0 },
            { question: "What is the output of: a = [1,2,3]; b = a; b.append(4); print(a)?", options: ["[1,2,3]", "[1,2,3,4]", "[4]", "Error"], correct: 1 },
            { question: "What is the output of: a = [1,2,3]; b = a[:]; b.append(4); print(a)?", options: ["[1,2,3]", "[1,2,3,4]", "[4]", "Error"], correct: 0 },
            { question: "What is the output of: print({1,2,3} & {2,3,4})?", options: ["{2,3}", "{1,2,3,4}", "{1,4}", "Error"], correct: 0 },
            { question: "What is the output of: print({1,2,3} | {2,3,4})?", options: ["{2,3}", "{1,2,3,4}", "{1,4}", "Error"], correct: 1 },
            { question: "What is the output of: print(type(lambda x: x))?", options: ["&lt;class 'lambda'&gt;", "&lt;class 'function'&gt;", "&lt;class 'method'&gt;", "Error"], correct: 1 },
            { question: "What is the output of: print((1,) == (1))?", options: ["True", "False", "Error", "(1,)"], correct: 1 },
            { question: "What is the output of: print(type((1)))?", options: ["&lt;class 'tuple'&gt;", "&lt;class 'int'&gt;", "&lt;class 'list'&gt;", "Error"], correct: 1 },
            { question: "What is the output of: print(type((1,)))?", options: ["&lt;class 'tuple'&gt;", "&lt;class 'int'&gt;", "&lt;class 'list'&gt;", "Error"], correct: 0 },
            { question: "What is the output of: x = [[]] * 3; x[0].append(1); print(x)?", options: ["[[1], [], []]", "[[1], [1], [1]]", "[[1]]", "Error"], correct: 1 },
            { question: "What is the output of: print([] is [])?", options: ["True", "False", "Error", "None"], correct: 1 },

            // Advanced Concepts (Questions 16-30)
            { question: "What is a decorator?", options: ["Design pattern", "Function that modifies function", "Class type", "Module"], correct: 1 },
            { question: "What does @functools.lru_cache do?", options: ["Locks function", "Caches function results", "Logs function", "Limits calls"], correct: 1 },
            { question: "What is a context manager?", options: ["Memory manager", "Object with __enter__/__exit__", "Thread manager", "File handler"], correct: 1 },
            { question: "What does yield keyword create?", options: ["Iterator", "Generator", "List", "Tuple"], correct: 1 },
            { question: "What is the difference between iterator and generator?", options: ["Same thing", "Generator is type of iterator", "Iterator is type of generator", "Unrelated"], correct: 1 },
            { question: "What is GIL in Python?", options: ["Global Import Lock", "Global Interpreter Lock", "General Interface Library", "Generic Input Loop"], correct: 1 },
            { question: "What module is used for multithreading?", options: ["thread", "threading", "multithread", "threads"], correct: 1 },
            { question: "What module is used for multiprocessing?", options: ["process", "multiprocessing", "processes", "multi"], correct: 1 },
            { question: "What is async/await used for?", options: ["Multithreading", "Asynchronous programming", "Synchronous code", "Parallel processing"], correct: 1 },
            { question: "What is __slots__ used for?", options: ["Memory optimization", "Slot machine", "List slots", "Dictionary slots"], correct: 0 },
            { question: "What is metaclass in Python?", options: ["Meta function", "Class of a class", "Abstract class", "Base class"], correct: 1 },
            { question: "What does @abstractmethod require?", options: ["Must be overridden", "Cannot be called", "Must return None", "Must be static"], correct: 0 },
            { question: "What is duck typing?", options: ["Type checking", "If it quacks like a duck...", "Duck class", "Animal typing"], correct: 1 },
            { question: "What is monkey patching?", options: ["Bug fixing", "Runtime modification of module/class", "Testing method", "Logging technique"], correct: 1 },
            { question: "What is memoization?", options: ["Memory clearing", "Caching expensive function results", "Memorizing code", "Memory allocation"], correct: 1 },

            // Logical & Coding Problems (Questions 31-50)
            { question: "What is time complexity of list.append()?", options: ["O(1)", "O(n)", "O(log n)", "O(n²)"], correct: 0 },
            { question: "What is time complexity of list.insert(0, x)?", options: ["O(1)", "O(n)", "O(log n)", "O(n²)"], correct: 1 },
            { question: "What is time complexity of dict lookup?", options: ["O(1) average", "O(n)", "O(log n)", "O(n²)"], correct: 0 },
            { question: "What is time complexity of 'in' operator for list?", options: ["O(1)", "O(n)", "O(log n)", "O(n²)"], correct: 1 },
            { question: "What is time complexity of 'in' operator for set?", options: ["O(1) average", "O(n)", "O(log n)", "O(n²)"], correct: 0 },
            { question: "Which is more memory efficient: list or generator?", options: ["List", "Generator", "Same", "Depends"], correct: 1 },
            { question: "What is the output of: print(sum(range(1, 101)))?", options: ["100", "5050", "5000", "101"], correct: 1 },
            { question: "What is output of: print(len(set([1,1,2,2,3])))?", options: ["5", "3", "2", "Error"], correct: 1 },
            { question: "What does zip([1,2], [3,4]) return?", options: ["[(1,3), (2,4)]", "[[1,3], [2,4]]", "Iterator of tuples", "{1:3, 2:4}"], correct: 2 },
            { question: "What is output of: print(list(map(lambda x: x**2, [1,2,3])))?", options: ["[1,2,3]", "[1,4,9]", "[2,4,6]", "Error"], correct: 1 },
            { question: "What is output of: print(list(filter(lambda x: x>2, [1,2,3,4])))?", options: ["[1,2]", "[3,4]", "[2,3,4]", "Error"], correct: 1 },
            { question: "What does functools.reduce do?", options: ["Reduces list size", "Applies function cumulatively", "Filters list", "Maps function"], correct: 1 },
            { question: "What is the output of: any([False, False, True])?", options: ["True", "False", "[True]", "Error"], correct: 0 },
            { question: "What is the output of: all([True, True, False])?", options: ["True", "False", "[False]", "Error"], correct: 1 },
            { question: "What is the output of: print(sorted([3,1,2], reverse=True))?", options: ["[1,2,3]", "[3,2,1]", "[3,1,2]", "Error"], correct: 1 },
            { question: "What does collections.Counter do?", options: ["Counts to 10", "Counts hashable objects", "Creates counter variable", "Measures time"], correct: 1 },
            { question: "What is collections.defaultdict?", options: ["Default dictionary", "Dict with default factory", "Empty dictionary", "Constant dict"], correct: 1 },
            { question: "What does itertools.chain do?", options: ["Creates chain", "Combines iterables", "Links lists", "Chains functions"], correct: 1 },
            { question: "What is the output of: print(2 << 2)?", options: ["4", "8", "2", "1"], correct: 1 },
            { question: "What is the output of: print(8 >> 2)?", options: ["4", "2", "16", "32"], correct: 1 }
        ]
    }
};

// Career Paths Data
const careerPaths = [
    {
        id: "web-dev",
        icon: "🌐",
        title: "Web Developer",
        description: "Build dynamic websites and web applications",
        salary: "₹5-15 LPA",
        topics: ["Django Framework", "Flask & FastAPI", "REST APIs", "HTML/CSS/JS", "Database (SQL/NoSQL)", "Authentication", "Deployment"]
    },
    {
        id: "data-science",
        icon: "📊",
        title: "Data Scientist",
        description: "Analyze data and build predictive models",
        salary: "₹8-25 LPA",
        topics: ["Pandas & NumPy", "Data Visualization", "Machine Learning", "Statistics", "SQL & Databases", "Jupyter Notebooks", "Feature Engineering"]
    },
    {
        id: "ml-engineer",
        icon: "🤖",
        title: "ML Engineer",
        description: "Build and deploy machine learning systems",
        salary: "₹10-30 LPA",
        topics: ["Scikit-learn", "TensorFlow/PyTorch", "Deep Learning", "NLP", "Computer Vision", "MLOps", "Model Deployment"]
    },
    {
        id: "backend-dev",
        icon: "⚙️",
        title: "Backend Developer",
        description: "Build server-side applications and APIs",
        salary: "₹6-20 LPA",
        topics: ["FastAPI/Django", "Database Design", "Caching (Redis)", "Message Queues", "Microservices", "Docker", "Cloud (AWS/GCP)"]
    },
    {
        id: "automation",
        icon: "🔄",
        title: "Automation Engineer",
        description: "Automate repetitive tasks and testing",
        salary: "₹5-15 LPA",
        topics: ["Selenium WebDriver", "PyAutoGUI", "Web Scraping", "API Testing", "Test Frameworks", "CI/CD", "Scripting"]
    },
    {
        id: "devops",
        icon: "🔧",
        title: "DevOps Engineer",
        description: "Manage infrastructure and deployment pipelines",
        salary: "₹8-25 LPA",
        topics: ["Ansible/Terraform", "Docker & Kubernetes", "CI/CD Pipelines", "Cloud Platforms", "Monitoring", "Linux Admin", "Scripting"]
    },
    {
        id: "cybersecurity",
        icon: "🔒",
        title: "Cybersecurity Analyst",
        description: "Protect systems and find vulnerabilities",
        salary: "₹6-20 LPA",
        topics: ["Ethical Hacking", "Penetration Testing", "Network Security", "Cryptography", "OWASP", "Security Tools", "Forensics"]
    },
    {
        id: "game-dev",
        icon: "🎮",
        title: "Game Developer",
        description: "Create games and interactive experiences",
        salary: "₹4-15 LPA",
        topics: ["Pygame", "Game Physics", "Graphics Programming", "AI in Games", "Unity with Python", "Game Design", "Asset Management"]
    }
];

// For backward compatibility - combines all questions
const quizQuestions = [
    ...quizLevels.basics.questions,
    ...quizLevels.medium.questions,
    ...quizLevels.hard.questions,
    ...quizLevels.advanced.questions
];

// ==================== TIPS DATA ====================
const tips = [
    "💡 Use meaningful variable names like 'user_age' instead of 'x'",
    "🐍 Python uses indentation for code blocks - typically 4 spaces",
    "⚡ List comprehensions are faster than traditional for loops",
    "📦 Always use virtual environments for your projects",
    "🔥 f-strings are the fastest way to format strings in Python 3.6+",
    "🎯 Use 'enumerate()' when you need both index and value in loops",
    "💪 The 'with' statement automatically handles file closing",
    "🚀 Use generators for memory-efficient iteration over large data",
    "📝 Write docstrings for all your functions and classes",
    "🔍 Use 'type()' to check an object's type, 'isinstance()' for inheritance",
    "⏰ Measure code performance with the 'timeit' module",
    "🎨 Follow PEP 8 style guide for clean, readable code",
    "🔒 Never store passwords in plain text - use hashing",
    "📊 Use 'collections.Counter' for counting hashable objects",
    "🌟 The '_' variable holds the last expression value in REPL",
    "💾 Use 'json' module for data serialization",
    "🔄 Use 'zip()' to iterate over multiple lists simultaneously",
    "🎭 Use @property decorator for getter/setter methods",
    "🧪 Write unit tests to catch bugs early",
    "📚 Read the official Python documentation - it's excellent!"
];

// ==================== STATE MANAGEMENT ====================
let progress = {};
let streak = 0;
let lastVisit = null;
let quizScore = 0;
let unlockedAchievements = [];
let quizLevelScores = { basics: 0, medium: 0, hard: 0, advanced: 0, coding: 0 };

// Current quiz state
let currentQuizIndex = 0;
let quizAnswered = false;
let quizCorrect = 0;
let shuffledQuestions = [];
let currentQuizLevel = 'basics';

// Coding quiz state
let codingQuizIndex = 0;
let codingQuizCorrect = 0;
let codingQuizAnswered = false;
let shuffledCodingQuestions = [];


// ==================== INITIALIZATION ====================
document.addEventListener('DOMContentLoaded', () => {
    loadProgress();
    renderTopics();
    renderAchievements();
    renderCareerPaths();
    updateStats();
    updateStreak();
    updateLevelScoresDisplay();
    setupEventListeners();
    hideLoader();
});

// ==================== LOADER ====================
function hideLoader() {
    setTimeout(() => {
        document.getElementById('loader').classList.add('hidden');
    }, 2000);
}

// ==================== LOCAL STORAGE ====================
function loadProgress() {
    const savedProgress = localStorage.getItem('pythonProgress');
    const savedStreak = localStorage.getItem('pythonStreak');
    const savedLastVisit = localStorage.getItem('pythonLastVisit');
    const savedQuizScore = localStorage.getItem('pythonQuizScore');
    const savedAchievements = localStorage.getItem('pythonAchievements');

    if (savedProgress) progress = JSON.parse(savedProgress);
    if (savedStreak) streak = parseInt(savedStreak);
    if (savedLastVisit) lastVisit = savedLastVisit;
    if (savedQuizScore) quizScore = parseInt(savedQuizScore);
    if (savedAchievements) unlockedAchievements = JSON.parse(savedAchievements);
}

function saveProgress() {
    localStorage.setItem('pythonProgress', JSON.stringify(progress));
    localStorage.setItem('pythonStreak', streak.toString());
    localStorage.setItem('pythonLastVisit', new Date().toDateString());
    localStorage.setItem('pythonQuizScore', quizScore.toString());
    localStorage.setItem('pythonAchievements', JSON.stringify(unlockedAchievements));
}

// ==================== RENDER TOPICS ====================
function renderTopics() {
    const grid = document.getElementById('topics-grid');
    grid.innerHTML = '';

    topics.forEach(topic => {
        const completedCount = topic.subtopics.filter((_, idx) =>
            progress[`${topic.id}-${idx}`]
        ).length;
        const totalCount = topic.subtopics.length;
        const percentage = Math.round((completedCount / totalCount) * 100);
        const isComplete = percentage === 100;

        const card = document.createElement('div');
        card.className = `topic-card ${isComplete ? 'completed' : ''}`;
        card.innerHTML = `
            <div class="topic-header">
                <div class="topic-title">
                    <span class="topic-icon">${topic.icon}</span>
                    <h3>${topic.title}</h3>
                </div>
                <span class="topic-time"><i class="fas fa-clock"></i> ${topic.time}</span>
            </div>
            <div class="topic-body">
                <ul class="subtopic-list">
                    ${topic.subtopics.map((sub, idx) => {
            const isChecked = progress[`${topic.id}-${idx}`];
            return `
                            <li class="subtopic-item ${isChecked ? 'completed' : ''}">
                                <div class="subtopic-checkbox ${isChecked ? 'checked' : ''}" 
                                     data-topic="${topic.id}" data-index="${idx}"></div>
                                <span class="subtopic-name">${sub.name}</span>
                                <div class="subtopic-actions">
                                    <button class="subtopic-btn" onclick="showNotes(${topic.id}, ${idx})" title="View Notes">📝</button>
                                    <button class="subtopic-btn" onclick="showVideo(${topic.id}, ${idx})" title="Watch Video">🎬</button>
                                </div>
                            </li>
                        `;
        }).join('')}
                </ul>
            </div>
            <div class="topic-footer">
                <div class="topic-progress">
                    <div class="progress-bar">
                        <div class="progress-fill" style="width: ${percentage}%"></div>
                    </div>
                    <span class="progress-text">${percentage}%</span>
                </div>
            </div>
        `;
        grid.appendChild(card);
    });

    // Add checkbox event listeners
    document.querySelectorAll('.subtopic-checkbox').forEach(cb => {
        cb.addEventListener('click', handleCheckbox);
    });
}

// ==================== CHECKBOX HANDLING ====================
function handleCheckbox(e) {
    const topicId = e.target.dataset.topic;
    const index = e.target.dataset.index;
    const key = `${topicId}-${index}`;

    progress[key] = !progress[key];
    saveProgress();
    renderTopics();
    updateStats();
    checkAchievements();

    if (progress[key]) {
        showToast('✅ Topic completed!', 'success');
        createConfetti(false);
    }
}

// ==================== RENDER ACHIEVEMENTS ====================
function renderAchievements() {
    const grid = document.getElementById('achievements-grid');
    grid.innerHTML = '';

    achievements.forEach(ach => {
        const isUnlocked = unlockedAchievements.includes(ach.id);
        const card = document.createElement('div');
        card.className = `achievement-card ${isUnlocked ? 'unlocked' : 'locked'}`;
        card.innerHTML = `
            <div class="achievement-icon">${ach.icon}</div>
            <h4 class="achievement-title">${ach.title}</h4>
            <p class="achievement-desc">${ach.desc}</p>
            <div class="achievement-status">
                ${isUnlocked ? '✅ Unlocked!' : `🔒 ${getAchievementProgress(ach)}`}
            </div>
        `;
        grid.appendChild(card);
    });
}

function getAchievementProgress(ach) {
    const completed = Object.values(progress).filter(Boolean).length;

    if (ach.type === 'topics') {
        return `${completed}/${ach.required} topics`;
    } else if (ach.type === 'streak') {
        return `${streak}/${ach.required} days`;
    } else if (ach.type === 'quiz') {
        return `Best: ${quizScore}%`;
    }
    return '';
}

// ==================== RENDER CAREER PATHS ====================
function renderCareerPaths() {
    const grid = document.getElementById('career-grid');
    if (!grid) return;
    grid.innerHTML = '';

    careerPaths.forEach(career => {
        const card = document.createElement('div');
        card.className = 'career-card';
        card.onclick = () => openCareerModal(career.id);
        card.innerHTML = `
            <div class="career-icon">${career.icon}</div>
            <h4 class="career-title">${career.title}</h4>
            <p class="career-description">${career.description}</p>
            <span class="career-salary">${career.salary}</span>
            <button class="career-btn">View Topics →</button>
        `;
        grid.appendChild(card);
    });
}

function openCareerModal(careerId) {
    const career = careerPaths.find(c => c.id === careerId);
    if (!career) return;

    document.getElementById('career-modal-icon').textContent = career.icon;
    document.getElementById('career-modal-title').textContent = career.title;
    document.getElementById('career-modal-salary').textContent = career.salary;
    document.getElementById('career-modal-description').textContent = career.description;

    const topicsContainer = document.getElementById('career-modal-topics');
    topicsContainer.innerHTML = career.topics.map(topic =>
        `<span class="career-topic-tag">${topic}</span>`
    ).join('');

    document.getElementById('career-modal-overlay').classList.remove('hidden');
}

function closeCareerModal() {
    document.getElementById('career-modal-overlay').classList.add('hidden');
}

// ==================== QUIZ LEVEL FUNCTIONS ====================
// Note: selectQuizLevel function moved to end of file with coding quiz support

function showLevelSelection() {
    document.getElementById('quiz-levels').classList.remove('hidden');
    document.getElementById('quiz-start').classList.add('hidden');
    document.getElementById('quiz-game').classList.add('hidden');
    document.getElementById('coding-quiz-game').classList.add('hidden');
    document.getElementById('quiz-result').classList.add('hidden');
}

function exitQuiz() {
    if (confirm('Are you sure you want to exit? Your progress will be lost.')) {
        showLevelSelection();
    }
}

function updateLevelScoresDisplay() {
    const savedScores = localStorage.getItem('pythonQuizLevelScores');
    if (savedScores) {
        quizLevelScores = JSON.parse(savedScores);
    }

    Object.keys(quizLevelScores).forEach(level => {
        const element = document.getElementById(`best-score-${level}`);
        if (element) {
            element.textContent = `Best: ${quizLevelScores[level]}%`;
        }
    });
}

function saveLevelScore(level, score) {
    if (score > (quizLevelScores[level] || 0)) {
        quizLevelScores[level] = score;
        localStorage.setItem('pythonQuizLevelScores', JSON.stringify(quizLevelScores));
        updateLevelScoresDisplay();
    }
}

// ==================== CHECK ACHIEVEMENTS ====================
function checkAchievements() {
    const completed = Object.values(progress).filter(Boolean).length;
    let newUnlocks = [];

    achievements.forEach(ach => {
        if (unlockedAchievements.includes(ach.id)) return;

        let shouldUnlock = false;

        if (ach.type === 'topics' && completed >= ach.required) {
            shouldUnlock = true;
        } else if (ach.type === 'streak' && streak >= ach.required) {
            shouldUnlock = true;
        } else if (ach.type === 'quiz' && quizScore >= ach.required) {
            shouldUnlock = true;
        }

        if (shouldUnlock) {
            unlockedAchievements.push(ach.id);
            newUnlocks.push(ach);
        }
    });

    if (newUnlocks.length > 0) {
        saveProgress();
        renderAchievements();
        updateStats();

        newUnlocks.forEach(ach => {
            showToast(`🏆 Achievement Unlocked: ${ach.title}!`, 'success');
        });

        createConfetti(true);
    }
}

// ==================== UPDATE STATS ====================
function updateStats() {
    const completed = Object.values(progress).filter(Boolean).length;
    const total = topics.reduce((sum, t) => sum + t.subtopics.length, 0);
    const percentage = Math.round((completed / total) * 100);

    document.getElementById('completed-count').textContent = completed;
    document.getElementById('achievements-count').textContent = unlockedAchievements.length;
    document.getElementById('overall-progress-bar').style.width = `${percentage}%`;
    document.getElementById('best-score').textContent = `${quizScore}%`;
}

// ==================== STREAK MANAGEMENT ====================
function updateStreak() {
    const today = new Date().toDateString();
    const yesterday = new Date(Date.now() - 86400000).toDateString();

    if (lastVisit === today) {
        // Already visited today
    } else if (lastVisit === yesterday) {
        streak++;
        showToast(`🔥 ${streak} day streak! Keep it up!`, 'success');
    } else if (lastVisit) {
        streak = 1;
        showToast("🔄 Streak reset. Let's start fresh!", 'info');
    } else {
        streak = 1;
        showToast("🎉 Welcome! Your learning journey begins!", 'info');
    }

    document.getElementById('streak-number').textContent = streak;
    saveProgress();
    checkAchievements();
}

// ==================== MODAL FUNCTIONS ====================
function showNotes(topicId, index) {
    const topic = topics.find(t => t.id === topicId);
    const subtopic = topic.subtopics[index];

    document.getElementById('modal-title').textContent = subtopic.name;
    document.getElementById('modal-body').innerHTML = subtopic.notes;

    // Add copy buttons to code blocks
    document.querySelectorAll('#modal-body pre').forEach(pre => {
        const btn = document.createElement('button');
        btn.className = 'copy-btn';
        btn.textContent = 'Copy';
        btn.onclick = () => {
            navigator.clipboard.writeText(pre.querySelector('code').textContent);
            btn.textContent = 'Copied!';
            setTimeout(() => btn.textContent = 'Copy', 2000);
        };
        pre.appendChild(btn);
    });

    openModal();
}

function showVideo(topicId, index) {
    const topic = topics.find(t => t.id === topicId);
    const subtopic = topic.subtopics[index];

    // Convert to youtube-nocookie for better embedding support
    let videoUrl = subtopic.video
        .replace('www.youtube.com', 'www.youtube-nocookie.com')
        .replace('youtube.com', 'www.youtube-nocookie.com');

    // Add parameters for better compatibility
    const separator = videoUrl.includes('?') ? '&' : '?';
    videoUrl += `${separator}rel=0&modestbranding=1&origin=${window.location.origin}`;

    document.getElementById('modal-title').textContent = `Video: ${subtopic.name}`;
    document.getElementById('modal-body').innerHTML = `
        <div class="video-container">
            <iframe 
                src="${videoUrl}" 
                allowfullscreen
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                frameborder="0"
            ></iframe>
            <div class="video-fallback">
                <p>अगर video नहीं चल रहा, तो यहाँ click करें:</p>
                <a href="${subtopic.video.replace('/embed/', '/watch?v=')}" target="_blank" class="btn btn-primary">
                    <i class="fab fa-youtube"></i> YouTube पर देखें
                </a>
            </div>
        </div>
    `;

    openModal();
}

function openModal() {
    document.getElementById('modal-overlay').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    document.getElementById('modal-overlay').classList.remove('active');
    document.body.style.overflow = '';

    // Stop any playing videos
    const iframe = document.querySelector('#modal-body iframe');
    if (iframe) iframe.src = iframe.src;
}

// ==================== ROADMAP PHASE DETAIL ====================
function showRoadmapPhase(phase) {
    // Map phase to topic ID
    const phaseToTopic = {
        1: 1,  // Python Basics
        2: 2,  // Control Flow  
        3: 3,  // Functions
        4: 4,  // Data Structures
        5: 5,  // OOP
        6: 6,  // File Handling (includes Error Handling)
        7: 8,  // Modules & Packages
        8: 9   // Advanced Python
    };

    const topicId = phaseToTopic[phase];
    const topic = topics.find(t => t.id === topicId);

    if (!topic) {
        showToast('Topic not found!', 'error');
        return;
    }

    // Calculate progress for this topic
    const completedCount = topic.subtopics.filter((_, idx) =>
        progress[`${topic.id}-${idx}`]
    ).length;
    const percentage = Math.round((completedCount / topic.subtopics.length) * 100);

    // Build comprehensive content
    let content = `
        <div class="roadmap-detail">
            <div class="roadmap-detail-header">
                <span class="phase-icon">${topic.icon}</span>
                <div class="phase-info">
                    <h2>${topic.title}</h2>
                    <span class="phase-time"><i class="fas fa-clock"></i> ${topic.time}</span>
                    <div class="phase-progress">
                        <div class="progress-bar">
                            <div class="progress-fill" style="width: ${percentage}%"></div>
                        </div>
                        <span>${completedCount}/${topic.subtopics.length} completed (${percentage}%)</span>
                    </div>
                </div>
            </div>
            
            <div class="phase-topics-list">
                <h3>📚 Topics in this Phase:</h3>
    `;

    topic.subtopics.forEach((sub, idx) => {
        const isCompleted = progress[`${topic.id}-${idx}`];
        content += `
            <div class="phase-topic-item ${isCompleted ? 'completed' : ''}">
                <div class="phase-topic-header">
                    <span class="phase-topic-status">${isCompleted ? '✅' : '⭕'}</span>
                    <h4>${sub.name}</h4>
                </div>
                <div class="phase-topic-content">
                    ${sub.notes}
                </div>
                <div class="phase-topic-actions">
                    <button class="btn btn-sm btn-primary" onclick="showVideo(${topic.id}, ${idx})">
                        <i class="fas fa-play"></i> Watch Video
                    </button>
                </div>
            </div>
        `;
    });

    content += `
            </div>
            <div class="phase-footer">
                <button class="btn btn-primary" onclick="closeModal(); document.getElementById('topics').scrollIntoView({behavior: 'smooth'});">
                    <i class="fas fa-book"></i> Go to Topics Section
                </button>
            </div>
        </div>
    `;

    document.getElementById('modal-title').textContent = `Phase ${phase}: ${topic.title}`;
    document.getElementById('modal-body').innerHTML = content;

    // Add copy button functionality to code blocks
    document.querySelectorAll('#modal-body pre code').forEach(block => {
        const btn = document.createElement('button');
        btn.className = 'copy-btn';
        btn.innerHTML = '<i class="fas fa-copy"></i>';
        btn.onclick = () => {
            navigator.clipboard.writeText(block.textContent);
            showToast('📋 Code copied!', 'success');
        };
        block.parentElement.style.position = 'relative';
        block.parentElement.appendChild(btn);
    });

    openModal();
}


// ==================== QUIZ FUNCTIONS ====================
function startQuiz() {
    const levelData = quizLevels[currentQuizLevel];
    shuffledQuestions = [...levelData.questions].sort(() => Math.random() - 0.5);
    currentQuizIndex = 0;
    quizCorrect = 0;
    quizAnswered = false;

    document.getElementById('quiz-start').classList.add('hidden');
    document.getElementById('quiz-result').classList.add('hidden');
    document.getElementById('quiz-game').classList.remove('hidden');
    document.getElementById('total-questions').textContent = shuffledQuestions.length;
    document.getElementById('quiz-level-indicator').textContent = `${levelData.icon} ${levelData.name}`;
    document.getElementById('quiz-level-indicator').style.background = levelData.color;

    showQuestion();
}

function showQuestion() {
    const q = shuffledQuestions[currentQuizIndex];
    document.getElementById('current-question').textContent = currentQuizIndex + 1;
    document.getElementById('current-score').textContent = quizCorrect;
    document.getElementById('quiz-progress').style.width =
        `${((currentQuizIndex) / shuffledQuestions.length) * 100}% `;

    document.getElementById('quiz-question').textContent = q.question;

    const optionsDiv = document.getElementById('quiz-options');
    optionsDiv.innerHTML = q.options.map((opt, idx) => `
        <button class="quiz-option" data-index="${idx}">${opt}</button>
    `).join('');

    document.querySelectorAll('.quiz-option').forEach(btn => {
        btn.addEventListener('click', handleAnswer);
    });

    document.getElementById('next-question').classList.add('hidden');
    quizAnswered = false;
}

function handleAnswer(e) {
    if (quizAnswered) return;
    quizAnswered = true;

    const selected = parseInt(e.target.dataset.index);
    const correct = shuffledQuestions[currentQuizIndex].correct;

    document.querySelectorAll('.quiz-option').forEach((btn, idx) => {
        btn.disabled = true;
        if (idx === correct) btn.classList.add('correct');
        if (idx === selected && idx !== correct) btn.classList.add('wrong');
    });

    if (selected === correct) {
        quizCorrect++;
        document.getElementById('current-score').textContent = quizCorrect;
    }

    if (currentQuizIndex < shuffledQuestions.length - 1) {
        document.getElementById('next-question').classList.remove('hidden');
    } else {
        setTimeout(showQuizResult, 1000);
    }
}

function nextQuestion() {
    currentQuizIndex++;
    showQuestion();
}

function showQuizResult() {
    const percentage = Math.round((quizCorrect / shuffledQuestions.length) * 100);
    const levelData = quizLevels[currentQuizLevel];

    document.getElementById('quiz-game').classList.add('hidden');
    document.getElementById('quiz-result').classList.remove('hidden');

    let icon, title;
    if (percentage >= 90) { icon = '🏆'; title = 'Excellent!'; }
    else if (percentage >= 70) { icon = '🎉'; title = 'Great Job!'; }
    else if (percentage >= 50) { icon = '👍'; title = 'Good Effort!'; }
    else { icon = '📚'; title = 'Keep Learning!'; }

    document.getElementById('result-icon').textContent = icon;
    document.getElementById('result-title').textContent = title;
    document.getElementById('result-text').textContent = `You scored ${percentage}%`;
    document.getElementById('result-level').textContent = `Level: ${levelData.name} ${levelData.icon}`;
    document.getElementById('result-level').style.color = levelData.color;
    document.getElementById('correct-answers').textContent = quizCorrect;
    document.getElementById('wrong-answers').textContent = shuffledQuestions.length - quizCorrect;

    // Save level-specific score
    saveLevelScore(currentQuizLevel, percentage);

    if (percentage > quizScore) {
        quizScore = percentage;
        saveProgress();
        updateStats();
        checkAchievements();
        showToast(`🎯 New high score: ${percentage}%!`, 'success');
    }

    if (percentage >= 90) {
        createConfetti(true);
    }
}

function retryQuiz() {
    document.getElementById('quiz-result').classList.add('hidden');
    startQuiz();
}

// ==================== TOAST NOTIFICATIONS ====================
function showToast(message, type = 'info') {
    const container = document.getElementById('toast-container');
    const toast = document.createElement('div');
    toast.className = `toast ${type} `;

    const icons = {
        success: '✅',
        warning: '⚠️',
        error: '❌',
        info: 'ℹ️'
    };

    toast.innerHTML = `
        <span class="toast-icon">${icons[type]}</span>
        <span class="toast-message">${message}</span>
    `;

    container.appendChild(toast);

    setTimeout(() => {
        toast.remove();
    }, 3000);
}

// ==================== CONFETTI ====================
function createConfetti(big = false) {
    const canvas = document.getElementById('confetti-canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];
    const colors = ['#3776AB', '#FFD43B', '#10b981', '#ef4444', '#8b5cf6'];
    const count = big ? 150 : 50;

    for (let i = 0; i < count; i++) {
        particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height - canvas.height,
            size: Math.random() * 10 + 5,
            color: colors[Math.floor(Math.random() * colors.length)],
            speedY: Math.random() * 3 + 2,
            speedX: Math.random() * 2 - 1,
            rotation: Math.random() * 360
        });
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        let active = false;
        particles.forEach(p => {
            if (p.y < canvas.height) {
                active = true;
                p.y += p.speedY;
                p.x += p.speedX;
                p.rotation += 5;

                ctx.save();
                ctx.translate(p.x, p.y);
                ctx.rotate(p.rotation * Math.PI / 180);
                ctx.fillStyle = p.color;
                ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
                ctx.restore();
            }
        });

        if (active) {
            requestAnimationFrame(animate);
        } else {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
        }
    }

    animate();
}

// ==================== EVENT LISTENERS ====================
function setupEventListeners() {
    // Hamburger menu
    document.getElementById('hamburger').addEventListener('click', () => {
        document.getElementById('hamburger').classList.toggle('active');
        document.getElementById('nav-menu').classList.toggle('active');
    });

    // Roadmap cards - click to view detailed content
    document.querySelectorAll('.roadmap-item').forEach(item => {
        item.style.cursor = 'pointer';
        item.addEventListener('click', () => {
            const phase = parseInt(item.getAttribute('data-phase'));
            showRoadmapPhase(phase);
        });
        // Add tooltip
        item.setAttribute('title', 'Click to see detailed topics for this phase');
    });

    // Nav links - close menu on click
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            document.getElementById('hamburger').classList.remove('active');
            document.getElementById('nav-menu').classList.remove('active');

            // Update active link
            document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
            link.classList.add('active');
        });
    });

    // Theme toggle
    document.getElementById('theme-toggle').addEventListener('click', () => {
        const html = document.documentElement;
        const current = html.getAttribute('data-theme');
        const next = current === 'light' ? 'dark' : 'light';
        html.setAttribute('data-theme', next);

        const icon = document.querySelector('#theme-toggle i');
        icon.className = next === 'light' ? 'fas fa-moon' : 'fas fa-sun';

        localStorage.setItem('pythonTheme', next);
    });

    // Load saved theme
    const savedTheme = localStorage.getItem('pythonTheme');
    if (savedTheme) {
        document.documentElement.setAttribute('data-theme', savedTheme);
        const icon = document.querySelector('#theme-toggle i');
        icon.className = savedTheme === 'light' ? 'fas fa-moon' : 'fas fa-sun';
    }

    // Modal close
    document.getElementById('modal-close').addEventListener('click', closeModal);
    document.getElementById('modal-overlay').addEventListener('click', (e) => {
        if (e.target === document.getElementById('modal-overlay')) {
            closeModal();
        }
    });

    // Quiz buttons
    document.getElementById('start-quiz').addEventListener('click', startQuiz);
    document.getElementById('next-question').addEventListener('click', nextQuestion);
    document.getElementById('retry-quiz').addEventListener('click', retryQuiz);

    // FAB - Random tip
    document.getElementById('fab-tip').addEventListener('click', () => {
        const tip = tips[Math.floor(Math.random() * tips.length)];
        showToast(tip, 'info');
    });

    // Export progress
    document.getElementById('export-progress').addEventListener('click', () => {
        const data = {
            progress,
            streak,
            quizScore,
            unlockedAchievements,
            exportDate: new Date().toISOString()
        };

        const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'python-master-progress.json';
        a.click();
        URL.revokeObjectURL(url);

        showToast('📥 Progress exported!', 'success');
    });

    // Import progress
    document.getElementById('import-progress').addEventListener('click', () => {
        document.getElementById('import-file').click();
    });

    document.getElementById('import-file').addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = (event) => {
            try {
                const data = JSON.parse(event.target.result);
                progress = data.progress || {};
                streak = data.streak || 0;
                quizScore = data.quizScore || 0;
                unlockedAchievements = data.unlockedAchievements || [];

                saveProgress();
                renderTopics();
                renderAchievements();
                updateStats();

                showToast('📤 Progress imported!', 'success');
            } catch (err) {
                showToast('❌ Invalid file format', 'error');
            }
        };
        reader.readAsText(file);
    });

    // Reset progress
    document.getElementById('reset-progress').addEventListener('click', () => {
        if (confirm('Are you sure you want to reset all progress? This cannot be undone!')) {
            localStorage.removeItem('pythonProgress');
            localStorage.removeItem('pythonStreak');
            localStorage.removeItem('pythonLastVisit');
            localStorage.removeItem('pythonQuizScore');
            localStorage.removeItem('pythonAchievements');

            progress = {};
            streak = 0;
            quizScore = 0;
            unlockedAchievements = [];

            renderTopics();
            renderAchievements();
            updateStats();
            document.getElementById('streak-number').textContent = '0';

            showToast('🗑️ Progress reset!', 'warning');
        }
    });

    // Keyboard shortcuts
    document.addEventListener('keydown', (e) => {
        // ESC - close modal
        if (e.key === 'Escape') {
            closeModal();
        }

        // ? - show random tip
        if (e.key === '?') {
            const tip = tips[Math.floor(Math.random() * tips.length)];
            showToast(tip, 'info');
        }

        // Arrow right - next quiz question
        if (e.key === 'ArrowRight' && !document.getElementById('next-question').classList.contains('hidden')) {
            nextQuestion();
        }

        // 1-4 - select quiz option
        if (['1', '2', '3', '4'].includes(e.key) && !document.getElementById('quiz-game').classList.contains('hidden')) {
            const idx = parseInt(e.key) - 1;
            const options = document.querySelectorAll('.quiz-option');
            if (options[idx] && !quizAnswered) {
                options[idx].click();
            }
        }
    });

    // Scroll spy for nav
    window.addEventListener('scroll', () => {
        const sections = document.querySelectorAll('section[id]');
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 150;
            if (window.scrollY >= sectionTop) {
                current = section.getAttribute('id');
            }
        });

        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current} `) {
                link.classList.add('active');
            }
        });
    });
}

// Console Easter Egg
console.log('%c🐍 Python Master', 'font-size: 30px; font-weight: bold; color: #3776AB;');
console.log('%cWelcome, fellow Python enthusiast!', 'font-size: 14px; color: #FFD43B;');
console.log('%cHappy learning! 🚀', 'font-size: 12px; color: #10b981;');

// ==================== CODING QUIZ DATA ====================
const codingQuizQuestions = [
    // Python Concept Questions - Theoretical answers
    { question: "What is Python?", code: "Hint: Type of programming language", answer: "high level programming language" },
    { question: "What is a variable?", code: "Hint: Stores data in memory", answer: "container to store data" },
    { question: "What is a list in Python?", code: "Hint: Collection of items", answer: "ordered mutable collection" },
    { question: "What is a tuple?", code: "Hint: Similar to list but...", answer: "ordered immutable collection" },
    { question: "What is a dictionary?", code: "Hint: Key-value storage", answer: "key value pairs" },
    { question: "What is a function?", code: "Hint: Reusable code block", answer: "reusable block of code" },
    { question: "What is a decorator?", code: "Hint: Modifies function behavior", answer: "function that modifies another function" },
    { question: "What is inheritance?", code: "Hint: OOP concept", answer: "child class inherits from parent" },
    { question: "What is polymorphism?", code: "Hint: Many forms", answer: "same method different behavior" },
    { question: "What is encapsulation?", code: "Hint: Data hiding", answer: "hiding data inside class" },
    { question: "What is a class?", code: "Hint: Blueprint for objects", answer: "blueprint for creating objects" },
    { question: "What is an object?", code: "Hint: Instance of class", answer: "instance of a class" },
    { question: "What is a module?", code: "Hint: Python file with code", answer: "file containing python code" },
    { question: "What is a package?", code: "Hint: Collection of modules", answer: "collection of modules" },
    { question: "What is exception handling?", code: "Hint: Handling errors", answer: "handling runtime errors" },
    { question: "What is a lambda function?", code: "Hint: One line function", answer: "anonymous function" },
    { question: "What is list comprehension?", code: "Hint: Create list in one line", answer: "create list in single line" },
    { question: "What is PIP?", code: "Hint: Package manager", answer: "package installer for python" },
    { question: "What is __init__?", code: "Hint: First method in class", answer: "constructor method" },
    { question: "What is self in Python?", code: "Hint: Reference in class", answer: "reference to current instance" }
];

// ==================== CODING QUIZ FUNCTIONS ====================

function checkSimilarity(userAnswer, correctAnswer) {
    // Normalize both answers
    const user = userAnswer.toLowerCase().trim().replace(/\s+/g, ' ');
    const correct = correctAnswer.toLowerCase().trim().replace(/\s+/g, ' ');

    // Exact match
    if (user === correct) return 100;

    // Check if answer is contained
    if (correct.includes(user) || user.includes(correct)) {
        const longer = Math.max(user.length, correct.length);
        const shorter = Math.min(user.length, correct.length);
        return (shorter / longer) * 100;
    }

    // Calculate character-level similarity
    let matchCount = 0;
    const correctChars = correct.split('');
    const userChars = user.split('');

    correctChars.forEach((char, i) => {
        if (userChars[i] === char) matchCount++;
    });

    return (matchCount / correctChars.length) * 100;
}

function selectQuizLevel(level) {
    currentQuizLevel = level;

    if (level === 'coding') {
        // Start coding quiz
        startCodingQuiz();
        return;
    }

    const levelData = quizLevels[level];

    // Update UI
    document.getElementById('quiz-levels').classList.add('hidden');
    document.getElementById('quiz-start').classList.remove('hidden');

    document.getElementById('selected-level-badge').textContent = `${levelData.icon} ${levelData.name}`;
    document.getElementById('selected-level-badge').style.background = levelData.color;
    document.getElementById('quiz-level-description').textContent = `50 questions on ${levelData.description.toLowerCase()}`;
    document.getElementById('best-score').textContent = `${quizLevelScores[level] || 0}%`;
}

function startCodingQuiz() {
    shuffledCodingQuestions = [...codingQuizQuestions].sort(() => Math.random() - 0.5);
    codingQuizIndex = 0;
    codingQuizCorrect = 0;
    codingQuizAnswered = false;

    document.getElementById('quiz-levels').classList.add('hidden');
    document.getElementById('quiz-start').classList.add('hidden');
    document.getElementById('quiz-game').classList.add('hidden');
    document.getElementById('coding-quiz-game').classList.remove('hidden');
    document.getElementById('coding-total-questions').textContent = shuffledCodingQuestions.length;

    showCodingQuestion();
}

function showCodingQuestion() {
    const q = shuffledCodingQuestions[codingQuizIndex];

    document.getElementById('coding-current-question').textContent = codingQuizIndex + 1;
    document.getElementById('coding-current-score').textContent = codingQuizCorrect;
    document.getElementById('coding-quiz-progress').style.width =
        `${(codingQuizIndex / shuffledCodingQuestions.length) * 100}%`;

    document.getElementById('coding-quiz-question').textContent = q.question;
    document.getElementById('coding-code-block').textContent = q.code;

    // Reset input and feedback
    document.getElementById('coding-answer-input').value = '';
    document.getElementById('coding-answer-input').disabled = false;
    document.getElementById('submit-coding-answer').disabled = false;
    document.getElementById('coding-feedback').classList.add('hidden');
    document.getElementById('next-coding-question').classList.add('hidden');

    codingQuizAnswered = false;
}

function submitCodingAnswer() {
    if (codingQuizAnswered) return;

    const userAnswer = document.getElementById('coding-answer-input').value;
    if (!userAnswer.trim()) {
        showToast('⚠️ Please enter an answer!', 'warning');
        return;
    }

    codingQuizAnswered = true;
    const correctAnswer = shuffledCodingQuestions[codingQuizIndex].answer;
    const similarity = checkSimilarity(userAnswer, correctAnswer);

    const feedback = document.getElementById('coding-feedback');
    const feedbackIcon = document.getElementById('feedback-icon');
    const feedbackMessage = document.getElementById('feedback-message');
    const perfectAnswer = document.getElementById('perfect-answer');

    feedback.classList.remove('hidden', 'correct', 'wrong');

    if (similarity >= 50) {
        // Correct answer (50% or more match)
        codingQuizCorrect++;
        feedback.classList.add('correct');
        feedbackIcon.textContent = '✅';
        feedbackMessage.textContent = 'Correct!';
    } else {
        // Wrong answer
        feedback.classList.add('wrong');
        feedbackIcon.textContent = '❌';
        feedbackMessage.textContent = 'Wrong!';
    }

    perfectAnswer.textContent = correctAnswer;

    document.getElementById('coding-answer-input').disabled = true;
    document.getElementById('submit-coding-answer').disabled = true;
    document.getElementById('coding-current-score').textContent = codingQuizCorrect;

    // Show next button or end quiz
    if (codingQuizIndex < shuffledCodingQuestions.length - 1) {
        document.getElementById('next-coding-question').classList.remove('hidden');
    } else {
        // Quiz completed - show result after delay
        setTimeout(showCodingResult, 1500);
    }
}

function nextCodingQuestion() {
    codingQuizIndex++;
    showCodingQuestion();
}

function showCodingResult() {
    const total = shuffledCodingQuestions.length;
    const score = Math.round((codingQuizCorrect / total) * 100);

    // Save best score
    if (score > (quizLevelScores.coding || 0)) {
        quizLevelScores.coding = score;
        localStorage.setItem('pythonQuizLevelScores', JSON.stringify(quizLevelScores));
    }

    document.getElementById('coding-quiz-game').classList.add('hidden');
    document.getElementById('quiz-result').classList.remove('hidden');

    document.getElementById('result-level').textContent = 'Level: Coding Quiz ⌨️';

    if (score >= 80) {
        document.getElementById('result-icon').textContent = '🏆';
        document.getElementById('result-title').textContent = 'Excellent!';
    } else if (score >= 50) {
        document.getElementById('result-icon').textContent = '🎉';
        document.getElementById('result-title').textContent = 'Good Job!';
    } else {
        document.getElementById('result-icon').textContent = '💪';
        document.getElementById('result-title').textContent = 'Keep Practicing!';
    }

    document.getElementById('result-text').textContent = `You scored ${score}%`;
    document.getElementById('correct-answers').textContent = codingQuizCorrect;
    document.getElementById('wrong-answers').textContent = total - codingQuizCorrect;

    updateLevelScoresDisplay();
}

function exitCodingQuiz() {
    if (confirm('Are you sure you want to exit? Your progress will be lost.')) {
        document.getElementById('coding-quiz-game').classList.add('hidden');
        showLevelSelection();
    }
}

// Add Enter key support for coding quiz
document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        const codingInput = document.getElementById('coding-answer-input');
        if (document.activeElement === codingInput && !codingQuizAnswered) {
            submitCodingAnswer();
        }
    }
});
