from typing import Tuple
from django.db import models


class learning(models.Model):

    class Meta:
        verbose_name_plural = 'learning'

    def __str__(self):
        return self.message