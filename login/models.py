from django.db import models

# Create your models here.
class Login(models.Model):
    title = models.CharField(max_length=120)
    description = models.TextField()
    completed = models.CharField(max_length=5)

    def __str__(self):
        return self.title