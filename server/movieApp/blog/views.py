from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import Post
from .serializers import PostSerializers

@api_view(['GET'])
def get_post(request):
    if request.method == 'GET':
        post = Post.objects.all()
        serializer = PostSerializers(post, many=True, context={'request': request})
        return Response(serializer.data, status=status.HTTP_200_OK)
    
    



