# from django.http import HttpResponse
# from django.template import loader

# # Create your views here.
# def products(response):
#     template = loader.get_template('products.html')
#     return HttpResponse(template.render())

from django.shortcuts import render

def products(request):
    return render(request, "products.html")

