from django.http import JsonResponse
from django.shortcuts import render, redirect
from .models import Product
from .forms import ProductForm
from django.views.decorators.csrf import csrf_exempt
from django.shortcuts import render, get_object_or_404,redirect


# Form to add products to the table 
def products(request):
    form = ProductForm()
    if request.method == 'POST':
        form = ProductForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('products:products')
    products = Product.objects.all()  
    return render(request, "products.html", {'products': products, 'form': form})

@csrf_exempt
# deleting the item using the remove button in the product table 
def delete_product(request, product_id):
    try:
        product = Product.objects.get(pk=product_id)
        product.delete()
        response_data = {'message': 'Removed'}
    except Product.DoesNotExist: 
        response_data = {'message': 'Not found'}
    return JsonResponse(response_data)

# View for editing the product.
def edit_product(request, product_id):
    product = get_object_or_404(product, pk=product_id)

    if request.method == "POST":
        form = ProductForm(request.POST, instance=product)
        if form.is_valid():
            form.save()
            return redirect('products:products')
        else:
            form = ProductForm(instance=product)
            return render(request, 'edit_product.html', {'form': form, 'product': product})
