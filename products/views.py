from django.shortcuts import render, redirect
from .models import Product
from .forms import ProductForm


def products(request):
    form = ProductForm()

    if request.method == 'POST':
        form = ProductForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('products:products')

    products = Product.objects.all()  # Define 'products' unconditionally

    return render(request, "products.html", {'products': products, 'form': form})


# def products(request):
#     if request.method == 'POST':
#         form = ProductForm(request.POST)
#         if form.is_valid():
#             form.save()
#             return redirect('products:products')  # Redirect back to the products page after adding a product
#     else:
#         form = ProductForm()


#     products = Product.objects.all()  # Retrieve all existing products
#     return render(request, "products.html", {'products': products, 'form': form})
