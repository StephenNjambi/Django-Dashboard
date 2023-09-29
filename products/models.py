from django.db import models

# Create your models here.
class Product(models.Model):
    product_type = models.CharField(max_length = 100)
    product_name = models.CharField(max_length=100)
    product_status = models.CharField(max_length=10, choices = [("old","old"), ("new", "new")])
    product_price = models.DecimalField(max_digits=10, decimal_places= 2)
