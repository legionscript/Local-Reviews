from django.contrib.auth.models import User, Group
from rest_framework import viewsets
from rest_framework import permissions
from reviews.serializers import UserSerializer, GroupSerializer, ReviewSerializer, BusinessSerializer, CategorySerializer
from reviews.models import Review, Business, Category
from django_filters.rest_framework import DjangoFilterBackend

class UserViewSet(viewsets.ModelViewSet):
	queryset = User.objects.all().order_by('-date_joined')
	serializer_class = UserSerializer
	permission_classes = [permissions.IsAuthenticated]

class GroupViewSet(viewsets.ModelViewSet):
	queryset = Group.objects.all()
	serializer_class = GroupSerializer
	permission_classes = [permissions.IsAuthenticated]

class ReviewViewSet(viewsets.ModelViewSet):
	queryset = Review.objects.all()
	serializer_class = ReviewSerializer
	permission_classes = [permissions.IsAuthenticatedOrReadOnly]

class BusinessViewSet(viewsets.ModelViewSet):
	queryset = Business.objects.all()
	serializer_class = BusinessSerializer
	permission_classes = [permissions.IsAuthenticatedOrReadOnly]

class CategoryViewSet(viewsets.ModelViewSet):
	queryset = Category.objects.all()
	serializer_class = CategorySerializer
	filter_backends = [DjangoFilterBackend]
	filterset_fields = ['slug']
	permission_classes = [permissions.IsAuthenticatedOrReadOnly]
