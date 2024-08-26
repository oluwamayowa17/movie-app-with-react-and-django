from django.db import models
# from tinymce.models import HTMLField
from django.contrib.auth.models import User

# Create your models here.
class Post(models.Model):
    title = models.CharField(max_length=200, verbose_name='Post Title')
    image = models.ImageField(upload_to='uploads', blank=True, null=True)
    text = models.TextField()
    author = models.ForeignKey(User, blank=True, null=True, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title
