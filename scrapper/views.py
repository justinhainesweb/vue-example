from django.views.generic.base import TemplateView
from django.utils.translation import gettext as _


class HomeView(TemplateView):
    template_name = 'base.html'
    extra_context = {
        'title': _('Home page')
    }
