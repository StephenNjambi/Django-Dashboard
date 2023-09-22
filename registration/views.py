
from django.contrib.auth import login
from django.shortcuts import render, redirect
from django.contrib.auth.models import User
from django.contrib import messages
from django.db import IntegrityError


def register(request):
    if request.method == 'POST':
        firstname = request.POST.get('firstname')
        lastname = request.POST.get('lastname')
        email = request.POST.get('email')
        password1 = request.POST.get('password1')
        password2 = request.POST.get('password2')

        try:
            user = User.objects.create_user(
                username=email, 
                email = email, 
                first_name=firstname, 
                last_name =lastname, 
                password=password1)
            user.save()
            messages.success(request, "Account created!")
            return redirect('registration:signup')
        except IntegrityError:
            messages.error(request, "The user already exists!")
            return redirect('registration:signup')

    else:
        return render(request,'registration/signup.html')
    




# def register(request):
#     if request.method == 'POST':
#         firstname = request.POST.get('firstname')
#         lastname = request.POST.get('lastname')
#         email = request.POST.get('email')
#         password1 = request.POST.get('password1')
#         user = User.objects.create_user(
#             username=email, 
#             email = email, 
#             first_name=firstname, 
#             last_name =lastname, 
#             password=password1)
#         user.save()
#         messages.success(request, "Account created!")
#         return redirect('loginpage:loginpage')
#     return render(request,'registration/signup.html')


    
