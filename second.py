# factorial number

# n=int(input("Enter a number: "))
# fact=1
# for i in range(1,n+1,1):
#     fact=fact*i
# print(f"factorial of {n} is: ",fact)



# Multiplication number

# n=int(input("Enter a number: "))

# for i in range(1,11,1):
#     mul=n*i
#     print(mul,end=" ")


#fibonacci series

# nterms=int(input("Enter a number: "))
# n1,n2=0,1
# count=0
# if nterms <=0:
#     print("Enter a positive nummber:")
# elif nterms==1:
#     print("fiboacci sequene upto",nterms,":")
#     print(n1)
# else :
#     print("fibonacci sequence:")
#     while count<nterms:
#         print(n1)
#         nth=n1+n2
#         n1=n2
#         n2=nth
#         count+=1


# palindrome number

# n=int(input("Enter a number: "))
# temp=n
# rev=0
# while n>0:
#     rem=n%10
#     rev=rev*10+rem
#     n=n//10
# if(temp==rev):
#     print(temp," is palindrome number") 
# else:
#     print(temp," is  not palindrome number ")  

# armstrong number
num = int(input('Enter a number: '))
num_original =num2=num
sum1 = 0
cnt=0

while(num>0):
	cnt=cnt+1
	num=num//10

while num2>0:
   rem = num2% 10
   sum1 += rem ** cnt
   num2//= 10


if(num_original==sum1):
    print('Armstrong!!')
else:
    print('Not Armstrong!')  

