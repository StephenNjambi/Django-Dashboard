from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login as auth_login
from django.contrib import messages
from django.http import JsonResponse
from django.contrib.auth.models import User
import json
from django.http import JsonResponse




def login(request):
    if request.method == "POST":
        username = request.POST["username"]
        password = request.POST["password"]

        user = authenticate(request, username=username, password=password)

        if user is not None:
            auth_login(request, user)
            return redirect("dashboard:dashboard")
        else:
            messages.error(request, "Incorrect username or password. Please try again !.")
    return render(request, "loginpage.html")



