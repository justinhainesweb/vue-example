from django.contrib.postgres.fields import JSONField
from django.db import models


class Website(models.Model):
    url = models.CharField(max_length=255)
    name = models.CharField(max_length=255)
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)
    scrapped_data = JSONField()

    def __str__(self):
        return self.name
