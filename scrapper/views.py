from django.views.generic.base import TemplateView
from django.utils.translation import gettext as _
from rest_framework.decorators import api_view


class HomeView(TemplateView):
    template_name = 'base.html'
    extra_context = {
        'title': _('Home page')
    }
