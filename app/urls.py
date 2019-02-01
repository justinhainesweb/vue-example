from django.contrib import admin
from django.urls import path, include, re_path
from django.conf import settings
from django.conf.urls.static import static
from django.views.generic import TemplateView
from rest_framework import routers

from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
    TokenVerifyView
)

from scrapper import views as scrapper_views

router = routers.DefaultRouter()
router.register(r'users', scrapper_views.UserViewSet)

urlpatterns = [
    path('admin/doc/', include('django.contrib.admindocs.urls')),
    path('admin/', admin.site.urls),

    path('api/v1/', include(router.urls)),
    path('api/v1/user-id-by-username/<str:username>/', scrapper_views.UserIdByUsernameView.as_view()),

    re_path(r'^api/v1/auth/', include('rest_framework.urls', namespace='rest_framework')),
    re_path(r'^api/v1/auth/token/obtain/$', TokenObtainPairView.as_view()),
    re_path(r'^api/v1/auth/token/refresh/$', TokenRefreshView.as_view()),
    re_path(r'^api/v1/auth/token/verify/$', TokenVerifyView.as_view(), name='token_verify'),

    re_path(r'^', TemplateView.as_view(template_name='base.html')),
]

if settings.DEBUG:
    urlpatterns + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
