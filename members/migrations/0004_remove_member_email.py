# Generated by Django 4.2.2 on 2023-09-14 06:35

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('members', '0003_member_email'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='member',
            name='email',
        ),
    ]