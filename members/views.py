

from django.shortcuts import render
from .models import Member

def members(request):
    mymembers = Member.objects.all()
    context = {
        'mymembers': mymembers,
    }
    return render(request, 'members.html', context)


