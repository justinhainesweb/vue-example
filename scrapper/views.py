from django.contrib.auth.models import Group
from django.views.generic.base import TemplateView
from django.utils.translation import gettext as _

from rest_framework import viewsets, mixins
from rest_framework.generics import GenericAPIView, RetrieveAPIView

from pyscrapper import serializers
from scrapper.serializers import UserSerializer
from core.models import User


class HomeView(TemplateView):
    template_name = 'base.html'
    extra_context = {
        'title': _('Home page')
    }


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
