from characters.models import Character
from characters.serializers import CharacterSerializer
from rest_framework import mixins
from rest_framework import generics

# Create your views here.
class CharacterList(generics.ListCreateAPIView):
    queryset = Character.objects.all()
    serializer_class = CharacterSerializer

class CharacterDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Character.objects.all()
    serializer_class = CharacterSerializer