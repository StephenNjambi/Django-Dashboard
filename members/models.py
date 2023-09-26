from django.db import models

# Create your models here.
class Member(models.Model):
    firstname = models.CharField(max_length=255)
    lastname  = models.CharField(max_length=255)
    age = models.IntegerField(null=True)
    phone = models.IntegerField(null=True)
    joined_date = models.DateField(null=True)
    email = models.CharField(max_length=255,default='example@example.com')


