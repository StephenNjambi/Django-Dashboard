from django.shortcuts import render
from django.urls import path
# Create your views here.

def newproducts(request):
    return render(request, 'newproducts.html')