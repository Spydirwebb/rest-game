from django.db import models

# Create your models here.
class Character(models.Model):
    """
    nextLevelExp! += 100
    maxHealth += 10 * levels;
    maxMana += 5 * levels;
    attack += 3 * levels;
    defense += levels;
    """
    created = models.DateTimeField(auto_now_add=True)
    name = models.CharField(max_length=20)
    level = models.IntegerField(default=1)
    nextLevelExp = models.IntegerField(default=100)
    currentExp = models.IntegerField(default=0)
    maxHealth = models.IntegerField(default=0)
    currentHealth = models.IntegerField(default=0)
    maxMana = models.IntegerField(default=0)
    currentMana = models.IntegerField(default=0)
    attack = models.IntegerField(default=0)
    defense = models.IntegerField(default=0)

    class Meta:
        ordering = ['created']
    
    def __str__(self):
        return self.name

    