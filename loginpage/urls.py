

from django.urls import path
from . import views

app_name = 'loginpage'

urlpatterns = [
    path("loginpage/", views.login, name='loginpage'),
]
