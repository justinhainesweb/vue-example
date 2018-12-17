from django.contrib.auth.models import AbstractUser
from django.db import models


class User(AbstractUser):
    """
    Custom model based on :model:`auth.User`
    """
    avatar = models.ImageField(upload_to='user_avatars')
