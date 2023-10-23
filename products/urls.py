from django.urls import path
from . import views


app_name = 'products'

urlpatterns=[
    path("products/", views.products, name='products'),
    path('products/delete_product/<int:product_id>/', views.delete_product, name='delete_product'),
    path('products/edit_product/<int:product_id>/', views.edit_product, name='edit_product'),

]


