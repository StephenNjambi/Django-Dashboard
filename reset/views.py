from django.contrib.auth import login
from django.shortcuts import render, redirect
from django.contrib.auth.models import User
from django.contrib import messages

def resetting(request):
    if request.method == 'POST':
        email = request.POST.get('email')
        password1 = request.POST.get('password1')
        password2 = request.POST.get('password2')
        user = User.objects.get(email=email)
        user.set_password(password1)
        user.save()
        messages.success(request, "Account created!")
        return redirect('loginpage:loginpage')
    return render(request, 'registration/reset.html')
