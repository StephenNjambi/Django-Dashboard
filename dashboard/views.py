from django.shortcuts import render
from django.contrib.auth.models import User



from django.shortcuts import render

def dashboard(request):
    myusers = User.objects.all()
    context = {
        'myusers': myusers,
    }
    return render(request, "dashboard.html", context)



