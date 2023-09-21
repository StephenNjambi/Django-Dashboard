from django.urls import path
from . import views

app_name = 'reset'

urlpatterns = [
    path('reset/', views.register, name='reset'),
]