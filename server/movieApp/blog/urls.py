from django.urls import path
from blog import views

app_name = 'blog'
urlpatterns = [
    path('posts/', views.get_post, name='posts'),
]