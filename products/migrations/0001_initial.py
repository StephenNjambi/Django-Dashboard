# Generated by Django 4.2.2 on 2023-09-28 08:53

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Product',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('product_type', models.CharField(max_length=100)),
                ('product_name', models.CharField(max_length=100)),
                ('product_status', models.CharField(choices=[('old', 'old'), ('new', 'new')], max_length=10)),
                ('product_price', models.DecimalField(decimal_places=2, max_digits=10)),
            ],
        ),
    ]
