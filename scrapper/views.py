from rest_framework import viewsets
from rest_framework.generics import RetrieveAPIView

from pyscrapper import serializers
from scrapper.serializers import UserSerializer
from core.models import User


class UserViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = User.objects.all().order_by('-date_joined')
    serializer_class = UserSerializer


class UserIdByUsernameView(RetrieveAPIView):
    queryset = User.objects.all()
    lookup_field = 'username'
    serializer_class = serializers.UserSerializer
