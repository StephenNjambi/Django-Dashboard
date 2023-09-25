from django.urls import path
from . import views

app_name = 'newproducts'
urlpatterns = [
    path('newproducts/', views.newproducts, name='newproducts'),
]